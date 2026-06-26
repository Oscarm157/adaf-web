"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ChapterMark } from "./ChapterMark";
import { useLayoutEffectIsomorphic } from "@/components/motion/useLayoutEffectIsomorphic";
import { gsap, registerGsap } from "@/lib/gsap";

const areas = [
  { n: "I", slug: "defensa-aduanera", label: "Defensa aduanera", pregunta: "Embargo precautorio y PAMA en aduana", body: "Procedimiento Administrativo en Materia Aduanera, devolución de mercancía y multas de comercio exterior." },
  { n: "II", slug: "defensa-fiscal-sat", label: "Defensa fiscal SAT", pregunta: "Créditos fiscales y auditorías del SAT", body: "Visitas domiciliarias, revisiones de gabinete, créditos fiscales y restricción de sellos digitales." },
  { n: "III", slug: "defensa-imss-infonavit", label: "Defensa IMSS / INFONAVIT", pregunta: "Cédulas de liquidación y capitales constitutivos", body: "Multas patronales, diferencias de cuotas obrero-patronales y procedimientos de inconformidad." },
  { n: "IV", slug: "defensa-sanitaria", label: "Defensa sanitaria · COFEPRIS / COEPRIS", pregunta: "Sanciones sanitarias y aseguramiento de producto", body: "Multas, suspensiones de actividad y aseguramiento ante COFEPRIS (federal) y COEPRIS (estatal)." },
  { n: "V", slug: "defensa-sict-transporte", label: "Defensa SICT", pregunta: "Multas en autotransporte federal", body: "Boletas de infracción, retención de unidades y cancelación de placas o licencias federales." },
  { n: "VI", slug: "amparos-fiscales", label: "Amparos fiscales", pregunta: "Amparo en materia fiscal y administrativa", body: "Amparo indirecto y directo contra leyes y resoluciones inconstitucionales." },
  { n: "VII", slug: "multas-comercio-exterior", label: "Comercio exterior", pregunta: "Multas por clasificación, valor y NOMs", body: "Sanciones por clasificación arancelaria, valor en aduana y regulaciones no arancelarias." },
  { n: "VIII", slug: "recurso-revocacion-juicio-nulidad", label: "Recurso · Juicio de nulidad", pregunta: "Impugnación de resoluciones administrativas", body: "Vía administrativa y jurisdiccional ante el Tribunal Federal de Justicia Administrativa." },
  { n: "IX", slug: "defensa-penal-fiscal", label: "Defensa penal-fiscal", pregunta: "Investigación por delitos fiscales", body: "Defraudación fiscal, contrabando equiparado y operaciones inexistentes (artículo 69-B)." },
  { n: "X", slug: "asesoria-preventiva-compliance", label: "Asesoría preventiva", pregunta: "Compliance fiscal y aduanero", body: "Diagnóstico de riesgos, regularización espontánea y programas de cumplimiento." },
];

export function AreasFilmstrip() {
  const [enhanced, setEnhanced] = useState(false);
  const pinRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffectIsomorphic(() => {
    registerGsap();
    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    const noReduce = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
    if (!desktop || !noReduce) return;
    setEnhanced(true);
  }, []);

  useLayoutEffectIsomorphic(() => {
    if (!enhanced) return;
    const track = trackRef.current;
    const pin = pinRef.current;
    if (!track || !pin) return;

    const ctx = gsap.context(() => {
      const getDistance = () => track.scrollWidth - window.innerWidth;
      gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: pin,
          start: "top top",
          end: () => "+=" + getDistance(),
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, pin);

    return () => ctx.revert();
  }, [enhanced]);

  return (
    <section aria-label="Áreas de práctica" id="areas" className="bg-background-warm">
      {/* Versión horizontal pineada (solo desktop con motion) */}
      {enhanced ? (
        <div ref={pinRef} className="h-screen overflow-hidden flex items-center">
          <div ref={trackRef} className="flex items-stretch gap-6 pl-6 md:pl-10 lg:pl-12 pt-20 will-change-transform">
            {/* Panel intro */}
            <div className="shrink-0 w-[clamp(320px,32vw,460px)] flex flex-col justify-center pr-10">
              <ChapterMark numeral="II" label="Áreas de práctica" />
              <h2 className="display-md text-navy mt-8">Diez áreas de defensa especializada.</h2>
              <p className="text-[15px] leading-[1.65] text-muted mt-6 max-w-[380px]">
                Organizamos la práctica por tipo de procedimiento y autoridad competente.
                Desliza para recorrerlas.
              </p>
              <span className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-burgundy">
                Desliza
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </span>
            </div>

            {areas.map((a) => (
              <Link
                key={a.slug}
                href={`/servicios/${a.slug}`}
                className="group shrink-0 w-[clamp(340px,38vw,500px)] flex flex-col justify-between bg-background border border-rule hover:border-navy/30 transition-colors duration-300 p-9"
              >
                <div>
                  <div className="flex items-baseline justify-between">
                    <span aria-hidden="true" className="font-serif text-[88px] leading-none font-semibold text-navy/10 tracking-[-0.03em] group-hover:text-burgundy/15 transition-colors duration-500">
                      {a.n}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.16em] text-burgundy font-medium text-right max-w-[160px]">
                      {a.label}
                    </span>
                  </div>
                  <h3 className="font-serif text-[26px] leading-[1.18] font-medium text-foreground tracking-[-0.01em] mt-8 group-hover:text-burgundy transition-colors duration-300">
                    {a.pregunta}
                  </h3>
                  <p className="text-[14.5px] leading-[1.6] text-muted mt-4">{a.body}</p>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] font-medium text-navy mt-10 group-hover:gap-3 transition-all duration-300">
                  Ver materia
                  <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                </span>
              </Link>
            ))}

            {/* Panel cierre */}
            <Link
              href="/servicios"
              className="group shrink-0 w-[clamp(280px,24vw,360px)] flex flex-col justify-center bg-navy text-cream p-9 mr-6 md:mr-10 lg:mr-12"
            >
              <p className="display-md text-cream">Todas las materias.</p>
              <span className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] font-medium text-[#C9B85A] mt-6 group-hover:gap-3 transition-all duration-300">
                Ir al índice completo
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </span>
            </Link>
          </div>
        </div>
      ) : (
        /* Fallback vertical accesible (mobile / reduced-motion / SSR) */
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 pt-24 pb-24">
          <ChapterMark numeral="II" label="Áreas de práctica" />
          <div className="grid grid-cols-12 gap-y-10 gap-x-6 md:gap-12 mt-10 mb-14">
            <div className="col-span-12 lg:col-span-7">
              <h2 className="font-serif text-[28px] md:text-[36px] lg:text-[42px] leading-[1.1] font-semibold text-navy tracking-[-0.014em]">
                Diez áreas de defensa especializada.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pt-2">
              <p className="text-[15px] leading-[1.65] text-muted max-w-[420px]">
                Organizamos la práctica por tipo de procedimiento y autoridad competente.
                Selecciona la materia que corresponde a tu asunto.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-foreground/15">
            {areas.map((area, i) => (
              <Link
                key={area.slug}
                href={`/servicios/${area.slug}`}
                className={`group block transition-colors duration-300 hover:bg-background border-b border-rule ${i % 2 === 0 ? "md:border-r border-rule" : ""}`}
              >
                <div className="px-2 md:px-7 py-7 group-hover:px-4 md:group-hover:px-8 transition-[padding] duration-300">
                  <div className="flex items-baseline gap-4 mb-3.5">
                    <span aria-hidden="true" className="font-serif italic text-[15px] font-medium text-olive tracking-wide w-7 shrink-0">
                      {area.n}
                    </span>
                    <span className="text-[13px] uppercase tracking-[0.14em] text-navy font-medium">{area.label}</span>
                  </div>
                  <h3 className="font-serif text-[19px] md:text-[22px] leading-[1.25] font-medium text-foreground tracking-[-0.005em] group-hover:text-burgundy transition-colors duration-300 ml-11">
                    {area.pregunta}
                  </h3>
                  <p className="text-[14px] leading-[1.55] text-muted mt-2.5 ml-11 max-w-[420px]">{area.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
