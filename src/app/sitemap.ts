import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { getAllServiceSlugs } from "@/components/service/data";
import { getPublishedArticles } from "@/lib/blog/data";

// Dinámico: consulta `articles`. Evita que el build necesite DATABASE_URL real.
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();

  const root: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/nosotros`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${siteUrl}/servicios`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/resultados`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteUrl}/blog`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteUrl}/faq`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteUrl}/contacto`, lastModified, changeFrequency: "yearly", priority: 0.7 },
    { url: `${siteUrl}/recursos/72-horas`, lastModified, changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteUrl}/aviso-de-privacidad`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/terminos-y-condiciones`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];

  const services: MetadataRoute.Sitemap = getAllServiceSlugs().map((slug) => ({
    url: `${siteUrl}/servicios/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const articles = await getPublishedArticles();
  const blogPosts: MetadataRoute.Sitemap = articles.map((a) => ({
    url: `${siteUrl}/blog/${a.slug}`,
    lastModified: a.publishedAt ? new Date(a.publishedAt) : lastModified,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...root, ...services, ...blogPosts];
}
