"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { eq } from "drizzle-orm";
import { put } from "@vercel/blob";
import { db } from "@/lib/db";
import { articles } from "@/lib/schema";
import { requireUser } from "@/lib/session";
import { canManageBlog } from "@/lib/permissions";

const MAX_COVER_BYTES = 8 * 1024 * 1024;

async function ensureAdmin() {
  const me = await requireUser();
  if (!canManageBlog(me.role)) throw new Error("forbidden");
  return me;
}

async function uniqueSlug(base: string, ignoreId?: string): Promise<string> {
  const clean =
    base
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .slice(0, 80)
      .replace(/^-|-$/g, "") || "nota";
  let slug = clean;
  let n = 1;
  while (true) {
    const rows = await db.select({ id: articles.id }).from(articles).where(eq(articles.slug, slug));
    if (!rows.find((r) => r.id !== ignoreId)) return slug;
    slug = `${clean}-${++n}`;
  }
}

// Crea una nota y abre el editor. Sin IA: ADAF no usa draft asistido.
export async function createArticle(formData: FormData) {
  const me = await ensureAdmin();
  const titleEs = String(formData.get("titleEs") ?? "").trim() || "Nota sin título";
  const slug = await uniqueSlug(titleEs);
  const rows = await db
    .insert(articles)
    .values({
      slug,
      status: "draft",
      titleEs,
      titleEn: titleEs,
      authorId: me.id,
    })
    .returning({ id: articles.id });
  revalidatePath("/admin/blog");
  redirect(`/admin/blog/${rows[0].id}`);
}

export async function updateArticle(id: string, formData: FormData) {
  await ensureAdmin();
  const g = (k: string) => String(formData.get(k) ?? "").trim();
  const titleEs = g("titleEs");
  const excerptEs = g("excerptEs") || null;
  const bodyEs = g("bodyEs") || null;
  const slug = await uniqueSlug(g("slug") || titleEs, id);
  // ADAF publica solo en español; las columnas *_en existen por la tabla genérica
  // bilingüe y se llenan con el valor ES para no violar la constraint NOT NULL.
  await db
    .update(articles)
    .set({
      slug,
      titleEs,
      titleEn: titleEs,
      excerptEs,
      excerptEn: excerptEs,
      bodyEs,
      bodyEn: bodyEs,
      category: g("category") || null,
      folio: g("folio") || null,
      metaTitleEs: g("metaTitleEs") || null,
      metaDescriptionEs: g("metaDescriptionEs") || null,
      coverUrl: g("coverUrl") || null,
      coverPathname: g("coverPathname") || null,
      featured: formData.get("featured") === "on",
      updatedAt: new Date(),
    })
    .where(eq(articles.id, id));
  revalidatePath("/admin/blog");
  revalidatePath(`/admin/blog/${id}`);
  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  redirect("/admin/blog");
}

export async function uploadBlogCover(
  formData: FormData,
): Promise<{ url: string; pathname: string } | { error: string }> {
  await ensureAdmin();
  const file = formData.get("file");
  if (!(file instanceof File) || file.size === 0) return { error: "No se recibió la imagen." };
  if (!file.type.startsWith("image/")) return { error: "El archivo debe ser una imagen." };
  if (file.size > MAX_COVER_BYTES) return { error: "La imagen supera 8MB." };
  const blob = await put(`blog/${file.name}`, file, { access: "public", addRandomSuffix: true });
  return { url: blob.url, pathname: blob.pathname };
}

export async function publishArticle(id: string) {
  await ensureAdmin();
  await db
    .update(articles)
    .set({ status: "published", publishedAt: new Date(), updatedAt: new Date() })
    .where(eq(articles.id, id));
  revalidatePath("/admin/blog");
  revalidatePath(`/admin/blog/${id}`);
  revalidatePath("/blog");
}

export async function unpublishArticle(id: string) {
  await ensureAdmin();
  await db.update(articles).set({ status: "draft", updatedAt: new Date() }).where(eq(articles.id, id));
  revalidatePath("/admin/blog");
  revalidatePath(`/admin/blog/${id}`);
  revalidatePath("/blog");
}

export async function deleteArticle(id: string) {
  await ensureAdmin();
  await db.delete(articles).where(eq(articles.id, id));
  revalidatePath("/admin/blog");
  revalidatePath("/blog");
  redirect("/admin/blog");
}
