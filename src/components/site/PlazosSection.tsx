import { ChapterMark } from "./ChapterMark";
import { ProcedureTimeline } from "@/components/visual/ProcedureTimeline";

// Plazos legales reales por procedimiento (días hábiles desde la notificación).
const plazos = [
  { etapa: "Pruebas y alegatos en PAMA (embargo en aduana)", plazo: "10 días", dias: 10 },
  { etapa: "Recurso de inconformidad ante el IMSS", plazo: "15 días", dias: 15 },
  { etapa: "Aportar pruebas en revisión del SAT", plazo: "20 días", dias: 20 },
  { etapa: "Recurso de revocación o juicio de nulidad (TFJA)", plazo: "30 días", dias: 30 },
];

export function PlazosSection() {
  return (
    <section aria-label="Plazos legales" className="bg-background pt-24 pb-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
        <ChapterMark numeral="IV" label="Plazos que corren" />

        <div className="grid grid-cols-12 gap-y-8 gap-x-6 md:gap-12 mt-10 mb-16 items-end">
          <div className="col-span-12 lg:col-span-8">
            <h2 className="font-serif text-[28px] md:text-[36px] lg:text-[42px] leading-[1.1] font-semibold text-navy tracking-[-0.014em]">
              El plazo empieza a correr desde la notificación.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pb-2">
            <p className="text-[14px] leading-[1.65] text-muted max-w-[400px]">
              Cada procedimiento abre una ventana corta para defenderse. Pasada esa
              fecha, las vías se cierran. Estos son algunos de los plazos más frecuentes.
            </p>
          </div>
        </div>

        <ProcedureTimeline steps={plazos} />
      </div>
    </section>
  );
}
