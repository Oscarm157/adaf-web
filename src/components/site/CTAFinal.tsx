import Link from "next/link";

export function CTAFinal() {
  return (
    <section aria-label="Contacto" className="bg-navy text-background relative overflow-hidden">
      <span className="absolute top-8 left-8 w-3 h-3 border-t border-l border-olive/60" />
      <span className="absolute top-8 right-8 w-3 h-3 border-t border-r border-olive/60" />
      <span className="absolute bottom-8 left-8 w-3 h-3 border-b border-l border-olive/60" />
      <span className="absolute bottom-8 right-8 w-3 h-3 border-b border-r border-olive/60" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 py-24">
        <div className="flex items-baseline gap-4 mb-10 justify-center">
          <span aria-hidden="true" className="font-serif italic text-[14px] text-olive">VIII</span>
          <span className="w-[80px] h-[1px] bg-background/30" />
          <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-background/60">
            Contacto
          </span>
        </div>

        <div className="max-w-[820px] mx-auto text-center">
          <h2 className="font-serif text-[28px] md:text-[34px] lg:text-[40px] leading-[1.2] md:leading-[1.12] font-semibold tracking-[-0.012em]">
            Cuéntanos tu caso.
          </h2>
          <p className="text-[17px] text-background/80 mt-5 leading-[1.55] max-w-[600px] mx-auto">
            Te respondemos en horario hábil con una valoración inicial sin
            costo y los plazos legales que están corriendo en tu asunto.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <a
              href="https://wa.me/526646475018"
              className="inline-flex items-center justify-center bg-burgundy text-white text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] hover:bg-burgundy-dark transition-colors duration-200"
            >
              Hablar por WhatsApp
            </a>
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center bg-transparent text-background text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] border border-background/40 hover:bg-background hover:text-navy transition-colors duration-200"
            >
              Enviar mensaje
            </Link>
            <a href="https://wa.me/526646475018"
              className="inline-flex items-center justify-center bg-transparent text-background text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] border border-background/40 hover:bg-background hover:text-navy transition-colors duration-200"
            >
              Agendar 20 min
            </a>
          </div>

          <p className="text-[11px] uppercase tracking-[0.18em] text-background/55 mt-10">
            Lunes a viernes · 09:00 — 17:00 · Tijuana, BC
          </p>
        </div>
      </div>
    </section>
  );
}
