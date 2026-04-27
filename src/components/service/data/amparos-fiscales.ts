import type { ServiceData } from "../types";

const data: ServiceData = {
  slug: "amparos-fiscales",
  numeral: "VI",
  label: "Amparos fiscales",
  h1: "Amparos en materia fiscal y administrativa.",
  lede: "Cuando un acto de autoridad fiscal o administrativa viola tus derechos constitucionales, el amparo es la vía para combatirlo. Lo tramitamos en sus dos modalidades: indirecto y directo.",
  plazoCritico: {
    numero: "15 días hábiles",
    descripcion:
      "Para promover amparo indirecto desde la notificación o ejecución del acto reclamado.",
  },
  queEs: [
    "El juicio de amparo procede contra normas, actos u omisiones de las autoridades que violen derechos humanos. En materia fiscal y administrativa lo usamos contra leyes inconstitucionales, actos sin fundamentación o motivación adecuada, resoluciones que afectan los sellos digitales del contribuyente, embargos sin justificación suficiente y procedimientos en que la autoridad rebasa su competencia.",
    "El amparo indirecto se promueve ante un juez de distrito y procede contra actos. El amparo directo se promueve ante un tribunal colegiado y procede contra sentencias definitivas (incluidas las del TFJA).",
  ],
  comoAyudamos: [
    {
      n: "I",
      text: "Identificamos si el acto reclamado admite amparo indirecto o directo y si conviene.",
    },
    {
      n: "II",
      text: "Calculamos los plazos: 15 días hábiles desde la notificación o ejecución del acto.",
    },
    {
      n: "III",
      text: "Preparamos demanda con conceptos de violación constitucional y, en su caso, suspensión del acto reclamado.",
    },
    {
      n: "IV",
      text: "Damos seguimiento al juicio en juzgado de distrito o tribunal colegiado, incluyendo audiencias y alegatos.",
    },
  ],
  plazos: [
    { etapa: "Amparo indirecto contra acto de autoridad", plazo: "15 días hábiles" },
    { etapa: "Amparo directo contra sentencia", plazo: "15 días hábiles" },
    {
      etapa: "Amparo contra leyes con motivo del primer acto de aplicación",
      plazo: "15 días hábiles",
    },
  ],
  advertencia:
    "El acto reclamado se ejecuta y queda firme, sin posibilidad posterior de impugnación constitucional. Si era inconstitucional, esa vía se cierra de manera definitiva.",
  documentos: [
    "Acto reclamado completo (resolución, oficio, ley aplicable)",
    "Constancia de notificación o de ejecución del acto",
    "Antecedentes del procedimiento administrativo",
    "Documentación que acredite el interés jurídico del quejoso",
  ],
  resultado:
    "La concesión del amparo puede dejar sin efectos el acto reclamado, ordenar su reposición conforme a derecho o desincorporar al quejoso de la aplicación de una norma inconstitucional.",
  faqs: [
    {
      q: "¿El amparo suspende el cobro?",
      a: "Puede otorgarse suspensión del acto reclamado, normalmente bajo garantía, mientras se resuelve el fondo.",
    },
    {
      q: "¿Cuánto tarda un amparo?",
      a: "Amparo indirecto: 6-12 meses en primera instancia. Amparo directo: 6-9 meses ante tribunal colegiado.",
    },
    {
      q: "¿Puedo recurrir si pierdo el amparo?",
      a: "Sí, mediante recurso de revisión ante tribunal colegiado (en amparo indirecto) o, en su caso, vía atracción ante la Suprema Corte cuando concurren causas de procedencia.",
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
      numeral: "VIII",
      slug: "recurso-revocacion-juicio-nulidad",
      label: "Recurso · Juicio de nulidad",
      pregunta: "Impugnación de resoluciones administrativas",
    },
    {
      numeral: "I",
      slug: "defensa-aduanera",
      label: "Defensa aduanera",
      pregunta: "Embargo precautorio y PAMA en aduana",
    },
  ],
  metaTitle: "Amparos fiscales en Tijuana · Indirecto y directo",
  metaDescription: "Amparo en materia fiscal y administrativa contra leyes y resoluciones inconstitucionales. Juzgados de distrito y tribunales colegiados. ADAF Tijuana.",
};

export default data;
