import { ChapterMark } from "./ChapterMark";
import { GuiaCover } from "./GuiaCover";
import { LeadMagnetForm } from "@/components/forms/LeadMagnetForm";

export function LeadMagnet() {
  return (
    <section aria-label="Recurso descargable" className="bg-background-warm pt-24 pb-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
        <ChapterMark numeral="VIII" label="Recurso descargable" />

        <div className="grid grid-cols-12 gap-y-12 gap-x-6 md:gap-12 mt-12 items-center">
          {/* Portada sangrada, más grande */}
          <div className="col-span-12 lg:col-span-5 relative">
            <div className="relative aspect-[3/4] w-full lg:w-[118%] lg:-ml-[9%] overflow-hidden shadow-[0_40px_90px_-40px_rgba(11,14,20,0.55)]">
              <GuiaCover />
            </div>
          </div>

          {/* Cuerpo editorial + formulario */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <h2 className="display-md text-navy">
              Las primeras 72 horas.
            </h2>
            <p className="font-serif italic text-[17px] text-olive mt-3">
              Guía práctica para el contribuyente.
            </p>

            <p className="text-[15.5px] leading-[1.7] text-foreground/85 mt-7 max-w-[540px]">
              Una guía de doce páginas con los pasos generales para responder ante una
              visita domiciliaria del SAT, un embargo precautorio en aduana, una cédula
              del IMSS o un crédito fiscal. Es material orientativo; no sustituye la
              asesoría sobre un caso concreto.
            </p>

            <ul className="mt-7 space-y-2.5 max-w-[540px]">
              {[
                "Cómo identificar el tipo de procedimiento desde la primera notificación",
                "Documentación que conviene reunir de inmediato",
                "Plazos legales del recurso, juicio de nulidad y amparo",
                "Errores frecuentes que cierran las vías de defensa",
              ].map((item) => (
                <li key={item} className="flex items-baseline gap-3 text-[14.5px] text-foreground/80 leading-[1.55]">
                  <span className="bg-olive shrink-0 w-[6px] h-[6px] mt-[8px]" />
                  {item}
                </li>
              ))}
            </ul>

            <LeadMagnetForm />
          </div>
        </div>
      </div>
    </section>
  );
}
