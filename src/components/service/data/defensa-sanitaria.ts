import type { ServiceData } from "../types";

const data: ServiceData = {
  slug: "defensa-sanitaria",
  numeral: "IV",
  label: "Defensa sanitaria · COFEPRIS / COEPRIS",
  h1: "Defensa contra sanciones sanitarias de COFEPRIS y COEPRIS.",
  lede: "Si te impusieron una multa, ordenaron la suspensión de tu actividad o aseguraron producto, te representamos en el procedimiento administrativo y, en su caso, en juicio de nulidad.",
  plazoCritico: {
    numero: "15 días hábiles",
    descripcion:
      "Para promover recurso de revisión contra la resolución sancionatoria.",
  },
  queEs: [
    "COFEPRIS regula a nivel federal los productos sanitarios (medicamentos, dispositivos médicos, alimentos, suplementos) y las importaciones reguladas. COEPRIS Baja California verifica establecimientos locales: farmacias, consultorios, laboratorios, restaurantes, fabricantes de alimentos y suplementos, importadores con bodega en territorio estatal.",
    "Necesitas esta defensa si recibiste un acta de verificación con observaciones, una resolución de multa, una orden de aseguramiento de producto o una orden de suspensión de actividad.",
  ],
  comoAyudamos: [
    {
      n: "I",
      text: "Revisamos el acta de verificación y la resolución sancionatoria para identificar vicios formales y de fondo.",
    },
    {
      n: "II",
      text: "Identificamos vicios en competencia, fundamentación, motivación, debida diligencia y notificación.",
    },
    {
      n: "III",
      text: "Preparamos recurso administrativo de revisión con la documentación que demuestra el cumplimiento del establecimiento.",
    },
    {
      n: "IV",
      text: "Si procede, juicio de nulidad ante el Tribunal de Justicia Administrativa local o el TFJA según la autoridad emisora.",
    },
    {
      n: "V",
      text: "Solicitamos la liberación del producto asegurado o la levantada de la suspensión cuando los hechos del expediente lo permiten.",
    },
  ],
  plazos: [
    { etapa: "Recurso de revisión administrativa", plazo: "15 días hábiles" },
    { etapa: "Juicio de nulidad", plazo: "30 días hábiles" },
    { etapa: "Amparo", plazo: "15 días hábiles" },
  ],
  advertencia:
    "La multa queda firme y se cobra coactivamente. La suspensión puede prolongarse y afectar la operación del negocio de manera severa, especialmente en establecimientos con flujo continuo.",
  documentos: [
    "Acta de verificación levantada por el inspector",
    "Resolución sancionatoria notificada",
    "Aviso de funcionamiento y registros sanitarios vigentes",
    "Documentación del producto asegurado (si aplica)",
    "Licencia sanitaria del establecimiento",
  ],
  resultado:
    "Es frecuente lograr nulidad parcial o total cuando hay vicios formales en notificación, motivación o competencia. En casos sustantivos, mostrar el cumplimiento real del establecimiento puede reducir el monto de la sanción.",
  faqs: [
    {
      q: "¿Puedo seguir operando si me suspendieron?",
      a: "No, pero podemos solicitar medida cautelar para suspender la suspensión mientras se resuelve la impugnación.",
    },
    {
      q: "¿Pierdo la mercancía asegurada?",
      a: "No necesariamente. Se puede solicitar liberación bajo garantía o demostrando el origen y registro sanitario del producto.",
    },
    {
      q: "¿Cuál es la diferencia entre COFEPRIS y COEPRIS?",
      a: "COFEPRIS es la autoridad federal (depende de la Secretaría de Salud federal). COEPRIS es la autoridad estatal en Baja California. Ambas pueden imponer sanciones según su jurisdicción.",
    },
    {
      q: "¿Qué multas son las más comunes?",
      a: "Falta de aviso de funcionamiento, etiquetado deficiente, productos sin registro sanitario y condiciones higiénicas inadecuadas en el establecimiento.",
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
      numeral: "X",
      slug: "asesoria-preventiva-compliance",
      label: "Asesoría preventiva",
      pregunta: "Compliance fiscal y aduanero",
    },
  ],
  metaTitle: "Defensa COFEPRIS y COEPRIS en Tijuana · Multas y suspensiones",
  metaDescription: "Defensa contra sanciones sanitarias federales (COFEPRIS) y estatales (COEPRIS BC): multas, suspensiones y aseguramiento de producto. ADAF Tijuana.",
};

export default data;
