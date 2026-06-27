import Link from "next/link";
import type { Metadata } from "next";
import { Masthead } from "@/components/site/Masthead";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { PageHero } from "@/components/page/PageHero";
import { ChapterMark } from "@/components/site/ChapterMark";
import { EditorialBand } from "@/components/visual/EditorialBand";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { posts } from "@/lib/posts";
import { siteUrl } from "@/lib/seo";
import { CALENDLY_URL } from "@/lib/calendly";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Comentarios técnicos de ADAF sobre reformas, criterios de autoridad y procedimientos en materia fiscal, aduanera y administrativa.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog · ADAF",
    description:
      "Comentarios técnicos de ADAF sobre reformas, criterios de autoridad y procedimientos en materia fiscal, aduanera y administrativa.",
    url: `${siteUrl}/blog`,
    type: "website",
  },
};

type Tone = "navy" | "burgundy" | "olive";

// Portadas editoriales por artículo (reúsan imágenes de public/editorial/,
// las mismas que la sección de blog del home). Los posts viven en @/lib/posts
// y no llevan imagen; aquí se asocia la cover sin tocar la fuente de datos.
const covers: Record<string, { tone: Tone; title: string; src: string; alt: string }> = {
  "reforma-cff-2026": {
    tone: "navy",
    title: "Libro abierto",
    src: "/editorial/editorial-v-cff-libro.png",
    alt: "Libro abierto de código legal sobre escritorio",
  },
  "visita-domiciliaria-sat": {
    tone: "burgundy",
    title: "Puerta",
    src: "/editorial/editorial-vi-visita-puerta.png",
    alt: "Puerta institucional entreabierta con luz cálida adentro",
  },
  "embargo-aduana-pama": {
    tone: "olive",
    title: "Contenedor",
    src: "/editorial/editorial-vii-embargo-contenedor.png",
    alt: "Contenedor olive en patio aduanal vacío",
  },
};

const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

export default function BlogIndexPage() {
  const ordered = [...posts].sort((a, b) =>
    a.fechaIso < b.fechaIso ? 1 : -1,
  );
  const [featured, ...archive] = ordered;
  const featuredCover = covers[featured.slug];

  return (
    <>
      <Masthead />
      <Header />
      <main>
        <PageHero
          numeral="I"
          label="Blog"
          h1="Comentarios técnicos sobre reformas, criterios y procedimientos."
          lede="Análisis redactados por el despacho sobre los temas que llegan con más frecuencia a nuestros expedientes: reformas al CFF, criterios de autoridad, procedimientos aduaneros y administrativos. No sustituyen la asesoría sobre un caso específico."
          crumbs={[
            { label: "Inicio", href: "/" },
            { label: "Blog" },
          ]}
        />

        {/* II — Comentario destacado · familia image-led monumental */}
        <section className="bg-background-warm pt-16 pb-24">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
            <ChapterMark numeral="II" label="Comentario destacado" />

            <Reveal className="mt-10">
              <Link href={`/blog/${featured.slug}`} className="group block">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="text-[10px] uppercase tracking-[0.22em] text-burgundy font-medium">
                    {featured.cat}
                  </span>
                  <span className="w-[40px] h-[1px] bg-foreground/20" />
                  <span className="text-[11px] uppercase tracking-[0.16em] text-muted">
                    {featured.fecha}
                  </span>
                  <span className="font-serif italic text-[13px] text-olive ml-auto">
                    {featured.folio}
                  </span>
                </div>

                {featuredCover && (
                  <EditorialBand
                    numeral="II·1"
                    title={featuredCover.title}
                    tone={featuredCover.tone}
                    aspect="21/9"
                    fullBleed={false}
                    src={featuredCover.src}
                    alt={featuredCover.alt}
                  />
                )}

                <div className="grid grid-cols-12 gap-y-6 gap-x-6 md:gap-12 mt-10 items-start">
                  <h2 className="col-span-12 lg:col-span-8 display-lg font-semibold text-navy group-hover:text-burgundy transition-colors duration-300">
                    {featured.titulo}
                  </h2>
                  <div className="col-span-12 lg:col-span-4 lg:pt-2">
                    <p className="text-[16px] leading-[1.7] text-foreground/85 max-w-[440px]">
                      {featured.resumen}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] font-medium text-navy mt-7 group-hover:gap-3 group-hover:text-burgundy transition-all duration-300">
                      Leer el comentario
                      <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        </section>

        {/* III — Archivo · familia índice tipográfico con numerales y hairlines */}
        <section className="bg-background pt-20 pb-24 border-t border-rule">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
            <div className="grid grid-cols-12 gap-y-6 gap-x-6 md:gap-12 items-end mb-12">
              <div className="col-span-12 lg:col-span-9">
                <ChapterMark numeral="III" label="Archivo" />
                <h2 className="font-serif text-[26px] md:text-[32px] lg:text-[38px] leading-[1.12] font-semibold text-navy tracking-[-0.014em] mt-6">
                  Comentarios anteriores.
                </h2>
              </div>
              <div className="col-span-12 lg:col-span-3 lg:text-right lg:pb-2">
                <p className="font-serif italic text-[14px] text-olive">
                  {String(archive.length).padStart(2, "0")} artículos
                </p>
              </div>
            </div>

            <Stagger className="border-t border-foreground/15">
              {archive.map((n, i) => (
                <StaggerItem key={n.slug}>
                  <Link
                    href={`/blog/${n.slug}`}
                    className="group grid grid-cols-12 gap-y-4 gap-x-6 md:gap-12 items-baseline border-b border-rule py-10 md:py-12 px-1 -mx-1 md:px-7 md:-mx-7 transition-colors duration-300 hover:bg-background-warm"
                  >
                    <span
                      aria-hidden="true"
                      className="col-span-12 md:col-span-2 lg:col-span-1 font-serif italic text-[34px] md:text-[40px] leading-none text-olive"
                    >
                      {ROMAN[i]}
                    </span>

                    <div className="col-span-12 md:col-span-7 lg:col-span-7">
                      <h3 className="font-serif text-[24px] md:text-[30px] lg:text-[34px] leading-[1.14] font-medium text-navy tracking-[-0.012em] group-hover:text-burgundy transition-colors duration-300">
                        {n.titulo}
                      </h3>
                      <p className="text-[15px] leading-[1.65] text-muted mt-4 max-w-[620px]">
                        {n.resumen}
                      </p>
                    </div>

                    <div className="col-span-12 md:col-span-3 lg:col-span-4 md:text-right">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-burgundy font-medium">
                        {n.cat}
                      </p>
                      <p className="text-[11px] uppercase tracking-[0.14em] text-muted mt-2">
                        {n.fecha}
                      </p>
                      <p className="font-serif italic text-[12px] text-olive mt-2">
                        {n.folio}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] font-medium text-navy mt-5 group-hover:gap-3 group-hover:text-burgundy transition-all duration-300">
                        Leer
                        <span aria-hidden="true">→</span>
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* IV — Boletín · acento dark */}
        <section className="bg-navy text-background relative overflow-hidden">
          <span className="absolute top-8 left-8 w-3 h-3 border-t border-l border-olive/60" />
          <span className="absolute top-8 right-8 w-3 h-3 border-t border-r border-olive/60" />
          <span className="absolute bottom-8 left-8 w-3 h-3 border-b border-l border-olive/60" />
          <span className="absolute bottom-8 right-8 w-3 h-3 border-b border-r border-olive/60" />

          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 py-24">
            <div className="flex items-baseline gap-4 mb-10 justify-center">
              <span aria-hidden="true" className="font-serif italic text-[14px] text-olive">
                IV
              </span>
              <span className="w-[80px] h-[1px] bg-background/30" />
              <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-background/60">
                Boletín
              </span>
            </div>

            <Reveal className="max-w-[680px] mx-auto text-center">
              <h2 className="font-serif text-[26px] md:text-[30px] lg:text-[36px] leading-[1.18] md:leading-[1.12] font-semibold tracking-[-0.012em]">
                ¿Su caso se parece a alguno de estos artículos?
              </h2>
              <p className="text-[16px] text-background/80 mt-5 leading-[1.6] max-w-[540px] mx-auto">
                Comentamos casos concretos a partir del expediente. Si una
                de estos artículos refleja la situación que enfrentas,
                escríbenos para una valoración inicial.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
                  href="https://wa.me/526642521509"
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
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
