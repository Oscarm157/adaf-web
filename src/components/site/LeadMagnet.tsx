import { ChapterMark } from "./ChapterMark";

export function LeadMagnet() {
  return (
    <section className="bg-background pt-32 pb-32">
      <div className="max-w-[1280px] mx-auto px-12">
        <ChapterMark numeral="VI" label="Recurso descargable" />

        <div className="grid grid-cols-12 gap-12 mt-16 items-start">
          {/* Left: PDF mockup as editorial cover */}
          <div className="col-span-12 lg:col-span-5">
            <div className="relative bg-background-warm aspect-[3/4] flex flex-col">
              {/* corner ornaments */}
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
                  <p className="font-serif italic text-[14px] text-burgundy">
                    Guía del contribuyente
                  </p>
                  <h3 className="font-serif text-[44px] leading-[1.05] font-semibold text-navy mt-3 tracking-[-0.014em]">
                    Las primeras
                    <br />
                    <span className="italic font-medium">72 horas.</span>
                  </h3>
                  <p className="font-serif italic text-[15px] text-foreground/75 mt-6 leading-[1.45]">
                    Qué hacer si recibes una visita del SAT, un embargo en
                    aduana o un crédito fiscal.
                  </p>
                </div>

                <div className="flex items-end justify-between">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-muted">
                    12 páginas · Tijuana
                  </p>
                  <span className="font-serif italic text-[12px] text-olive">
                    § Folio 1
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: editorial body + form */}
          <div className="col-span-12 lg:col-span-7 lg:pl-8 lg:pt-6">
            <h2 className="font-serif text-[40px] leading-[1.1] font-semibold text-navy tracking-[-0.012em]">
              Las primeras{" "}
              <span className="italic text-burgundy font-medium">
                72 horas.
              </span>
            </h2>
            <p className="font-serif italic text-[18px] text-foreground/75 mt-4 max-w-[520px]">
              Qué hacer si recibes una visita del SAT, un embargo en aduana o un
              crédito fiscal.
            </p>

            <p className="text-[15.5px] leading-[1.7] text-foreground/85 mt-7 max-w-[540px]">
              Una guía práctica de doce páginas. Sin promesas vacías. Te
              explicamos cómo identificar qué te llegó, qué plazos legales
              corren desde la notificación, qué firmar y qué no firmar, y
              cuándo es urgente contactar a un abogado.
            </p>

            <ul className="mt-8 space-y-3 max-w-[540px]">
              {[
                "Cómo identificar el tipo de procedimiento desde la primera notificación",
                "Qué documentos preparar de inmediato",
                "Plazos legales clave (recurso, juicio, amparo)",
                "Errores comunes que cierran tus vías de defensa",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-4 text-[14.5px] text-foreground/80 leading-[1.55]"
                >
                  <span className="font-serif italic text-[12px] text-olive shrink-0 w-4">
                    §
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <form className="mt-12 max-w-[520px]">
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
