import type { ServiceData } from "../types";

const data: ServiceData = {
  slug: "defensa-fiscal-sat",
  numeral: "II",
  label: "Defensa fiscal SAT",
  h1: "Defensa fiscal frente a créditos, auditorías y visitas domiciliarias del SAT.",
  lede: "Si recibiste una notificación del SAT —invitación, requerimiento, orden de visita o resolución de crédito fiscal— hay vías legales para responder y evitar que el monto quede firme.",
  plazoCritico: {
    numero: "20 días hábiles",
    descripcion:
      "Para aportar pruebas en auditoría tras el oficio de observaciones, antes de que se emita la resolución.",
  },
  queEs: [
    "El SAT puede ejercer sus facultades de comprobación de varias maneras: cartas invitación, revisiones de gabinete, visitas domiciliarias, revisiones electrónicas y compulsas con terceros. Cada vía tiene reglas, plazos y derechos del contribuyente distintos. La diferencia entre responder bien una visita domiciliaria y responder mal puede significar cientos de miles o millones de pesos en créditos fiscales determinados.",
    "Necesitas defensa fiscal si te llegó una orden de visita, te están requiriendo información en revisión de gabinete, te notificaron un oficio de observaciones, te resolvieron un crédito fiscal, recibiste una invitación de aclaración, o estás listado en el artículo 69-B del Código Fiscal de la Federación.",
  ],
  comoAyudamos: [
    {
      n: "I",
      text: "Analizamos la notificación: tipo de procedimiento, autoridad emisora y plazo de respuesta aplicable.",
    },
    {
      n: "II",
      text: "Acompañamos durante la auditoría o visita: revisamos cada acta parcial, las pruebas y las conclusiones del visitador.",
    },
    {
      n: "III",
      text: "Preparamos pruebas y alegatos antes de que se emita el oficio de observaciones definitivo.",
    },
    {
      n: "IV",
      text: "Si se determina crédito fiscal, evaluamos si conviene acuerdo conclusivo ante PRODECON, recurso de revocación o juicio de nulidad.",
    },
    {
      n: "V",
      text: "Tramitamos amparo cuando el acto contiene vicios constitucionales que justifican la vía.",
    },
  ],
  plazos: [
    {
      etapa: "Aportar pruebas en auditoría (oficio de observaciones)",
      plazo: "20 días hábiles",
    },
    {
      etapa: "Acuerdo conclusivo ante PRODECON",
      plazo: "Antes de la resolución",
    },
    { etapa: "Recurso de revocación", plazo: "30 días hábiles" },
    { etapa: "Juicio de nulidad ante TFJA", plazo: "30 días hábiles" },
    { etapa: "Amparo indirecto", plazo: "15 días hábiles" },
  ],
  advertencia:
    "El crédito fiscal queda firme, se inicia el procedimiento administrativo de ejecución (PAE), se embargan cuentas bancarias y bienes, y se pueden restringir los sellos digitales del contribuyente.",
  documentos: [
    "Orden de visita, oficio de requerimiento o resolución",
    "Última declaración anual y declaraciones del periodo revisado",
    "Contabilidad del ejercicio (cuando aplique)",
    "Comunicaciones previas con el SAT",
    "Cualquier acta parcial levantada en visita",
  ],
  resultado:
    "Bien defendida, una auditoría puede cerrarse sin crédito fiscal, con un crédito reducido sustancialmente, o con un acuerdo conclusivo que evite el litigio. Si el caso ya está en tribunales, la nulidad de la resolución es un resultado posible cuando hay vicios formales o de fondo.",
  faqs: [
    {
      q: "¿Qué hago si tocan a mi puerta con una orden de visita?",
      a: "Atender la diligencia, identificar a los visitadores, no firmar nada que no entiendas y contactar a un abogado en el momento.",
    },
    {
      q: "¿Qué pasa si me bloquearon los sellos digitales?",
      a: "Existe el procedimiento de aclaración del artículo 17-H Bis CFF con plazo corto. Lo iniciamos de inmediato cuando aplica.",
    },
    {
      q: "¿Conviene un acuerdo conclusivo o ir a juicio?",
      a: "Depende del expediente, del monto involucrado y de la fortaleza de las pruebas. Te lo decimos después del diagnóstico, no antes.",
    },
    {
      q: "¿Cuánto tarda un juicio de nulidad?",
      a: "En promedio entre 12 y 24 meses en primera instancia ante el TFJA.",
    },
  ],
  relacionados: [
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
    {
      numeral: "IX",
      slug: "defensa-penal-fiscal",
      label: "Defensa penal-fiscal",
      pregunta: "Investigación por delitos fiscales",
    },
  ],
  metaTitle: "Defensa fiscal SAT en Tijuana · Créditos, auditorías, visitas",
  metaDescription:
    "Defensa ante el SAT en visitas domiciliarias, revisiones de gabinete, créditos fiscales, restricción de sellos digitales, recurso de revocación y juicio de nulidad. Despacho ADAF en Tijuana.",
};

export default data;
