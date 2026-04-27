import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Masthead } from "@/components/site/Masthead";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { PageHero } from "@/components/page/PageHero";
import { allServices } from "@/components/service/data";
import { siteUrl } from "@/lib/seo";

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

        <section className="bg-background pt-20 pb-24">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-foreground/15">
              {allServices.map((s, i) => (
                <Link
                  key={s.slug}
                  href={`/servicios/${s.slug}`}
                  className={`group block transition-colors duration-300 hover:bg-background-warm border-b border-rule ${
                    i % 2 === 0 ? "md:border-r border-rule" : ""
                  }`}
                >
                  <div className="px-2 md:px-7 py-8 group-hover:px-4 md:group-hover:px-8 transition-[padding] duration-300">
                    <div className="flex items-baseline gap-4 mb-3.5">
                      <span
                        aria-hidden="true"
                        className="font-serif italic text-[15px] font-medium text-olive tracking-wide w-7 shrink-0"
                      >
                        {s.numeral}
                      </span>
                      <span className="text-[13px] uppercase tracking-[0.14em] text-navy font-medium">
                        {s.label}
                      </span>
                    </div>
                    <h3 className="font-serif text-[19px] md:text-[24px] lg:text-[26px] leading-[1.3] md:leading-[1.22] font-medium text-foreground tracking-[-0.005em] group-hover:text-burgundy transition-colors duration-300 ml-11">
                      {s.h1.replace(/\.$/, "")}
                    </h3>
                    <p className="text-[14.5px] leading-[1.55] text-muted mt-3 ml-11 max-w-[480px]">
                      {s.lede}
                    </p>
                    <div className="ml-11 mt-5 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] font-medium text-burgundy group-hover:gap-3 transition-all duration-300">
                      Ver materia
                      <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
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
              <a
                href="https://wa.me/526646475018"
                className="inline-flex items-center justify-center bg-burgundy text-white text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] hover:bg-burgundy-dark transition-colors duration-200"
              >
                Hablar por WhatsApp
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center bg-transparent text-background text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] border border-background/40 hover:bg-background hover:text-navy transition-colors duration-200"
              >
                Enviar mensaje
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
