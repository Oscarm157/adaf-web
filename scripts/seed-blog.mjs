import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { neon } from "@neondatabase/serverless";

// Migra los 3 posts editoriales de ADAF (antes en src/lib/posts.ts) a la tabla
// `articles`. El cuerpo se guarda como markdown con la convención de
// src/lib/blog-markdown.ts, que las páginas públicas reconstruyen a bloques.
// Idempotente por slug (ON CONFLICT DO NOTHING). Corre una sola vez.

const sql = neon(process.env.DATABASE_URL);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const data = JSON.parse(fs.readFileSync(path.join(__dirname, "blog-seed-data.json"), "utf8"));

for (const p of data) {
  const rows = await sql`select id from articles where slug = ${p.slug}`;
  if (rows.length) {
    console.log(`Ya existe ${p.slug}, se omite.`);
    continue;
  }
  // titleEn/bodyEn/excerptEn son NOT NULL en una tabla genérica bilingüe; ADAF
  // no publica en inglés (no hay rutas /en/blog), así que se duplica el ES solo
  // para satisfacer la constraint. Nunca se renderiza en público.
  await sql`
    insert into articles
      (slug, status, title_es, title_en, excerpt_es, excerpt_en,
       body_es, body_en, category, folio, meta_title_es, meta_description_es, published_at)
    values
      (${p.slug}, 'published', ${p.titleEs}, ${p.titleEs}, ${p.excerptEs}, ${p.excerptEs},
       ${p.bodyEs}, ${p.bodyEs}, ${p.category}, ${p.folio}, ${p.metaTitleEs}, ${p.metaDescriptionEs},
       ${new Date(p.publishedAt).toISOString()})
  `;
  console.log(`Migrado: ${p.slug}`);
}

console.log("Migración de blog terminada.");
