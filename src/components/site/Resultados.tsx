import Image from "next/image";
import { ChapterMark } from "./ChapterMark";
import { CountUp } from "@/components/motion/CountUp";

const stats: {
  numero: string;
  countTo?: number;
  label: string;
  note: string;
}[] = [
  {
    numero: "25",
    countTo: 25,
    label: "Años de práctica continua",
    note: "Frontera norte de México",
  },
  {
    numero: "10",
    countTo: 10,
    label: "Áreas de defensa especializada",
    note: "Fiscal · Aduanera · Administrativa · Penal-fiscal",
  },
  {
    numero: "BC",
    label: "Jurisdicción procesal",
    note: "Estatal y federal",
  },
  {
    numero: "MX·US",
    label: "Frontera norte como base",
    note: "Tijuana · Tecate · Rosarito · Mexicali",
  },
];

const autoridades = [
  "SAT · Servicio de Administración Tributaria",
  "ANAM · Agencia Nacional de Aduanas de México",
  "IMSS · Instituto Mexicano del Seguro Social",
  "INFONAVIT",
  "COFEPRIS · Comisión Federal para la Protección contra Riesgos Sanitarios",
  "COEPRIS Baja California",
  "SICT · Secretaría de Infraestructura, Comunicaciones y Transportes",
  "TFJA · Tribunal Federal de Justicia Administrativa",
  "Tribunal de Justicia Administrativa del Estado de BC",
  "Juzgados de Distrito",
  "Tribunales Colegiados de Circuito",
];

export function Resultados() {
  return (
    <section aria-label="Trayectoria" className="bg-background pt-24 pb-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
        <ChapterMark numeral="IV" label="Práctica profesional" />

        <div className="grid grid-cols-12 gap-y-10 gap-x-6 md:gap-12 mt-10 mb-14">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="font-serif text-[28px] md:text-[36px] lg:text-[42px] leading-[1.15] md:leading-[1.08] font-semibold text-navy tracking-[-0.014em]">
              Dimensión general de la práctica.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pt-2">
            <p className="text-[14px] leading-[1.65] text-muted max-w-[420px]">
              Los expedientes específicos están protegidos por el secreto
              profesional. Compartimos las cifras y autoridades en términos
              generales.
            </p>
          </div>
        </div>

        {/* Tabular stat block — financial report aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-4 border-y border-foreground/15">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-9 ${
                i < stats.length - 1 ? "md:border-r border-rule" : ""
              } ${i > 0 ? "border-t md:border-t-0 border-rule" : ""}`}
            >
              <div className="font-serif text-[44px] md:text-[60px] leading-none font-semibold text-navy tracking-[-0.018em] tabular-nums">
                {s.countTo !== undefined ? (
                  <CountUp to={s.countTo} duration={1.4} />
                ) : (
                  s.numero
                )}
              </div>
              <p className="text-[12px] uppercase tracking-[0.16em] text-muted font-medium mt-5">
                {s.label}
              </p>
              <p className="font-serif italic text-[12px] text-olive mt-2">
                {s.note}
              </p>
            </div>
          ))}
        </div>

        {/* Cobertura · spread con mapa */}
        <div className="grid grid-cols-12 gap-y-10 gap-x-6 md:gap-12 lg:gap-x-16 mt-20 items-center">
          <div className="col-span-12 md:col-span-7 lg:col-span-7">
            <div className="flex items-baseline gap-3 mb-5">
              <span aria-hidden="true" className="font-serif italic text-[13px] text-olive">
                IV·b
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium">
                Cobertura geográfica
              </span>
            </div>
            <h3 className="font-serif text-[24px] md:text-[30px] lg:text-[36px] leading-[1.18] md:leading-[1.1] font-semibold text-navy tracking-[-0.012em] max-w-[480px]">
              Frontera norte como base, alcance estatal y federal.
            </h3>
            <p className="text-[15px] leading-[1.65] text-foreground/80 mt-6 max-w-[460px]">
              Atendemos casos físicamente desde Tijuana, Tecate, Rosarito y
              Mexicali, con representación procesal estatal en Baja California
              y federal ante autoridades y tribunales en todo el país.
            </p>
            <p className="font-serif italic text-[12px] text-olive mt-5">
              MX · US · Frontera norte de Baja California
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 lg:col-span-4 lg:col-start-9">
            <figure className="relative w-full aspect-[3/4] overflow-hidden border border-rule bg-background-warm">
              <Image
                src="/editorial/editorial-bc-mapa-frontera.png"
                alt="Mapa minimalista de la frontera norte de Baja California, con las plazas de Tijuana, Tecate, Rosarito y Mexicali"
                fill
                sizes="(min-width: 1024px) 380px, (min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </figure>
          </div>
        </div>

        {/* Authorities ledger */}
        <div className="grid grid-cols-12 gap-y-10 gap-x-6 md:gap-12 mt-20">
          <div className="col-span-12 lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium">
              Autoridades y tribunales
            </p>
            <h3 className="font-serif text-[26px] leading-[1.2] font-medium text-navy tracking-[-0.008em] mt-3">
              Donde representamos a nuestros clientes.
            </h3>
            <p className="text-[14px] leading-[1.65] text-muted mt-4 max-w-[340px]">
              Casos llevados ante autoridades fiscales, aduaneras y sanitarias,
              y ante tribunales administrativos y federales en materia de
              amparo.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 border-t border-rule">
              {autoridades.map((a, i) => (
                <li
                  key={a}
                  className={`py-3 text-[13.5px] text-foreground border-b border-rule flex items-baseline gap-3 ${
                    i % 2 === 0 ? "sm:border-r sm:pr-6" : "sm:pl-6"
                  }`}
                >
                  <span aria-hidden="true" className="font-serif italic text-[11px] text-olive w-7 shrink-0">
                    {romanize(i + 1)}
                  </span>
                  <span className="leading-[1.4]">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function romanize(n: number): string {
  const r = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII",
  ];
  return r[n - 1] ?? String(n);
}
