import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ChapterMark } from "./ChapterMark";

const areas = [
  {
    n: "I",
    slug: "defensa-aduanera",
    label: "Defensa aduanera",
    pregunta: "Embargo precautorio y PAMA en aduana",
    body: "Procedimiento Administrativo en Materia Aduanera, devolución de mercancía y multas de comercio exterior.",
  },
  {
    n: "II",
    slug: "defensa-fiscal-sat",
    label: "Defensa fiscal SAT",
    pregunta: "Créditos fiscales y auditorías del SAT",
    body: "Visitas domiciliarias, revisiones de gabinete, créditos fiscales y restricción de sellos digitales.",
  },
  {
    n: "III",
    slug: "defensa-imss-infonavit",
    label: "Defensa IMSS / INFONAVIT",
    pregunta: "Cédulas de liquidación y capitales constitutivos",
    body: "Multas patronales, diferencias de cuotas obrero-patronales y procedimientos de inconformidad.",
  },
  {
    n: "IV",
    slug: "defensa-sanitaria",
    label: "Defensa sanitaria · COFEPRIS / COEPRIS",
    pregunta: "Sanciones sanitarias y aseguramiento de producto",
    body: "Multas, suspensiones de actividad y aseguramiento ante COFEPRIS (federal) y COEPRIS (estatal).",
  },
  {
    n: "V",
    slug: "defensa-sict-transporte",
    label: "Defensa SICT",
    pregunta: "Multas en autotransporte federal",
    body: "Boletas de infracción, retención de unidades y cancelación de placas o licencias federales.",
  },
  {
    n: "VI",
    slug: "amparos-fiscales",
    label: "Amparos fiscales",
    pregunta: "Amparo en materia fiscal y administrativa",
    body: "Amparo indirecto y directo contra leyes y resoluciones inconstitucionales.",
  },
  {
    n: "VII",
    slug: "multas-comercio-exterior",
    label: "Comercio exterior",
    pregunta: "Multas por clasificación, valor y NOMs",
    body: "Sanciones por clasificación arancelaria, valor en aduana y regulaciones no arancelarias.",
  },
  {
    n: "VIII",
    slug: "recurso-revocacion-juicio-nulidad",
    label: "Recurso · Juicio de nulidad",
    pregunta: "Impugnación de resoluciones administrativas",
    body: "Vía administrativa y jurisdiccional ante el Tribunal Federal de Justicia Administrativa.",
  },
  {
    n: "IX",
    slug: "defensa-penal-fiscal",
    label: "Defensa penal-fiscal",
    pregunta: "Investigación por delitos fiscales",
    body: "Defraudación fiscal, contrabando equiparado y operaciones inexistentes (artículo 69-B).",
  },
  {
    n: "X",
    slug: "asesoria-preventiva-compliance",
    label: "Asesoría preventiva",
    pregunta: "Compliance fiscal y aduanero",
    body: "Diagnóstico de riesgos, regularización espontánea y programas de cumplimiento.",
  },
];

export function Areas() {
  return (
    <section aria-label="Áreas de práctica" id="areas" className="bg-background pt-24 pb-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
        <ChapterMark numeral="II" label="Áreas de práctica" />

        <div className="grid grid-cols-12 gap-y-10 gap-x-6 md:gap-12 mt-10 mb-14">
          <div className="col-span-12 lg:col-span-7">
            <h2 className="font-serif text-[28px] md:text-[36px] lg:text-[42px] leading-[1.15] md:leading-[1.08] font-semibold text-navy tracking-[-0.014em]">
              Diez áreas de defensa especializada.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pt-2">
            <p className="text-[15px] leading-[1.65] text-muted max-w-[420px]">
              Organizamos la práctica por tipo de procedimiento y autoridad
              competente. Selecciona la materia que corresponde al asunto que
              tienes en proceso.
            </p>
          </div>
        </div>

        {/* Two-column editorial index */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-foreground/15">
          {areas.map((area, i) => (
            <Link
              key={area.slug}
              href={`/servicios/${area.slug}`}
              className={`group block transition-colors duration-300 hover:bg-background-warm border-b border-rule ${
                i % 2 === 0 ? "md:border-r border-rule" : ""
              }`}
            >
              <div className="px-2 md:px-7 py-7 group-hover:px-4 md:group-hover:px-8 transition-[padding] duration-300">
                <div className="flex items-baseline gap-4 mb-3.5">
                  <span
                    aria-hidden="true"
                    className="font-serif italic text-[15px] font-medium text-olive tracking-wide w-7 shrink-0"
                  >
                    {area.n}
                  </span>
                  <span className="text-[13px] uppercase tracking-[0.14em] text-navy font-medium">
                    {area.label}
                  </span>
                </div>

                <h3 className="font-serif text-[19px] md:text-[22px] lg:text-[23px] leading-[1.3] md:leading-[1.25] font-medium text-foreground tracking-[-0.005em] group-hover:text-burgundy transition-colors duration-300 ml-11">
                  {area.pregunta}
                </h3>

                <p className="text-[14px] leading-[1.55] text-muted mt-2.5 ml-11 max-w-[420px]">
                  {area.body}
                </p>

                <div className="ml-11 mt-4 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] font-medium text-burgundy group-hover:gap-3 transition-all duration-300">
                  Ver materia
                  <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
