import Image from "next/image";

/**
 * Portada editorial de la guía "Las primeras 72 horas": foto dark de la frontera
 * a primera luz con el título superpuesto, en el lenguaje claroscuro del sitio.
 * Se renderiza dentro de un contenedor `relative aspect-[3/4]`.
 */
export function GuiaCover() {
  return (
    <>
      <Image
        src="/editorial/portada-72-horas-dark.png"
        alt="Frontera de Tijuana a primera luz, portada de la guía Las primeras 72 horas"
        fill
        sizes="(min-width: 1024px) 48vw, 100vw"
        className="object-cover"
        priority
      />
      {/* Degradados de legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/5" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/45 via-transparent to-transparent" aria-hidden="true" />
      {/* Filete sutil de portada */}
      <div className="absolute inset-0 border border-cream/12" aria-hidden="true" />

      {/* Contenido superpuesto */}
      <div className="absolute inset-0 flex flex-col justify-between p-7 md:p-8">
        <div className="flex items-center gap-3">
          <span className="font-serif italic text-[13px] text-[#C9B85A]">ADAF</span>
          <span className="h-px w-8 bg-cream/30" />
          <span className="text-[9.5px] uppercase tracking-[0.22em] font-medium text-cream/70">
            Guía del contribuyente
          </span>
        </div>

        <div>
          <h3 className="font-serif text-cream text-[32px] md:text-[38px] leading-[1.04] tracking-[-0.02em]">
            Las primeras
            <br />
            72 horas.
          </h3>
          <p className="font-serif italic text-[14px] text-cream/75 mt-3">
            Guía práctica para el contribuyente.
          </p>
          <div className="mt-5 flex items-center gap-2.5 text-[10px] uppercase tracking-[0.18em] text-cream/60">
            <span>PDF</span>
            <span className="h-1 w-1 rounded-full bg-olive" />
            <span>12 páginas</span>
          </div>
        </div>
      </div>
    </>
  );
}
