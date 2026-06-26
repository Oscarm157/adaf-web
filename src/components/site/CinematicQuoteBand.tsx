"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useLayoutEffectIsomorphic } from "@/components/motion/useLayoutEffectIsomorphic";
import { gsap, registerGsap } from "@/lib/gsap";

const ease = [0.16, 1, 0.3, 1] as const;
const lines = ["Las multas de comercio", "exterior pueden alcanzar el", "130% del valor en aduana."];

export function CinematicQuoteBand() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(contentRef, { once: true, margin: "-120px" });
  const reduce = useReducedMotion();
  const show = inView || reduce;

  useLayoutEffectIsomorphic(() => {
    registerGsap();
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        imageRef.current,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    });
    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Riesgo en comercio exterior"
      className="relative bg-ink text-cream overflow-hidden min-h-[80svh] flex items-end"
    >
      <div ref={imageRef} className="absolute inset-x-0 -top-[10%] h-[120%] will-change-transform">
        <Image
          src="/editorial/editorial-vii-embargo-contenedor.png"
          alt="Contenedor retenido en patio aduanal"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      {/* Degradados de legibilidad: la foto tiene cielo claro arriba */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/72 to-ink/15" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/30 to-transparent" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 pb-20 pt-40">
        <div ref={contentRef} className="max-w-[760px]">
          <div className="flex items-baseline gap-4 mb-9">
            <span aria-hidden="true" className="font-serif italic text-[14px] text-[#C9B85A]">V</span>
            <span className="w-[60px] h-px bg-cream/30" />
            <span className="text-[10px] uppercase tracking-[0.24em] font-medium text-cream/65">
              Comercio exterior
            </span>
          </div>

          <blockquote className="display-lg text-cream">
            {lines.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduce ? false : { y: "110%" }}
                  animate={show ? { y: "0%" } : undefined}
                  transition={{ duration: 0.8, ease, delay: i * 0.1 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </blockquote>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={show ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.7, ease, delay: 0.45 }}
            className="text-[15.5px] leading-[1.7] text-cream/80 mt-9 max-w-[520px]"
          >
            Una clasificación arancelaria o un valor en aduana mal determinados bastan
            para detonarlas. Respondemos el PAMA, recuperamos la mercancía con garantía
            y peleamos el fondo ante el TFJA.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
