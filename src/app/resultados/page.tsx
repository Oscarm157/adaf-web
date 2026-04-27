import type { Metadata } from "next";
import Link from "next/link";
import { Masthead } from "@/components/site/Masthead";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { ChapterMark } from "@/components/site/ChapterMark";
import { PageHero } from "@/components/page/PageHero";
import { Note } from "@/components/page/Prose";
import { siteUrl } from "@/lib/seo";

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

const stats = [
  {
    numero: "25",
    label: "Años de práctica continua",
    note: "MMI — MMXXVI",
  },
  {
    numero: "10",
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
  "SAT — Servicio de Administración Tributaria",
  "ANAM — Agencia Nacional de Aduanas de México",
  "IMSS — Instituto Mexicano del Seguro Social",
  "INFONAVIT",
  "COFEPRIS — Comisión Federal de Riesgos Sanitarios",
  "COEPRIS Baja California",
  "SICT — Secretaría de Infraestructura, Comunicaciones y Transportes",
  "TFJA — Tribunal Federal de Justicia Administrativa",
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
          <div className="max-w-[1280px] mx-auto px-12">
            <ChapterMark numeral="I" label="Cifras de la práctica" />
            <div className="grid grid-cols-12 gap-12 mt-10 mb-12">
              <div className="col-span-12 lg:col-span-8">
                <h2 className="font-serif text-[40px] leading-[1.08] font-semibold text-navy tracking-[-0.014em]">
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
                  <div className="font-serif text-[60px] leading-none font-semibold text-navy tracking-[-0.018em]">
                    {s.numero}
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
          <div className="max-w-[1280px] mx-auto px-12">
            <ChapterMark numeral="II" label="Cobertura geográfica" />
            <div className="grid grid-cols-12 gap-12 mt-10 mb-12">
              <div className="col-span-12 lg:col-span-7">
                <h2 className="font-serif text-[40px] leading-[1.08] font-semibold text-navy tracking-[-0.014em]">
                  Frontera norte como base, alcance estatal y federal.
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-foreground/15">
              {cobertura.map((c, i) => (
                <div
                  key={c.titulo}
                  className={`px-1 md:px-7 py-9 ${
                    i < cobertura.length - 1
                      ? "md:border-r border-rule"
                      : ""
                  } ${i > 0 ? "border-t md:border-t-0 border-rule" : ""}`}
                >
                  <div className="flex items-baseline gap-4 mb-5">
                    <span className="font-serif italic text-[14px] text-olive">
                      {c.numeral}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium">
                      Cobertura
                    </span>
                  </div>
                  <h3 className="font-serif text-[22px] leading-[1.2] font-medium text-navy tracking-[-0.005em]">
                    {c.titulo}
                  </h3>
                  <p className="text-[15px] leading-[1.65] text-foreground/85 mt-4 max-w-[360px]">
                    {c.cuerpo}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* III — Tipos de cliente */}
        <section className="bg-background pt-20 pb-20">
          <div className="max-w-[1280px] mx-auto px-12">
            <ChapterMark numeral="III" label="Perfil de los clientes" />
            <div className="grid grid-cols-12 gap-12 mt-10">
              <div className="col-span-12 lg:col-span-4">
                <h2 className="font-serif text-[34px] leading-[1.12] font-semibold text-navy tracking-[-0.012em] sticky top-32">
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
                      <span className="font-serif italic text-[13px] text-olive w-7 shrink-0">
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
          <div className="max-w-[1280px] mx-auto px-12">
            <ChapterMark numeral="IV" label="Autoridades y tribunales" />
            <div className="grid grid-cols-12 gap-12 mt-10">
              <div className="col-span-12 lg:col-span-4">
                <h2 className="font-serif text-[34px] leading-[1.12] font-semibold text-navy tracking-[-0.012em] sticky top-32">
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
                      <span className="font-serif italic text-[11px] text-olive w-7 shrink-0">
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

        {/* V — Testimoniales */}
        <section className="bg-background pt-20 pb-20">
          <div className="max-w-[1280px] mx-auto px-12">
            <ChapterMark numeral="V" label="Testimoniales y reseñas" />
            <div className="grid grid-cols-12 gap-12 mt-10">
              <div className="col-span-12 lg:col-span-7">
                <h2 className="font-serif text-[34px] leading-[1.12] font-semibold text-navy tracking-[-0.012em]">
                  Reseñas verificadas en proceso de integración.
                </h2>
                <Note title="Nota editorial">
                  Estamos en proceso de reactivar el Google Business Profile
                  del despacho. Las reseñas verificadas se integrarán aquí en
                  el siguiente paso. Mientras tanto, los expedientes que
                  hemos llevado están protegidos por el secreto profesional y
                  no se publican casos individualizados.
                </Note>
              </div>
              <div className="col-span-12 lg:col-span-4 lg:col-start-9">
                <div className="bg-background-warm aspect-[3/4] border border-rule" />
              </div>
            </div>
          </div>
        </section>

        {/* VI — CTA final navy */}
        <section className="bg-navy text-background relative overflow-hidden">
          <span className="absolute top-8 left-8 w-3 h-3 border-t border-l border-olive/60" />
          <span className="absolute top-8 right-8 w-3 h-3 border-t border-r border-olive/60" />
          <span className="absolute bottom-8 left-8 w-3 h-3 border-b border-l border-olive/60" />
          <span className="absolute bottom-8 right-8 w-3 h-3 border-b border-r border-olive/60" />

          <div className="max-w-[1280px] mx-auto px-12 py-20">
            <div className="flex items-baseline gap-4 mb-8 justify-center">
              <span className="font-serif italic text-[14px] text-olive">VI</span>
              <span className="w-[80px] h-[1px] bg-background/30" />
              <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-background/60">
                Atención
              </span>
            </div>
            <div className="max-w-[760px] mx-auto text-center">
              <h2 className="font-serif text-[36px] leading-[1.12] font-semibold tracking-[-0.012em]">
                Cuéntanos lo esencial sobre tu asunto.
              </h2>
              <p className="text-[16px] text-background/80 mt-5 leading-[1.55] max-w-[600px] mx-auto">
                Te respondemos en horario hábil con una valoración inicial sin
                costo y los plazos legales que están corriendo.
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
                <Link
                  href="/contacto#agendar"
                  className="inline-flex items-center justify-center bg-transparent text-background text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] border border-background/40 hover:bg-background hover:text-navy transition-colors duration-200"
                >
                  Agendar 20 min
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
