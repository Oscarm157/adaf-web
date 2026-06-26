"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

type Anchor = "start" | "middle" | "end";

type Loc = {
  cx: number;
  cy: number;
  label: string;
  type: "primary" | "secondary";
  anchor: Anchor;
  labelDx: number;
  labelDy: number;
};

const locations: Loc[] = [
  // Tijuana — base operativa, esquina NO
  { cx: 105, cy: 70, label: "Tijuana", type: "primary", anchor: "end", labelDx: -10, labelDy: 4 },
  // Tecate — sobre la frontera, mid
  { cx: 175, cy: 60, label: "Tecate", type: "primary", anchor: "middle", labelDx: 0, labelDy: -10 },
  // Rosarito — sur de Tijuana, costa pacífico
  { cx: 95, cy: 110, label: "Rosarito", type: "primary", anchor: "end", labelDx: -10, labelDy: 4 },
  // Mexicali — frontera, extremo este
  { cx: 295, cy: 70, label: "Mexicali", type: "secondary", anchor: "start", labelDx: 10, labelDy: 4 },
  // Ensenada — pacífico, sur
  { cx: 110, cy: 195, label: "Ensenada", type: "secondary", anchor: "end", labelDx: -10, labelDy: 4 },
];

type Variant = "light" | "dark";

type Palette = {
  frontera: string;
  fronteraText: string;
  siluetaFill: string;
  siluetaStroke: string;
  primary: string;
  secondary: string;
  label: string;
  labelSub: string;
  divider: string;
  legendText: string;
};

const palettes: Record<Variant, Palette> = {
  light: {
    frontera: "#9B8F2E",
    fronteraText: "#5A5853",
    siluetaFill: "#F1EFEA",
    siluetaStroke: "#0F2A47",
    primary: "#7A1F38",
    secondary: "#9B8F2E",
    label: "#0F2A47",
    labelSub: "#5A5853",
    divider: "#5A5853",
    legendText: "rgba(17,20,24,0.85)",
  },
  dark: {
    frontera: "#C9B85A",
    fronteraText: "rgba(244,241,234,0.6)",
    siluetaFill: "rgba(244,241,234,0.05)",
    siluetaStroke: "rgba(244,241,234,0.5)",
    primary: "#C9506B",
    secondary: "#C9B85A",
    label: "#F4F1EA",
    labelSub: "rgba(244,241,234,0.72)",
    divider: "rgba(244,241,234,0.22)",
    legendText: "rgba(244,241,234,0.8)",
  },
};

export function CoverageMap({ variant = "light" }: { variant?: Variant }) {
  const c = palettes[variant];
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const animate = inView || reduce;

  return (
    <div ref={ref} className="relative w-full">
      <svg
        viewBox="0 0 545 360"
        className="w-full h-auto"
        aria-labelledby="coverageTitle"
        role="img"
      >
        <title id="coverageTitle">
          Cobertura procesal: Baja California y representación federal
        </title>

        {/* Frontera Norte — línea + label */}
        <motion.line
          x1="20"
          y1="42"
          x2="320"
          y2="42"
          stroke={c.frontera}
          strokeWidth="0.8"
          strokeDasharray="3 4"
          initial={reduce ? false : { pathLength: 0 }}
          animate={animate ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <text
          x="20"
          y="32"
          fontSize="8.5"
          fill={c.fronteraText}
          letterSpacing="1.6"
          fontFamily="Inter, system-ui"
          fontWeight="500"
        >
          FRONTERA · MÉXICO – ESTADOS UNIDOS
        </text>

        {/* Silueta Baja California (norte) — simplificada, suficiente espacio para labels */}
        <motion.path
          d="
            M 80 42
            L 320 42
            L 320 88
            L 280 110
            L 240 130
            L 215 165
            L 195 205
            L 165 245
            L 140 275
            L 120 295
            L 100 270
            L 90 235
            L 75 195
            L 70 155
            L 70 115
            L 75 80
            Z
          "
          fill={c.siluetaFill}
          stroke={c.siluetaStroke}
          strokeWidth="1"
          initial={reduce ? false : { pathLength: 0, opacity: 0 }}
          animate={
            animate
              ? { pathLength: 1, opacity: 1 }
              : { pathLength: 0, opacity: 0 }
          }
          transition={{
            pathLength: { duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
            opacity: { duration: 0.4, delay: 0.2 },
          }}
        />

        {/* Locations */}
        {locations.map((loc, i) => {
          const r = loc.type === "primary" ? 4 : 3;
          const fill = loc.type === "primary" ? c.primary : c.secondary;
          return (
            <motion.g
              key={loc.label}
              initial={reduce ? false : { opacity: 0, scale: 0 }}
              animate={
                animate ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              transition={{
                duration: 0.4,
                delay: 1.2 + i * 0.12,
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
                x={loc.cx + loc.labelDx}
                y={loc.cy + loc.labelDy}
                fontSize="11"
                fill={c.label}
                textAnchor={loc.anchor}
                fontFamily="'Source Serif 4', Georgia, serif"
                fontWeight={loc.type === "primary" ? 600 : 400}
              >
                {loc.label}
              </text>
            </motion.g>
          );
        })}

        {/* Divisor vertical entre mapa y bloque federal */}
        <motion.line
          x1="355"
          y1="60"
          x2="355"
          y2="290"
          stroke={c.divider}
          strokeOpacity="1"
          strokeWidth="0.8"
          initial={reduce ? false : { pathLength: 0 }}
          animate={animate ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.0, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Bloque federal */}
        <motion.g
          initial={reduce ? false : { opacity: 0, x: 8 }}
          animate={animate ? { opacity: 1, x: 0 } : { opacity: 0, x: 8 }}
          transition={{ duration: 0.7, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <text
            x="375"
            y="80"
            fontSize="8.5"
            fill={c.labelSub}
            letterSpacing="1.6"
            fontFamily="Inter, system-ui"
            fontWeight="500"
          >
            REPRESENTACIÓN
          </text>
          <text
            x="375"
            y="94"
            fontSize="8.5"
            fill={c.labelSub}
            letterSpacing="1.6"
            fontFamily="Inter, system-ui"
            fontWeight="500"
          >
            FEDERAL
          </text>

          <line
            x1="375"
            y1="108"
            x2="405"
            y2="108"
            stroke={c.frontera}
            strokeWidth="0.8"
          />

          <text
            x="375"
            y="132"
            fontSize="13"
            fill={c.label}
            fontFamily="'Source Serif 4', Georgia, serif"
            fontWeight="600"
            fontStyle="italic"
          >
            TFJA
          </text>
          <text
            x="375"
            y="150"
            fontSize="10.5"
            fill={c.label}
            opacity="0.75"
            fontFamily="'Source Serif 4', Georgia, serif"
          >
            Tribunal Federal de
          </text>
          <text
            x="375"
            y="164"
            fontSize="10.5"
            fill={c.label}
            opacity="0.75"
            fontFamily="'Source Serif 4', Georgia, serif"
          >
            Justicia Administrativa
          </text>

          <text
            x="375"
            y="194"
            fontSize="13"
            fill={c.label}
            fontFamily="'Source Serif 4', Georgia, serif"
            fontWeight="600"
            fontStyle="italic"
          >
            Juzgados de Distrito
          </text>
          <text
            x="375"
            y="210"
            fontSize="10.5"
            fill={c.label}
            opacity="0.75"
            fontFamily="'Source Serif 4', Georgia, serif"
          >
            Poder Judicial Federal
          </text>

          <text
            x="375"
            y="240"
            fontSize="13"
            fill={c.label}
            fontFamily="'Source Serif 4', Georgia, serif"
            fontWeight="600"
            fontStyle="italic"
          >
            TCC
          </text>
          <text
            x="375"
            y="256"
            fontSize="10.5"
            fill={c.label}
            opacity="0.75"
            fontFamily="'Source Serif 4', Georgia, serif"
          >
            Tribunales Colegiados
          </text>
          <text
            x="375"
            y="270"
            fontSize="10.5"
            fill={c.label}
            opacity="0.75"
            fontFamily="'Source Serif 4', Georgia, serif"
          >
            de Circuito
          </text>
        </motion.g>
      </svg>

      {/* Legend */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mt-6 max-w-[560px]">
        <div className="flex items-center gap-3 text-[12px]">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: c.primary }} />
          <span style={{ color: c.legendText }}>Base de operación</span>
        </div>
        <div className="flex items-center gap-3 text-[12px]">
          <span className="w-2 h-2 rounded-full" style={{ backgroundColor: c.secondary }} />
          <span style={{ color: c.legendText }}>Otras zonas BC</span>
        </div>
        <div className="flex items-center gap-3 text-[12px]">
          <span className="w-3 h-[1px]" style={{ backgroundColor: c.frontera }} />
          <span style={{ color: c.legendText }}>Frontera norte</span>
        </div>
      </div>
    </div>
  );
}
