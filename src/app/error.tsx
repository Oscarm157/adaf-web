"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] bg-background flex items-center px-6 md:px-10 lg:px-12">
      <div className="max-w-[640px] mx-auto text-center py-20">
        <p
          aria-hidden="true"
          className="font-serif italic text-[14px] text-olive mb-6"
        >
          Aviso técnico
        </p>
        <h1 className="font-serif text-[32px] md:text-[44px] leading-[1.1] font-semibold text-navy tracking-[-0.014em]">
          Ocurrió un error inesperado.
        </h1>
        <p className="text-[16px] leading-[1.6] text-foreground/80 mt-5">
          Estamos al tanto. Puedes intentar de nuevo o regresar al inicio. Si
          el asunto es urgente, escríbenos por WhatsApp.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center bg-burgundy text-white text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] hover:bg-burgundy-dark transition-colors duration-200"
          >
            Intentar de nuevo
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center bg-transparent text-navy text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] border border-navy/40 hover:bg-navy hover:text-background transition-colors duration-200"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
