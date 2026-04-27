import Link from "next/link";

const navLinks = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/resultados", label: "Resultados" },
  { href: "/blog", label: "Notas" },
  { href: "/faq", label: "FAQ" },
  { href: "/contacto", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-rule">
      <div className="max-w-[1280px] mx-auto px-12 h-[84px] flex items-center justify-between">
        <Link href="/" className="flex items-baseline gap-3 leading-none">
          <span className="font-serif text-[28px] font-bold text-navy tracking-[-0.012em]">
            ADAF
          </span>
          <span className="hidden lg:inline-block w-[1px] h-[14px] bg-rule" />
          <span className="hidden lg:inline-block font-serif italic text-[13px] text-muted leading-none">
            Asesoría y Defensa Aduanera Fiscal
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
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

        <Link
          href="/contacto"
          className="hidden md:inline-flex items-center justify-center bg-burgundy text-white text-[13px] font-medium tracking-[0.04em] uppercase px-5 h-10 rounded-[2px] hover:bg-burgundy-dark transition-colors duration-200"
        >
          Agenda tu valoración
        </Link>
      </div>
    </header>
  );
}

function romanize(n: number): string {
  const r = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
  return r[n - 1] ?? String(n);
}
