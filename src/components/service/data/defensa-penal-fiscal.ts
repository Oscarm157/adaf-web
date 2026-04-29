import type { ServiceData } from "../types";

const data: ServiceData = {
  slug: "defensa-penal-fiscal",
  numeral: "IX",
  label: "Defensa penal-fiscal",
  h1: "Defensa penal-fiscal: defraudación, contrabando, 69-B y lavado.",
  lede: "Cuando el procedimiento administrativo escala a investigación penal, la representación cambia. Te asistimos en denuncias, querellas y procesos penales fiscales.",
  plazoCritico: {
    numero: "Horas / días",
    descripcion:
      "Las audiencias del Código Nacional de Procedimientos Penales corren en plazos muy cortos desde la imputación.",
  },
  queEs: [
    "El Código Fiscal de la Federación tipifica varios delitos: defraudación fiscal y equiparada, contrabando y equiparado, simulación de operaciones (artículo 113 Bis), uso de comprobantes apócrifos. Cuando hay denuncia, la causa puede llegar a juzgado penal federal, con consecuencias graves, incluida prisión preventiva oficiosa en ciertos supuestos del artículo 167 del Código Nacional de Procedimientos Penales.",
    "Necesitas esta defensa si te citaron como imputado en una carpeta de investigación, te llegó orden de aprehensión, estás listado en el 69-B definitivo o hay denuncia del SAT por defraudación.",
  ],
  comoAyudamos: [
    {
      n: "I",
      text: "Revisamos la carpeta de investigación y el sustento de la denuncia para identificar inconsistencias y vicios.",
    },
    {
      n: "II",
      text: "Coordinamos la defensa penal con la defensa fiscal-administrativa que corre en paralelo (la causa fiscal y la penal son procedimientos distintos pero relacionados).",
    },
    {
      n: "III",
      text: "Promovemos audiencias iniciales, salidas alternas (acuerdo reparatorio, suspensión condicional del proceso) y, cuando procede, no ejercicio de la acción penal.",
    },
    {
      n: "IV",
      text: "Si hay vinculación a proceso, llevamos el juicio oral con estrategia técnica probatoria y pericial.",
    },
  ],
  plazos: [
    {
      etapa: "Audiencia inicial tras detención",
      plazo: "48 horas",
    },
    {
      etapa: "Plazo de investigación complementaria",
      plazo: "Hasta 6 meses",
    },
    {
      etapa: "Audiencia intermedia y juicio oral",
      plazo: "Variable según fiscalía",
    },
  ],
  advertencia:
    "El imputado puede quedar bajo prisión preventiva oficiosa en delitos del artículo 167 del CNPP. La libertad durante el proceso depende de la estrategia desde la primera audiencia.",
  documentos: [
    "Citatorio o copia de la carpeta de investigación",
    "Antecedentes fiscales (auditorías, créditos, oficios)",
    "Resoluciones administrativas relacionadas con los hechos imputados",
    "Documentación contable del periodo investigado",
    "Identificación oficial del imputado",
  ],
  resultado:
    "Hay salidas alternas, suspensión condicional, criterios de oportunidad y, en su caso, sentencias absolutorias en juicio oral. El resultado realista depende del expediente y se determina tras el diagnóstico inicial.",
  faqs: [
    {
      q: "¿Voy a la cárcel automáticamente?",
      a: "No necesariamente. Hay salidas alternas, criterios de oportunidad y absoluciones; depende del expediente y de la estrategia desde la audiencia inicial.",
    },
    {
      q: "¿Puedo defender el caso penal y el fiscal con el mismo despacho?",
      a: "Sí, y conviene que las dos estrategias dialoguen entre sí, ya que la causa penal y la administrativa están normalmente relacionadas.",
    },
    {
      q: "¿Qué es el listado del artículo 69-B?",
      a: "Es la lista que publica el SAT de contribuyentes presuntamente emisores de comprobantes que amparan operaciones inexistentes. Estar en el listado definitivo tiene consecuencias fiscales y penales.",
    },
  ],
  relacionados: [
    {
      numeral: "II",
      slug: "defensa-fiscal-sat",
      label: "Defensa fiscal SAT",
      pregunta: "Créditos fiscales y auditorías del SAT",
    },
    {
      numeral: "VI",
      slug: "amparos-fiscales",
      label: "Amparos fiscales",
      pregunta: "Amparo en materia fiscal y administrativa",
    },
    {
      numeral: "VIII",
      slug: "recurso-revocacion-juicio-nulidad",
      label: "Recurso · Juicio de nulidad",
      pregunta: "Impugnación de resoluciones administrativas",
    },
  ],
  metaTitle: "Defensa penal-fiscal en Tijuana · Defraudación y contrabando",
  metaDescription: "Defensa en investigaciones y procesos penales por defraudación fiscal, contrabando, simulación de operaciones (69-B) y delitos fiscales federales.",
  editorial: {
    src: "/editorial/editorial-ix-despacho-interior.png",
    alt: "Despacho jurídico con pared de códigos",
    tone: "burgundy",
    numeral: "IX·b",
    title: "Despacho",
  },
  editorialSecondary: {
    src: "/editorial/editorial-viii-edificio.png",
    alt: "Edificio federal modernista mexicano",
    tone: "navy",
    numeral: "IV·b",
    title: "Edificio institucional",
  },
};

export default data;
