import Link from "next/link";
import { ChapterMark } from "./ChapterMark";

const notas = [
  {
    cat: "Reformas",
    fecha: "27 abr 2026",
    folio: "Nota 001",
    titulo: "Reforma al CFF 2026: lo que cambia para empresarios e importadores",
    resumen:
      "Cambios principales en sellos digitales, restricciones, RFC y comprobantes, y el impacto práctico para PYME importadora antes del cierre del ejercicio.",
    slug: "reforma-cff-2026",
  },
  {
    cat: "Procedimientos",
    fecha: "20 abr 2026",
    folio: "Nota 002",
    titulo: "Visita domiciliaria del SAT: qué hacer en las primeras horas",
    resumen:
      "Derechos del contribuyente al inicio de la diligencia, qué firmar y qué no firmar, y los errores comunes que escalan el procedimiento.",
    slug: "visita-domiciliaria-sat",
  },
  {
    cat: "Aduanero",
    fecha: "12 abr 2026",
    folio: "Nota 003",
    titulo: "Embargo precautorio en aduana: pasos para responder un PAMA",
    resumen:
      "El plazo de 10 días para pruebas y alegatos, las vías de defensa y cómo recuperar la mercancía con garantía mientras se resuelve el fondo.",
    slug: "embargo-aduana-pama",
  },
];

export function Notas() {
  return (
    <section className="bg-background pt-32 pb-32 border-t border-rule">
      <div className="max-w-[1280px] mx-auto px-12">
        <ChapterMark numeral="VII" label="Notas y análisis" />

        <div className="grid grid-cols-12 gap-12 mt-12 mb-20 items-end">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="font-serif text-[52px] leading-[1.06] font-semibold text-navy tracking-[-0.014em]">
              Comentario técnico
              <br />
              <span className="italic text-burgundy font-medium">
                sobre reformas y criterios.
              </span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pb-3">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] font-medium text-navy hover:text-burgundy transition-colors duration-200"
            >
              Ver todas las notas
              <span className="font-serif italic">→</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-foreground/15">
          {notas.map((n, i) => (
            <Link
              key={n.slug}
              href={`/blog/${n.slug}`}
              className={`group block px-1 md:px-8 py-12 transition-colors duration-300 hover:bg-background-warm ${
                i < notas.length - 1 ? "md:border-r border-rule" : ""
              } ${i > 0 ? "border-t md:border-t-0 border-rule" : ""}`}
            >
              <div className="flex items-baseline justify-between mb-7">
                <p className="text-[10px] uppercase tracking-[0.22em] text-burgundy font-medium">
                  {n.cat}
                </p>
                <p className="font-serif italic text-[12px] text-olive">
                  {n.folio}
                </p>
              </div>

              <p className="font-serif italic text-[12px] text-muted">
                {n.fecha}
              </p>

              <h3 className="font-serif text-[26px] leading-[1.18] font-medium text-navy tracking-[-0.008em] mt-4 group-hover:text-burgundy transition-colors duration-300">
                {n.titulo}
              </h3>

              <p className="text-[14.5px] leading-[1.6] text-muted mt-5">
                {n.resumen}
              </p>

              <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] font-medium text-navy mt-8 group-hover:gap-3 group-hover:text-burgundy transition-all duration-300">
                Leer la nota
                <span className="font-serif italic">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
