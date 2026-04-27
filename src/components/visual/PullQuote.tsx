"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { ReactNode, useRef } from "react";

export function PullQuote({
  children,
  cite,
}: {
  children: ReactNode;
  cite?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const animate = inView || reduce;

  return (
    <figure
      ref={ref}
      className="relative bg-background-warm py-20 md:py-28 px-8 md:px-12"
    >
      {/* Corner ornaments */}
      <span className="absolute top-6 left-6 w-3 h-3 border-t border-l border-olive" />
      <span className="absolute top-6 right-6 w-3 h-3 border-t border-r border-olive" />
      <span className="absolute bottom-6 left-6 w-3 h-3 border-b border-l border-olive" />
      <span className="absolute bottom-6 right-6 w-3 h-3 border-b border-r border-olive" />

      <div className="max-w-[920px] mx-auto text-center">
        {/* Big serif quote mark */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={animate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-serif text-[88px] leading-none text-olive/60 mb-2 select-none"
          aria-hidden="true"
        >
          &ldquo;
        </motion.div>

        <motion.blockquote
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={animate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-serif text-[28px] md:text-[36px] leading-[1.25] font-medium text-navy tracking-[-0.012em] italic"
        >
          {children}
        </motion.blockquote>

        {cite && (
          <motion.figcaption
            initial={reduce ? false : { opacity: 0 }}
            animate={animate ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-[11px] uppercase tracking-[0.22em] text-muted font-medium mt-9"
          >
            — {cite}
          </motion.figcaption>
        )}
      </div>
    </figure>
  );
}
