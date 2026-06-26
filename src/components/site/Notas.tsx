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
  cover: { title: string; tone: Tone; src: string; alt: string };
}> = [
  {
    cat: "Reformas",
    fecha: "27 abr 2026",
    folio: "Art. 001",
    titulo: "Reforma al CFF 2026: cambios para empresarios e importadores",
    resumen:
      "Modificaciones principales en sellos digitales, restricciones, RFC y comprobantes, con su impacto práctico antes del cierre del ejercicio.",
    slug: "reforma-cff-2026",
    cover: { title: "Libro abierto", tone: "navy", src: "/editorial/editorial-v-cff-libro.png", alt: "Libro abierto de código legal sobre escritorio" },
  },
  {
    cat: "Procedimientos",
    fecha: "20 abr 2026",
    folio: "Art. 002",
    titulo: "Visita domiciliaria del SAT: derechos del contribuyente",
    resumen:
      "Qué hacer al inicio de la diligencia, documentación que pueden requerir, plazos para aportar pruebas y errores comunes que escalan el procedimiento.",
    slug: "visita-domiciliaria-sat",
    cover: { title: "Puerta", tone: "burgundy", src: "/editorial/editorial-vi-visita-puerta.png", alt: "Puerta institucional entreabierta con luz cálida adentro" },
  },
  {
    cat: "Aduanero",
    fecha: "12 abr 2026",
    folio: "Art. 003",
    titulo: "Embargo precautorio en aduana: pasos para responder un PAMA",
    resumen:
      "Plazo de 10 días para pruebas y alegatos, vías de defensa procedentes y procedimiento para recuperar la mercancía con garantía mientras se resuelve el fondo.",
    slug: "embargo-aduana-pama",
    cover: { title: "Contenedor", tone: "olive", src: "/editorial/editorial-vii-embargo-contenedor.png", alt: "Contenedor olive en patio aduanal vacío" },
  },
];

export function Notas() {
  const [featured, ...rest] = notas;

  return (
    <section aria-label="Blog" className="bg-background pt-24 pb-24 border-t border-rule">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
        <ChapterMark numeral="IX" label="Blog" />

        <div className="grid grid-cols-12 gap-y-8 gap-x-6 md:gap-12 mt-10 mb-14 items-end">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="font-serif text-[28px] md:text-[36px] lg:text-[42px] leading-[1.1] font-semibold text-navy tracking-[-0.014em]">
              Comentarios técnicos sobre reformas, criterios y procedimientos.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pb-2">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] font-medium text-navy hover:text-burgundy transition-colors duration-200"
            >
              Ver todo el blog
              <span>→</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-y-12 gap-x-6 md:gap-12 border-t border-foreground/15 pt-12">
          {/* Nota destacada */}
          <Link href={`/blog/${featured.slug}`} className="group col-span-12 lg:col-span-7">
            <div className="mb-7">
              <EditorialBand
                numeral="IX·1"
                title={featured.cover.title}
                tone={featured.cover.tone}
                aspect="16/9"
                fullBleed={false}
                src={featured.cover.src}
                alt={featured.cover.alt}
              />
            </div>
            <div className="flex items-baseline justify-between mb-4">
              <p className="text-[10px] uppercase tracking-[0.22em] text-burgundy font-medium">{featured.cat}</p>
              <p className="text-[11px] uppercase tracking-[0.14em] text-muted">{featured.fecha}</p>
            </div>
            <h3 className="font-serif text-[28px] md:text-[34px] leading-[1.12] font-medium text-navy tracking-[-0.012em] group-hover:text-burgundy transition-colors duration-300">
              {featured.titulo}
            </h3>
            <p className="text-[15px] leading-[1.65] text-muted mt-4 max-w-[560px]">{featured.resumen}</p>
            <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] font-medium text-navy mt-6 group-hover:gap-3 group-hover:text-burgundy transition-all duration-300">
              Leer más <span>→</span>
            </span>
          </Link>

          {/* Notas secundarias, apiladas */}
          <div className="col-span-12 lg:col-span-5 lg:border-l lg:border-rule lg:pl-12">
            <div className="divide-y divide-rule">
              {rest.map((n) => (
                <Link key={n.slug} href={`/blog/${n.slug}`} className="group block py-8 first:pt-0">
                  <div className="flex items-baseline justify-between mb-3">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-burgundy font-medium">{n.cat}</p>
                    <p className="font-serif italic text-[12px] text-olive">{n.folio}</p>
                  </div>
                  <h3 className="font-serif text-[21px] md:text-[23px] leading-[1.2] font-medium text-navy tracking-[-0.008em] group-hover:text-burgundy transition-colors duration-300">
                    {n.titulo}
                  </h3>
                  <p className="text-[14px] leading-[1.6] text-muted mt-3">{n.resumen}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
