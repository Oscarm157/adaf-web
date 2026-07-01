import { markdownToBlocks, type BodyBlock } from "@/lib/blog-markdown";
import type { Article } from "./data";

// Vista pública de un artículo: mismo shape que consumían las páginas de /blog
// cuando el contenido vivía en src/lib/posts.ts, para no tocar su JSX. El cuerpo
// markdown se reconstruye a BodyBlock[] con la convención de blog-markdown.
export type PublicPost = {
  slug: string;
  cat: string;
  fecha: string;
  fechaIso: string;
  folio: string;
  titulo: string;
  resumen: string;
  autor: string;
  body: BodyBlock[];
  metaTitle: string;
  metaDescription: string;
};

const MESES = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

function fmtFecha(d: Date): string {
  return `${d.getUTCDate()} ${MESES[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

export function toPublicPost(a: Article): PublicPost {
  const published = a.publishedAt ?? a.createdAt ?? new Date();
  const date = new Date(published);
  return {
    slug: a.slug,
    cat: a.category ?? "",
    fecha: fmtFecha(date),
    fechaIso: date.toISOString().slice(0, 10),
    folio: a.folio ?? "",
    titulo: a.titleEs,
    resumen: a.excerptEs ?? "",
    autor: "Equipo ADAF",
    body: markdownToBlocks(a.bodyEs ?? ""),
    metaTitle: a.metaTitleEs || a.titleEs,
    metaDescription: a.metaDescriptionEs || a.excerptEs || "",
  };
}
