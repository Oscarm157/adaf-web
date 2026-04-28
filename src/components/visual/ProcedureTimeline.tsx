"use client";

import { motion, useReducedMotion } from "motion/react";

type Step = { etapa: string; plazo: string; dias?: number };

export function ProcedureTimeline({ steps }: { steps: Step[] }) {
  const reduce = useReducedMotion();

  const parsed = steps.map((s) => {
    const explicit = typeof s.dias === "number" ? s.dias : null;
    const match = s.plazo.match(/(\d+)/);
    const dias = explicit ?? (match ? parseInt(match[1]!, 10) : null);
    return { ...s, dias };
  });

  const numericDays = parsed
    .map((p) => p.dias)
    .filter((d): d is number => d !== null && d > 0);
  const max = numericDays.length ? Math.max(...numericDays) : 30;
  const ticks = makeTicks(max);

  return (
    <div className="w-full">
      {/* Mobile: stacked rows */}
      <ol className="md:hidden divide-y divide-rule">
        {parsed.map((s, i) => (
          <li key={i} className="py-5 first:pt-0">
            <div className="flex items-baseline gap-3 mb-1.5">
              <span
                aria-hidden="true"
                className="font-serif italic text-[12px] text-olive"
              >
                {romanize(i + 1)}
              </span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted">
                Etapa {romanize(i + 1)}
              </span>
            </div>
            <p className="text-[14.5px] leading-[1.45] text-foreground">
              {s.etapa}
            </p>
            <p className="font-serif text-[15px] font-medium text-burgundy mt-2 tabular-nums">
              {s.plazo}
            </p>
          </li>
        ))}
      </ol>

      {/* Desktop: parallel duration bars */}
      <div className="hidden md:block">
        {/* Axis header */}
        <div className="grid grid-cols-[36px_minmax(240px,1.4fr)_140px_minmax(0,2.6fr)] gap-x-6 items-end pb-4">
          <span />
          <span className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium">
            Etapa procesal
          </span>
          <span className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium">
            Plazo legal
          </span>
          <div className="relative h-5">
            {ticks.map((t) => {
              const pct = (t / max) * 100;
              return (
                <span
                  key={t}
                  className="absolute top-0 text-[10px] uppercase tracking-[0.18em] text-muted whitespace-nowrap"
                  style={{
                    left: `${pct}%`,
                    transform:
                      t === max
                        ? "translateX(-100%)"
                        : t === 0
                        ? "translateX(0)"
                        : "translateX(-50%)",
                  }}
                >
                  Día {t}
                </span>
              );
            })}
          </div>
        </div>

        {/* Rows */}
        <ol className="border-t border-foreground/15">
          {parsed.map((s, i) => (
            <motion.li
              key={i}
              initial={reduce ? false : { opacity: 0, y: 6 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: 0.08 * i,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="grid grid-cols-[36px_minmax(240px,1.4fr)_140px_minmax(0,2.6fr)] gap-x-6 items-center py-5 border-b border-rule"
            >
              <span
                aria-hidden="true"
                className="font-serif italic text-[14px] text-olive"
              >
                {romanize(i + 1)}
              </span>

              <p className="text-[14.5px] leading-[1.45] text-foreground/90">
                {s.etapa}
              </p>

              <p className="font-serif text-[15px] font-medium text-burgundy tabular-nums">
                {s.plazo}
              </p>

              {/* Bar track */}
              <div className="relative h-[14px]">
                {/* baseline */}
                <span className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-foreground/10" />
                {/* tick marks */}
                {ticks.map((t) => {
                  const pct = (t / max) * 100;
                  return (
                    <span
                      key={t}
                      className="absolute top-1/2 -translate-y-1/2 w-[1px] h-[6px] bg-foreground/18"
                      style={{ left: `${pct}%` }}
                    />
                  );
                })}
                {/* duration bar */}
                {s.dias !== null && s.dias > 0 ? (
                  <>
                    <motion.div
                      initial={reduce ? false : { scaleX: 0 }}
                      whileInView={reduce ? undefined : { scaleX: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{
                        duration: 0.85,
                        delay: 0.18 + 0.08 * i,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      style={{
                        originX: 0,
                        width: `${(s.dias / max) * 100}%`,
                      }}
                      className="absolute left-0 top-1/2 -translate-y-1/2 h-[6px] bg-burgundy rounded-[1px]"
                    />
                    <motion.span
                      initial={reduce ? false : { opacity: 0 }}
                      whileInView={reduce ? undefined : { opacity: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.95 + 0.08 * i,
                      }}
                      className="absolute top-1/2 -translate-y-1/2 w-[10px] h-[10px] bg-burgundy rounded-full ring-4 ring-background"
                      style={{
                        left: `calc(${(s.dias / max) * 100}% - 5px)`,
                      }}
                    />
                  </>
                ) : (
                  <motion.div
                    initial={reduce ? false : { opacity: 0 }}
                    whileInView={reduce ? undefined : { opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, delay: 0.18 + 0.08 * i }}
                    className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[6px] border border-dashed border-burgundy/55 rounded-[1px]"
                    aria-label="Ventana abierta"
                  />
                )}
              </div>
            </motion.li>
          ))}
        </ol>

        <p className="text-[11px] leading-[1.55] text-muted mt-4 max-w-[640px]">
          Cada barra representa un plazo independiente que corre desde la
          notificación del acto correspondiente. Las líneas discontinuas marcan
          ventanas abiertas sin plazo numérico fijo.
        </p>
      </div>
    </div>
  );
}

function makeTicks(max: number): number[] {
  const step = max <= 15 ? 5 : max <= 30 ? 10 : max <= 60 ? 15 : 30;
  const ticks: number[] = [];
  for (let t = 0; t <= max; t += step) ticks.push(t);
  if (ticks[ticks.length - 1] !== max) ticks.push(max);
  return ticks;
}

function romanize(n: number): string {
  const r = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  return r[n - 1] ?? String(n);
}
