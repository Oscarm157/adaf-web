import { ChapterMark } from "./ChapterMark";

const pillars = [
  {
    n: "i",
    title: "Trayectoria comprobada",
    kicker: "Veinticinco años en frontera.",
    body: "Representación continua en materia aduanera, fiscal y administrativa en la frontera norte. Conocemos los criterios de las autoridades locales y los tiempos reales de cada procedimiento.",
  },
  {
    n: "ii",
    title: "Trato directo y confidencial",
    kicker: "Un abogado responsable, de inicio a fin.",
    body: "Cada caso lo lleva un abogado responsable de principio a fin. La información que nos compartes se maneja con la reserva que exige el secreto profesional.",
  },
  {
    n: "iii",
    title: "Estrategia técnica, no plantillas",
    kicker: "Antes de actuar, revisamos el expediente.",
    body: "Antes de presentar un escrito, revisamos plazos, fundamento y pruebas. Te explicamos qué procede, qué riesgos hay y qué resultado realista podemos esperar.",
  },
];

export function Pillars() {
  return (
    <section className="bg-background-warm pt-32 pb-32 relative">
      <div className="max-w-[1280px] mx-auto px-12">
        <ChapterMark numeral="III" label="Tres principios" />

        <div className="grid grid-cols-12 gap-12 mt-12 mb-24">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="font-serif text-[52px] leading-[1.06] font-semibold text-navy tracking-[-0.014em]">
              Lo que sostiene
              <br />
              <span className="italic text-burgundy font-medium">
                cada uno de nuestros casos.
              </span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16 border-t border-foreground/15 pt-14">
          {pillars.map((p) => (
            <article key={p.n} className="relative">
              <div className="flex items-baseline gap-3 mb-7">
                <span className="font-serif italic text-[20px] text-olive">
                  {p.n}.
                </span>
                <span className="flex-1 h-[1px] bg-rule" />
              </div>

              <h3 className="font-serif text-[26px] leading-[1.2] font-semibold text-navy tracking-[-0.008em]">
                {p.title}
              </h3>

              <p className="font-serif italic text-[18px] leading-[1.4] text-burgundy mt-3">
                {p.kicker}
              </p>

              <p className="text-[15px] leading-[1.65] text-foreground/80 mt-5">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
