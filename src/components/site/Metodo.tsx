import { ChapterMark } from "./ChapterMark";

const steps = [
  {
    n: "I",
    title: "Valoración inicial",
    body: "Revisamos la notificación, oficio o resolución recibida. Identificamos el procedimiento y los plazos legales que corren a partir de la notificación.",
  },
  {
    n: "II",
    title: "Diagnóstico técnico",
    body: "Analizamos el expediente, el fundamento legal de la autoridad y las vías procedentes: recurso administrativo, juicio de nulidad o amparo.",
  },
  {
    n: "III",
    title: "Estrategia y propuesta",
    body: "Presentamos por escrito el plan de defensa, los honorarios y los tiempos estimados. El cliente decide si avanzamos.",
  },
  {
    n: "IV",
    title: "Representación",
    body: "Llevamos el caso ante la autoridad o tribunal correspondiente y reportamos el avance procesal en cada etapa.",
  },
];

export function Metodo() {
  return (
    <section className="bg-background-warm pt-24 pb-24">
      <div className="max-w-[1280px] mx-auto px-12">
        <ChapterMark numeral="V" label="Método de trabajo" />

        <div className="grid grid-cols-12 gap-12 mt-10 mb-16 items-end">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="font-serif text-[42px] leading-[1.08] font-semibold text-navy tracking-[-0.014em]">
              Cuatro etapas antes y durante la representación.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pb-2">
            <p className="text-[14px] leading-[1.65] text-muted max-w-[400px]">
              No iniciamos un procedimiento sin entender primero el expediente,
              los plazos que corren y el resultado realista que se puede
              esperar.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-12">
          {steps.map((step) => (
            <article key={step.n} className="relative">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-serif italic text-[13px] font-medium text-olive">
                  Etapa {step.n}
                </span>
                <span className="flex-1 h-[1px] bg-foreground/20" />
              </div>

              <div className="font-serif text-[80px] leading-[0.85] font-medium text-navy/15 tracking-[-0.02em] absolute -top-4 right-0 select-none pointer-events-none">
                {step.n}
              </div>

              <h3 className="font-serif text-[22px] leading-[1.2] font-semibold text-navy tracking-[-0.008em] relative">
                {step.title}
              </h3>

              <p className="text-[14px] leading-[1.65] text-foreground/80 mt-4">
                {step.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
