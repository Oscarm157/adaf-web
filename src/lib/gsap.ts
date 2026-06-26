// Punto único de registro de GSAP + plugins. El registro solo corre en cliente
// (nunca en top-level del módulo en SSR) y es idempotente.
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function registerGsap() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export { gsap, ScrollTrigger };
