import type { ServiceData } from "../types";

const data: ServiceData = {
  slug: "multas-comercio-exterior",
  numeral: "VII",
  label: "Comercio exterior",
  h1: "Multas de comercio exterior: clasificación, valor y regulaciones no arancelarias.",
  lede: "Cuando la autoridad detecta una irregularidad en la operación aduanera, la sanción puede llegar al 130% del valor de la mercancía. Te ayudamos a impugnarla.",
  plazoCritico: {
    numero: "30 días hábiles",
    descripcion:
      "Para promover recurso de revocación o juicio de nulidad contra la resolución sancionatoria.",
  },
  queEs: [
    "Las multas más comunes en comercio exterior derivan de clasificación arancelaria incorrecta, declaración inexacta del valor en aduana, omisión de regulaciones no arancelarias (NOMs, permisos previos, avisos automáticos), datos falsos en pedimento y omisión de impuestos al comercio exterior.",
    "La defensa requiere análisis técnico cruzado: derecho aduanero, comercio internacional, T-MEC y reglas generales de interpretación arancelaria.",
  ],
  comoAyudamos: [
    {
      n: "I",
      text: "Revisamos pedimento, factura, certificado de origen y documentación técnica del producto.",
    },
    {
      n: "II",
      text: "Verificamos la clasificación arancelaria con base en las Reglas Generales de Interpretación de la TIGIE.",
    },
    {
      n: "III",
      text: "Preparamos la defensa con documentación que demuestre el cumplimiento de las regulaciones aplicables.",
    },
    {
      n: "IV",
      text: "Promovemos recurso de revocación ante el SAT o juicio contencioso administrativo ante el TFJA.",
    },
  ],
  plazos: [
    { etapa: "Recurso de revocación", plazo: "30 días hábiles" },
    { etapa: "Juicio de nulidad ante TFJA", plazo: "30 días hábiles" },
    { etapa: "Amparo directo", plazo: "15 días hábiles" },
  ],
  advertencia:
    "La multa queda firme y puede generar el pago coactivo del 130% del valor en aduana de la mercancía, además de la pérdida de la propia mercancía cuando esté sujeta a embargo precautorio.",
  documentos: [
    "Pedimento(s) y anexos",
    "Factura comercial y lista de empaque",
    "Certificado de origen (T-MEC u otros tratados)",
    "Documentos técnicos (NOMs, registros, avisos)",
    "Resolución sancionatoria de la autoridad",
    "Comunicaciones con el agente aduanal",
  ],
  resultado:
    "La defensa correctamente preparada puede lograr la nulidad o reducción sustancial de la multa, especialmente cuando se acredita buena fe del importador o cuando hay vicios formales en la determinación.",
  faqs: [
    {
      q: "¿Puedo seguir importando mientras se resuelve?",
      a: "Sí, pero hay que monitorear que no se generen sanciones acumuladas en operaciones similares.",
    },
    {
      q: "¿La multa puede ser reducida?",
      a: "En muchos casos, demostrando buena fe y corrección espontánea de la operación errónea, la sanción se reduce significativamente.",
    },
    {
      q: "¿Conviene corregir antes de la auditoría aduanera?",
      a: "Generalmente sí. La corrección espontánea puede eliminar o reducir multas conforme al artículo 73 del Código Fiscal de la Federación.",
    },
  ],
  relacionados: [
    {
      numeral: "I",
      slug: "defensa-aduanera",
      label: "Defensa aduanera",
      pregunta: "Embargo precautorio y PAMA en aduana",
    },
    {
      numeral: "VIII",
      slug: "recurso-revocacion-juicio-nulidad",
      label: "Recurso · Juicio de nulidad",
      pregunta: "Impugnación de resoluciones administrativas",
    },
    {
      numeral: "X",
      slug: "asesoria-preventiva-compliance",
      label: "Asesoría preventiva",
      pregunta: "Compliance fiscal y aduanero",
    },
  ],
  metaTitle: "Multas de comercio exterior en Tijuana · Clasificación y valor",
  metaDescription: "Defensa contra multas de comercio exterior por clasificación arancelaria, valor en aduana y RNAs. Recurso de revocación y juicio de nulidad.",
  editorial: {
    src: "/editorial/editorial-vii-embargo-contenedor.png",
    alt: "Contenedor olive en patio aduanal vacío",
    tone: "olive",
    numeral: "VII·b",
    title: "Contenedor en patio aduanal",
  },
  editorialSecondary: {
    src: "/editorial/test-frontera-F-tijuana-duotono.png",
    alt: "Cruce de carga Otay Mesa, vista aérea",
    tone: "navy",
    numeral: "IV·b",
    title: "Frontera norte",
  },
};

export default data;
