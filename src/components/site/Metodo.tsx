import { ChapterMark } from "./ChapterMark";
import { ProcessFlow } from "@/components/visual/ProcessFlow";

const steps = [
  {
    n: "I",
    title: "Valoración inicial",
    body: "Revisamos la notificación, oficio o resolución recibida. Identificamos el procedimiento y los plazos legales que corren.",
  },
  {
    n: "II",
    title: "Diagnóstico técnico",
    body: "Analizamos el expediente, el fundamento de la autoridad y las vías procedentes: recurso, juicio de nulidad o amparo.",
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
    <section aria-label="Método de trabajo" className="bg-background-warm pt-24 pb-28">
      <div className="max-w-[1280px] mx-auto px-12">
        <ChapterMark numeral="V" label="Método de trabajo" />

        <div className="grid grid-cols-12 gap-12 mt-10 mb-20 items-end">
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

        <ProcessFlow steps={steps} />
      </div>
    </section>
  );
}
