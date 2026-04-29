"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CALENDLY_URL } from "@/lib/calendly";

const navLinks = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/resultados", label: "Resultados" },
  { href: "/blog", label: "Notas" },
  { href: "/faq", label: "FAQ" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Cerrar el drawer cuando cambia la ruta
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Bloquear scroll del body cuando drawer abierto
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-rule">
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 h-[72px] md:h-[84px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 leading-none" aria-label="ADAF · Asesoría y Defensa Aduanera Fiscal — inicio">
            <Image
              src="/logo-adaf.png"
              alt="ADAF"
              width={500}
              height={500}
              priority
              className="h-12 md:h-14 w-auto select-none"
            />
            <span className="hidden xl:inline-block font-serif italic text-[13px] text-muted leading-tight max-w-[180px]">
              Asesoría y Defensa Aduanera Fiscal
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-9">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-[13.5px] font-medium text-navy hover:text-burgundy transition-colors duration-200 group"
              >
                <span
                  aria-hidden="true"
                  className="font-serif italic text-olive text-[10px] mr-1.5 align-baseline"
                >
                  {romanize(i + 1)}
                </span>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {CALENDLY_URL ? (
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center justify-center bg-burgundy text-white text-[12px] xl:text-[13px] font-medium tracking-[0.04em] uppercase px-4 xl:px-5 h-10 rounded-[2px] hover:bg-burgundy-dark transition-colors duration-200 whitespace-nowrap"
              >
                <span className="lg:hidden xl:inline">Agenda tu valoración</span>
                <span className="hidden lg:inline xl:hidden">Agenda valoración</span>
              </a>
            ) : (
              <Link
                href="/contacto"
                className="hidden md:inline-flex items-center justify-center bg-burgundy text-white text-[12px] xl:text-[13px] font-medium tracking-[0.04em] uppercase px-4 xl:px-5 h-10 rounded-[2px] hover:bg-burgundy-dark transition-colors duration-200 whitespace-nowrap"
              >
                <span className="lg:hidden xl:inline">Agenda tu valoración</span>
                <span className="hidden lg:inline xl:hidden">Agenda valoración</span>
              </Link>
            )}
            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={open}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 text-navy"
            >
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="lg:hidden fixed inset-0 z-[60] bg-navy/30 backdrop-blur-sm"
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 36 }}
              role="dialog"
              aria-modal="true"
              aria-label="Menú principal"
              className="lg:hidden fixed top-0 right-0 bottom-0 z-[70] w-[88%] max-w-[400px] bg-background shadow-[-16px_0_60px_-30px_rgba(15,42,71,0.4)] flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-[72px] border-b border-rule">
                <Image
                  src="/logo-adaf.png"
                  alt="ADAF"
                  width={500}
                  height={500}
                  className="h-10 w-auto select-none"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Cerrar menú"
                  className="inline-flex items-center justify-center w-10 h-10 -mr-2 text-navy"
                >
                  <X className="w-6 h-6" strokeWidth={1.5} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-6 py-8">
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium mb-5">
                  Secciones
                </p>
                <ul className="space-y-1">
                  {navLinks.map((link, i) => {
                    const active = pathname === link.href;
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={`flex items-baseline gap-4 py-3 border-b border-rule transition-colors duration-200 ${
                            active ? "text-burgundy" : "text-navy hover:text-burgundy"
                          }`}
                        >
                          <span
                            aria-hidden="true"
                            className="font-serif italic text-olive text-[12px] w-7"
                          >
                            {romanize(i + 1)}
                          </span>
                          <span className="font-serif text-[22px] tracking-[-0.008em]">
                            {link.label}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <div className="mt-10">
                  {CALENDLY_URL ? (
                    <a
                      href={CALENDLY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center bg-burgundy text-white text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] hover:bg-burgundy-dark transition-colors duration-200"
                    >
                      Agenda tu valoración
                    </a>
                  ) : (
                    <Link
                      href="/contacto"
                      className="inline-flex w-full items-center justify-center bg-burgundy text-white text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] hover:bg-burgundy-dark transition-colors duration-200"
                    >
                      Agenda tu valoración
                    </Link>
                  )}
                  <a href="https://wa.me/526646475018" target="_blank" rel="noopener noreferrer"
                    className="mt-3 inline-flex w-full items-center justify-center bg-transparent text-navy text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] border border-navy/40 hover:bg-navy hover:text-background transition-colors duration-200"
                  >
                    Hablar por WhatsApp
                  </a>
                </div>

                <div className="mt-10 pt-6 border-t border-rule space-y-1.5">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium">
                    Contacto directo
                  </p>
                  <a href="tel:+526646475018" target="_blank" rel="noopener noreferrer"
                    className="block font-serif text-[18px] text-navy mt-2 hover:text-burgundy transition-colors"
                  >
                    664 647 5018
                  </a>
                  <p className="text-[12px] text-muted">
                    Lun a vie · 09:00 a 17:00
                  </p>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function romanize(n: number): string {
  const r = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  return r[n - 1] ?? String(n);
}
