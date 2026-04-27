import type { ServiceData } from "../types";

const data: ServiceData = {
  slug: "defensa-sict-transporte",
  numeral: "V",
  label: "Defensa SICT · Autotransporte federal",
  h1: "Defensa SICT en autotransporte federal: multas, retención de unidades y cancelación de placas.",
  lede: "Si la Secretaría de Infraestructura, Comunicaciones y Transportes te impuso una multa, retuvo una unidad o canceló placas o licencias, hay vías de impugnación con plazos cortos.",
  plazoCritico: {
    numero: "15 días hábiles",
    descripcion:
      "Para promover recurso administrativo contra la resolución sancionatoria.",
  },
  queEs: [
    "La SICT (antes SCT) supervisa el autotransporte federal de carga y pasaje. Aplica multas por exceso de peso y dimensiones, falta de licencia federal, fallas en condiciones físico-mecánicas, ausencia de pólizas de seguro y otras infracciones reguladas en el Reglamento de Tránsito en Carreteras y Puentes Federales.",
    "Necesitas esta defensa si recibiste boleta de infracción, retención de unidad, suspensión de operación o resolución de cancelación de placas o licencia federal.",
  ],
  comoAyudamos: [
    {
      n: "I",
      text: "Revisamos la boleta de infracción y la actuación del verificador, incluida la cadena de custodia del equipo de medición.",
    },
    {
      n: "II",
      text: "Identificamos vicios en la calibración del equipo, en la fundamentación legal o en la notificación.",
    },
    {
      n: "III",
      text: "Preparamos recurso administrativo o juicio de nulidad ante el TFJA según corresponda.",
    },
    {
      n: "IV",
      text: "Solicitamos la liberación de la unidad y, si procede, la suspensión cautelar de la sanción mientras se resuelve.",
    },
  ],
  plazos: [
    { etapa: "Recurso de revisión administrativa", plazo: "15 días hábiles" },
    { etapa: "Juicio de nulidad ante TFJA", plazo: "30 días hábiles" },
    { etapa: "Amparo", plazo: "15 días hábiles" },
  ],
  advertencia:
    "La multa queda firme, las unidades pueden permanecer retenidas en el corralón generando costos diarios, y reincidencias pueden derivar en cancelación del permiso federal de transporte.",
  documentos: [
    "Boleta de infracción levantada en carretera",
    "Permiso federal y tarjeta de circulación de la unidad",
    "Pólizas de seguro vigentes",
    "Carta porte y documentación del viaje",
    "Licencia federal del operador",
  ],
  resultado:
    "Una defensa correctamente preparada puede lograr la nulidad de la boleta, la liberación rápida de la unidad y la cancelación de la sanción cuando se acreditan vicios en la calibración o la notificación.",
  faqs: [
    {
      q: "¿Puedo recuperar la unidad rápido?",
      a: "En muchos casos sí, mediante el procedimiento de liberación correspondiente y, en su caso, garantía suficiente.",
    },
    {
      q: "¿Qué pasa si reincido?",
      a: "Las sanciones escalan y pueden afectar el permiso federal de autotransporte, llegando a su cancelación en casos graves.",
    },
    {
      q: "¿Cuánto cuestan los días en corralón?",
      a: "Varían por estado y depósito vehicular. Por eso conviene actuar de inmediato para liberar la unidad lo antes posible.",
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
      numeral: "VI",
      slug: "amparos-fiscales",
      label: "Amparos fiscales",
      pregunta: "Amparo en materia fiscal y administrativa",
    },
  ],
  metaTitle: "Defensa SICT en Tijuana · Multas en autotransporte federal",
  metaDescription:
    "Defensa contra multas de la SICT (antes SCT) en autotransporte federal: boletas, retención de unidades, suspensión de operación y cancelación de placas. Despacho ADAF en Tijuana.",
};

export default data;
