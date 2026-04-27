import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Masthead } from "@/components/site/Masthead";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { PageHero } from "@/components/page/PageHero";
import { Prose, P, H2, UL, LI, Note } from "@/components/page/Prose";
import { LeadMagnetForm } from "@/components/forms/LeadMagnetForm";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Las primeras 72 horas · Guía descargable",
  description:
    "Guía práctica del despacho ADAF para los primeros días tras una visita del SAT, un embargo en aduana o un crédito fiscal. Pasos, plazos y errores frecuentes.",
  alternates: { canonical: "/recursos/72-horas" },
  openGraph: {
    title: "Las primeras 72 horas · ADAF",
    description:
      "Guía práctica para responder los primeros días tras una visita del SAT, un embargo en aduana o un crédito fiscal.",
    url: `${siteUrl}/recursos/72-horas`,
    type: "article",
  },
};

const capitulos = [
  "Cómo identificar el tipo de procedimiento desde la primera notificación.",
  "Lo que conviene hacer en las primeras horas y lo que conviene evitar.",
  "Lo que NO debes firmar ni declarar verbalmente sin asesoría.",
  "Plazos legales clave: PAMA, recurso de revocación, juicio de nulidad y amparo.",
  "Documentos que necesitas reunir según el procedimiento.",
  "Errores comunes que cierran las vías de defensa y cuándo es urgente contactar a un abogado.",
];

export default function Recurso72HorasPage() {
  return (
    <>
      <Masthead />
      <Header />
      <main>
        <PageHero
          numeral="VI"
          label="Guía descargable"
          h1="Las primeras 72 horas: guía práctica para el contribuyente."
          lede="Una guía de doce páginas redactada por el despacho para tres escenarios concretos: una visita domiciliaria del SAT, un embargo precautorio en aduana y la notificación de un crédito fiscal. Material de orientación; no sustituye la asesoría sobre un caso específico."
          crumbs={[
            { label: "Inicio", href: "/" },
            { label: "Recursos" },
            { label: "Las primeras 72 horas" },
          ]}
        />

        <section className="bg-background pt-20 pb-24">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
            <div className="grid grid-cols-12 gap-y-10 gap-x-6 md:gap-12 items-start">
              {/* Cover */}
              <div className="col-span-12 lg:col-span-5">
                <div className="relative aspect-[3/4] overflow-hidden shadow-[0_24px_60px_-30px_rgba(15,42,71,0.35)]">
                  <Image
                    src="/portada-72-horas.jpg"
                    alt="Portada de Las primeras 72 horas, guía del contribuyente ADAF"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Cuerpo + form */}
              <div className="col-span-12 lg:col-span-7 lg:pl-4">
                <Prose>
                  <H2>Por qué redactamos esta guía</H2>
                  <P>
                    En la práctica del despacho recibimos llamadas que llegan
                    el día tres o el día siete después de una notificación,
                    cuando los plazos legales para responder ya se redujeron
                    a la mitad. Esta guía existe para que el contribuyente,
                    antes de contratar a un abogado, tenga claridad sobre
                    qué está enfrentando, qué firmar, qué no firmar y qué
                    plazos están corriendo desde la primera diligencia.
                  </P>

                  <H2>Qué incluye</H2>
                  <UL>
                    {capitulos.map((c) => (
                      <LI key={c}>{c}</LI>
                    ))}
                  </UL>

                  <H2>Para quién es</H2>
                  <P>
                    Para empresarios, importadores, transportistas y
                    profesionistas con actividad empresarial en Tijuana,
                    Tecate, Rosarito y la zona fronteriza norte que reciben
                    una visita domiciliaria del SAT, una resolución de
                    crédito fiscal, una cédula del IMSS, un acta de inicio
                    de PAMA en aduana o una verificación de COEPRIS o SICT.
                  </P>
                  <P>
                    También para contadores y administradores que necesitan
                    una referencia clara de los plazos y de los pasos
                    iniciales antes de que el procedimiento avance.
                  </P>
                </Prose>

                <div className="mt-12 max-w-[560px] border-t border-rule pt-10">
                  <p className="text-[10px] uppercase tracking-[0.22em] font-medium text-muted mb-2">
                    Descarga la guía
                  </p>
                  <LeadMagnetForm withConsent />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Aviso del documento */}
        <section className="bg-background-warm border-y border-rule">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 py-16">
            <div className="max-w-[820px]">
              <Prose>
                <Note title="Aviso del documento">
                  Este material es orientación general. No sustituye la
                  asesoría profesional sobre un caso concreto. Si tu
                  situación está en proceso, contáctanos antes de actuar.
                </Note>
              </Prose>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-navy text-background relative overflow-hidden">
          <span className="absolute top-8 left-8 w-3 h-3 border-t border-l border-olive/60" />
          <span className="absolute top-8 right-8 w-3 h-3 border-t border-r border-olive/60" />
          <span className="absolute bottom-8 left-8 w-3 h-3 border-b border-l border-olive/60" />
          <span className="absolute bottom-8 right-8 w-3 h-3 border-b border-r border-olive/60" />

          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 py-24">
            <div className="flex items-baseline gap-4 mb-10 justify-center">
              <span aria-hidden="true" className="font-serif italic text-[14px] text-olive">
                VII
              </span>
              <span className="w-[80px] h-[1px] bg-background/30" />
              <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-background/60">
                Contacto
              </span>
            </div>

            <div className="max-w-[820px] mx-auto text-center">
              <h2 className="font-serif text-[28px] md:text-[34px] lg:text-[40px] leading-[1.2] md:leading-[1.12] font-semibold tracking-[-0.012em]">
                Si lo que enfrentas no admite espera, escríbenos.
              </h2>
              <p className="text-[17px] text-background/80 mt-5 leading-[1.55] max-w-[600px] mx-auto">
                La guía es un mapa general; cada expediente requiere
                lectura propia. Te respondemos en horario hábil con una
                valoración inicial sin costo.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
                <a href="https://wa.me/526646475018" target="_blank" rel="noopener noreferrer"
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
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
