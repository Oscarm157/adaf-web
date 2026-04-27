import Link from "next/link";

export function CTAFinal() {
  return (
    <section className="bg-navy text-background relative overflow-hidden">
      {/* corner ornaments */}
      <span className="absolute top-8 left-8 w-3 h-3 border-t border-l border-olive/60" />
      <span className="absolute top-8 right-8 w-3 h-3 border-t border-r border-olive/60" />
      <span className="absolute bottom-8 left-8 w-3 h-3 border-b border-l border-olive/60" />
      <span className="absolute bottom-8 right-8 w-3 h-3 border-b border-r border-olive/60" />

      <div className="max-w-[1280px] mx-auto px-12 py-32">
        <div className="flex items-baseline gap-4 mb-12 justify-center">
          <span className="font-serif italic text-[14px] text-olive">§ VIII</span>
          <span className="w-[80px] h-[1px] bg-background/30" />
          <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-background/60">
            Atención inmediata
          </span>
        </div>

        <div className="max-w-[820px] mx-auto text-center">
          <h2 className="font-serif text-[48px] leading-[1.1] font-semibold tracking-[-0.012em]">
            ¿Tienes un asunto que requiere
            <br />
            <span className="italic text-olive font-medium">
              atención inmediata?
            </span>
          </h2>
          <p className="font-serif italic text-[19px] text-background/75 mt-7 leading-[1.5] max-w-[640px] mx-auto">
            Cuéntanos brevemente tu caso. Te respondemos en horario hábil con
            una valoración inicial sin costo.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
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
            <Link
              href="/contacto#agendar"
              className="inline-flex items-center justify-center bg-transparent text-background text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] border border-background/40 hover:bg-background hover:text-navy transition-colors duration-200"
            >
              Agendar 20 min
            </Link>
          </div>

          <p className="font-serif italic text-[13px] text-background/55 mt-12">
            Lunes a viernes · 09:00 — 17:00 · Tijuana, BC
          </p>
        </div>
      </div>
    </section>
  );
}
