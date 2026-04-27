"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { allServices } from "./data";

export function ServiciosList() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <>
      {/* Mobile: accordion. Visible < md */}
      <div className="md:hidden border-t border-foreground/15">
        {allServices.map((s) => {
          const isOpen = openSlug === s.slug;
          return (
            <div key={s.slug} className="border-b border-rule">
              <button
                type="button"
                onClick={() => setOpenSlug(isOpen ? null : s.slug)}
                aria-expanded={isOpen}
                aria-controls={`servicio-${s.slug}`}
                className="w-full flex items-baseline gap-3 py-5 text-left"
              >
                <span
                  aria-hidden="true"
                  className="font-serif italic text-[13px] font-medium text-olive tracking-wide w-6 shrink-0"
                >
                  {s.numeral}
                </span>
                <span className="flex-1 font-serif text-[18px] leading-[1.3] text-navy tracking-[-0.005em]">
                  {s.h1.replace(/\.$/, "")}
                </span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 w-7 h-7 inline-flex items-center justify-center text-burgundy transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  {isOpen ? (
                    <Minus className="w-4 h-4" strokeWidth={1.5} />
                  ) : (
                    <Plus className="w-4 h-4" strokeWidth={1.5} />
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`servicio-${s.slug}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pl-9 pr-2">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-muted font-medium mb-3">
                        {s.label}
                      </p>
                      <p className="text-[14.5px] leading-[1.6] text-foreground/85">
                        {s.lede}
                      </p>
                      <Link
                        href={`/servicios/${s.slug}`}
                        className="mt-5 inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.16em] font-medium text-burgundy"
                      >
                        Ver la materia completa
                        <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Tablet/Desktop: grid abierto. Visible >= md */}
      <div className="hidden md:grid grid-cols-2 border-t border-foreground/15">
        {allServices.map((s, i) => (
          <Link
            key={s.slug}
            href={`/servicios/${s.slug}`}
            className={`group block transition-colors duration-300 hover:bg-background-warm border-b border-rule ${
              i % 2 === 0 ? "border-r border-rule" : ""
            }`}
          >
            <div className="px-7 py-8 group-hover:px-8 transition-[padding] duration-300">
              <div className="flex items-baseline gap-4 mb-3.5">
                <span
                  aria-hidden="true"
                  className="font-serif italic text-[15px] font-medium text-olive tracking-wide w-7 shrink-0"
                >
                  {s.numeral}
                </span>
                <span className="text-[13px] uppercase tracking-[0.14em] text-navy font-medium">
                  {s.label}
                </span>
              </div>
              <h3 className="font-serif text-[24px] lg:text-[26px] leading-[1.22] font-medium text-foreground tracking-[-0.005em] group-hover:text-burgundy transition-colors duration-300 ml-11">
                {s.h1.replace(/\.$/, "")}
              </h3>
              <p className="text-[14.5px] leading-[1.55] text-muted mt-3 ml-11 max-w-[480px]">
                {s.lede}
              </p>
              <div className="ml-11 mt-5 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] font-medium text-burgundy group-hover:gap-3 transition-all duration-300">
                Ver materia
                <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
