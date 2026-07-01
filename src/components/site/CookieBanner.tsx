"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const STORAGE_KEY = "adaf_cookies_ack";
// El panel (/admin, /login, /change-password) es una herramienta interna del
// despacho, no la visita un cliente anónimo: el aviso de cookies no aplica ahí.
const HIDDEN_PREFIXES = ["/admin", "/login", "/change-password"];

export function CookieBanner() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      // Si el almacenamiento no está disponible, no mostramos el aviso.
    }
  }, []);

  if (HIDDEN_PREFIXES.some((p) => pathname?.startsWith(p))) return null;

  function dismiss() {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Ignorar: el usuario bloqueó el almacenamiento.
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-[60] px-4 pb-4 pt-2 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto flex max-w-[1080px] flex-col gap-4 rounded-[3px] border border-white/10 bg-navy px-5 py-5 text-background shadow-[0_-4px_40px_-12px_rgba(15,42,71,0.55)] sm:flex-row sm:items-center sm:gap-6 sm:px-7">
        <div className="min-w-0 flex-1">
          <p className="text-[10px] uppercase tracking-[0.22em] text-olive font-medium mb-1.5">
            Cookies
          </p>
          <p className="text-[13.5px] leading-[1.6] text-background/85">
            Este sitio no usa cookies de rastreo ni de terceros. Solo
            empleamos una cookie funcional para el acceso al área
            administrativa privada. Puedes leer el detalle en nuestra{" "}
            <Link
              href="/politica-de-cookies"
              className="text-background underline underline-offset-2 decoration-olive/70 hover:decoration-olive transition-colors"
            >
              política de cookies
            </Link>
            .
          </p>
        </div>
        <button
          type="button"
          onClick={dismiss}
          className="shrink-0 inline-flex items-center justify-center h-11 px-6 bg-background text-navy text-[12px] uppercase tracking-[0.12em] font-medium rounded-[2px] hover:bg-olive hover:text-navy transition-colors duration-200"
        >
          Entendido
        </button>
      </div>
    </div>
  );
}
