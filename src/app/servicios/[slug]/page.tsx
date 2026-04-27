import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Masthead } from "@/components/site/Masthead";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { ServicePage } from "@/components/service/ServicePage";
import {
  getAllServiceSlugs,
  getServiceBySlug,
} from "@/components/service/data";
import { siteUrl } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getServiceBySlug(slug);
  if (!data) return {};
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: { canonical: `/servicios/${slug}` },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `${siteUrl}/servicios/${slug}`,
      type: "article",
    },
  };
}

export default async function ServiceRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = getServiceBySlug(slug);
  if (!data) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: data.label,
    name: data.h1,
    description: data.metaDescription,
    provider: {
      "@type": "LegalService",
      "@id": `${siteUrl}/#legalservice`,
    },
    areaServed: [
      { "@type": "City", name: "Tijuana" },
      { "@type": "AdministrativeArea", name: "Baja California" },
    ],
    mainEntityOfPage: `${siteUrl}/servicios/${slug}`,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Masthead />
      <Header />
      <main>
        <ServicePage data={data} />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
