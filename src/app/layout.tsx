import type { Metadata } from "next";
import { Source_Serif_4, Inter } from "next/font/google";
import "./globals.css";
import { legalServiceJsonLd, siteConfig, siteUrl } from "@/lib/seo";

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.shortName} · Asesoría y Defensa Aduanera Fiscal · Tijuana`,
    template: `%s · ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  generator: "Next.js",
  keywords: [
    "abogado fiscal Tijuana",
    "defensa fiscal Tijuana",
    "abogado aduanero Tijuana",
    "despacho fiscal Tijuana",
    "defensa contra SAT",
    "amparo fiscal Tijuana",
    "PAMA aduana",
    "defensa COFEPRIS",
    "defensa COEPRIS Baja California",
    "abogado IMSS Tijuana",
    "comercio exterior frontera norte",
    "defensa penal fiscal",
    "ADAF",
    "Asesoría y Defensa Aduanera Fiscal",
  ],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteUrl,
    siteName: siteConfig.name,
    title: `${siteConfig.shortName} · Asesoría y Defensa Aduanera Fiscal · Tijuana`,
    description: siteConfig.description,
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.shortName} · ${siteConfig.name}`,
    description: siteConfig.description,
    images: ["/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  category: "legal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-MX"
      className={`${sourceSerif.variable} ${inter.variable} h-full`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(legalServiceJsonLd),
          }}
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
