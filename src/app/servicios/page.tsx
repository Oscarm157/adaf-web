import type { Metadata } from "next";
import Link from "next/link";
import { Masthead } from "@/components/site/Masthead";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { PageHero } from "@/components/page/PageHero";
import { ServiciosList } from "@/components/service/ServiciosList";
import { siteUrl } from "@/lib/seo";
import { CALENDLY_URL } from "@/lib/calendly";

export const metadata: Metadata = {
  title: "Servicios · Áreas de práctica",
  description:
    "Diez áreas de defensa especializada: aduanera, fiscal SAT, IMSS / INFONAVIT, sanitaria COFEPRIS / COEPRIS, SICT autotransporte, amparos, comercio exterior, recurso · juicio de nulidad, penal-fiscal y asesoría preventiva.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios · ADAF Asesoría y Defensa Aduanera Fiscal",
    description:
      "Diez áreas de defensa especializada en materia fiscal, aduanera y administrativa.",
    url: `${siteUrl}/servicios`,
  },
};

export default function ServiciosHub() {
  return (
    <>
      <Masthead />
      <Header />
      <main>
        <PageHero
          crumbs={[{ label: "Inicio", href: "/" }, { label: "Servicios" }]}
          numeral="II"
          label="Áreas de práctica"
          h1="Diez áreas de defensa especializada."
          lede="Organizamos la práctica por tipo de procedimiento y autoridad competente. Cada materia incluye plazos legales, documentación necesaria y la estrategia de defensa que aplicamos."
        />

        <section className="bg-background pt-14 md:pt-20 pb-20 md:pb-24">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
            <ServiciosList />
          </div>
        </section>

        <section className="bg-navy text-background relative overflow-hidden">
          <span className="absolute top-8 left-8 w-3 h-3 border-t border-l border-olive/60" />
          <span className="absolute top-8 right-8 w-3 h-3 border-t border-r border-olive/60" />
          <span className="absolute bottom-8 left-8 w-3 h-3 border-b border-l border-olive/60" />
          <span className="absolute bottom-8 right-8 w-3 h-3 border-b border-r border-olive/60" />
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 py-20 text-center">
            <h2 className="font-serif text-[26px] md:text-[30px] lg:text-[36px] leading-[1.18] md:leading-[1.12] font-semibold tracking-[-0.012em]">
              ¿No estás seguro de qué materia aplica a tu caso?
            </h2>
            <p className="text-[16px] text-background/80 mt-5 leading-[1.55] max-w-[600px] mx-auto">
              Cuéntanos la notificación o resolución que recibiste.
              Identificamos la vía procedente y los plazos que están corriendo.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-9">
              {CALENDLY_URL && (
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-burgundy text-white text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] hover:bg-burgundy-dark transition-colors duration-200"
                >
                  Agendar 20 minutos
                </a>
              )}
              <a
                href="https://wa.me/526646475018"
                target="_blank"
                rel="noopener noreferrer"
                className={
                  CALENDLY_URL
                    ? "inline-flex items-center justify-center bg-transparent text-background text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] border border-background/40 hover:bg-background hover:text-navy transition-colors duration-200"
                    : "inline-flex items-center justify-center bg-burgundy text-white text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] hover:bg-burgundy-dark transition-colors duration-200"
                }
              >
                Hablar por WhatsApp
              </a>
              {!CALENDLY_URL && (
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center bg-transparent text-background text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] border border-background/40 hover:bg-background hover:text-navy transition-colors duration-200"
                >
                  Enviar mensaje
                </Link>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
