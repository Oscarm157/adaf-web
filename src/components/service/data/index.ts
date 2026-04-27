import type { ServiceData } from "../types";

// Cada agente agrega su slug aquí cuando crea el archivo correspondiente.
// Los imports son condicionales para que el build no falle si un dataset
// todavía no existe durante desarrollo paralelo.

import defensaAduanera from "./defensa-aduanera";
import defensaFiscalSat from "./defensa-fiscal-sat";
import defensaImssInfonavit from "./defensa-imss-infonavit";
import defensaSanitaria from "./defensa-sanitaria";
import defensaSictTransporte from "./defensa-sict-transporte";
import amparosFiscales from "./amparos-fiscales";
import multasComercioExterior from "./multas-comercio-exterior";
import recursoRevocacionJuicioNulidad from "./recurso-revocacion-juicio-nulidad";
import defensaPenalFiscal from "./defensa-penal-fiscal";
import asesoriaPreventivaCompliance from "./asesoria-preventiva-compliance";

const all: ServiceData[] = [
  defensaAduanera,
  defensaFiscalSat,
  defensaImssInfonavit,
  defensaSanitaria,
  defensaSictTransporte,
  amparosFiscales,
  multasComercioExterior,
  recursoRevocacionJuicioNulidad,
  defensaPenalFiscal,
  asesoriaPreventivaCompliance,
];

const bySlug: Record<string, ServiceData> = Object.fromEntries(
  all.map((s) => [s.slug, s]),
);

export const allServices: ServiceData[] = all.slice().sort((a, b) => {
  const ai = romanToInt(a.numeral);
  const bi = romanToInt(b.numeral);
  return ai - bi;
});

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return bySlug[slug];
}

export function getAllServiceSlugs(): string[] {
  return all.map((s) => s.slug);
}

function romanToInt(s: string): number {
  const map: Record<string, number> = {
    I: 1,
    II: 2,
    III: 3,
    IV: 4,
    V: 5,
    VI: 6,
    VII: 7,
    VIII: 8,
    IX: 9,
    X: 10,
  };
  return map[s] ?? 99;
}
