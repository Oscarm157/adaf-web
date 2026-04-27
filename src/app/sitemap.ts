import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

const servicios = [
  "defensa-aduanera",
  "defensa-fiscal-sat",
  "defensa-imss-infonavit",
  "defensa-sanitaria",
  "defensa-sict-transporte",
  "amparos-fiscales",
  "multas-comercio-exterior",
  "recurso-revocacion-juicio-nulidad",
  "defensa-penal-fiscal",
  "asesoria-preventiva-compliance",
];

export default function sitemap(): MetadataRoute.Sitemap {
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

  const services: MetadataRoute.Sitemap = servicios.map((slug) => ({
    url: `${siteUrl}/servicios/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...root, ...services];
}
