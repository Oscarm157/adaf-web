import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export function TwoSegments() {
  return (
    <section aria-label="Tu situación" className="bg-background pt-24 md:pt-28 pb-24 md:pb-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-4">
            <span aria-hidden="true" className="font-serif italic text-[14px] text-olive">—</span>
            <span className="w-[80px] h-px bg-rule" />
            <span className="text-[10px] uppercase tracking-[0.24em] font-medium text-muted">
              Empieza por tu situación
            </span>
          </div>
          <h2 className="display-md text-navy max-w-[680px]">
            ¿Qué tienes enfrente?
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-rule mt-12 border border-rule">
          {/* Segmento 1 — urgencia */}
          <Reveal className="bg-background">
            <div className="group h-full flex flex-col p-8 md:p-10 lg:p-12">
              <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-burgundy">
                Urgencia
              </span>
              <h3 className="font-serif text-[24px] md:text-[30px] leading-[1.15] font-semibold text-navy tracking-[-0.012em] mt-5">
                Recibiste un embargo, una retención o una multa.
              </h3>
              <p className="text-[15px] leading-[1.7] text-foreground/80 mt-5 max-w-[440px]">
                Aseguramiento de mercancía, embargo precautorio en aduana o una multa de
                comercio exterior. El plazo para defenderte ya está corriendo. Para dueños
                de negocio, importadores y transportistas.
              </p>
              <ul className="mt-6 space-y-2 text-[13.5px] text-muted">
                {["Embargo o PAMA en aduana", "Retención de mercancía o unidades", "Multas de comercio exterior"].map((it) => (
                  <li key={it} className="flex items-baseline gap-3">
                    <span className="bg-burgundy shrink-0 w-[5px] h-[5px] mt-[7px]" />
                    {it}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-9 flex flex-wrap items-center gap-5">
                <a
                  href="https://wa.me/526642521509"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-burgundy text-white text-[12px] font-medium tracking-[0.06em] uppercase px-6 h-11 rounded-[2px] hover:bg-burgundy-dark transition-colors duration-200"
                >
                  Hablar ahora por WhatsApp
                </a>
                <Link
                  href="/servicios/defensa-aduanera"
                  className="inline-flex items-center gap-1.5 text-[12px] font-medium tracking-[0.06em] uppercase text-navy hover:text-burgundy transition-colors duration-200 group/l"
                >
                  Defensa aduanera
                  <ArrowRight className="w-3.5 h-3.5 group-hover/l:translate-x-0.5 transition-transform" strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Segmento 2 — estratégico */}
          <Reveal delay={0.1} className="bg-background-warm">
            <div className="group h-full flex flex-col p-8 md:p-10 lg:p-12">
              <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-blue">
                Estratégico
              </span>
              <h3 className="font-serif text-[24px] md:text-[30px] leading-[1.15] font-semibold text-navy tracking-[-0.012em] mt-5">
                Te abrieron una auditoría o un crédito fiscal.
              </h3>
              <p className="text-[15px] leading-[1.7] text-foreground/80 mt-5 max-w-[440px]">
                Visita domiciliaria, revisión de gabinete o un crédito fiscal del SAT que hay
                que pelear con tiempo y estrategia. Para empresarios, directores, contadores
                y responsables financieros.
              </p>
              <ul className="mt-6 space-y-2 text-[13.5px] text-muted">
                {["Auditorías y visitas domiciliarias", "Créditos fiscales y sellos digitales", "Recurso, juicio de nulidad y amparo"].map((it) => (
                  <li key={it} className="flex items-baseline gap-3">
                    <span className="bg-blue shrink-0 w-[5px] h-[5px] mt-[7px]" />
                    {it}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-9 flex flex-wrap items-center gap-5">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center bg-navy text-background text-[12px] font-medium tracking-[0.06em] uppercase px-6 h-11 rounded-[2px] hover:bg-navy/90 transition-colors duration-200"
                >
                  Agenda una valoración
                </Link>
                <Link
                  href="/servicios/defensa-fiscal-sat"
                  className="inline-flex items-center gap-1.5 text-[12px] font-medium tracking-[0.06em] uppercase text-navy hover:text-burgundy transition-colors duration-200 group/l"
                >
                  Defensa fiscal SAT
                  <ArrowRight className="w-3.5 h-3.5 group-hover/l:translate-x-0.5 transition-transform" strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
