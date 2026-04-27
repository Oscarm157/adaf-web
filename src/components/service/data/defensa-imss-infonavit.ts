import type { ServiceData } from "../types";

const data: ServiceData = {
  slug: "defensa-imss-infonavit",
  numeral: "III",
  label: "Defensa IMSS / INFONAVIT",
  h1: "Defensa IMSS e INFONAVIT: capitales constitutivos, multas patronales y créditos fiscales.",
  lede: "Si el IMSS o el INFONAVIT te liquidaron capitales constitutivos, multas o diferencias de cuotas, hay procedimientos para impugnarlos antes de que se conviertan en créditos firmes.",
  plazoCritico: {
    numero: "15 días hábiles",
    descripcion:
      "Para presentar el recurso de inconformidad ante el Consejo Consultivo Delegacional del IMSS.",
  },
  queEs: [
    "El IMSS y el INFONAVIT actúan como autoridades fiscales en lo que toca a las cuotas obrero-patronales y aportaciones de vivienda. Pueden determinar diferencias por dictamen, por revisión, por aviso patronal omitido o por accidente de trabajo no reportado. Los capitales constitutivos, que se aplican cuando un trabajador se accidenta o enferma sin estar inscrito, son particularmente costosos para el patrón.",
    "Necesitas esta defensa si recibiste una cédula de liquidación de cuotas, un capital constitutivo, una multa por SUA, un requerimiento de dictamen o una resolución de inconformidad desfavorable.",
  ],
  comoAyudamos: [
    {
      n: "I",
      text: "Revisamos la cédula de liquidación, el sustento del IMSS y los registros patronales para identificar errores de cálculo y vicios en la notificación.",
    },
    {
      n: "II",
      text: "Promovemos recurso de inconformidad ante el Consejo Consultivo Delegacional del IMSS dentro del plazo de 15 días.",
    },
    {
      n: "III",
      text: "Si se confirma la liquidación, planteamos juicio de nulidad ante el TFJA con la documentación que demuestra la procedencia o el monto correcto.",
    },
    {
      n: "IV",
      text: "Acompañamos en visitas domiciliarias y revisiones del IMSS, asegurando que cada acta refleje únicamente lo que conste en el expediente.",
    },
    {
      n: "V",
      text: "Asesoramos en planes de regularización y convenios de pago a plazos para casos donde la liquidación sea procedente.",
    },
  ],
  plazos: [
    { etapa: "Recurso de inconformidad ante IMSS", plazo: "15 días hábiles" },
    { etapa: "Juicio de nulidad ante TFJA", plazo: "30 días hábiles" },
    { etapa: "Amparo", plazo: "15 días hábiles" },
  ],
  advertencia:
    "El crédito queda firme, el IMSS lo cobra mediante PAE, se embargan cuentas patronales y, en casos graves, se puede generar responsabilidad solidaria de socios y administradores.",
  documentos: [
    "Cédula(s) de liquidación recibida(s)",
    "Avisos al IMSS (alta, baja, modificación de salario)",
    "Reporte SUA del periodo revisado",
    "Dictamen IMSS si aplica",
    "Listado de trabajadores con sus salarios base de cotización",
  ],
  resultado:
    "Una defensa correctamente preparada puede lograr la nulidad de la liquidación, la reducción del monto o la reclasificación del concepto. En capitales constitutivos, demostrar la inscripción oportuna o la procedencia real del riesgo de trabajo cambia el resultado.",
  faqs: [
    {
      q: "¿Cuánto tiempo tengo para impugnar una liquidación del IMSS?",
      a: "15 días hábiles para promover recurso de inconformidad ante el Consejo Consultivo Delegacional.",
    },
    {
      q: "¿Puedo solicitar pago a plazos?",
      a: "Sí, hasta en 48 mensualidades en términos del Reglamento del IMSS, pero esto no suspende el plazo para impugnar la liquidación.",
    },
    {
      q: "¿Y si el trabajador ya cobró el capital constitutivo?",
      a: "Aún se puede impugnar el monto y la procedencia de la liquidación. La defensa se enfoca en demostrar la inscripción oportuna o el reporte correcto del riesgo.",
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
      numeral: "X",
      slug: "asesoria-preventiva-compliance",
      label: "Asesoría preventiva",
      pregunta: "Compliance fiscal y aduanero",
    },
  ],
  metaTitle: "Defensa IMSS e INFONAVIT en Tijuana · Capitales constitutivos",
  metaDescription: "Defensa contra cédulas de liquidación, capitales constitutivos y multas patronales. Recurso de inconformidad y juicio de nulidad. ADAF Tijuana.",
};

export default data;
