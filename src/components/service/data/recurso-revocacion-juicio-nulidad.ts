import type { ServiceData } from "../types";

const data: ServiceData = {
  slug: "recurso-revocacion-juicio-nulidad",
  numeral: "VIII",
  label: "Recurso · Juicio de nulidad",
  h1: "Recurso de revocación y juicio contencioso administrativo.",
  lede: "Las dos vías formales para impugnar resoluciones de autoridades fiscales y administrativas. Diagnosticamos cuál conviene a tu caso y la tramitamos.",
  plazoCritico: {
    numero: "30 días hábiles",
    descripcion:
      "Plazo común para promover recurso de revocación o juicio de nulidad desde la notificación de la resolución.",
  },
  queEs: [
    "El recurso de revocación se interpone ante la propia autoridad que emitió el acto (típicamente el SAT). El juicio contencioso administrativo (también llamado juicio de nulidad) se promueve ante el Tribunal Federal de Justicia Administrativa o el tribunal local correspondiente. Cada vía tiene ventajas, plazos y costos distintos.",
    "La elección entre una y otra depende del tipo de resolución, del monto, de la fortaleza de las pruebas y de la estrategia procesal global. La decisión es excluyente: una vez elegida una vía, no se puede cambiar.",
  ],
  comoAyudamos: [
    {
      n: "I",
      text: "Diagnóstico: te decimos cuál vía conviene a tu caso después de analizar la resolución y los antecedentes.",
    },
    {
      n: "II",
      text: "Preparamos el escrito con agravios, pruebas, ofrecimientos y solicitud de suspensión cuando procede.",
    },
    {
      n: "III",
      text: "Damos seguimiento procesal hasta la resolución, incluyendo audiencias, alegatos y pruebas supervinientes.",
    },
    {
      n: "IV",
      text: "Si la resolución del recurso o juicio es desfavorable, valoramos la procedencia de amparo directo.",
    },
  ],
  plazos: [
    {
      etapa: "Recurso de revocación desde notificación",
      plazo: "30 días hábiles",
    },
    { etapa: "Juicio de nulidad desde notificación", plazo: "30 días hábiles" },
    { etapa: "Amparo directo contra sentencia del TFJA", plazo: "15 días hábiles" },
  ],
  advertencia:
    "Si dejas pasar el plazo, la resolución queda firme y se ejecuta. Se inicia el procedimiento administrativo de ejecución, con embargo de cuentas bancarias y bienes.",
  documentos: [
    "Resolución que se va a impugnar",
    "Constancia de notificación con fecha legible",
    "Antecedentes del procedimiento administrativo",
    "Pruebas documentales con que se cuente",
    "Identificación oficial del interesado",
  ],
  resultado:
    "Bien defendido, el recurso o juicio puede dejar sin efectos la resolución, reducir el monto del crédito fiscal, ordenar la reposición del procedimiento o decretar la prescripción de las facultades de la autoridad.",
  faqs: [
    {
      q: "¿Qué conviene, recurso o juicio?",
      a: "El recurso es más rápido y barato; el juicio puede ser más profundo y permite suspensión más amplia. La elección depende del expediente.",
    },
    {
      q: "¿Puedo combinar ambos?",
      a: "No simultáneamente. Se elige una vía. Si se opta por recurso y la resolución es desfavorable, queda abierta la opción del juicio de nulidad.",
    },
    {
      q: "¿Cuánto dura un juicio de nulidad?",
      a: "Típicamente 12 a 24 meses en primera instancia ante el TFJA, sin contar amparos posteriores.",
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
      numeral: "I",
      slug: "defensa-aduanera",
      label: "Defensa aduanera",
      pregunta: "Embargo precautorio y PAMA en aduana",
    },
  ],
  metaTitle: "Recurso de revocación y juicio de nulidad en Tijuana",
  metaDescription: "Impugnación de resoluciones fiscales y administrativas. Recurso de revocación ante SAT y juicio contencioso ante TFJA. ADAF Tijuana.",
  editorial: {
    src: "/editorial/editorial-iii-balanza.png",
    alt: "Balanza de dos platos sobre superficie sage-olive",
    tone: "olive",
    numeral: "VIII·b",
    title: "Balanza",
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
