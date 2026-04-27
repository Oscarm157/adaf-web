"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

type Step = {
  n: string;
  title: string;
  body: string;
};

export function ProcessFlow({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reduce = useReducedMotion();
  const animate = inView || reduce;

  return (
    <div ref={ref} className="w-full">
      {/* Mobile: stacked vertical */}
      <div className="md:hidden space-y-10">
        {steps.map((s, i) => (
          <motion.article
            key={s.n}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={animate ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="relative pl-14"
          >
            <span className="absolute left-0 top-0 font-serif text-[44px] leading-none font-medium text-navy/15 tracking-[-0.02em]">
              {s.n}
            </span>
            <p className="text-[10px] uppercase tracking-[0.22em] text-burgundy font-medium mb-2">
              Etapa {s.n}
            </p>
            <h3 className="font-serif text-[22px] font-semibold text-navy tracking-[-0.008em]">
              {s.title}
            </h3>
            <p className="text-[14px] leading-[1.6] text-foreground/80 mt-3">
              {s.body}
            </p>
          </motion.article>
        ))}
      </div>

      {/* Desktop: horizontal flow with connecting line */}
      <div className="hidden md:block relative">
        {/* Connecting horizontal axis */}
        <motion.div
          initial={reduce ? false : { scaleX: 0 }}
          animate={animate ? { scaleX: 1 } : {}}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ originX: 0 }}
          className="absolute left-0 right-0 top-[78px] h-[1px] bg-burgundy/70"
        />
        <span className="absolute left-0 top-[74px] w-[1px] h-3 bg-foreground/30" />
        <span className="absolute right-0 top-[74px] w-[1px] h-3 bg-foreground/30" />

        <div className={`grid grid-cols-${steps.length} gap-8`} style={{ gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}>
          {steps.map((s, i) => (
            <motion.article
              key={s.n}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={animate ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.4 + i * 0.18,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative pt-0"
            >
              {/* Big numeral */}
              <div className="relative h-[90px] flex items-end pb-8">
                <span className="font-serif text-[88px] leading-none font-semibold text-navy/15 tracking-[-0.02em]">
                  {s.n}
                </span>
                {/* Node on axis */}
                <span className="absolute right-2 top-[74px] w-[12px] h-[12px] bg-burgundy" />
              </div>

              <p className="text-[10px] uppercase tracking-[0.22em] text-burgundy font-medium mt-2 mb-3">
                Etapa {s.n}
              </p>
              <h3 className="font-serif text-[22px] leading-[1.2] font-semibold text-navy tracking-[-0.008em]">
                {s.title}
              </h3>
              <p className="text-[14px] leading-[1.65] text-foreground/80 mt-4 max-w-[260px]">
                {s.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
