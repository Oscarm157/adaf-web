import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ChapterMark } from "./ChapterMark";

const areas = [
  {
    n: "I",
    slug: "defensa-aduanera",
    label: "Defensa aduanera",
    pregunta: "¿Te embargaron mercancía en aduana?",
    body: "PAMA, embargo precautorio y devolución de mercancía retenida.",
  },
  {
    n: "II",
    slug: "defensa-fiscal-sat",
    label: "Defensa fiscal SAT",
    pregunta: "¿El SAT te notificó un crédito fiscal?",
    body: "Visitas domiciliarias, créditos fiscales y restricción de sellos digitales.",
  },
  {
    n: "III",
    slug: "defensa-imss-infonavit",
    label: "Defensa IMSS / INFONAVIT",
    pregunta: "¿IMSS te liquidó capitales constitutivos?",
    body: "Cédulas de liquidación, multas patronales y diferencias de cuotas.",
  },
  {
    n: "IV",
    slug: "defensa-coepris",
    label: "Defensa COEPRIS",
    pregunta: "¿COEPRIS te impuso una sanción sanitaria?",
    body: "Multas, suspensiones y aseguramiento de producto.",
  },
  {
    n: "V",
    slug: "defensa-sct-transporte",
    label: "Defensa SCT",
    pregunta: "¿Recibiste una multa en autotransporte federal?",
    body: "Boletas, retenciones y cancelación de placas y licencias federales.",
  },
  {
    n: "VI",
    slug: "amparos-fiscales",
    label: "Amparos fiscales",
    pregunta: "¿Necesitas amparar un acto de autoridad?",
    body: "Amparo indirecto y directo en materia fiscal y administrativa.",
  },
  {
    n: "VII",
    slug: "multas-comercio-exterior",
    label: "Multas de comercio exterior",
    pregunta: "¿Te aplicaron una multa por clasificación o valor?",
    body: "Sanciones por clasificación arancelaria, valor en aduana y NOMs.",
  },
  {
    n: "VIII",
    slug: "recurso-revocacion-juicio-nulidad",
    label: "Recurso · Juicio de nulidad",
    pregunta: "¿Quieres impugnar una resolución?",
    body: "Vía administrativa y vía jurisdiccional ante el TFJA.",
  },
  {
    n: "IX",
    slug: "defensa-penal-fiscal",
    label: "Defensa penal-fiscal",
    pregunta: "¿Te investigan por delitos fiscales?",
    body: "Defraudación, contrabando equiparado y operaciones inexistentes (69-B).",
  },
  {
    n: "X",
    slug: "asesoria-preventiva-compliance",
    label: "Asesoría preventiva",
    pregunta: "¿Quieres prevenir contingencias antes de que ocurran?",
    body: "Diagnóstico de riesgos, regularización espontánea y programas de cumplimiento.",
  },
];

export function Areas() {
  return (
    <section className="bg-background pt-32 pb-32">
      <div className="max-w-[1280px] mx-auto px-12">
        <ChapterMark numeral="II" label="Áreas de práctica" />

        <div className="grid grid-cols-12 gap-12 mt-12 mb-20">
          <div className="col-span-12 lg:col-span-7">
            <h2 className="font-serif text-[52px] leading-[1.06] font-semibold text-navy tracking-[-0.014em]">
              Diez materias.
              <br />
              <span className="italic text-burgundy font-medium">
                Cada una empieza con tu pregunta.
              </span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pt-3">
            <p className="text-[15px] leading-[1.65] text-muted max-w-[420px]">
              Organizamos las áreas a partir del problema concreto que llega a
              la oficina, no de la materia abstracta. Elige la situación que se
              parece a la tuya.
            </p>
          </div>
        </div>

        {/* Tabla de contenidos editorial */}
        <div className="border-t border-foreground/15">
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/servicios/${area.slug}`}
              className="group block border-b border-rule transition-colors duration-300"
            >
              <div className="grid grid-cols-12 gap-6 items-baseline py-8 px-1 group-hover:px-3 transition-[padding] duration-300">
                <div className="col-span-2 md:col-span-1">
                  <span className="font-serif italic text-[14px] font-medium text-olive tracking-wide">
                    {area.n}
                  </span>
                </div>

                <div className="col-span-10 md:col-span-3 -ml-2 md:ml-0">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-muted font-medium">
                    {area.label}
                  </p>
                </div>

                <div className="col-span-12 md:col-span-6 md:-ml-4">
                  <h3 className="font-serif text-[24px] md:text-[26px] leading-[1.2] font-medium text-navy tracking-[-0.008em] group-hover:text-burgundy transition-colors duration-300">
                    {area.pregunta}
                  </h3>
                  <p className="text-[14px] leading-[1.55] text-muted mt-2 max-w-[480px]">
                    {area.body}
                  </p>
                </div>

                <div className="col-span-12 md:col-span-2 flex md:justify-end mt-3 md:mt-0">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-burgundy group-hover:gap-3 transition-all duration-300">
                    Materia
                    <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Folio bottom */}
        <div className="mt-12 flex items-center justify-between">
          <span className="font-serif italic text-[12px] text-muted">
            Continúa en § III
          </span>
          <span className="text-[10px] uppercase tracking-[0.22em] text-muted">
            10 / 10 materias
          </span>
        </div>
      </div>
    </section>
  );
}
