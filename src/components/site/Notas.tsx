import Link from "next/link";
import { ChapterMark } from "./ChapterMark";
import { EditorialBand } from "@/components/visual/EditorialBand";

type Tone = "navy" | "burgundy" | "olive";

const notas: Array<{
  cat: string;
  fecha: string;
  folio: string;
  titulo: string;
  resumen: string;
  slug: string;
  cover: { title: string; tone: Tone };
}> = [
  {
    cat: "Reformas",
    fecha: "27 abr 2026",
    folio: "Nota 001",
    titulo: "Reforma al CFF 2026: cambios para empresarios e importadores",
    resumen:
      "Modificaciones principales en sellos digitales, restricciones, RFC y comprobantes, con su impacto práctico antes del cierre del ejercicio.",
    slug: "reforma-cff-2026",
    cover: { title: "Libro abierto", tone: "navy" },
  },
  {
    cat: "Procedimientos",
    fecha: "20 abr 2026",
    folio: "Nota 002",
    titulo: "Visita domiciliaria del SAT: derechos del contribuyente",
    resumen:
      "Qué hacer al inicio de la diligencia, documentación que pueden requerir, plazos para aportar pruebas y errores comunes que escalan el procedimiento.",
    slug: "visita-domiciliaria-sat",
    cover: { title: "Puerta", tone: "burgundy" },
  },
  {
    cat: "Aduanero",
    fecha: "12 abr 2026",
    folio: "Nota 003",
    titulo: "Embargo precautorio en aduana: pasos para responder un PAMA",
    resumen:
      "Plazo de 10 días para pruebas y alegatos, vías de defensa procedentes y procedimiento para recuperar la mercancía con garantía mientras se resuelve el fondo.",
    slug: "embargo-aduana-pama",
    cover: { title: "Contenedor", tone: "olive" },
  },
];

export function Notas() {
  return (
    <section aria-label="Notas y análisis" className="bg-background pt-24 pb-24 border-t border-rule">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
        <ChapterMark numeral="VII" label="Notas y análisis" />

        <div className="grid grid-cols-12 gap-y-10 gap-x-6 md:gap-12 mt-10 mb-14 items-end">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="font-serif text-[28px] md:text-[36px] lg:text-[42px] leading-[1.15] md:leading-[1.08] font-semibold text-navy tracking-[-0.014em]">
              Comentarios técnicos sobre reformas, criterios y procedimientos.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pb-2">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] font-medium text-navy hover:text-burgundy transition-colors duration-200"
            >
              Ver todas las notas
              <span>→</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-foreground/15">
          {notas.map((n, i) => (
            <Link
              key={n.slug}
              href={`/blog/${n.slug}`}
              className={`group block px-1 md:px-7 py-10 transition-colors duration-300 hover:bg-background-warm ${
                i < notas.length - 1 ? "md:border-r border-rule" : ""
              } ${i > 0 ? "border-t md:border-t-0 border-rule" : ""}`}
            >
              <div className="mb-7">
                <EditorialBand
                  numeral={`VII·${i + 1}`}
                  title={n.cover.title}
                  tone={n.cover.tone}
                  aspect="4/3"
                  fullBleed={false}
                />
              </div>
              <div className="flex items-baseline justify-between mb-6">
                <p className="text-[10px] uppercase tracking-[0.22em] text-burgundy font-medium">
                  {n.cat}
                </p>
                <p className="font-serif italic text-[12px] text-olive">
                  {n.folio}
                </p>
              </div>

              <p className="text-[12px] uppercase tracking-[0.14em] text-muted">
                {n.fecha}
              </p>

              <h3 className="font-serif text-[20px] md:text-[24px] leading-[1.25] md:leading-[1.2] font-medium text-navy tracking-[-0.008em] mt-4 group-hover:text-burgundy transition-colors duration-300">
                {n.titulo}
              </h3>

              <p className="text-[14.5px] leading-[1.6] text-muted mt-4">
                {n.resumen}
              </p>

              <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] font-medium text-navy mt-7 group-hover:gap-3 group-hover:text-burgundy transition-all duration-300">
                Leer la nota
                <span>→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
