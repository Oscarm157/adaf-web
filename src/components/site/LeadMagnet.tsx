import Image from "next/image";
import { ChapterMark } from "./ChapterMark";

export function LeadMagnet() {
  return (
    <section aria-label="Recurso descargable" className="bg-background pt-24 pb-24">
      <div className="max-w-[1280px] mx-auto px-12">
        <ChapterMark numeral="VI" label="Recurso descargable" />

        <div className="grid grid-cols-12 gap-12 mt-12 items-start">
          {/* Left: PDF cover image */}
          <div className="col-span-12 lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden shadow-[0_24px_60px_-30px_rgba(15,42,71,0.35)]">
              <Image
                src="/portada-72-horas.png"
                alt="Portada — Las primeras 72 horas, guía del contribuyente ADAF"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                priority
              />
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
              <p className="text-[13px] leading-[1.55] text-muted mt-5 max-w-[420px]">
                Recibirás la guía en tu correo en los próximos minutos.
              </p>
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted mt-3">
                Sujeto al aviso de privacidad
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
