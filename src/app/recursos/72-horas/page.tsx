import Link from "next/link";
import type { Metadata } from "next";
import { Masthead } from "@/components/site/Masthead";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { PageHero } from "@/components/page/PageHero";
import { Prose, P, H2, UL, LI, Note } from "@/components/page/Prose";
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
          <div className="max-w-[1280px] mx-auto px-12">
            <div className="grid grid-cols-12 gap-12 items-start">
              {/* Mockup */}
              <div className="col-span-12 lg:col-span-5">
                <div className="relative bg-background-warm aspect-[3/4] flex flex-col">
                  <span className="absolute top-3 left-3 w-[8px] h-[8px] border-t border-l border-olive" />
                  <span className="absolute top-3 right-3 w-[8px] h-[8px] border-t border-r border-olive" />
                  <span className="absolute bottom-3 left-3 w-[8px] h-[8px] border-b border-l border-olive" />
                  <span className="absolute bottom-3 right-3 w-[8px] h-[8px] border-b border-r border-olive" />

                  <div className="flex-1 flex flex-col justify-between px-12 py-14">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium">
                        ADAF · Edición 2026
                      </p>
                      <span className="block w-[40px] h-[1px] bg-olive mt-3" />
                    </div>

                    <div>
                      <p className="text-[12px] uppercase tracking-[0.16em] text-burgundy font-medium">
                        Guía del contribuyente
                      </p>
                      <h3 className="font-serif text-[40px] leading-[1.05] font-semibold text-navy mt-4 tracking-[-0.014em]">
                        Las primeras 72 horas.
                      </h3>
                      <p className="text-[15px] text-foreground/75 mt-6 leading-[1.55]">
                        Qué hacer ante una visita del SAT, un embargo en
                        aduana o un crédito fiscal.
                      </p>
                    </div>

                    <div className="flex items-end justify-between">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-muted">
                        12 páginas · Tijuana
                      </p>
                      <span className="font-serif italic text-[12px] text-olive">
                        Folio 1
                      </span>
                    </div>
                  </div>
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

                <form className="mt-12 max-w-[560px] border-t border-rule pt-10">
                  <p className="text-[10px] uppercase tracking-[0.22em] font-medium text-muted mb-6">
                    Descarga la guía
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Nombre completo"
                      className="h-12 px-4 bg-background-warm border-b border-foreground/30 text-[14px] focus:outline-none focus:border-burgundy transition-colors"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Correo electrónico"
                      className="h-12 px-4 bg-background-warm border-b border-foreground/30 text-[14px] focus:outline-none focus:border-burgundy transition-colors"
                    />
                  </div>
                  <input
                    type="tel"
                    placeholder="Teléfono (opcional)"
                    className="mt-3 w-full h-12 px-4 bg-background-warm border-b border-foreground/30 text-[14px] focus:outline-none focus:border-burgundy transition-colors"
                  />
                  <label className="flex items-start gap-3 mt-6 text-[13px] leading-[1.55] text-foreground/80">
                    <input
                      type="checkbox"
                      required
                      className="mt-[5px] accent-burgundy"
                    />
                    <span>
                      He leído y acepto el{" "}
                      <Link
                        href="/aviso-de-privacidad"
                        className="underline underline-offset-2 hover:text-burgundy"
                      >
                        aviso de privacidad
                      </Link>
                      .
                    </span>
                  </label>
                  <button
                    type="submit"
                    className="mt-8 inline-flex items-center justify-center bg-burgundy text-white text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] hover:bg-burgundy-dark transition-colors duration-200"
                  >
                    Descargar la guía
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Aviso del documento */}
        <section className="bg-background-warm border-y border-rule">
          <div className="max-w-[1280px] mx-auto px-12 py-16">
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

          <div className="max-w-[1280px] mx-auto px-12 py-24">
            <div className="flex items-baseline gap-4 mb-10 justify-center">
              <span className="font-serif italic text-[14px] text-olive">
                VII
              </span>
              <span className="w-[80px] h-[1px] bg-background/30" />
              <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-background/60">
                Contacto
              </span>
            </div>

            <div className="max-w-[820px] mx-auto text-center">
              <h2 className="font-serif text-[40px] leading-[1.12] font-semibold tracking-[-0.012em]">
                Si lo que enfrentas no admite espera, escríbenos.
              </h2>
              <p className="text-[17px] text-background/80 mt-5 leading-[1.55] max-w-[600px] mx-auto">
                La guía es un mapa general; cada expediente requiere
                lectura propia. Te respondemos en horario hábil con una
                valoración inicial sin costo.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
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
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
