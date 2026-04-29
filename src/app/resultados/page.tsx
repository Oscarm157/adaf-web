import type { Metadata } from "next";
import Link from "next/link";
import { Masthead } from "@/components/site/Masthead";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { ChapterMark } from "@/components/site/ChapterMark";
import { PageHero } from "@/components/page/PageHero";
import { CountUp } from "@/components/motion/CountUp";
import Image from "next/image";
import { siteUrl } from "@/lib/seo";
import { CALENDLY_URL } from "@/lib/calendly";

export const metadata: Metadata = {
  title: "Resultados · Dimensión general de la práctica",
  description:
    "Datos generales de la práctica de ADAF: 25 años, diez áreas, cobertura BC y federal. Los expedientes específicos están protegidos por el secreto profesional.",
  alternates: { canonical: "/resultados" },
  openGraph: {
    type: "website",
    url: `${siteUrl}/resultados`,
    title: "Resultados · ADAF",
    description:
      "Veinticinco años de práctica continua en materia fiscal, aduanera y administrativa.",
  },
};

const stats: {
  numero: string;
  countTo?: number;
  label: string;
  note: string;
}[] = [
  {
    numero: "25",
    countTo: 25,
    label: "Años de práctica continua",
    note: "Frontera norte de México",
  },
  {
    numero: "10",
    countTo: 10,
    label: "Áreas de defensa especializada",
    note: "Fiscal · Aduanera · Administrativa · Penal-fiscal",
  },
  {
    numero: "BC",
    label: "Cobertura procesal estatal y federal",
    note: "Tijuana · Tecate · Rosarito",
  },
  {
    numero: "1:1",
    label: "Por abogado responsable, cada caso",
    note: "De inicio a fin del procedimiento",
  },
];

const cobertura = [
  {
    numeral: "I",
    titulo: "Frontera norte",
    cuerpo: "Tijuana, Tecate y Rosarito como base operativa.",
  },
  {
    numeral: "II",
    titulo: "Estado de Baja California",
    cuerpo:
      "Representación ante autoridades estatales y el Tribunal de Justicia Administrativa local.",
  },
  {
    numeral: "III",
    titulo: "Representación procesal nacional",
    cuerpo:
      "Casos llevados ante autoridades federales, TFJA y tribunales del Poder Judicial de la Federación.",
  },
];

const tiposCliente = [
  "Importadores",
  "Exportadores",
  "Transportistas",
  "Maquiladoras",
  "Comerciantes",
  "Profesionistas con actividad empresarial",
  "Fabricantes regulados por COFEPRIS / COEPRIS",
];

const autoridades = [
  "SAT · Servicio de Administración Tributaria",
  "ANAM · Agencia Nacional de Aduanas de México",
  "IMSS · Instituto Mexicano del Seguro Social",
  "INFONAVIT",
  "COFEPRIS · Comisión Federal para la Protección contra Riesgos Sanitarios",
  "COEPRIS Baja California",
  "SICT · Secretaría de Infraestructura, Comunicaciones y Transportes",
  "TFJA · Tribunal Federal de Justicia Administrativa",
  "Tribunal de Justicia Administrativa del Estado de BC",
  "Juzgados de Distrito",
  "Tribunales Colegiados de Circuito",
];

function romanize(n: number): string {
  const r = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII",
  ];
  return r[n - 1] ?? String(n);
}

export default function ResultadosPage() {
  return (
    <>
      <Masthead />
      <Header />
      <main>
        <PageHero
          crumbs={[{ label: "Inicio", href: "/" }, { label: "Resultados" }]}
          numeral="II"
          label="Práctica profesional"
          h1="Dimensión general de nuestra práctica."
          lede="Los expedientes específicos están protegidos por el secreto profesional. Compartimos las cifras, autoridades y tipos de cliente en términos generales."
        />

        {/* I — Stats tabulares */}
        <section className="bg-background pt-20 pb-20">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
            <ChapterMark numeral="I" label="Cifras de la práctica" />
            <div className="grid grid-cols-12 gap-y-10 gap-x-6 md:gap-12 mt-10 mb-12">
              <div className="col-span-12 lg:col-span-8">
                <h2 className="font-serif text-[26px] md:text-[32px] lg:text-[40px] leading-[1.15] md:leading-[1.08] font-semibold text-navy tracking-[-0.014em]">
                  Veinticinco años en cuatro materias.
                </h2>
              </div>
              <div className="col-span-12 lg:col-span-4 lg:pt-2">
                <p className="text-[14px] leading-[1.65] text-muted max-w-[420px]">
                  Una misma práctica integra la materia fiscal, aduanera,
                  administrativa y penal-fiscal cuando el expediente lo
                  requiere.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 border-y border-foreground/15">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`px-6 py-9 ${
                    i < stats.length - 1 ? "md:border-r border-rule" : ""
                  } ${i > 0 ? "border-t md:border-t-0 border-rule" : ""}`}
                >
                  <div className="font-serif text-[44px] md:text-[60px] leading-none font-semibold text-navy tracking-[-0.018em] tabular-nums">
                    {s.countTo !== undefined ? (
                      <CountUp to={s.countTo} duration={1.4} />
                    ) : (
                      s.numero
                    )}
                  </div>
                  <p className="text-[12px] uppercase tracking-[0.16em] text-muted font-medium mt-5">
                    {s.label}
                  </p>
                  <p className="font-serif italic text-[12px] text-olive mt-2">
                    {s.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* II — Cobertura geográfica */}
        <section className="bg-background-warm pt-20 pb-20">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
            <ChapterMark numeral="II" label="Cobertura geográfica" />
            <div className="grid grid-cols-12 gap-y-10 gap-x-6 md:gap-12 mt-10 mb-12">
              <div className="col-span-12 lg:col-span-7">
                <h2 className="font-serif text-[26px] md:text-[32px] lg:text-[40px] leading-[1.15] md:leading-[1.08] font-semibold text-navy tracking-[-0.014em]">
                  Frontera norte como base, alcance estatal y federal.
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-y-10 gap-x-6 md:gap-12 items-start border-t border-foreground/15 pt-12">
              <div className="col-span-12 lg:col-span-7 lg:pr-6">
                <div className="max-w-[560px] mx-auto lg:mx-0">
                  <div className="flex items-baseline gap-3 mb-4">
                    <span aria-hidden="true" className="font-serif italic text-[13px] text-olive">
                      II·b
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium">
                      Mapa de cobertura
                    </span>
                    <span className="flex-1 h-[1px] bg-rule" />
                  </div>

                  <figure className="relative aspect-[3/4] overflow-hidden border border-foreground/15 bg-background shadow-[0_2px_18px_-12px_rgba(15,42,71,0.25)]">
                    <span aria-hidden="true" className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-olive z-10 pointer-events-none" />
                    <span aria-hidden="true" className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-olive z-10 pointer-events-none" />
                    <span aria-hidden="true" className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-olive z-10 pointer-events-none" />
                    <span aria-hidden="true" className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-olive z-10 pointer-events-none" />

                    <span aria-hidden="true" className="absolute top-5 left-7 z-10 text-[9px] uppercase tracking-[0.22em] text-muted/80 font-medium pointer-events-none">
                      Frontera · México – Estados Unidos
                    </span>
                    <span aria-hidden="true" className="absolute bottom-5 right-7 z-10 font-serif italic text-[11px] text-olive pointer-events-none">
                      Baja California
                    </span>

                    <Image
                      src="/editorial/editorial-bc-mapa-frontera.png"
                      alt="Mapa minimalista de la frontera norte de Baja California, con las plazas de Tijuana, Tecate, Rosarito y Mexicali"
                      fill
                      sizes="(min-width: 1024px) 560px, (min-width: 768px) 60vw, 100vw"
                      className="object-contain p-8 md:p-10"
                    />
                  </figure>

                  <figcaption className="text-[11px] uppercase tracking-[0.18em] text-muted font-medium mt-4 text-center lg:text-left">
                    Tijuana · Tecate · Rosarito · Mexicali
                  </figcaption>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 mt-6 pt-5 border-t border-rule">
                    <div className="flex items-center gap-3 text-[12px]">
                      <span className="w-2 h-2 bg-burgundy rounded-full" />
                      <span className="text-foreground/85">Base de operación</span>
                    </div>
                    <div className="flex items-center gap-3 text-[12px]">
                      <span className="w-2 h-2 bg-olive rounded-full" />
                      <span className="text-foreground/85">Plazas atendidas</span>
                    </div>
                    <div className="flex items-center gap-3 text-[12px]">
                      <span className="w-3 h-[1px] bg-olive" />
                      <span className="text-foreground/85">Frontera norte</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5 space-y-8">
                {cobertura.map((c) => (
                  <article
                    key={c.titulo}
                    className="border-b border-rule pb-7 last:border-0"
                  >
                    <div className="flex items-baseline gap-4 mb-3">
                      <span
                        aria-hidden="true"
                        className="font-serif italic text-[14px] text-olive"
                      >
                        {c.numeral}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium">
                        Cobertura
                      </span>
                    </div>
                    <h3 className="font-serif text-[22px] leading-[1.2] font-medium text-navy tracking-[-0.005em]">
                      {c.titulo}
                    </h3>
                    <p className="text-[14.5px] leading-[1.65] text-foreground/85 mt-3 max-w-[420px]">
                      {c.cuerpo}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* III — Tipos de cliente */}
        <section className="bg-background pt-20 pb-20">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
            <ChapterMark numeral="III" label="Perfil de los clientes" />
            <div className="grid grid-cols-12 gap-y-10 gap-x-6 md:gap-12 mt-10">
              <div className="col-span-12 lg:col-span-4">
                <h2 className="font-serif text-[24px] md:text-[28px] lg:text-[34px] leading-[1.18] md:leading-[1.12] font-semibold text-navy tracking-[-0.012em] sticky top-32">
                  Tipos de cliente atendidos.
                </h2>
                <p className="text-[14px] leading-[1.65] text-muted mt-5 max-w-[340px]">
                  Trabajamos con personas físicas con actividad empresarial y
                  con personas morales de operación regional y fronteriza.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-7 lg:col-start-6">
                <ul className="border-t border-foreground/15">
                  {tiposCliente.map((t, i) => (
                    <li
                      key={t}
                      className="flex items-baseline gap-4 py-4 border-b border-rule"
                    >
                      <span aria-hidden="true" className="font-serif italic text-[13px] text-olive w-7 shrink-0">
                        {romanize(i + 1)}
                      </span>
                      <span className="text-[16px] leading-[1.5] text-foreground/85">
                        {t}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* IV — Autoridades */}
        <section className="bg-background-warm pt-20 pb-20">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
            <ChapterMark numeral="IV" label="Autoridades y tribunales" />
            <div className="grid grid-cols-12 gap-y-10 gap-x-6 md:gap-12 mt-10">
              <div className="col-span-12 lg:col-span-4">
                <h2 className="font-serif text-[24px] md:text-[28px] lg:text-[34px] leading-[1.18] md:leading-[1.12] font-semibold text-navy tracking-[-0.012em] sticky top-32">
                  Donde representamos a nuestros clientes.
                </h2>
                <p className="text-[14px] leading-[1.65] text-muted mt-5 max-w-[340px]">
                  Casos llevados ante autoridades fiscales, aduaneras y
                  sanitarias, y ante tribunales administrativos y federales
                  en materia de amparo.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-8">
                <ul className="grid grid-cols-1 sm:grid-cols-2 border-t border-rule">
                  {autoridades.map((a, i) => (
                    <li
                      key={a}
                      className={`py-3 text-[13.5px] text-foreground border-b border-rule flex items-baseline gap-3 ${
                        i % 2 === 0 ? "sm:border-r sm:pr-6" : "sm:pl-6"
                      }`}
                    >
                      <span aria-hidden="true" className="font-serif italic text-[11px] text-olive w-7 shrink-0">
                        {romanize(i + 1)}
                      </span>
                      <span className="leading-[1.4]">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* TODO: cuando reactiven Google Business Profile y haya reseñas
            verificadas, restaurar aquí la sección "Testimoniales y reseñas"
            (numeral V). Por ahora se omite para no mostrar placeholders. */}

        {/* V — CTA final navy */}
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
