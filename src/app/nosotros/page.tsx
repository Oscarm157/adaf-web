import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Masthead } from "@/components/site/Masthead";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { ChapterMark } from "@/components/site/ChapterMark";
import { PageHero } from "@/components/page/PageHero";
import Image from "next/image";
import { allServices } from "@/components/service/data";
import { AuthoritiesBand } from "@/components/visual/AuthoritiesBand";
import { OfficeStatus } from "@/components/site/OfficeStatus";
import { CALENDLY_URL } from "@/lib/calendly";
import { siteConfig, siteUrl } from "@/lib/seo";

const NOSOTROS_MAPS_QUERY = encodeURIComponent(
  `${siteConfig.address.street}, ${siteConfig.address.neighborhood}, ${siteConfig.address.locality}, ${siteConfig.address.region}, México`,
);
const NOSOTROS_MAPS_EMBED = `https://maps.google.com/maps?q=${NOSOTROS_MAPS_QUERY}&z=16&hl=es&output=embed`;
const NOSOTROS_MAPS_LINK = "https://maps.app.goo.gl/mYuH7rHaBWbDGXnQ9";

export const metadata: Metadata = {
  title: "Nosotros · Despacho jurídico en Tijuana",
  description:
    "ADAF · Asesoría y Defensa Aduanera Fiscal. Veinticinco años representando casos en materia fiscal, aduanera y administrativa en Tijuana, Tecate, Rosarito y la frontera norte.",
  alternates: { canonical: "/nosotros" },
  openGraph: {
    type: "website",
    url: `${siteUrl}/nosotros`,
    title: "Nosotros · ADAF Asesoría y Defensa Aduanera Fiscal",
    description:
      "Despacho jurídico en Tijuana con 25 años de práctica continua en materia fiscal, aduanera y administrativa.",
  },
};

const principios = [
  {
    numeral: "I",
    titulo: "Confidencialidad",
    cuerpo:
      "Lo que nos compartes pertenece al expediente y al secreto profesional. No discutimos casos fuera del equipo que los atiende.",
  },
  {
    numeral: "II",
    titulo: "Transparencia",
    cuerpo:
      "Te decimos qué procede, qué no procede y por qué. Si la mejor recomendación es no litigar, también te lo decimos.",
  },
  {
    numeral: "III",
    titulo: "Compromiso técnico",
    cuerpo:
      "Cada caso se construye sobre el expediente, no sobre supuestos. Antes de presentar un escrito, lo revisamos.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      <Masthead />
      <Header />
      <main>
        <PageHero
          crumbs={[{ label: "Inicio", href: "/" }, { label: "Nosotros" }]}
          numeral="I"
          label="Sobre el despacho"
          h1="ADAF · Asesoría y Defensa Aduanera Fiscal."
          lede="Veinticinco años de práctica continua en Tijuana representando casos en materia fiscal, aduanera y administrativa ante autoridades estatales y federales."
        />

        {/* I — La firma */}
        <section className="bg-background pt-20 pb-20">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
            <ChapterMark numeral="I" label="La firma" />
            <div className="grid grid-cols-12 gap-y-10 gap-x-6 md:gap-12 mt-12 items-start">
              <div className="col-span-12 lg:col-span-4 flex justify-start lg:justify-center">
                <figure className="flex flex-col items-start lg:items-center gap-5 max-w-[280px]">
                  <Image
                    src="/logo-adaf.png"
                    alt="ADAF · Asesoría y Defensa Aduanera Fiscal"
                    width={500}
                    height={500}
                    priority
                    className="w-full h-auto select-none"
                  />
                  <figcaption className="text-[10px] uppercase tracking-[0.22em] font-medium text-muted text-left lg:text-center">
                    Tijuana · Baja California · México
                  </figcaption>
                </figure>
              </div>
              <div className="col-span-12 lg:col-span-7 lg:col-start-6">
                <h2 className="font-serif text-[24px] md:text-[30px] lg:text-[36px] leading-[1.18] md:leading-[1.1] font-semibold text-navy tracking-[-0.012em]">
                  Un despacho construido caso por caso.
                </h2>
                <div className="space-y-6 max-w-[640px] mt-7">
                  <p className="text-[17px] leading-[1.7] text-foreground/85">
                    Llevamos 25 años representando casos ante el SAT, la
                    Agencia Nacional de Aduanas de México, el IMSS, COFEPRIS,
                    COEPRIS Baja California, la SICT, el Tribunal Federal de
                    Justicia Administrativa y los juzgados de distrito. En ese
                    tiempo hemos visto cómo las reglas, los criterios y la
                    presión recaudatoria cambian; lo que no cambia es lo que el
                    contribuyente necesita: claridad sobre lo que está pasando,
                    una estrategia honesta y representación rigurosa en cada
                    etapa del procedimiento.
                  </p>
                  <p className="text-[17px] leading-[1.7] text-foreground/85">
                    Trabajamos principalmente con empresarios, importadores,
                    transportistas y profesionistas con actividad empresarial
                    en Tijuana, Tecate, Rosarito y la zona fronteriza. La
                    mayoría de los casos que atendemos llegan en momentos de
                    presión (una visita domiciliaria, un embargo precautorio
                    en frontera, una notificación de crédito fiscal), y la
                    primera tarea es siempre la misma: ordenar la información,
                    identificar los plazos y proponer un curso de acción
                    realista.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AuthoritiesBand />

        {/* II,  Principios */}
        <section className="bg-background-warm pt-20 pb-20">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
            <ChapterMark numeral="II" label="Principios" />
            <div className="grid grid-cols-12 gap-y-10 gap-x-6 md:gap-12 mt-10 mb-12">
              <div className="col-span-12 lg:col-span-8">
                <h2 className="font-serif text-[26px] md:text-[32px] lg:text-[40px] leading-[1.15] md:leading-[1.08] font-semibold text-navy tracking-[-0.014em]">
                  Cómo entendemos nuestra labor.
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-foreground/15">
              {principios.map((p, i) => (
                <div
                  key={p.titulo}
                  className={`px-1 md:px-7 py-9 ${
                    i < principios.length - 1
                      ? "md:border-r border-rule"
                      : ""
                  } ${i > 0 ? "border-t md:border-t-0 border-rule" : ""}`}
                >
                  <div className="flex items-baseline gap-4 mb-5">
                    <span
                      aria-hidden="true"
                      className="font-serif italic text-[14px] text-olive"
                    >
                      {p.numeral}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium">
                      Principio
                    </span>
                  </div>
                  <h3 className="font-serif text-[20px] md:text-[24px] leading-[1.25] md:leading-[1.2] font-medium text-navy tracking-[-0.006em]">
                    {p.titulo}
                  </h3>
                  <p className="text-[15px] leading-[1.65] text-foreground/85 mt-4 max-w-[360px]">
                    {p.cuerpo}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* III , Áreas de especialización */}
        <section className="bg-background pt-20 pb-20">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
            <ChapterMark numeral="III" label="Áreas de práctica" />
            <div className="grid grid-cols-12 gap-y-10 gap-x-6 md:gap-12 mt-10 mb-12 items-end">
              <div className="col-span-12 lg:col-span-8">
                <h2 className="font-serif text-[26px] md:text-[32px] lg:text-[40px] leading-[1.15] md:leading-[1.08] font-semibold text-navy tracking-[-0.014em]">
                  Diez áreas de defensa especializada.
                </h2>
                <p className="text-[16px] leading-[1.65] text-foreground/85 mt-6 max-w-[640px]">
                  Cada área corresponde a un procedimiento administrativo
                  distinto, con plazos, autoridades y vías de impugnación
                  específicas. Un mismo expediente puede requerir trabajo
                  simultáneo en varias materias.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-4 lg:pb-2">
                <Link
                  href="/servicios"
                  className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] font-medium text-navy hover:text-burgundy transition-colors duration-200"
                >
                  Ver detalle de cada materia
                  <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </Link>
              </div>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 border-t border-foreground/15">
              {allServices.map((s, i) => (
                <li
                  key={s.slug}
                  className={`py-5 px-1 border-b border-rule flex items-baseline gap-4 ${
                    i % 2 === 0 ? "sm:border-r sm:pr-6" : "sm:pl-6"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="font-serif italic text-[13px] text-olive w-7 shrink-0"
                  >
                    {s.numeral}
                  </span>
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="text-[15.5px] text-foreground hover:text-burgundy transition-colors leading-[1.45] flex-1"
                  >
                    {s.label}
                  </Link>
                  <ArrowRight
                    className="w-3 h-3 text-muted shrink-0"
                    strokeWidth={1.5}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* TODO: Sección "Equipo",  restaurar con bios de texto cuando
            el despacho entregue: nombre · especialidad · años · formación.
            Por ahora se omite para no mostrar placeholders. */}

        {/* IV , Oficina */}
        <section className="bg-background-warm pt-20 pb-20 border-t border-rule">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
            <ChapterMark numeral="IV" label="Oficina" />
            <div className="grid grid-cols-12 gap-y-10 gap-x-6 md:gap-12 mt-10 items-start">
              <div className="col-span-12 lg:col-span-5">
                <h2 className="font-serif text-[24px] md:text-[28px] lg:text-[34px] leading-[1.18] md:leading-[1.12] font-semibold text-navy tracking-[-0.012em]">
                  Nueva Tijuana, Baja California.
                </h2>
                <p className="text-[15px] leading-[1.65] text-foreground/80 mt-5 max-w-[420px]">
                  Atendemos en oficina con cita previa. Los expedientes y la
                  documentación física se reciben en este domicilio.
                </p>
                <dl className="space-y-7 border-t border-foreground/15 pt-8 mt-8">
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
                      Horario
                    </dt>
                    <dd className="text-[16px] leading-[1.55] text-foreground/85 mb-3">
                      Lunes a viernes · 09:00 a 17:00
                    </dd>
                    <dd>
                      <OfficeStatus />
                    </dd>
                  </div>
                </dl>
                <div className="flex flex-wrap items-center gap-4 mt-10">
                  <Link
                    href="/contacto"
                    className="inline-flex items-center justify-center bg-burgundy text-white text-[12px] font-medium tracking-[0.06em] uppercase px-6 h-11 rounded-[2px] hover:bg-burgundy-dark transition-colors duration-200"
                  >
                    Agendar visita
                  </Link>
                  <a
                    href={NOSOTROS_MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.16em] font-medium text-navy hover:text-burgundy transition-colors duration-200"
                  >
                    Cómo llegar
                    <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                  </a>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7">
                <figure className="relative border border-rule bg-background overflow-hidden">
                  <span className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-olive z-10 pointer-events-none" />
                  <span className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-olive z-10 pointer-events-none" />
                  <span className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-olive z-10 pointer-events-none" />
                  <span className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-olive z-10 pointer-events-none" />
                  <iframe
                    title="Ubicación de la oficina ADAF en Nueva Tijuana"
                    src={NOSOTROS_MAPS_EMBED}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    className="block w-full aspect-[4/3] md:aspect-[3/2] border-0 grayscale-[0.15] contrast-[0.95]"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* V , CTA final navy */}
        <section className="bg-navy text-background relative overflow-hidden">
          <span className="absolute top-8 left-8 w-3 h-3 border-t border-l border-olive/60" />
          <span className="absolute top-8 right-8 w-3 h-3 border-t border-r border-olive/60" />
          <span className="absolute bottom-8 left-8 w-3 h-3 border-b border-l border-olive/60" />
          <span className="absolute bottom-8 right-8 w-3 h-3 border-b border-r border-olive/60" />

          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 py-20">
            <div className="flex items-baseline gap-4 mb-8 justify-center">
              <span aria-hidden="true" className="font-serif italic text-[14px] text-olive">V</span>
              <span className="w-[80px] h-[1px] bg-background/30" />
              <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-background/60">
                Atención
              </span>
            </div>
            <div className="max-w-[760px] mx-auto text-center">
              <h2 className="font-serif text-[26px] md:text-[30px] lg:text-[36px] leading-[1.18] md:leading-[1.12] font-semibold tracking-[-0.012em]">
                Escríbenos los detalles de tu asunto.
              </h2>
              <p className="text-[16px] text-background/80 mt-5 leading-[1.55] max-w-[600px] mx-auto">
                Te respondemos en horario hábil con una valoración inicial sin
                costo y los plazos legales que están corriendo.
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
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
