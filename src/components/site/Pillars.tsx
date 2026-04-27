import { ChapterMark } from "./ChapterMark";

const pillars = [
  {
    n: "i",
    title: "Trayectoria comprobada",
    body: "Veinticinco años de representación continua en materia aduanera, fiscal y administrativa en la frontera norte. Conocemos los criterios de las autoridades locales y los tiempos reales de cada procedimiento.",
  },
  {
    n: "ii",
    title: "Trato directo y confidencial",
    body: "Cada caso lo lleva un abogado responsable de principio a fin. La información que el cliente comparte se maneja bajo el secreto profesional que exige la práctica jurídica.",
  },
  {
    n: "iii",
    title: "Análisis técnico antes de actuar",
    body: "Antes de presentar un escrito, revisamos plazos, fundamento legal y pruebas. Le explicamos al cliente qué procede, qué riesgos hay y qué resultado realista puede esperar.",
  },
];

export function Pillars() {
  return (
    <section className="bg-background-warm pt-24 pb-24">
      <div className="max-w-[1280px] mx-auto px-12">
        <ChapterMark numeral="III" label="Principios" />

        <div className="grid grid-cols-12 gap-12 mt-10 mb-16">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="font-serif text-[42px] leading-[1.08] font-semibold text-navy tracking-[-0.014em]">
              Tres principios sostienen cada caso.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-14 border-t border-foreground/15 pt-12">
          {pillars.map((p) => (
            <article key={p.n} className="relative">
              <div className="flex items-baseline gap-3 mb-5">
                <span className="font-serif italic text-[18px] text-olive">
                  {p.n}.
                </span>
                <span className="flex-1 h-[1px] bg-rule" />
              </div>

              <h3 className="font-serif text-[24px] leading-[1.2] font-semibold text-navy tracking-[-0.008em]">
                {p.title}
              </h3>

              <p className="text-[15px] leading-[1.65] text-foreground/80 mt-4">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
