import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-background pt-20 pb-32 overflow-hidden">
      {/* folio marker top-right */}
      <div className="absolute top-7 right-12 hidden md:flex items-center gap-2 text-muted">
        <span className="font-serif italic text-[12px]">Edición 2026</span>
        <span className="w-[1px] h-3 bg-rule" />
        <span className="text-[10px] uppercase tracking-[0.22em]">Folio 001</span>
      </div>

      <div className="max-w-[1280px] mx-auto px-12">
        {/* Chapter intro */}
        <div className="flex items-baseline gap-4 mb-16">
          <span className="font-serif italic text-[14px] text-olive">§ I</span>
          <span className="w-[80px] h-[1px] bg-rule" />
          <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-muted">
            Despacho jurídico · Frontera norte
          </span>
        </div>

        <div className="grid grid-cols-12 gap-x-12 gap-y-20 items-start">
          <div className="col-span-12 lg:col-span-7 relative">
            {/* marginalia */}
            <span className="hidden xl:block absolute -left-12 top-3 font-serif italic text-[12px] text-olive">
              I.i
            </span>

            <h1 className="font-serif text-[68px] leading-[1.04] font-semibold text-navy tracking-[-0.018em]">
              Defensa fiscal,
              <br />
              aduanera y administrativa
              <br />
              <span className="italic text-burgundy font-medium">
                con criterio técnico.
              </span>
            </h1>

            <div className="mt-9 max-w-[540px] flex gap-5">
              <span className="block w-[2px] h-auto bg-olive shrink-0" />
              <p className="text-[18px] leading-[1.6] text-foreground/85 font-serif italic">
                Veinticinco años representando a empresarios, importadores y
                transportistas ante SAT, Aduana, IMSS, COEPRIS, SCT y tribunales
                federales en la frontera norte.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-5 mt-12">
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
          </div>

          {/* Right: editorial gazette block */}
          <aside className="col-span-12 lg:col-span-5 lg:pl-10 lg:pt-3 relative">
            <div className="border-y border-rule py-10 relative">
              {/* corner ornaments */}
              <span className="absolute -top-[3px] -left-[3px] w-[6px] h-[6px] bg-olive" />
              <span className="absolute -top-[3px] -right-[3px] w-[6px] h-[6px] bg-olive" />
              <span className="absolute -bottom-[3px] -left-[3px] w-[6px] h-[6px] bg-olive" />
              <span className="absolute -bottom-[3px] -right-[3px] w-[6px] h-[6px] bg-olive" />

              <p className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium text-center">
                Establecido en MMI · Tijuana
              </p>

              <div className="font-serif text-[160px] leading-[0.86] font-semibold text-navy tracking-[-0.03em] text-center mt-5">
                25
              </div>

              <p className="font-serif italic text-[15px] text-muted text-center mt-4">
                años de práctica continua en la
                <br />
                frontera norte de México
              </p>
            </div>

            <dl className="mt-10 divide-y divide-rule">
              {[
                {
                  k: "Cobertura",
                  v: "Baja California y federal",
                },
                {
                  k: "Atención",
                  v: "Por abogado responsable, de inicio a fin",
                },
                {
                  k: "Especialización",
                  v: "Fiscal · Aduanera · Administrativa",
                },
              ].map((row) => (
                <div
                  key={row.k}
                  className="grid grid-cols-3 gap-4 py-4 items-baseline"
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
        </div>
      </div>
    </section>
  );
}
