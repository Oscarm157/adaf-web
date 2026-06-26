"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useLayoutEffectIsomorphic } from "@/components/motion/useLayoutEffectIsomorphic";
import { gsap, registerGsap } from "@/lib/gsap";

const ease = [0.16, 1, 0.3, 1] as const;

type Crumb = { label: string; href?: string };

type Props = {
  image: string;
  alt: string;
  numeral?: string;
  label?: string;
  h1: string;
  lede?: string;
  crumbs?: Crumb[];
  /** Altura mínima del hero. Interiores van más bajos que el home (92svh). */
  minH?: string;
};

/**
 * Hero dark image-led con parallax, para páginas interiores. Reusa el lenguaje
 * del HeroImmersive del home (foto + scrim + reveal) en una versión más sobria
 * y parametrizada. El home conserva su propio HeroImmersive más rico.
 */
export function ImmersiveHero({
  image,
  alt,
  numeral,
  label,
  h1,
  lede,
  crumbs,
  minH = "min-h-[58svh] md:min-h-[64svh]",
}: Props) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();

  useLayoutEffectIsomorphic(() => {
    registerGsap();
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.to(imageRef.current, {
        yPercent: 12,
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
      aria-label={label || undefined}
      className={`relative bg-ink text-cream overflow-hidden flex flex-col justify-end ${minH}`}
    >
      <div
        ref={imageRef}
        className="absolute inset-x-0 -top-[8%] h-[116%] will-change-transform"
      >
        <Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 scrim-dark" aria-hidden="true" />

      <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 md:px-10 lg:px-12 pt-32 md:pt-40 pb-14 md:pb-16">
        {crumbs && crumbs.length > 0 && (
          <nav
            aria-label="breadcrumb"
            className="flex items-center gap-2 text-[12px] text-cream/60 mb-9"
          >
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                {c.href ? (
                  <Link href={c.href} className="hover:text-cream transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-cream/90">{c.label}</span>
                )}
                {i < crumbs.length - 1 && (
                  <ChevronRight className="w-3 h-3 text-cream/40" strokeWidth={1.5} />
                )}
              </span>
            ))}
          </nav>
        )}

        {(numeral || label) && (
          <div className="flex items-baseline gap-4 mb-7">
            {numeral && (
              <span aria-hidden="true" className="font-serif italic text-[14px] text-[#C9B85A]">
                {numeral}
              </span>
            )}
            <span className="w-[80px] h-px bg-cream/30" />
            {label && (
              <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-cream/70">
                {label}
              </span>
            )}
          </div>
        )}

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="display-xl font-normal text-cream max-w-[20ch]"
        >
          {h1}
        </motion.h1>

        {lede && (
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.35 }}
            className="text-[17px] md:text-[19px] leading-[1.6] text-cream/85 mt-7 max-w-[640px]"
          >
            {lede}
          </motion.p>
        )}
      </div>
    </section>
  );
}
