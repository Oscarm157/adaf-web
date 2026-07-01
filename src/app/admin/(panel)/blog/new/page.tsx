import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/session";
import { canManageBlog } from "@/lib/permissions";
import { createArticle } from "@/app/admin/blog-actions";
import { PageHeader } from "@/components/crm/PageShell";

export const dynamic = "force-dynamic";

export default async function NewArticle() {
  const me = await getCurrentUser();
  if (!me) redirect("/login");
  if (!canManageBlog(me.role)) redirect("/admin");

  return (
    <div className="crm-fade mx-auto max-w-[640px] px-4 py-8 sm:px-7">
      <Link
        href="/admin/blog"
        className="mb-4 inline-flex items-center gap-1.5 text-[13px] text-[var(--crm-ink-mute)] transition-colors hover:text-[var(--crm-ink)]"
      >
        <span aria-hidden>&larr;</span> Blog
      </Link>

      <PageHeader
        eyebrow="Contenido / Blog"
        title="Nueva nota"
        description="Nombra la nota y se abre el editor en blanco. Se guarda como borrador hasta que la publiques."
      />

      <form action={createArticle} className="crm-card-raised mt-2 flex flex-col gap-4 p-6">
        <div>
          <label className="mb-1.5 block text-[12.5px] font-medium text-[var(--crm-ink-soft)]" htmlFor="titleEs">
            Título
          </label>
          <input
            id="titleEs"
            name="titleEs"
            required
            autoFocus
            placeholder="Ej. Reforma al CFF 2026"
            className="crm-input"
          />
        </div>
        <button type="submit" className="crm-btn crm-btn-primary self-start">
          Crear y editar
        </button>
      </form>
    </div>
  );
}
