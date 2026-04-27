import type { ServiceData } from "../types";

const data: ServiceData = {
  slug: "defensa-aduanera",
  numeral: "I",
  label: "Defensa aduanera",
  h1: "Defensa aduanera ante embargo precautorio, PAMA y multas de comercio exterior.",
  lede: "Si la autoridad aduanera retuvo tu mercancía, inició un Procedimiento Administrativo en Materia Aduanera (PAMA) o te notificó una multa, hay plazos cortos para responder. Te representamos ante ANAM y ante los tribunales federales.",
  plazoCritico: {
    numero: "10 días hábiles",
    descripcion:
      "Para ofrecer pruebas y alegatos en el PAMA, contados desde el levantamiento del acta.",
  },
  queEs: [
    "Cuando ingresas mercancía a territorio nacional, la autoridad aduanera puede iniciar un procedimiento si detecta —o presume— una irregularidad: clasificación arancelaria incorrecta, valor en aduana inexacto, falta de regulaciones no arancelarias, omisión de impuestos al comercio exterior o documentación inconsistente. El PAMA es el procedimiento mediante el cual la autoridad embarga la mercancía de manera precautoria mientras determina si hubo infracción.",
    "Necesitas defensa aduanera si te embargaron mercancía en frontera o en recinto fiscalizado, recibiste una resolución que determina créditos fiscales por contribuciones al comercio exterior, te impusieron una multa por una norma oficial mexicana o por incumplimiento de regulaciones no arancelarias, o tu importación temporal IMMEX está siendo cuestionada.",
  ],
  comoAyudamos: [
    {
      n: "I",
      text: "Revisamos el acta de inicio del PAMA y el sustento de la autoridad para identificar vicios formales y de fondo.",
    },
    {
      n: "II",
      text: "Identificamos los plazos legales aplicables (10 días hábiles para ofrecer pruebas y alegatos) y aseguramos su cumplimiento.",
    },
    {
      n: "III",
      text: "Preparamos el escrito de pruebas y alegatos con la documentación que corresponde: pedimentos, facturas, certificados de origen y documentos técnicos.",
    },
    {
      n: "IV",
      text: "Si la resolución es desfavorable, promovemos recurso de revocación o juicio contencioso administrativo ante el TFJA.",
    },
    {
      n: "V",
      text: "Cuando procede, solicitamos la liberación de la mercancía bajo garantía mientras se resuelve el fondo del asunto.",
    },
  ],
  plazos: [
    { etapa: "Ofrecimiento de pruebas y alegatos en PAMA", plazo: "10 días hábiles" },
    {
      etapa: "Recurso de revocación contra resolución de PAMA",
      plazo: "30 días hábiles",
    },
    { etapa: "Juicio contencioso administrativo (Nulidad)", plazo: "30 días hábiles" },
    { etapa: "Amparo directo contra sentencia del TFJA", plazo: "15 días hábiles" },
  ],
  advertencia:
    "La resolución queda firme, se ejecutan las contribuciones omitidas, las multas (que pueden alcanzar el 130% del valor en aduana de la mercancía) y la mercancía pasa a propiedad del Fisco Federal por abandono.",
  documentos: [
    "Acta circunstanciada del inicio del PAMA",
    "Pedimento(s) de importación y anexos",
    "Factura comercial y lista de empaque",
    "Certificado de origen (si aplica T-MEC u otro tratado)",
    "Documentos técnicos del producto (NOMs, fichas, etiquetado)",
    "Comunicaciones previas con el agente aduanal",
  ],
  resultado:
    "Una defensa correctamente preparada puede lograr la liberación de la mercancía, la nulidad o reducción del crédito fiscal y la cancelación o disminución de la multa. La probabilidad real depende del expediente; te la decimos después del diagnóstico, no antes.",
  faqs: [
    {
      q: "¿Cuánto tiempo tengo para responder un PAMA?",
      a: "Diez días hábiles a partir del levantamiento del acta de inicio.",
    },
    {
      q: "¿Puedo recuperar la mercancía mientras se resuelve?",
      a: "En muchos casos sí, mediante depósito o garantía suficiente para cubrir contribuciones y multas potenciales.",
    },
    {
      q: "¿Necesito un abogado o me basta con el agente aduanal?",
      a: "El agente aduanal te asesora en el cumplimiento operativo, pero la defensa jurídica del PAMA y los recursos posteriores requieren representación legal.",
    },
    {
      q: "¿Qué pasa si la mercancía ya pasó a abandono?",
      a: "Hay vías para impugnar la declaratoria de abandono, pero los plazos son muy cortos. Cuanto antes se actúe, mayor probabilidad de recuperación.",
    },
  ],
  relacionados: [
    {
      numeral: "VII",
      slug: "multas-comercio-exterior",
      label: "Comercio exterior",
      pregunta: "Multas por clasificación, valor y NOMs",
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
  metaTitle: "Defensa aduanera en Tijuana · PAMA, embargo y multas",
  metaDescription:
    "Representación legal ante ANAM y tribunales federales en Procedimiento Administrativo en Materia Aduanera, embargo precautorio, devolución de mercancía y multas de comercio exterior. Despacho ADAF en Tijuana.",
};

export default data;
