import { and, asc, desc, eq, isNotNull } from "drizzle-orm";
import { db } from "@/lib/db";
import { articles } from "@/lib/schema";

export type Article = typeof articles.$inferSelect;

// Categorías ya usadas, para el combobox del editor.
export async function getDistinctCategories(): Promise<string[]> {
  const rows = await db
    .selectDistinct({ category: articles.category })
    .from(articles)
    .where(isNotNull(articles.category))
    .orderBy(asc(articles.category));
  return rows.map((r) => r.category).filter((c): c is string => !!c && c.trim() !== "");
}

export async function getPublishedArticles(): Promise<Article[]> {
  return db
    .select()
    .from(articles)
    .where(eq(articles.status, "published"))
    .orderBy(desc(articles.publishedAt));
}

export async function getPublishedArticleBySlug(slug: string): Promise<Article | null> {
  const rows = await db
    .select()
    .from(articles)
    .where(and(eq(articles.slug, slug), eq(articles.status, "published")));
  return rows[0] ?? null;
}

export async function getAllArticles(): Promise<Article[]> {
  return db.select().from(articles).orderBy(desc(articles.updatedAt));
}

export async function getArticleById(id: string): Promise<Article | null> {
  const rows = await db.select().from(articles).where(eq(articles.id, id));
  return rows[0] ?? null;
}
