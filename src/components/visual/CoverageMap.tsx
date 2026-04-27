"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

// Schematic SVG: Baja California península + frontera norte de México
// Coords aproximadas, no a escala. Editorial, no GIS.

type Loc = {
  cx: number;
  cy: number;
  label: string;
  type: "primary" | "secondary";
};

const locations: Loc[] = [
  { cx: 138, cy: 48, label: "Tijuana", type: "primary" },
  { cx: 168, cy: 60, label: "Tecate", type: "primary" },
  { cx: 130, cy: 70, label: "Rosarito", type: "primary" },
  { cx: 200, cy: 90, label: "Mexicali", type: "secondary" },
  { cx: 175, cy: 195, label: "Ensenada", type: "secondary" },
];

export function CoverageMap() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const animate = inView || reduce;

  return (
    <div ref={ref} className="relative w-full">
      <svg
        viewBox="0 0 380 360"
        className="w-full h-auto"
        aria-labelledby="coverageTitle"
        role="img"
      >
        <title id="coverageTitle">
          Cobertura procesal: Baja California y representación federal
        </title>

        {/* Frontera Norte (US line) */}
        <motion.line
          x1="0"
          y1="20"
          x2="380"
          y2="20"
          stroke="#9B8F2E"
          strokeWidth="0.6"
          strokeDasharray="3 3"
          initial={reduce ? false : { pathLength: 0 }}
          animate={animate ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <text
          x="0"
          y="14"
          fontSize="8"
          fill="#5A5853"
          letterSpacing="1.4"
          fontFamily="Inter, system-ui"
          fontWeight="500"
        >
          FRONTERA MÉXICO · ESTADOS UNIDOS
        </text>

        {/* Baja California silhouette (simplified) */}
        <motion.path
          d="M 110 28 L 220 28 L 222 70 L 240 105 L 252 145 L 250 200 L 240 250 L 215 305 L 195 340 L 175 320 L 165 295 L 175 275 L 175 245 L 160 215 L 145 200 L 135 180 L 130 155 L 125 130 L 120 100 L 115 75 L 112 50 Z"
          fill="#F1EFEA"
          stroke="#0F2A47"
          strokeWidth="1"
          initial={reduce ? false : { pathLength: 0, opacity: 0 }}
          animate={
            animate ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }
          }
          transition={{
            pathLength: { duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
            opacity: { duration: 0.4, delay: 0.2 },
          }}
        />

        {/* Locations */}
        {locations.map((loc, i) => {
          const r = loc.type === "primary" ? 4 : 3;
          const fill = loc.type === "primary" ? "#7A1F38" : "#9B8F2E";
          return (
            <motion.g
              key={loc.label}
              initial={reduce ? false : { opacity: 0, scale: 0 }}
              animate={
                animate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              transition={{
                duration: 0.4,
                delay: 1.2 + i * 0.15,
                type: "spring",
                stiffness: 240,
                damping: 18,
              }}
              style={{ transformOrigin: `${loc.cx}px ${loc.cy}px` }}
            >
              <circle cx={loc.cx} cy={loc.cy} r={r} fill={fill} />
              {loc.type === "primary" && (
                <circle
                  cx={loc.cx}
                  cy={loc.cy}
                  r={r + 6}
                  fill="none"
                  stroke={fill}
                  strokeWidth="0.5"
                  opacity={0.45}
                />
              )}
              <text
                x={loc.cx + 9}
                y={loc.cy + 3}
                fontSize="11"
                fill="#0F2A47"
                fontFamily="'Source Serif 4', Georgia, serif"
                fontWeight={loc.type === "primary" ? 600 : 400}
              >
                {loc.label}
              </text>
            </motion.g>
          );
        })}

        {/* Federal radial mark */}
        <motion.g
          initial={reduce ? false : { opacity: 0 }}
          animate={animate ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 2 }}
        >
          <text
            x="270"
            y="180"
            fontSize="10"
            fill="#5A5853"
            letterSpacing="1.4"
            fontFamily="Inter, system-ui"
            fontWeight="500"
          >
            REPRESENTACIÓN
          </text>
          <text
            x="270"
            y="194"
            fontSize="10"
            fill="#5A5853"
            letterSpacing="1.4"
            fontFamily="Inter, system-ui"
            fontWeight="500"
          >
            FEDERAL
          </text>
          <text
            x="270"
            y="218"
            fontSize="13"
            fill="#0F2A47"
            fontFamily="'Source Serif 4', Georgia, serif"
            fontWeight="600"
            fontStyle="italic"
          >
            TFJA · Juzgados
          </text>
          <text
            x="270"
            y="234"
            fontSize="13"
            fill="#0F2A47"
            fontFamily="'Source Serif 4', Georgia, serif"
            fontWeight="600"
            fontStyle="italic"
          >
            de Distrito · TCC
          </text>
          <line
            x1="252"
            y1="200"
            x2="262"
            y2="200"
            stroke="#9B8F2E"
            strokeWidth="0.8"
          />
        </motion.g>
      </svg>

      {/* Legend */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-6 max-w-[440px]">
        <div className="flex items-center gap-3 text-[12px]">
          <span className="w-2 h-2 bg-burgundy rounded-full" />
          <span className="text-foreground/85">Base de operación</span>
        </div>
        <div className="flex items-center gap-3 text-[12px]">
          <span className="w-2 h-2 bg-olive rounded-full" />
          <span className="text-foreground/85">Otras zonas BC</span>
        </div>
      </div>
    </div>
  );
}
