import Link from "next/link";
import type { Metadata } from "next";
import { Masthead } from "@/components/site/Masthead";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { PageHero } from "@/components/page/PageHero";
import { posts } from "@/lib/posts";
import { siteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Notas y análisis",
  description:
    "Comentarios técnicos de ADAF sobre reformas, criterios de autoridad y procedimientos en materia fiscal, aduanera y administrativa.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Notas y análisis · ADAF",
    description:
      "Comentarios técnicos sobre reformas, criterios de autoridad y procedimientos en materia fiscal, aduanera y administrativa.",
    url: `${siteUrl}/blog`,
    type: "website",
  },
};

export default function BlogIndexPage() {
  const ordered = [...posts].sort((a, b) =>
    a.fechaIso < b.fechaIso ? 1 : -1,
  );

  return (
    <>
      <Masthead />
      <Header />
      <main>
        <PageHero
          numeral="I"
          label="Notas y análisis"
          h1="Comentarios técnicos sobre reformas, criterios y procedimientos."
          lede="Notas redactadas por el despacho sobre los temas que llegan con más frecuencia a nuestros expedientes: reformas al CFF, criterios de autoridad, procedimientos aduaneros y administrativos. No sustituyen la asesoría sobre un caso específico."
          crumbs={[
            { label: "Inicio", href: "/" },
            { label: "Notas y análisis" },
          ]}
        />

        <section className="bg-background pt-20 pb-24">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-foreground/15">
              {ordered.map((n, i) => (
                <Link
                  key={n.slug}
                  href={`/blog/${n.slug}`}
                  className={`group block px-1 md:px-7 py-10 transition-colors duration-300 hover:bg-background-warm ${
                    i < ordered.length - 1 ? "md:border-r border-rule" : ""
                  } ${i > 0 ? "border-t md:border-t-0 border-rule" : ""}`}
                >
                  <div className="flex items-baseline justify-between mb-6">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-burgundy font-medium">
                      {n.cat}
                    </p>
                    <p className="font-serif italic text-[12px] text-olive">
                      {n.folio}
                    </p>
                  </div>

                  <p className="text-[12px] uppercase tracking-[0.14em] text-muted">
                    {n.fecha}
                  </p>

                  <h3 className="font-serif text-[20px] md:text-[24px] leading-[1.25] md:leading-[1.2] font-medium text-navy tracking-[-0.008em] mt-4 group-hover:text-burgundy transition-colors duration-300">
                    {n.titulo}
                  </h3>

                  <p className="text-[14.5px] leading-[1.6] text-muted mt-4">
                    {n.resumen}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] font-medium text-navy mt-7 group-hover:gap-3 group-hover:text-burgundy transition-all duration-300">
                    Leer la nota
                    <span>→</span>
                  </span>
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

          <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 py-24">
            <div className="flex items-baseline gap-4 mb-10 justify-center">
              <span aria-hidden="true" className="font-serif italic text-[14px] text-olive">
                II
              </span>
              <span className="w-[80px] h-[1px] bg-background/30" />
              <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-background/60">
                Boletín
              </span>
            </div>

            <div className="max-w-[680px] mx-auto text-center">
              <h2 className="font-serif text-[26px] md:text-[30px] lg:text-[36px] leading-[1.18] md:leading-[1.12] font-semibold tracking-[-0.012em]">
                Recibe nuestras notas.
              </h2>
              <p className="text-[16px] text-background/80 mt-5 leading-[1.6] max-w-[540px] mx-auto">
                Comentarios técnicos sobre reformas, criterios y
                procedimientos en materia fiscal, aduanera y administrativa.
                Sin frecuencia fija; cuando hay algo relevante para empresas
                de la frontera norte.
              </p>

              <form className="mt-10 flex flex-col sm:flex-row gap-3 max-w-[460px] mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Tu correo electrónico"
                  className="flex-1 h-12 px-4 bg-transparent border border-background/30 text-background text-[14px] placeholder:text-background/50 focus:outline-none focus:border-olive transition-colors"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center bg-burgundy text-white text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] hover:bg-burgundy-dark transition-colors duration-200"
                >
                  Suscribirme
                </button>
              </form>

              <p className="text-[11px] uppercase tracking-[0.18em] text-background/55 mt-6">
                Sujeto al aviso de privacidad
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
