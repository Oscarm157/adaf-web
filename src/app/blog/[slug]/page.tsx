import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Masthead } from "@/components/site/Masthead";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import {
  Prose,
  P,
  H2,
  H3,
  UL,
  LI,
  Blockquote,
  Note,
} from "@/components/page/Prose";
import {
  posts,
  getPostBySlug,
  getAllPostSlugs,
  type BodyBlock,
} from "@/lib/posts";
import { siteUrl, siteConfig } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${siteUrl}/blog/${slug}`,
      type: "article",
      publishedTime: post.fechaIso,
      authors: [post.autor],
    },
  };
}

function renderBlock(block: BodyBlock, idx: number) {
  switch (block.type) {
    case "h2":
      return <H2 key={idx}>{block.text}</H2>;
    case "h3":
      return <H3 key={idx}>{block.text}</H3>;
    case "p":
      return <P key={idx}>{block.text}</P>;
    case "ul":
      return (
        <UL key={idx}>
          {block.items.map((it, i) => (
            <LI key={i}>{it}</LI>
          ))}
        </UL>
      );
    case "blockquote":
      return (
        <Blockquote key={idx} cite={block.cite}>
          {block.text}
        </Blockquote>
      );
    case "note":
      return (
        <Note key={idx} title={block.title}>
          {block.text}
        </Note>
      );
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const otras = posts.filter((p) => p.slug !== slug).slice(0, 2);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.titulo,
    description: post.metaDescription,
    datePublished: post.fechaIso,
    dateModified: post.fechaIso,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteUrl,
    },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Masthead />
      <Header />
      <main>
        {/* Header del artículo */}
        <section className="bg-background pt-14 pb-16 border-b border-rule">
          <div className="max-w-[1280px] mx-auto px-12">
            <nav
              aria-label="breadcrumb"
              className="flex items-center gap-2 text-[12px] text-muted mb-12"
            >
              <Link
                href="/"
                className="hover:text-burgundy transition-colors"
              >
                Inicio
              </Link>
              <span>›</span>
              <Link
                href="/blog"
                className="hover:text-burgundy transition-colors"
              >
                Notas
              </Link>
              <span>›</span>
              <span className="text-foreground truncate max-w-[420px]">
                {post.titulo}
              </span>
            </nav>

            <div className="max-w-[820px]">
              <div className="flex items-baseline gap-5 mb-8">
                <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-olive">
                  {post.cat}
                </span>
                <span className="w-[40px] h-[1px] bg-rule" />
                <span className="text-[12px] uppercase tracking-[0.14em] text-muted">
                  {post.fecha}
                </span>
                <span className="font-serif italic text-[12px] text-olive">
                  {post.folio}
                </span>
              </div>

              <h1 className="font-serif text-[44px] md:text-[50px] leading-[1.06] font-semibold text-navy tracking-[-0.016em]">
                {post.titulo}
              </h1>

              <div className="flex items-center gap-3 mt-9">
                <span className="text-[11px] uppercase tracking-[0.18em] text-muted">
                  Por
                </span>
                <span className="text-[13px] font-medium text-foreground">
                  {post.autor}
                </span>
              </div>

              <div className="w-full h-[1px] bg-rule mt-10" />
            </div>
          </div>
        </section>

        {/* Cuerpo */}
        <section className="bg-background pt-16 pb-20">
          <div className="max-w-[1280px] mx-auto px-12">
            <Prose>{post.body.map((b, i) => renderBlock(b, i))}</Prose>
          </div>
        </section>

        {/* Pie del artículo */}
        <section className="bg-background-warm border-y border-rule">
          <div className="max-w-[1280px] mx-auto px-12 py-16">
            <div className="max-w-[820px]">
              <p className="font-serif italic text-[18px] leading-[1.55] text-foreground/85 border-l-2 border-olive pl-5">
                Este texto es comentario técnico, no asesoría sobre un caso
                específico. Si tu situación se parece a lo descrito,
                contáctanos para una valoración concreta.
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-9">
                <a
                  href="https://wa.me/526646475018"
                  className="inline-flex items-center justify-center bg-burgundy text-white text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] hover:bg-burgundy-dark transition-colors duration-200"
                >
                  Hablar por WhatsApp
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center bg-transparent text-navy text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] border border-navy/30 hover:bg-navy hover:text-background transition-colors duration-200"
                >
                  Enviar mensaje
                </Link>
                <Link
                  href="/contacto#agendar"
                  className="inline-flex items-center justify-center bg-transparent text-navy text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] border border-navy/30 hover:bg-navy hover:text-background transition-colors duration-200"
                >
                  Agendar 20 min
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Otras notas */}
        <section className="bg-background pt-20 pb-24">
          <div className="max-w-[1280px] mx-auto px-12">
            <div className="flex items-baseline gap-4 mb-10">
              <span className="font-serif italic text-[14px] text-olive">
                IX
              </span>
              <span className="flex-1 max-w-[120px] h-[1px] bg-rule" />
              <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-muted">
                Otras notas
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-foreground/15">
              {otras.map((n, i) => (
                <Link
                  key={n.slug}
                  href={`/blog/${n.slug}`}
                  className={`group block px-1 md:px-7 py-10 transition-colors duration-300 hover:bg-background-warm ${
                    i === 0 ? "md:border-r border-rule" : ""
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
                  <h3 className="font-serif text-[24px] leading-[1.2] font-medium text-navy tracking-[-0.008em] mt-4 group-hover:text-burgundy transition-colors duration-300">
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
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
