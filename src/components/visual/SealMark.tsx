"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

// Marca decorativa estilo sello editorial — sin texto inventado.
// Líneas concéntricas, número romano y texto institucional verificable.

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
      <defs>
        <path
          id="seal-circle-top"
          d="M 30 120 A 90 90 0 0 1 210 120"
          fill="none"
        />
        <path
          id="seal-circle-bottom"
          d="M 30 120 A 90 90 0 0 0 210 120"
          fill="none"
        />
      </defs>

      {/* Outer ring */}
      <motion.circle
        cx="120"
        cy="120"
        r="110"
        fill="none"
        stroke="#0F2A47"
        strokeWidth="0.8"
        initial={reduce ? false : { pathLength: 0, opacity: 0 }}
        animate={animate ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Inner ring */}
      <motion.circle
        cx="120"
        cy="120"
        r="92"
        fill="none"
        stroke="#0F2A47"
        strokeWidth="0.5"
        initial={reduce ? false : { pathLength: 0, opacity: 0 }}
        animate={animate ? { pathLength: 1, opacity: 1 } : {}}
        transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Top arc text */}
      <motion.text
        fontSize="9"
        letterSpacing="3"
        fill="#5A5853"
        fontFamily="Inter, system-ui"
        fontWeight="500"
        initial={reduce ? false : { opacity: 0 }}
        animate={animate ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <textPath href="#seal-circle-top" startOffset="50%" textAnchor="middle">
          ASESORÍA Y DEFENSA ADUANERA FISCAL
        </textPath>
      </motion.text>

      {/* Bottom arc text */}
      <motion.text
        fontSize="9"
        letterSpacing="3"
        fill="#5A5853"
        fontFamily="Inter, system-ui"
        fontWeight="500"
        initial={reduce ? false : { opacity: 0 }}
        animate={animate ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1.0 }}
      >
        <textPath
          href="#seal-circle-bottom"
          startOffset="50%"
          textAnchor="middle"
        >
          TIJUANA · BAJA CALIFORNIA · MÉXICO
        </textPath>
      </motion.text>

      {/* Center: serif ADAF */}
      <motion.g
        initial={reduce ? false : { opacity: 0, scale: 0.85 }}
        animate={animate ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 220, damping: 22 }}
        style={{ transformOrigin: "120px 120px" }}
      >
        <text
          x="120"
          y="115"
          fontSize="40"
          fill="#0F2A47"
          fontFamily="'Source Serif 4', Georgia, serif"
          fontWeight="700"
          textAnchor="middle"
          letterSpacing="3"
        >
          ADAF
        </text>
        <line
          x1="86"
          y1="128"
          x2="154"
          y2="128"
          stroke="#9B8F2E"
          strokeWidth="0.8"
        />
        <text
          x="120"
          y="148"
          fontSize="11"
          fill="#7A1F38"
          fontFamily="'Source Serif 4', Georgia, serif"
          fontWeight="500"
          fontStyle="italic"
          textAnchor="middle"
        >
          25 años
        </text>
        <text
          x="120"
          y="166"
          fontSize="8"
          fill="#5A5853"
          fontFamily="Inter, system-ui"
          fontWeight="500"
          textAnchor="middle"
          letterSpacing="2"
        >
          DEFENSA · FRONTERA NORTE
        </text>
      </motion.g>

      {/* Decorative cardinal marks */}
      {[0, 90, 180, 270].map((angle, i) => (
        <motion.g
          key={angle}
          initial={reduce ? false : { opacity: 0 }}
          animate={animate ? { opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 1.2 + i * 0.08 }}
        >
          <circle
            cx={120 + Math.cos((angle * Math.PI) / 180) * 101}
            cy={120 + Math.sin((angle * Math.PI) / 180) * 101}
            r="1.4"
            fill="#9B8F2E"
          />
        </motion.g>
      ))}
    </svg>
  );
}
