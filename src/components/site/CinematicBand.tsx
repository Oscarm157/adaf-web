"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useLayoutEffectIsomorphic } from "@/components/motion/useLayoutEffectIsomorphic";
import { gsap, registerGsap } from "@/lib/gsap";

const ease = [0.16, 1, 0.3, 1] as const;

type Props = {
  image: string;
  alt: string;
  /** Statement grande, una entrada por línea (reveal line-by-line). */
  lines: string[];
  numeral?: string;
  eyebrow?: string;
  /** Párrafo de apoyo bajo el statement. */
  body?: string;
  /** Lado del contenido. "left" por defecto. */
  align?: "left" | "right";
  /** Etiqueta accesible de la sección. Si falta, usa el eyebrow. */
  ariaLabel?: string;
  minH?: string;
};

/**
 * Banda dark cinematográfica reutilizable: foto a sangre con parallax,
 * degradados de legibilidad y statement con reveal. Generaliza el patrón del
 * CinematicQuoteBand del home para usarse en páginas interiores.
 */
export function CinematicBand({
  image,
  alt,
  lines,
  numeral,
  eyebrow,
  body,
  align = "left",
  ariaLabel,
  minH = "min-h-[72svh]",
}: Props) {
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

  const isRight = align === "right";

  return (
    <section
      ref={sectionRef}
      aria-label={ariaLabel ?? eyebrow ?? undefined}
      className={`relative bg-ink text-cream overflow-hidden flex items-end ${minH}`}
    >
      <div ref={imageRef} className="absolute inset-x-0 -top-[10%] h-[120%] will-change-transform">
        <Image src={image} alt={alt} fill sizes="100vw" className="object-cover" />
      </div>
      {/* Degradados de legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/72 to-ink/15" aria-hidden="true" />
      <div
        className={`absolute inset-0 ${
          isRight
            ? "bg-gradient-to-l from-ink/85 via-ink/30 to-transparent"
            : "bg-gradient-to-r from-ink/85 via-ink/30 to-transparent"
        }`}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 pb-20 pt-40">
        <div ref={contentRef} className={`max-w-[760px] ${isRight ? "ml-auto text-right" : ""}`}>
          {(numeral || eyebrow) && (
            <div
              className={`flex items-baseline gap-4 mb-9 ${isRight ? "justify-end" : ""}`}
            >
              {numeral && (
                <span aria-hidden="true" className="font-serif italic text-[14px] text-[#C9B85A]">
                  {numeral}
                </span>
              )}
              <span className="w-[60px] h-px bg-cream/30" />
              {eyebrow && (
                <span className="text-[10px] uppercase tracking-[0.24em] font-medium text-cream/65">
                  {eyebrow}
                </span>
              )}
            </div>
          )}

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

          {body && (
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 14 }}
              animate={show ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.7, ease, delay: 0.45 }}
              className={`text-[15.5px] leading-[1.7] text-cream/80 mt-9 max-w-[520px] ${
                isRight ? "ml-auto" : ""
              }`}
            >
              {body}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
