"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, registerGsap } from "@/lib/gsap";

// Monta Lenis (scroll suave) y lo sincroniza con el ticker de GSAP/ScrollTrigger.
// Respeta prefers-reduced-motion: si está activo, no instancia Lenis (scroll nativo)
// y solo registra ScrollTrigger para que los componentes con matchMedia decidan.
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    registerGsap();

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      // Sin smoothing: scroll nativo. ScrollTrigger sigue disponible para los
      // componentes, que de todos modos desactivan pins/scrubs en reduced-motion.
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenis.on("scroll", ScrollTrigger.update);

    const onTick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    // Medir bien los triggers una vez que cargan fuentes e imágenes.
    const refresh = () => ScrollTrigger.refresh();
    if (document.fonts?.ready) {
      document.fonts.ready.then(refresh);
    }
    window.addEventListener("load", refresh);

    return () => {
      gsap.ticker.remove(onTick);
      window.removeEventListener("load", refresh);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return <>{children}</>;
}
