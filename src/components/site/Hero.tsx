import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CountUp } from "@/components/motion/CountUp";

export function Hero() {
  return (
    <section className="relative bg-background pt-16 pb-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-12">
        {/* Chapter intro */}
        <Reveal>
          <div className="flex items-baseline gap-4 mb-12">
            <span className="font-serif italic text-[14px] text-olive">I</span>
            <span className="w-[80px] h-[1px] bg-rule" />
            <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-muted">
              Despacho jurídico · Frontera norte
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-12 gap-x-12 gap-y-16 items-start">
          <Stagger className="col-span-12 lg:col-span-7 relative">
            <StaggerItem>
              <h1 className="font-serif text-[60px] leading-[1.04] font-semibold text-navy tracking-[-0.018em]">
                Defensa fiscal, aduanera y administrativa en la frontera norte
                de México.
              </h1>
            </StaggerItem>

            <StaggerItem>
              <div className="mt-7 max-w-[560px] flex gap-5">
                <span className="block w-[2px] h-auto bg-olive shrink-0" />
                <p className="text-[18px] leading-[1.6] text-foreground/85">
                  Despacho jurídico en Tijuana con veinticinco años
                  representando a empresarios, importadores y transportistas
                  ante SAT, ANAM, IMSS, COFEPRIS, COEPRIS, SICT y los
                  tribunales federales.
                </p>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="flex flex-wrap items-center gap-5 mt-10">
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center bg-burgundy text-white text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] hover:bg-burgundy-dark transition-colors duration-200"
                >
                  Agenda tu valoración
                </Link>
                <a
                  href="https://wa.me/526646475018"
                  className="inline-flex items-center justify-center bg-transparent text-navy text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] border border-navy/80 hover:bg-navy hover:text-background transition-colors duration-200"
                >
                  Hablar por WhatsApp
                </a>
                <Link
                  href="/servicios"
                  className="inline-flex items-center gap-1.5 text-[13px] font-medium tracking-[0.06em] uppercase text-navy hover:text-burgundy transition-colors duration-200 group ml-1"
                >
                  Conocer servicios
                  <ArrowRight
                    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                    strokeWidth={1.5}
                  />
                </Link>
              </div>
            </StaggerItem>
          </Stagger>

          {/* Right: editorial gazette block */}
          <Reveal delay={0.2} y={20} className="col-span-12 lg:col-span-5">
          <aside className="lg:pl-10 lg:pt-2 relative">
            <div className="border-y border-rule py-9 relative">
              <span className="absolute -top-[3px] -left-[3px] w-[6px] h-[6px] bg-olive" />
              <span className="absolute -top-[3px] -right-[3px] w-[6px] h-[6px] bg-olive" />
              <span className="absolute -bottom-[3px] -left-[3px] w-[6px] h-[6px] bg-olive" />
              <span className="absolute -bottom-[3px] -right-[3px] w-[6px] h-[6px] bg-olive" />

              <p className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium text-center">
                ADAF · Tijuana
              </p>

              <div className="font-serif text-[148px] leading-[0.86] font-semibold text-navy tracking-[-0.03em] text-center mt-4 tabular-nums">
                <CountUp to={25} duration={1.4} />
              </div>

              <p className="font-serif italic text-[15px] text-muted text-center mt-3">
                años de práctica continua en la
                <br />
                frontera norte de México
              </p>
            </div>

            <dl className="mt-8 divide-y divide-rule">
              {[
                { k: "Cobertura", v: "Baja California y federal" },
                {
                  k: "Atención",
                  v: "Por abogado responsable, de inicio a fin",
                },
                {
                  k: "Materias",
                  v: "Fiscal · Aduanera · Administrativa · Penal-fiscal",
                },
              ].map((row) => (
                <div
                  key={row.k}
                  className="grid grid-cols-3 gap-4 py-3.5 items-baseline"
                >
                  <dt className="text-[10px] uppercase tracking-[0.22em] font-medium text-muted col-span-1">
                    {row.k}
                  </dt>
                  <dd className="text-[14px] text-foreground col-span-2 leading-[1.45]">
                    {row.v}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
