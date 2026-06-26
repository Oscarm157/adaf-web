import Link from "next/link";
import { CALENDLY_URL } from "@/lib/calendly";

export function CTAFinal() {
  return (
    <section aria-label="Contacto" className="bg-ink text-cream relative overflow-hidden">
      <span className="absolute top-8 left-8 w-3 h-3 border-t border-l border-[#C9B85A]/60" />
      <span className="absolute top-8 right-8 w-3 h-3 border-t border-r border-[#C9B85A]/60" />
      <span className="absolute bottom-8 left-8 w-3 h-3 border-b border-l border-[#C9B85A]/60" />
      <span className="absolute bottom-8 right-8 w-3 h-3 border-b border-r border-[#C9B85A]/60" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 py-28 md:py-36">
        <div className="flex items-baseline gap-4 mb-12">
          <span aria-hidden="true" className="font-serif italic text-[14px] text-[#C9B85A]">X</span>
          <span className="w-[80px] h-px bg-cream/25" />
          <span className="text-[10px] uppercase tracking-[0.24em] font-medium text-cream/60">Contacto</span>
        </div>

        <div className="grid grid-cols-12 gap-y-12 gap-x-6 md:gap-x-12 items-end">
          <div className="col-span-12 lg:col-span-7">
            <h2 className="display-lg text-cream">Cuéntanos tu caso.</h2>
            <p className="text-[17px] leading-[1.6] text-cream/80 mt-8 max-w-[520px]">
              Te respondemos dentro de las próximas horas con una valoración inicial sin
              costo y los plazos legales que están corriendo en tu asunto.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-10">
              {CALENDLY_URL && (
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-burgundy text-white text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] hover:bg-burgundy-dark transition-colors duration-200"
                >
                  Agendar 20 minutos
                </a>
              )}
              <a
                href="https://wa.me/526642521509"
                target="_blank"
                rel="noopener noreferrer"
                className={
                  CALENDLY_URL
                    ? "inline-flex items-center justify-center bg-transparent text-cream text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] border border-cream/40 hover:bg-cream hover:text-ink transition-colors duration-200"
                    : "inline-flex items-center justify-center bg-burgundy text-white text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] hover:bg-burgundy-dark transition-colors duration-200"
                }
              >
                Hablar por WhatsApp
              </a>
              {!CALENDLY_URL && (
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center bg-transparent text-cream text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] border border-cream/40 hover:bg-cream hover:text-ink transition-colors duration-200"
                >
                  Enviar mensaje
                </Link>
              )}
            </div>
          </div>

          {/* Datos de contacto, ledger */}
          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <dl className="divide-y divide-cream/15 border-y border-cream/15">
              {[
                { k: "Teléfono", v: "664 252 1509", href: "tel:+526642521509" },
                { k: "Correo", v: "juridicoadaf@gmail.com", href: "mailto:juridicoadaf@gmail.com" },
                { k: "Horario", v: "Lun a vie · 09:00 a 17:00" },
                { k: "Tijuana", v: "Blvd. Bellas Artes 19213, Local 15" },
              ].map((row) => (
                <div key={row.k} className="grid grid-cols-3 gap-4 py-4 items-baseline">
                  <dt className="text-[10px] uppercase tracking-[0.2em] font-medium text-cream/55 col-span-1">{row.k}</dt>
                  <dd className="text-[14px] text-cream col-span-2 leading-[1.45]">
                    {row.href ? (
                      <a href={row.href} className="hover:text-[#C9B85A] transition-colors duration-200">{row.v}</a>
                    ) : (
                      row.v
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
