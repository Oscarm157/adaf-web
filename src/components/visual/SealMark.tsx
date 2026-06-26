"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

// Emblema de marca ADAF: clúster de tres rombos (olivo, azul, vino) del logo
// real + wordmark serif. Reemplaza el sello tipo notario (cliché). Datos
// institucionales verificables, sin texto inventado.

const diamonds = [
  { cx: 134, cy: 58, fill: "#9B8F2E" }, // olivo, arriba-derecha
  { cx: 104, cy: 80, fill: "#1B3A5B" }, // azul, izquierda
  { cx: 124, cy: 104, fill: "#7A1F38" }, // vino, abajo
];

const S = 30; // lado del rombo

export function SealMark({
  size = 220,
  className,
}: {
  size?: number;
  className?: string;
}) {
  const ref = useRef<SVGSVGElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const animate = inView || reduce;

  return (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 240 240"
      className={className}
      aria-hidden="true"
    >
      {/* Clúster de tres rombos */}
      {diamonds.map((d, i) => (
        <motion.rect
          key={d.fill}
          x={d.cx - S / 2}
          y={d.cy - S / 2}
          width={S}
          height={S}
          rx={2.5}
          fill={d.fill}
          transform={`rotate(45 ${d.cx} ${d.cy})`}
          initial={reduce ? false : { opacity: 0, scale: 0.6 }}
          animate={animate ? { opacity: 1, scale: 1 } : {}}
          transition={{
            duration: 0.5,
            delay: 0.1 + i * 0.12,
            type: "spring",
            stiffness: 240,
            damping: 20,
          }}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
        />
      ))}

      {/* Wordmark */}
      <motion.g
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={animate ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <text
          x="120"
          y="160"
          fontSize="34"
          fill="#0F2A47"
          fontFamily="'Source Serif 4', Georgia, serif"
          fontWeight="700"
          textAnchor="middle"
          letterSpacing="5"
        >
          ADAF
        </text>
        <line x1="92" y1="176" x2="148" y2="176" stroke="#9B8F2E" strokeWidth="0.8" />
        <text
          x="120"
          y="194"
          fontSize="12"
          fill="#7A1F38"
          fontFamily="'Source Serif 4', Georgia, serif"
          fontWeight="500"
          fontStyle="italic"
          textAnchor="middle"
        >
          veinticinco años
        </text>
        <text
          x="120"
          y="212"
          fontSize="8"
          fill="#5A5853"
          fontFamily="Inter, system-ui"
          fontWeight="500"
          textAnchor="middle"
          letterSpacing="2.4"
        >
          DEFENSA · FRONTERA NORTE
        </text>
      </motion.g>
    </svg>
  );
}
