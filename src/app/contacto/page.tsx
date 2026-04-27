import type { Metadata } from "next";
import Link from "next/link";
import { Masthead } from "@/components/site/Masthead";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { ChapterMark } from "@/components/site/ChapterMark";
import { PageHero } from "@/components/page/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contacto · Valoración inicial sin costo",
  description:
    "Cuéntanos lo esencial sobre tu asunto. Formulario, WhatsApp y agenda de valoración inicial sin costo. Oficina en Nueva Tijuana.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    type: "website",
    url: `${siteUrl}/contacto`,
    title: "Contacto · ADAF",
    description:
      "Formulario, WhatsApp y agenda de valoración inicial sin costo.",
  },
};

const inputClass =
  "w-full bg-background-warm border-b border-foreground/30 h-12 px-4 text-[15px] text-foreground placeholder:text-muted focus:outline-none focus:border-burgundy transition-colors";

export default function ContactoPage() {
  return (
    <>
      <Masthead />
      <Header />
      <main>
        <PageHero
          crumbs={[{ label: "Inicio", href: "/" }, { label: "Contacto" }]}
          numeral="IV"
          label="Contacto"
          h1="Cuéntanos lo esencial sobre tu asunto."
          lede="Te respondemos en horario hábil con una valoración inicial sin costo. Te decimos qué tipo de procedimiento es, cuántos días hay para actuar y qué información necesitamos para empezar."
        />

        {/* I — Bloques de contacto */}
        <section className="bg-background pt-20 pb-20">
          <div className="max-w-[1280px] mx-auto px-12">
            <ChapterMark numeral="I" label="Vías de contacto" />
            <div className="grid grid-cols-12 gap-12 mt-12">
              {/* Bloque 1: Formulario */}
              <div className="col-span-12 lg:col-span-5">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="font-serif italic text-[14px] text-olive">
                    I
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium">
                    Formulario
                  </span>
                </div>
                <h2 className="font-serif text-[28px] leading-[1.15] font-semibold text-navy tracking-[-0.008em] mb-3">
                  Escríbenos los datos de tu caso.
                </h2>
                <p className="text-[14.5px] leading-[1.6] text-muted mb-8 max-w-[420px]">
                  Recibimos el mensaje en horario hábil y respondemos por la
                  vía que prefieras.
                </p>

                <ContactForm />
              </div>

              {/* Bloque 2: WhatsApp */}
              <div className="col-span-12 lg:col-span-3 lg:border-l lg:border-rule lg:pl-8">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="font-serif italic text-[14px] text-olive">
                    II
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium">
                    WhatsApp
                  </span>
                </div>
                <h2 className="font-serif text-[28px] leading-[1.15] font-semibold text-navy tracking-[-0.008em] mb-3">
                  Mensaje directo.
                </h2>
                <p className="text-[14.5px] leading-[1.6] text-muted mb-7 max-w-[300px]">
                  Vía rápida para casos en los que el plazo legal está
                  corriendo y necesitas orientación inmediata.
                </p>

                <a
                  href="https://wa.me/526646475018?text=Hola%2C%20vi%20su%20sitio%20web%20y%20necesito%20informaci%C3%B3n%20sobre%20mi%20asunto."
                  className="inline-flex items-center justify-center bg-transparent text-navy text-[13px] font-medium tracking-[0.06em] uppercase px-6 h-12 rounded-[2px] border border-navy/80 hover:bg-navy hover:text-background transition-colors duration-200 mb-8"
                >
                  Abrir WhatsApp
                </a>

                <dl className="space-y-4 border-t border-rule pt-6">
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium mb-1">
                      Teléfono
                    </dt>
                    <dd>
                      <a
                        href="tel:+526646475018"
                        className="font-serif text-[18px] text-navy hover:text-burgundy transition-colors"
                      >
                        664 647 5018
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium mb-1">
                      Email
                    </dt>
                    <dd>
                      <a
                        href="mailto:juridicoadaf@gmail.com"
                        className="text-[14.5px] text-foreground hover:text-burgundy transition-colors break-all"
                      >
                        juridicoadaf@gmail.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              {/* Bloque 3: Agendar */}
              <div
                id="agendar"
                className="col-span-12 lg:col-span-4 lg:border-l lg:border-rule lg:pl-8"
              >
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="font-serif italic text-[14px] text-olive">
                    III
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium">
                    Agenda
                  </span>
                </div>
                <h2 className="font-serif text-[28px] leading-[1.15] font-semibold text-navy tracking-[-0.008em] mb-3">
                  Agendar valoración 20 min.
                </h2>
                <p className="text-[14.5px] leading-[1.6] text-foreground/85 mb-5 max-w-[360px]">
                  Bloques de veinte minutos por videollamada o teléfono para
                  revisar la notificación que recibiste e identificar plazos y
                  vías de defensa.
                </p>
                <p className="text-[14px] leading-[1.6] text-muted mb-8 max-w-[360px]">
                  La valoración inicial es sin costo. Si decides avanzar, los
                  honorarios se formalizan por escrito antes de iniciar
                  cualquier trámite.
                </p>

                <button
                  type="button"
                  disabled
                  className="inline-flex items-center justify-center bg-transparent text-muted text-[13px] font-medium tracking-[0.06em] uppercase px-6 h-12 rounded-[2px] border border-foreground/20 cursor-not-allowed"
                >
                  [Calendly: pendiente del cliente]
                </button>

                <p className="text-[12px] leading-[1.55] text-muted mt-5 max-w-[320px]">
                  Mientras integramos la herramienta de agenda, escríbenos por
                  WhatsApp o formulario y coordinamos el horario.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* II — Aviso de confidencialidad */}
        <section className="bg-background pb-20">
          <div className="max-w-[1280px] mx-auto px-12">
            <aside className="bg-background-warm border-l-[3px] border-olive px-8 py-7 max-w-[1080px]">
              <p className="text-[10px] uppercase tracking-[0.22em] text-burgundy font-medium mb-3">
                Aviso de confidencialidad
              </p>
              <p className="text-[15.5px] leading-[1.7] text-foreground/85 max-w-[820px]">
                La información que compartes con nosotros se maneja bajo el
                secreto profesional que exige la práctica jurídica. No la
                usaremos para ningún fin distinto a la valoración y eventual
                representación de tu asunto.
              </p>
            </aside>
          </div>
        </section>

        {/* III — Oficina */}
        <section className="bg-background-warm pt-20 pb-20">
          <div className="max-w-[1280px] mx-auto px-12">
            <ChapterMark numeral="II" label="Oficina" />
            <div className="grid grid-cols-12 gap-12 mt-10">
              <div className="col-span-12 lg:col-span-5">
                <h2 className="font-serif text-[34px] leading-[1.12] font-semibold text-navy tracking-[-0.012em] mb-8">
                  Nueva Tijuana, Baja California.
                </h2>
                <dl className="space-y-7 border-t border-foreground/15 pt-7">
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium mb-2">
                      Dirección
                    </dt>
                    <dd className="text-[16px] leading-[1.55] text-foreground/85 max-w-[360px]">
                      Blvd. de las Bellas Artes 19213, Local 15, Nueva
                      Tijuana, 22435 Tijuana, BC.
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium mb-2">
                      Teléfono
                    </dt>
                    <dd>
                      <a
                        href="tel:+526646475018"
                        className="font-serif text-[20px] text-navy hover:text-burgundy transition-colors"
                      >
                        664 647 5018
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium mb-2">
                      Email
                    </dt>
                    <dd>
                      <a
                        href="mailto:juridicoadaf@gmail.com"
                        className="text-[16px] text-foreground hover:text-burgundy transition-colors"
                      >
                        juridicoadaf@gmail.com
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium mb-2">
                      Horario
                    </dt>
                    <dd className="text-[16px] leading-[1.55] text-foreground/85">
                      Lunes a viernes · 09:00 — 17:00
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="col-span-12 lg:col-span-7">
                <div className="border border-rule overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3373.5!2d-117.04!3d32.51!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2zQmx2ZC4gZGUgbGFzIEJlbGxhcyBBcnRlcyAxOTIxMywgVGlqdWFuYQ!5e0!3m2!1ses!2smx!4v1700000000000"
                    width="100%"
                    height="460"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación oficina ADAF en Nueva Tijuana"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
