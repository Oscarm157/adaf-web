import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Masthead } from "@/components/site/Masthead";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { ChapterMark } from "@/components/site/ChapterMark";
import { OfficeStatus } from "@/components/site/OfficeStatus";
import { ContactForm } from "@/components/forms/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig, siteUrl } from "@/lib/seo";
import { CALENDLY_URL } from "@/lib/calendly";

const MAPS_QUERY = encodeURIComponent(
  `${siteConfig.address.street}, ${siteConfig.address.neighborhood}, ${siteConfig.address.locality}, ${siteConfig.address.region}, México`,
);
const MAPS_EMBED = `https://maps.google.com/maps?q=${MAPS_QUERY}&z=16&hl=es&output=embed`;
const MAPS_LINK = "https://maps.app.goo.gl/mYuH7rHaBWbDGXnQ9";
const WA_LINK =
  "https://wa.me/526642521509?text=Hola%2C%20vi%20su%20sitio%20web%20y%20necesito%20informaci%C3%B3n%20sobre%20mi%20asunto.";

// Datos de contacto en formato ledger para la cabecera dark
const heroLedger: { k: string; v: string; href?: string }[] = [
  { k: "Teléfono", v: "664 252 1509", href: "tel:+526642521509" },
  { k: "WhatsApp", v: "Chat directo", href: WA_LINK },
  { k: "Correo", v: "juridicoadaf@gmail.com", href: "mailto:juridicoadaf@gmail.com" },
  { k: "Atención", v: "Lun a vie · 09:00 a 17:00" },
];

export const metadata: Metadata = {
  title: "Contacto · Valoración inicial sin costo",
  description:
    "Escríbenos los detalles de tu asunto. Formulario, WhatsApp y agenda de valoración inicial sin costo. Oficina en Nueva Tijuana.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    type: "website",
    url: `${siteUrl}/contacto`,
    title: "Contacto · ADAF",
    description:
      "Escríbenos los detalles de tu asunto. Formulario, WhatsApp y agenda de valoración inicial sin costo. Oficina en Nueva Tijuana.",
  },
};

export default function ContactoPage() {
  return (
    <>
      <Masthead />
      <Header />
      <main>
        {/* ── A · Cabecera dark image-led con contacto en ledger ────────── */}
        <section
          aria-label="Contacto"
          className="relative bg-ink text-cream overflow-hidden flex flex-col justify-end min-h-[72svh] md:min-h-[78svh]"
        >
          <div className="absolute inset-0">
            <Image
              src="/editorial/hero-frontera-amplia.png"
              alt="Vista lejana de la franja fronteriza al atardecer, con filas de tráileres y aduanas al fondo"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 scrim-dark" aria-hidden="true" />

          <span className="absolute top-8 left-8 w-3 h-3 border-t border-l border-[#C9B85A]/60" />
          <span className="absolute top-8 right-8 w-3 h-3 border-t border-r border-[#C9B85A]/60" />
          <span className="absolute bottom-8 left-8 w-3 h-3 border-b border-l border-[#C9B85A]/60" />
          <span className="absolute bottom-8 right-8 w-3 h-3 border-b border-r border-[#C9B85A]/60" />

          <div className="relative z-10 max-w-[1280px] w-full mx-auto px-6 md:px-10 lg:px-12 pt-32 md:pt-40 pb-16 md:pb-20">
            <nav
              aria-label="breadcrumb"
              className="flex items-center gap-2 text-[12px] text-cream/60 mb-9"
            >
              <Link href="/" className="hover:text-cream transition-colors">
                Inicio
              </Link>
              <span aria-hidden="true" className="text-cream/40">
                /
              </span>
              <span className="text-cream/90">Contacto</span>
            </nav>

            <div className="flex flex-col lg:flex-row lg:items-end gap-12 lg:gap-10">
              {/* Apertura tipográfica */}
              <Reveal className="w-full lg:w-[57%] min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-7">
                  <span aria-hidden="true" className="font-serif italic text-[14px] text-[#C9B85A]">
                    IV
                  </span>
                  <span className="w-[80px] h-px bg-cream/30" />
                  <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-cream/70">
                    Contacto · Valoración inicial sin costo
                  </span>
                </div>

                <h1 className="display-xl font-normal text-cream max-w-[15ch]">
                  Escríbenos los detalles de tu asunto.
                </h1>

                <p className="text-[16px] md:text-[18px] leading-[1.6] text-cream/85 mt-7 max-w-[560px]">
                  Te respondemos dentro de las próximas horas. Te decimos qué tipo de
                  procedimiento es, cuántos días hay para actuar y qué información
                  necesitamos para empezar.
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-10">
                  {CALENDLY_URL ? (
                    <>
                      <a
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-burgundy text-white text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] hover:bg-burgundy-dark transition-colors duration-200"
                      >
                        Agendar 20 minutos
                      </a>
                      <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-transparent text-cream text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] border border-cream/40 hover:bg-cream hover:text-ink transition-colors duration-200"
                      >
                        Hablar por WhatsApp
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center bg-burgundy text-white text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] hover:bg-burgundy-dark transition-colors duration-200"
                      >
                        Hablar por WhatsApp
                      </a>
                      <a
                        href="#formulario"
                        className="inline-flex items-center justify-center gap-1.5 text-[13px] font-medium tracking-[0.06em] uppercase text-cream/90 hover:text-[#C9B85A] transition-colors duration-200 group"
                      >
                        Ir al formulario
                        <ArrowRight
                          className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                          strokeWidth={1.5}
                        />
                      </a>
                    </>
                  )}
                </div>
              </Reveal>

              {/* Ledger de contacto directo sobre la foto */}
              <Reveal
                delay={0.15}
                className="w-full lg:w-[36%] lg:ml-auto min-w-0"
              >
                <span className="block text-[10px] uppercase tracking-[0.22em] font-medium text-[#C9B85A]/90 mb-5">
                  Contacto directo
                </span>
                <dl className="divide-y divide-cream/15 border-y border-cream/15">
                  {heroLedger.map((row) => (
                    <div
                      key={row.k}
                      className="grid grid-cols-3 gap-4 py-4 items-baseline"
                    >
                      <dt className="col-span-1 text-[10px] uppercase tracking-[0.2em] font-medium text-cream/55">
                        {row.k}
                      </dt>
                      <dd className="col-span-2 text-[14px] leading-[1.45] text-cream">
                        {row.href ? (
                          <a
                            href={row.href}
                            target={row.href.startsWith("http") ? "_blank" : undefined}
                            rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="hover:text-[#C9B85A] transition-colors duration-200 break-words"
                          >
                            {row.v}
                          </a>
                        ) : (
                          row.v
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── B · Split asimétrico: formulario claro + panel de oficina ──── */}
        <section id="formulario" className="bg-background pt-20 pb-20 scroll-mt-24">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
            <ChapterMark numeral="I" label="Formulario y atención" />
            <div className="grid grid-cols-12 gap-y-14 gap-x-6 md:gap-12 mt-12 items-start">
              {/* Formulario, columna amplia */}
              <div className="col-span-12 lg:col-span-7">
                <h2 className="font-serif text-[28px] md:text-[32px] leading-[1.12] font-semibold text-navy tracking-[-0.01em] mb-3">
                  Escríbenos los datos de tu caso.
                </h2>
                <p className="text-[14.5px] leading-[1.6] text-muted mb-9 max-w-[440px]">
                  Recibimos el mensaje dentro de las próximas horas y respondemos por la
                  vía que prefieras. Entre más detalle de la notificación, más precisa
                  es la valoración.
                </p>

                <ContactForm />
              </div>

              {/* Panel de contexto: la oficina + estado en vivo */}
              <aside className="col-span-12 lg:col-span-4 lg:col-start-9 lg:border-l lg:border-rule lg:pl-10">
                <Reveal y={20}>
                  <div className="flex items-baseline gap-4 mb-6">
                    <span aria-hidden="true" className="font-serif italic text-[14px] text-olive">
                      II
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium">
                      La oficina
                    </span>
                  </div>
                  <h3 className="font-serif text-[24px] leading-[1.18] font-semibold text-navy tracking-[-0.008em] mb-7">
                    Nueva Tijuana, Baja California.
                  </h3>

                  <dl className="divide-y divide-rule border-y border-rule">
                    <div className="grid grid-cols-3 gap-4 py-4 items-baseline">
                      <dt className="col-span-1 text-[10px] uppercase tracking-[0.2em] font-medium text-muted">
                        Dirección
                      </dt>
                      <dd className="col-span-2 text-[14px] leading-[1.5] text-foreground/85">
                        Blvd. de las Bellas Artes 19213, Local 15, Nueva Tijuana, 22435
                        Tijuana, BC.
                      </dd>
                    </div>
                    <div className="grid grid-cols-3 gap-4 py-4 items-baseline">
                      <dt className="col-span-1 text-[10px] uppercase tracking-[0.2em] font-medium text-muted">
                        Horario
                      </dt>
                      <dd className="col-span-2 text-[14px] leading-[1.5] text-foreground/85">
                        Lunes a viernes · 09:00 a 17:00
                      </dd>
                    </div>
                    <div className="grid grid-cols-3 gap-4 py-4 items-baseline">
                      <dt className="col-span-1 text-[10px] uppercase tracking-[0.2em] font-medium text-muted">
                        Estado
                      </dt>
                      <dd className="col-span-2">
                        <OfficeStatus />
                      </dd>
                    </div>
                  </dl>

                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-6 text-[12px] uppercase tracking-[0.16em] font-medium text-burgundy hover:gap-3 transition-all duration-200"
                  >
                    Cómo llegar
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </a>

                  <div className="mt-9 bg-background-warm border-l-[3px] border-olive px-6 py-5">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-burgundy font-medium mb-2.5">
                      Aviso de confidencialidad
                    </p>
                    <p className="text-[14px] leading-[1.65] text-foreground/85">
                      Lo que compartes con nosotros se maneja bajo el secreto
                      profesional que exige la práctica jurídica. No lo usaremos para
                      ningún fin distinto a la valoración y eventual representación de tu
                      asunto.
                    </p>
                  </div>
                </Reveal>
              </aside>
            </div>
          </div>
        </section>

        {/* ── C · Mapa enmarcado, media editorial a lo ancho ────────────── */}
        <section className="bg-background-warm pt-20 pb-24">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <ChapterMark numeral="III" label="Ubicación" />
                <h2 className="font-serif text-[26px] md:text-[34px] leading-[1.12] font-semibold text-navy tracking-[-0.012em] mt-6">
                  Cómo encontrarnos.
                </h2>
              </div>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.16em] font-medium text-burgundy hover:gap-3 transition-all duration-200 shrink-0"
              >
                Abrir en Google Maps
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </a>
            </div>

            <Reveal y={20}>
              <figure className="relative border border-rule bg-background overflow-hidden">
                <span className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-olive z-10 pointer-events-none" />
                <span className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-olive z-10 pointer-events-none" />
                <span className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-olive z-10 pointer-events-none" />
                <span className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-olive z-10 pointer-events-none" />
                <iframe
                  title="Ubicación de la oficina ADAF en Nueva Tijuana"
                  src={MAPS_EMBED}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="block w-full aspect-[4/3] md:aspect-[21/9] border-0 grayscale-[0.15] contrast-[0.95]"
                />
              </figure>
              <div className="flex items-baseline gap-4 mt-5 px-1">
                <span aria-hidden="true" className="font-serif italic text-[13px] text-olive">
                  III·a
                </span>
                <span className="text-[12px] uppercase tracking-[0.18em] text-muted font-medium">
                  Blvd. de las Bellas Artes 19213, Local 15 · Nueva Tijuana, 22435
                </span>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
