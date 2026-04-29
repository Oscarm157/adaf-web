export type ServiceFAQ = {
  q: string;
  a: string;
};

export type ServicePlazo = {
  etapa: string;
  plazo: string;
};

export type ServiceStep = {
  n: string;
  text: string;
};

export type ServiceRelacionado = {
  numeral: string;
  slug: string;
  label: string;
  pregunta: string;
};

export type ServiceEditorial = {
  src: string;
  alt: string;
  tone: "navy" | "burgundy" | "olive";
  numeral: string;
  title: string;
};

export type ServiceData = {
  slug: string;
  numeral: string;
  label: string;
  h1: string;
  lede: string;
  plazoCritico?: { numero: string; descripcion: string };
  queEs: string[]; // 1-3 párrafos
  comoAyudamos: ServiceStep[];
  plazos: ServicePlazo[];
  advertencia: string;
  documentos: string[];
  resultado: string;
  faqs: ServiceFAQ[];
  relacionados: ServiceRelacionado[];
  metaTitle: string;
  metaDescription: string;
  editorial?: ServiceEditorial;
  editorialSecondary?: ServiceEditorial;
};
