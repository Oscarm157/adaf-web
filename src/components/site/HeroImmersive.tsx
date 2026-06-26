"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useLayoutEffectIsomorphic } from "@/components/motion/useLayoutEffectIsomorphic";
import { gsap, registerGsap } from "@/lib/gsap";
import { CALENDLY_URL } from "@/lib/calendly";

const lines = [
  "Defensa fiscal,",
  "aduanera y administrativa",
  "en la frontera norte.",
];

const ease = [0.16, 1, 0.3, 1] as const;

export function HeroImmersive() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();

  useLayoutEffectIsomorphic(() => {
    registerGsap();
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.to(imageRef.current, {
        yPercent: 14,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Apertura"
      className="relative bg-ink text-cream overflow-hidden min-h-[92svh] flex flex-col"
    >
      {/* Capa fotográfica con parallax */}
      <div
        ref={imageRef}
        className="absolute inset-x-0 -top-[8%] h-[116%] will-change-transform"
      >
        <Image
          src="/editorial/hero-frontera-amplia.png"
          alt="Vista lejana de la franja fronteriza al atardecer, con filas de tráileres y aduanas al fondo"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 scrim-dark" aria-hidden="true" />

      {/* Contenido */}
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="max-w-[1280px] w-full mx-auto px-6 md:px-10 lg:px-12 pt-32 md:pt-40 flex-1 flex flex-col justify-end pb-14 md:pb-20">
          <div className="flex items-baseline gap-4 mb-8 md:mb-10">
            <span aria-hidden="true" className="font-serif italic text-[14px] text-[#C9B85A]">
              I
            </span>
            <span className="w-[80px] h-px bg-cream/30" />
            <span className="text-[10px] uppercase tracking-[0.24em] font-medium text-cream/70">
              Despacho jurídico · Tijuana · 25 años
            </span>
          </div>

          <h1 className="display-xl text-cream max-w-[16ch]">
            {lines.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduce ? false : { y: "110%" }}
                  animate={reduce ? undefined : { y: "0%" }}
                  transition={{ duration: 0.9, ease, delay: 0.15 + i * 0.12 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.7 }}
            className="mt-8 md:mt-10 flex flex-col gap-9"
          >
            <p className="text-[17px] md:text-[19px] leading-[1.6] text-cream/85 max-w-[560px]">
              Representamos a empresarios, importadores y transportistas ante el
              SAT, la ANAM, el IMSS, COFEPRIS, SICT y los tribunales federales.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a
                href={CALENDLY_URL || "/contacto"}
                target={CALENDLY_URL ? "_blank" : undefined}
                rel={CALENDLY_URL ? "noopener noreferrer" : undefined}
                className="inline-flex items-center justify-center bg-burgundy text-white text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] hover:bg-burgundy-dark transition-colors duration-200"
              >
                Agenda tu valoración
              </a>
              <a
                href="https://wa.me/526646475018"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-transparent text-cream text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] border border-cream/40 hover:bg-cream hover:text-ink transition-colors duration-200"
              >
                Hablar por WhatsApp
              </a>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-1.5 text-[13px] font-medium tracking-[0.06em] uppercase text-cream/90 hover:text-[#C9B85A] transition-colors duration-200 group"
              >
                Conocer servicios
                <ArrowRight
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                  strokeWidth={1.5}
                />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Strip institucional inferior */}
        <div className="relative z-10 border-t border-cream/15">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 py-5 flex flex-wrap items-center gap-x-8 gap-y-2">
            {[
              "Fiscal",
              "Aduanera",
              "Administrativa",
              "Penal-fiscal",
              "Cobertura BC y federal",
            ].map((item) => (
              <span
                key={item}
                className="text-[11px] uppercase tracking-[0.18em] text-cream/60"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
