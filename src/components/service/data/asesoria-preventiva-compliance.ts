import type { ServiceData } from "../types";

const data: ServiceData = {
  slug: "asesoria-preventiva-compliance",
  numeral: "X",
  label: "Asesoría preventiva",
  h1: "Asesoría preventiva y compliance fiscal-aduanero.",
  lede: "La mejor defensa empieza antes del problema. Revisamos la operación, identificamos riesgos y diseñamos controles para reducir la probabilidad de contingencias.",
  queEs: [
    "Un programa de cumplimiento bien diseñado puede prevenir multas, créditos fiscales, capitales constitutivos y procedimientos penales. El servicio incluye revisión periódica de pedimentos, validación de procesos IMMEX, auditoría preventiva de cuotas IMSS, revisión del cumplimiento sanitario en COFEPRIS y COEPRIS, diagnóstico de riesgos por operaciones inexistentes (artículo 69-B) y políticas internas de antilavado para sujetos obligados.",
    "El compliance no es ornamental: cuando llega una autoridad a verificar, los controles documentados acreditan buena fe y muchas veces eliminan o reducen sanciones.",
  ],
  comoAyudamos: [
    {
      n: "I",
      text: "Diagnóstico inicial de la operación y cruce con áreas de riesgo fiscal, aduanero, laboral y sanitario.",
    },
    {
      n: "II",
      text: "Revisión documental por área: pedimentos, contabilidad fiscal, registros IMSS, registros sanitarios, contratos.",
    },
    {
      n: "III",
      text: "Reporte ejecutivo con hallazgos, riesgos cuantificados y plan de remediación priorizado.",
    },
    {
      n: "IV",
      text: "Implementación de controles internos, políticas y procedimientos.",
    },
    {
      n: "V",
      text: "Acompañamiento continuo bajo modalidad de iguala o por proyecto.",
    },
  ],
  plazos: [
    {
      etapa: "Diagnóstico inicial",
      plazo: "2-4 semanas",
    },
    {
      etapa: "Plan de remediación",
      plazo: "1-3 meses",
    },
    {
      etapa: "Iguala mensual continua",
      plazo: "Indefinida",
    },
  ],
  advertencia:
    "Sin programa preventivo, la primera vez que la autoridad llegue verás los controles débiles y la documentación incompleta. Las sanciones serán mayores y la corrección espontánea más cara.",
  documentos: [
    "Constitutiva y poderes notariales vigentes",
    "Estados financieros del último ejercicio",
    "Pedimentos y operaciones de comercio exterior recientes",
    "Padrones, registros y avisos sanitarios",
    "Listado de trabajadores y SUA reciente",
    "Manuales y políticas internas existentes",
  ],
  resultado:
    "Una operación con compliance tiene menor probabilidad de auditoría desfavorable, mejor posición negociadora frente a la autoridad y, cuando hay infracciones detectadas internamente, posibilidad real de corrección espontánea.",
  faqs: [
    {
      q: "¿Conviene corregir errores espontáneamente?",
      a: "En muchos casos sí. La corrección espontánea (artículo 73 del Código Fiscal de la Federación) puede eliminar o reducir multas significativamente cuando se realiza antes de que la autoridad detecte la irregularidad.",
    },
    {
      q: "¿Cuánto cuesta el servicio?",
      a: "Depende del tamaño y complejidad de la operación. Después del diagnóstico inicial entregamos propuesta económica por escrito.",
    },
    {
      q: "¿Sirve para empresas que ya tienen contador?",
      a: "Sí. El compliance jurídico es complementario al servicio contable: revisa la dimensión legal del cumplimiento, no la contable.",
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
      numeral: "I",
      slug: "defensa-aduanera",
      label: "Defensa aduanera",
      pregunta: "Embargo precautorio y PAMA en aduana",
    },
    {
      numeral: "III",
      slug: "defensa-imss-infonavit",
      label: "Defensa IMSS / INFONAVIT",
      pregunta: "Cédulas de liquidación y capitales constitutivos",
    },
  ],
  metaTitle: "Asesoría preventiva y compliance fiscal-aduanero · Tijuana",
  metaDescription: "Diagnóstico de riesgos, regularización espontánea y compliance fiscal, aduanero, laboral y sanitario. Iguala mensual o por proyecto. ADAF Tijuana.",
  editorial: {
    src: "/editorial/editorial-iv-portada-guia.png",
    alt: "Portafolio burgundy con documento",
    tone: "burgundy",
    numeral: "X·b",
    title: "Documentación interna",
  },
  editorialSecondary: {
    src: "/editorial/editorial-x-sello-notarial.png",
    alt: "Sello notarial brass sobre documento",
    tone: "olive",
    numeral: "IV·b",
    title: "Sello notarial",
  },
};

export default data;
