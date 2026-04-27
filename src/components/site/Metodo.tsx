import { ChapterMark } from "./ChapterMark";

const steps = [
  {
    n: "I",
    title: "Valoración inicial",
    body: "Revisamos la notificación, oficio o resolución que recibiste. Te decimos qué tipo de procedimiento es y cuántos días tenemos para actuar.",
  },
  {
    n: "II",
    title: "Diagnóstico técnico",
    body: "Analizamos expediente, fundamento legal de la autoridad y posibles vías de defensa: recurso administrativo, juicio de nulidad o amparo.",
  },
  {
    n: "III",
    title: "Estrategia y propuesta",
    body: "Te presentamos por escrito el plan de defensa, los honorarios y los tiempos estimados. Tú decides si avanzamos.",
  },
  {
    n: "IV",
    title: "Representación",
    body: "Llevamos el caso ante la autoridad o tribunal correspondiente. Te informamos del avance en cada etapa procesal.",
  },
];

export function Metodo() {
  return (
    <section className="bg-background-warm pt-32 pb-32">
      <div className="max-w-[1280px] mx-auto px-12">
        <ChapterMark numeral="V" label="Método de trabajo" />

        <div className="grid grid-cols-12 gap-12 mt-12 mb-24 items-end">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="font-serif text-[52px] leading-[1.06] font-semibold text-navy tracking-[-0.014em]">
              Cuatro pasos
              <br />
              <span className="italic text-burgundy font-medium">
                antes de actuar.
              </span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pb-3">
            <p className="text-[15px] leading-[1.65] text-muted max-w-[400px] font-serif italic">
              No iniciamos un procedimiento sin entender primero qué hay sobre
              la mesa, qué plazos corren y qué resultado realista podemos
              esperar.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-16">
          {steps.map((step, i) => (
            <article key={step.n} className="relative">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-serif italic text-[14px] font-medium text-olive">
                  Paso {step.n}
                </span>
                <span className="flex-1 h-[1px] bg-foreground/20" />
              </div>

              <div className="font-serif text-[88px] leading-[0.85] font-medium text-navy/15 tracking-[-0.02em] absolute -top-4 right-0 select-none pointer-events-none">
                {step.n}
              </div>

              <h3 className="font-serif text-[24px] leading-[1.2] font-semibold text-navy tracking-[-0.008em] relative">
                {step.title}
              </h3>

              <p className="text-[14.5px] leading-[1.65] text-foreground/80 mt-5">
                {step.body}
              </p>

              {i < steps.length - 1 && (
                <span className="hidden md:block absolute top-2 -right-5 text-olive/60 font-serif italic text-[14px]">
                  →
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
