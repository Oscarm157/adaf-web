export const siteUrl = "https://adafsolucionesfiscales.com";

export const siteConfig = {
  name: "ADAF Asesoría y Defensa Aduanera Fiscal",
  shortName: "ADAF",
  description:
    "Despacho jurídico en Tijuana especializado en defensa fiscal, aduanera, administrativa y penal-fiscal. 25 años representando a empresarios, importadores y transportistas ante SAT, ANAM, IMSS, COFEPRIS, COEPRIS, SICT y los tribunales federales.",
  url: siteUrl,
  ogImage: `${siteUrl}/og-default.png`,
  locale: "es_MX",
  phone: "+52-664-647-5018",
  phoneDisplay: "664 647 5018",
  email: "juridicoadaf@gmail.com",
  address: {
    street: "Blvd. de las Bellas Artes 19213, Local 15",
    locality: "Tijuana",
    region: "Baja California",
    postalCode: "22435",
    country: "MX",
    neighborhood: "Nueva Tijuana",
  },
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  areasServed: ["Tijuana", "Tecate", "Rosarito", "Baja California"],
};

export const legalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${siteUrl}/#legalservice`,
  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  description: siteConfig.description,
  url: siteUrl,
  telephone: siteConfig.phone,
  email: `mailto:${siteConfig.email}`,
  image: `${siteUrl}/og-default.png`,
  logo: `${siteUrl}/logo-adaf-source.jpg`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${siteConfig.address.street}, ${siteConfig.address.neighborhood}`,
    addressLocality: siteConfig.address.locality,
    addressRegion: siteConfig.address.region,
    postalCode: siteConfig.address.postalCode,
    addressCountry: siteConfig.address.country,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: siteConfig.hours.days,
      opens: siteConfig.hours.opens,
      closes: siteConfig.hours.closes,
    },
  ],
  areaServed: [
    { "@type": "City", name: "Tijuana" },
    { "@type": "City", name: "Tecate" },
    { "@type": "City", name: "Rosarito" },
    { "@type": "AdministrativeArea", name: "Baja California" },
  ],
  knowsAbout: [
    "Derecho aduanero",
    "Derecho fiscal",
    "Derecho administrativo",
    "Amparo en materia fiscal",
    "Procedimiento Administrativo en Materia Aduanera (PAMA)",
    "Defensa penal-fiscal",
    "Compliance fiscal y aduanero",
    "Comercio exterior",
    "Defensa ante SAT, ANAM, IMSS, COFEPRIS, COEPRIS, SICT",
  ],
  sameAs: [
    "https://www.facebook.com/ADAFSC",
    "https://www.facebook.com/ADAFdespachojuridico",
  ],
};
