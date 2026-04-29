"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

const authorities = [
  "SAT",
  "ANAM",
  "IMSS",
  "INFONAVIT",
  "COFEPRIS",
  "COEPRIS BC",
  "SICT",
  "TFJA",
  "Juzgados de Distrito",
  "Tribunales Colegiados",
];

export function AuthoritiesBand() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const animate = inView || reduce;

  return (
    <figure
      ref={ref}
      className="relative bg-background-warm py-20 md:py-24 px-8 md:px-12"
    >
      <span className="absolute top-6 left-6 w-3 h-3 border-t border-l border-olive" />
      <span className="absolute top-6 right-6 w-3 h-3 border-t border-r border-olive" />
      <span className="absolute bottom-6 left-6 w-3 h-3 border-b border-l border-olive" />
      <span className="absolute bottom-6 right-6 w-3 h-3 border-b border-r border-olive" />

      <div className="max-w-[960px] mx-auto text-center">
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={animate ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium"
        >
          Representamos casos ante
        </motion.p>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={animate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-serif text-[22px] md:text-[28px] lg:text-[30px] leading-[1.45] text-navy tracking-[-0.005em] mt-6"
        >
          {authorities.map((a, i) => (
            <span key={a}>
              {a}
              {i < authorities.length - 1 && (
                <span aria-hidden="true" className="text-olive font-normal mx-2">
                  ·
                </span>
              )}
            </span>
          ))}
        </motion.p>

        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          animate={animate ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="text-[11px] uppercase tracking-[0.22em] text-muted font-medium mt-9"
        >
          · Autoridades y tribunales ·
        </motion.p>
      </div>
    </figure>
  );
}
