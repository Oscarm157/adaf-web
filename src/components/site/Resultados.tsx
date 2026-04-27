import { ChapterMark } from "./ChapterMark";

const stats = [
  { numero: "25", label: "Años de práctica continua", note: "MMI — MMXXVI" },
  { numero: "10", label: "Áreas de defensa especializada", note: "Fiscal · Aduanera · Administrativa · Penal" },
  { numero: "BC", label: "Cobertura procesal estatal y federal", note: "Tijuana · Tecate · Rosarito" },
  { numero: "1:1", label: "Por abogado responsable, cada caso", note: "De inicio a fin" },
];

const autoridades = [
  "SAT",
  "ANAM (antes SAT-AGA)",
  "IMSS",
  "INFONAVIT",
  "COEPRIS Baja California",
  "SICT (antes SCT)",
  "TFJA",
  "Tribunal de Justicia Administrativa local",
  "Juzgados de Distrito",
  "Tribunales Colegiados de Circuito",
];

export function Resultados() {
  return (
    <section className="bg-background pt-32 pb-32">
      <div className="max-w-[1280px] mx-auto px-12">
        <ChapterMark numeral="IV" label="Resultados" />

        <div className="grid grid-cols-12 gap-12 mt-12 mb-20">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="font-serif text-[52px] leading-[1.06] font-semibold text-navy tracking-[-0.014em]">
              Resultados que
              <br />
              <span className="italic text-burgundy font-medium">
                se documentan, no se prometen.
              </span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pt-3">
            <p className="text-[14px] leading-[1.65] text-muted max-w-[420px] font-serif italic">
              Los expedientes específicos están protegidos por el secreto
              profesional. Compartimos la dimensión general de la práctica.
            </p>
          </div>
        </div>

        {/* Tabular stat block — financial report aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-4 border-y border-foreground/15">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`px-6 py-10 ${
                i < stats.length - 1 ? "md:border-r border-rule" : ""
              } ${i > 0 ? "border-t md:border-t-0 border-rule" : ""}`}
            >
              <div className="font-serif text-[64px] leading-none font-semibold text-navy tracking-[-0.018em]">
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
        <div className="grid grid-cols-12 gap-12 mt-24">
          <div className="col-span-12 lg:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium">
              Autoridades y tribunales
            </p>
            <h3 className="font-serif text-[28px] leading-[1.2] font-medium text-navy tracking-[-0.008em] mt-4">
              <span className="italic text-burgundy">Donde </span>
              representamos.
            </h3>
            <p className="text-[14px] leading-[1.65] text-muted mt-5 max-w-[340px]">
              Casos llevados ante autoridades fiscales y aduaneras, así como
              ante tribunales administrativos y federales en materia de amparo.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 border-t border-rule">
              {autoridades.map((a, i) => (
                <li
                  key={a}
                  className={`py-3.5 text-[14px] text-foreground border-b border-rule flex items-baseline gap-4 ${
                    i % 2 === 0 ? "sm:border-r sm:pr-6" : "sm:pl-6"
                  }`}
                >
                  <span className="font-serif italic text-[11px] text-olive w-8">
                    {romanize(i + 1)}
                  </span>
                  {a}
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
