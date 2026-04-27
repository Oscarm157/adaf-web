// Helper para construir links de WhatsApp con mensaje pre-llenado contextual
// según la página en que se encuentra el usuario. Reusable en WhatsAppFloat,
// botones de Contacto, ServicePage y CTAs.

const PHONE = "526646475018";

const messages: Record<string, string> = {
  "/servicios/defensa-aduanera":
    "Hola, tengo una duda sobre PAMA / aduana.",
  "/servicios/defensa-fiscal-sat":
    "Hola, recibí una notificación del SAT y necesito orientación.",
  "/servicios/defensa-imss-infonavit":
    "Hola, tengo una liquidación del IMSS / INFONAVIT.",
  "/servicios/defensa-sanitaria":
    "Hola, recibí una sanción de COFEPRIS / COEPRIS.",
  "/servicios/defensa-sict-transporte":
    "Hola, tengo una multa de SICT / autotransporte federal.",
  "/servicios/amparos-fiscales":
    "Hola, necesito amparar un acto de autoridad.",
  "/servicios/multas-comercio-exterior":
    "Hola, tengo una multa de comercio exterior.",
  "/servicios/recurso-revocacion-juicio-nulidad":
    "Hola, quiero impugnar una resolución administrativa.",
  "/servicios/defensa-penal-fiscal":
    "Hola, estoy bajo investigación penal-fiscal.",
  "/servicios/asesoria-preventiva-compliance":
    "Hola, busco asesoría preventiva / compliance.",
  "/recursos/72-horas":
    "Hola, descargué la guía y necesito asesoría.",
};

const DEFAULT_MESSAGE =
  "Hola, vi su sitio web y necesito información sobre mi asunto.";

export function whatsappMessage(pathname?: string | null): string {
  if (!pathname) return DEFAULT_MESSAGE;
  return messages[pathname] ?? DEFAULT_MESSAGE;
}

export function whatsappUrl(pathname?: string | null, custom?: string): string {
  const text = custom ?? whatsappMessage(pathname);
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
}

export const whatsappPhone = PHONE;
