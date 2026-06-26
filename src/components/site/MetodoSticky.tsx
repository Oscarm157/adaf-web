"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ChapterMark } from "./ChapterMark";

const steps = [
  { n: "I", title: "Valoración inicial", body: "Revisamos la notificación, oficio o resolución recibida. Identificamos el procedimiento y los plazos legales que ya corren." },
  { n: "II", title: "Diagnóstico técnico", body: "Analizamos el expediente, el fundamento de la autoridad y las vías procedentes: recurso, juicio de nulidad o amparo." },
  { n: "III", title: "Estrategia y propuesta", body: "Presentamos por escrito el plan de defensa, los honorarios y los tiempos estimados. El cliente decide si avanzamos." },
  { n: "IV", title: "Representación", body: "Llevamos el caso ante la autoridad o tribunal correspondiente y reportamos el avance procesal en cada etapa." },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function MetodoSticky() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  return (
    <section aria-label="Método de trabajo" className="bg-background-warm pt-24 pb-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-12 gap-x-6 md:gap-x-12">
          {/* Columna izquierda sticky */}
          <div className="col-span-12 lg:col-span-5">
            <div className="lg:sticky lg:top-[110px]">
              <ChapterMark numeral="VI" label="Método de trabajo" />
              <h2 className="display-md text-navy mt-8 max-w-[420px]">
                Cuatro etapas antes y durante la representación.
              </h2>
              <p className="text-[14.5px] leading-[1.7] text-muted mt-6 max-w-[380px]">
                No iniciamos un procedimiento sin entender primero el expediente, los
                plazos que corren y el resultado realista que se puede esperar.
              </p>

              {/* Indicador de progreso */}
              <div className="hidden lg:flex items-center gap-3 mt-12">
                {steps.map((s, i) => (
                  <span
                    key={s.n}
                    className={`h-[2px] flex-1 transition-colors duration-500 ${
                      i <= active ? "bg-burgundy" : "bg-rule"
                    }`}
                  />
                ))}
              </div>
              <p className="hidden lg:block font-serif italic text-[14px] text-olive mt-4">
                Etapa {steps[active].n} · {steps[active].title}
              </p>
            </div>
          </div>

          {/* Columna derecha: pasos */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7 mt-12 lg:mt-0">
            <ol>
              {steps.map((s, i) => (
                <motion.li
                  key={s.n}
                  onViewportEnter={() => setActive(i)}
                  viewport={{ margin: "-45% 0px -45% 0px" }}
                  className="border-t border-foreground/15 py-12 lg:py-16 first:border-t-0 first:pt-0"
                >
                  <motion.div
                    initial={reduce ? false : { opacity: 0, y: 18 }}
                    whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease }}
                  >
                    <span
                      aria-hidden="true"
                      className={`font-serif text-[72px] md:text-[96px] leading-none font-semibold tracking-[-0.03em] transition-colors duration-500 ${
                        i === active ? "text-burgundy/25" : "text-navy/10"
                      }`}
                    >
                      {s.n}
                    </span>
                    <h3 className="font-serif text-[24px] md:text-[30px] leading-[1.15] font-semibold text-navy tracking-[-0.01em] mt-5">
                      {s.title}
                    </h3>
                    <p className="text-[15.5px] leading-[1.7] text-foreground/80 mt-4 max-w-[460px]">
                      {s.body}
                    </p>
                  </motion.div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
