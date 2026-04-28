// URL de Calendly del despacho. Si la env no está definida (build sin agenda),
// los componentes hacen fallback al flujo actual: Agenda → /contacto y CTAs
// solamente con WhatsApp.
//
// Para activar: en Vercel definir
//   NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/adaf-tijuana/valoracion
// (el subdominio real depende de la cuenta del despacho).

export const CALENDLY_URL: string | null =
  process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() || null;

export const hasCalendly = Boolean(CALENDLY_URL);
