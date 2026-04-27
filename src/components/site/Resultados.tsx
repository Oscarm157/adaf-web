import { ChapterMark } from "./ChapterMark";

const stats = [
  {
    numero: "25",
    label: "Años de práctica continua",
    note: "MMI — MMXXVI",
  },
  {
    numero: "10",
    label: "Áreas de defensa especializada",
    note: "Fiscal · Aduanera · Administrativa · Penal-fiscal",
  },
  {
    numero: "BC",
    label: "Cobertura procesal estatal y federal",
    note: "Tijuana · Tecate · Rosarito",
  },
  {
    numero: "1:1",
    label: "Por abogado responsable, cada caso",
    note: "De inicio a fin del procedimiento",
  },
];

const autoridades = [
  "SAT — Servicio de Administración Tributaria",
  "ANAM — Agencia Nacional de Aduanas de México",
  "IMSS — Instituto Mexicano del Seguro Social",
  "INFONAVIT",
  "COFEPRIS — Comisión Federal de Riesgos Sanitarios",
  "COEPRIS Baja California",
  "SICT — Secretaría de Infraestructura, Comunicaciones y Transportes",
  "TFJA — Tribunal Federal de Justicia Administrativa",
  "Tribunal de Justicia Administrativa del Estado de BC",
  "Juzgados de Distrito",
  "Tribunales Colegiados de Circuito",
];

export function Resultados() {
  return (
    <section className="bg-background pt-24 pb-24">
      <div className="max-w-[1280px] mx-auto px-12">
        <ChapterMark numeral="IV" label="Práctica profesional" />

        <div className="grid grid-cols-12 gap-12 mt-10 mb-14">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="font-serif text-[42px] leading-[1.08] font-semibold text-navy tracking-[-0.014em]">
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
              <div className="font-serif text-[60px] leading-none font-semibold text-navy tracking-[-0.018em]">
                {s.numero}
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

        {/* Authorities ledger */}
        <div className="grid grid-cols-12 gap-12 mt-20">
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
                  <span className="font-serif italic text-[11px] text-olive w-7 shrink-0">
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
