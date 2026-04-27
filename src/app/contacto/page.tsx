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
    "Escríbenos los detalles de tu asunto. Formulario, WhatsApp y agenda de valoración inicial sin costo. Oficina en Nueva Tijuana.",
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
          h1="Escríbenos los detalles de tu asunto."
          lede="Te respondemos en horario hábil con una valoración inicial sin costo. Te decimos qué tipo de procedimiento es, cuántos días hay para actuar y qué información necesitamos para empezar."
        />

        {/* I — Bloques de contacto */}
        <section className="bg-background pt-20 pb-20">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
            <ChapterMark numeral="I" label="Vías de contacto" />
            <div className="grid grid-cols-12 gap-y-10 gap-x-6 md:gap-12 mt-12">
              {/* Bloque 1: Formulario */}
              <div className="col-span-12 lg:col-span-7">
                <div className="flex items-baseline gap-4 mb-6">
                  <span aria-hidden="true" className="font-serif italic text-[14px] text-olive">
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
              <div
                id="agendar"
                className="col-span-12 lg:col-span-5 lg:border-l lg:border-rule lg:pl-8"
              >
                <div className="flex items-baseline gap-4 mb-6">
                  <span aria-hidden="true" className="font-serif italic text-[14px] text-olive">
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

                <a href="https://wa.me/526646475018?text=Hola%2C%20vi%20su%20sitio%20web%20y%20necesito%20informaci%C3%B3n%20sobre%20mi%20asunto." target="_blank" rel="noopener noreferrer"
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
                      <a href="tel:+526646475018" target="_blank" rel="noopener noreferrer"
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
                      <a href="mailto:juridicoadaf@gmail.com" target="_blank" rel="noopener noreferrer"
                        className="text-[14.5px] text-foreground hover:text-burgundy transition-colors break-all"
                      >
                        juridicoadaf@gmail.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

            </div>
          </div>
        </section>

        {/* II — Aviso de confidencialidad */}
        <section className="bg-background pb-20">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
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
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
            <ChapterMark numeral="II" label="Oficina" />
            <div className="grid grid-cols-12 gap-y-10 gap-x-6 md:gap-12 mt-10">
              <div className="col-span-12 lg:col-span-5">
                <h2 className="font-serif text-[24px] md:text-[28px] lg:text-[34px] leading-[1.18] md:leading-[1.12] font-semibold text-navy tracking-[-0.012em] mb-8">
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
                      <a href="tel:+526646475018" target="_blank" rel="noopener noreferrer"
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
                      <a href="mailto:juridicoadaf@gmail.com" target="_blank" rel="noopener noreferrer"
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
                      Lunes a viernes · 09:00 a 17:00
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="col-span-12 lg:col-span-7">
                <a
                  href="https://maps.app.goo.gl/mYuH7rHaBWbDGXnQ9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-rule bg-background-warm hover:bg-background transition-colors duration-200 px-8 py-12 group h-full"
                >
                  <p className="text-[10px] uppercase tracking-[0.22em] font-medium text-burgundy mb-4">
                    Ubicación
                  </p>
                  <h3 className="font-serif text-[22px] md:text-[26px] leading-[1.2] font-semibold text-navy tracking-[-0.008em]">
                    Blvd. de las Bellas Artes 19213, Local 15
                  </h3>
                  <p className="text-[15px] text-foreground/80 mt-2 leading-[1.55]">
                    Nueva Tijuana, 22435 Tijuana, Baja California, México.
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.16em] font-medium text-burgundy mt-8 group-hover:gap-3 transition-all duration-200">
                    Abrir en Google Maps
                    <span aria-hidden="true">→</span>
                  </span>
                </a>
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
