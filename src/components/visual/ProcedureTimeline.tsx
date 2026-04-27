"use client";

import { motion, useReducedMotion } from "motion/react";

type Step = { etapa: string; plazo: string; dias?: number };

export function ProcedureTimeline({
  steps,
  maxDays = 60,
}: {
  steps: Step[];
  maxDays?: number;
}) {
  const reduce = useReducedMotion();

  // Parse días numéricos para posicionar
  const parsed = steps.map((s) => {
    const match = s.plazo.match(/(\d+)/);
    const dias = s.dias ?? (match ? parseInt(match[1]!, 10) : 0);
    return { ...s, dias };
  });

  const max = Math.max(maxDays, ...parsed.map((p) => p.dias));

  return (
    <div className="w-full">
      {/* Mobile: vertical stacked */}
      <ol className="md:hidden space-y-5">
        {parsed.map((s, i) => (
          <li key={i} className="flex items-baseline gap-4">
            <span className="font-serif italic text-[12px] text-olive shrink-0 w-8">
              {romanize(i + 1)}
            </span>
            <div className="flex-1 border-b border-rule pb-3">
              <p className="text-[14px] leading-[1.4] text-foreground">
                {s.etapa}
              </p>
              <p className="font-serif text-[15px] font-medium text-navy mt-1 tabular-nums">
                {s.plazo}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {/* Desktop: horizontal axis */}
      <motion.div
        className="hidden md:block"
        initial={reduce ? false : "hidden"}
        whileInView={reduce ? undefined : "visible"}
        viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
      >
        <div className="relative pl-2 pr-2 pt-16 pb-24">
          {/* Static base axis */}
          <div className="absolute left-2 right-2 top-[100px] h-[1px] bg-foreground/12" />

          {/* Tick marks at extremes */}
          <span className="absolute left-2 top-[92px] w-[1px] h-3 bg-foreground/30" />
          <span className="absolute right-2 top-[92px] w-[1px] h-3 bg-foreground/30" />

          {/* Day labels at extremes */}
          <span className="absolute left-2 top-[112px] text-[10px] uppercase tracking-[0.18em] text-muted">
            Día 0
          </span>
          <span className="absolute right-2 top-[112px] text-[10px] uppercase tracking-[0.18em] text-muted text-right">
            Día {max}
          </span>

          {/* Animated colored axis */}
          <motion.div
            variants={{
              hidden: { scaleX: 0 },
              visible: { scaleX: 1 },
            }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ originX: 0 }}
            className="absolute left-2 right-2 top-[100px] h-[2px] bg-burgundy"
          />

          {/* Milestones */}
          {parsed.map((s, i) => {
            const pct = max === 0 ? 0 : (s.dias / max) * 100;
            const labelTop = i % 2 === 0;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute"
                style={{
                  left: `calc(${pct}% + 8px)`,
                  top: labelTop ? "0px" : "118px",
                  transform: "translateX(-50%)",
                  width: "160px",
                }}
              >
                {labelTop ? (
                  <div className="text-center pb-3">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-muted leading-tight">
                      Etapa {romanize(i + 1)}
                    </p>
                    <p className="text-[12px] leading-[1.35] text-foreground/85 mt-2">
                      {s.etapa}
                    </p>
                    <p className="font-serif text-[15px] font-medium text-burgundy mt-2 tabular-nums">
                      {s.plazo}
                    </p>
                  </div>
                ) : (
                  <div className="text-center pt-3">
                    <p className="font-serif text-[15px] font-medium text-burgundy tabular-nums">
                      {s.plazo}
                    </p>
                    <p className="text-[12px] leading-[1.35] text-foreground/85 mt-2">
                      {s.etapa}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-muted mt-2">
                      Etapa {romanize(i + 1)}
                    </p>
                  </div>
                )}

                {/* Node dot on axis */}
                <span
                  className="absolute left-1/2 -translate-x-1/2 w-[10px] h-[10px] bg-burgundy rounded-full ring-4 ring-background"
                  style={{
                    top: labelTop ? `calc(100% + 6px)` : `-16px`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

function romanize(n: number): string {
  const r = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  return r[n - 1] ?? String(n);
}
