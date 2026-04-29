import Link from "next/link";
import Image from "next/image";

const areas = [
  { href: "/servicios/defensa-aduanera", label: "Defensa aduanera" },
  { href: "/servicios/defensa-fiscal-sat", label: "Defensa fiscal SAT" },
  { href: "/servicios/defensa-imss-infonavit", label: "IMSS / INFONAVIT" },
  { href: "/servicios/defensa-sanitaria", label: "Sanitaria · COFEPRIS / COEPRIS" },
  { href: "/servicios/amparos-fiscales", label: "Amparos fiscales" },
  { href: "/servicios/defensa-penal-fiscal", label: "Penal-fiscal" },
];

const despacho = [
  { href: "/nosotros", label: "Nosotros" },
  { href: "/resultados", label: "Resultados" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "Preguntas frecuentes" },
  { href: "/contacto", label: "Contacto" },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-background border-t border-foreground/15 pt-20 pb-12">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-12 gap-y-10 gap-x-6 md:gap-12">
          {/* Brand */}
          <div className="col-span-12 md:col-span-4">
            <Link href="/" className="inline-flex items-center" aria-label="ADAF, Asesoría y Defensa Aduanera Fiscal. Inicio">
              <Image
                src="/logo-adaf.png"
                alt="ADAF · Asesoría y Defensa Aduanera Fiscal"
                width={500}
                height={500}
                className="h-14 w-auto select-none"
              />
            </Link>

            <div className="mt-10 space-y-4 text-[14px] text-foreground/80 leading-[1.55]">
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium mb-2">
                  Oficina
                </p>
                <p>
                  Blvd. de las Bellas Artes 19213, Local 15
                  <br />
                  Nueva Tijuana, 22435 Tijuana, BC
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium mb-2">
                  Contacto
                </p>
                <p>664 647 5018</p>
                <p>juridicoadaf@gmail.com</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium mb-2">
                  Horario
                </p>
                <p>Lunes a viernes · 09:00 a 17:00</p>
              </div>
            </div>
          </div>

          {/* Areas */}
          <div className="col-span-6 md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium mb-6">
              Áreas
            </p>
            <ul className="space-y-3">
              {areas.map((a) => (
                <li key={a.href}>
                  <Link
                    href={a.href}
                    className="text-[14px] text-foreground/80 hover:text-burgundy transition-colors duration-200"
                  >
                    {a.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Despacho */}
          <div className="col-span-6 md:col-span-2">
            <p className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium mb-6">
              Despacho
            </p>
            <ul className="space-y-3">
              {despacho.map((d) => (
                <li key={d.href}>
                  <Link
                    href={d.href}
                    className="text-[14px] text-foreground/80 hover:text-burgundy transition-colors duration-200"
                  >
                    {d.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog */}
          <div className="col-span-12 md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium mb-6">
              Blog
            </p>
            <p className="font-serif italic text-[14px] text-foreground/85 leading-[1.5] mb-5">
              Publicamos análisis sobre reformas, criterios y casos relevantes
              en nuestro blog.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center w-full h-11 bg-navy text-background text-[12px] uppercase tracking-[0.12em] font-medium rounded-[2px] hover:bg-burgundy transition-colors duration-200"
            >
              Ir al blog
            </Link>
          </div>
        </div>

        <div className="border-t border-rule mt-16 pt-8 flex flex-wrap items-center justify-between gap-4 text-[11.5px] uppercase tracking-[0.14em] text-muted">
          <span>© {year} · ADAF</span>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/aviso-de-privacidad" className="hover:text-burgundy transition-colors">
              Aviso de privacidad
            </Link>
            <Link href="/terminos-y-condiciones" className="hover:text-burgundy transition-colors">
              Términos y condiciones
            </Link>
            <span className="font-serif italic normal-case tracking-normal text-[12px]">
              Tijuana · frontera norte
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
