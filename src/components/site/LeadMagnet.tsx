import { ChapterMark } from "./ChapterMark";

export function LeadMagnet() {
  return (
    <section className="bg-background pt-24 pb-24">
      <div className="max-w-[1280px] mx-auto px-12">
        <ChapterMark numeral="VI" label="Recurso descargable" />

        <div className="grid grid-cols-12 gap-12 mt-12 items-start">
          {/* Left: PDF mockup as editorial cover */}
          <div className="col-span-12 lg:col-span-5">
            <div className="relative bg-background-warm aspect-[3/4] flex flex-col">
              <span className="absolute top-3 left-3 w-[8px] h-[8px] border-t border-l border-olive" />
              <span className="absolute top-3 right-3 w-[8px] h-[8px] border-t border-r border-olive" />
              <span className="absolute bottom-3 left-3 w-[8px] h-[8px] border-b border-l border-olive" />
              <span className="absolute bottom-3 right-3 w-[8px] h-[8px] border-b border-r border-olive" />

              <div className="flex-1 flex flex-col justify-between px-12 py-14">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium">
                    ADAF · Edición 2026
                  </p>
                  <span className="block w-[40px] h-[1px] bg-olive mt-3" />
                </div>

                <div>
                  <p className="text-[12px] uppercase tracking-[0.16em] text-burgundy font-medium">
                    Guía del contribuyente
                  </p>
                  <h3 className="font-serif text-[40px] leading-[1.05] font-semibold text-navy mt-4 tracking-[-0.014em]">
                    Las primeras 72 horas.
                  </h3>
                  <p className="text-[15px] text-foreground/75 mt-6 leading-[1.55]">
                    Qué hacer ante una visita del SAT, un embargo en aduana o
                    un crédito fiscal.
                  </p>
                </div>

                <div className="flex items-end justify-between">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-muted">
                    12 páginas · Tijuana
                  </p>
                  <span className="font-serif italic text-[12px] text-olive">
                    Folio 1
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: editorial body + form */}
          <div className="col-span-12 lg:col-span-7 lg:pl-8 lg:pt-4">
            <h2 className="font-serif text-[36px] leading-[1.1] font-semibold text-navy tracking-[-0.012em]">
              Las primeras 72 horas: guía práctica para el contribuyente.
            </h2>

            <p className="text-[15.5px] leading-[1.7] text-foreground/85 mt-6 max-w-[540px]">
              Una guía de doce páginas con los pasos generales para responder
              ante una visita domiciliaria del SAT, un embargo precautorio en
              aduana, una cédula del IMSS o un crédito fiscal. Es material
              orientativo; no sustituye la asesoría sobre un caso concreto.
            </p>

            <ul className="mt-7 space-y-2.5 max-w-[540px]">
              {[
                "Cómo identificar el tipo de procedimiento desde la primera notificación",
                "Documentación que conviene reunir de inmediato",
                "Plazos legales del recurso, juicio de nulidad y amparo",
                "Errores frecuentes que cierran las vías de defensa",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-3 text-[14.5px] text-foreground/80 leading-[1.55]"
                >
                  <span className="bg-olive shrink-0 w-[6px] h-[6px] mt-[8px]" />
                  {item}
                </li>
              ))}
            </ul>

            <form className="mt-10 max-w-[520px]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="h-12 px-4 bg-background-warm border-b border-foreground/30 text-[14px] focus:outline-none focus:border-burgundy transition-colors"
                />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="h-12 px-4 bg-background-warm border-b border-foreground/30 text-[14px] focus:outline-none focus:border-burgundy transition-colors"
                />
              </div>
              <button
                type="submit"
                className="mt-5 inline-flex items-center justify-center bg-burgundy text-white text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] hover:bg-burgundy-dark transition-colors duration-200"
              >
                Descargar la guía
              </button>
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted mt-5">
                Sujeto al aviso de privacidad
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
