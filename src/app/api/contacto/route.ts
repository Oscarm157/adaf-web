import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { siteConfig } from "@/lib/seo";

const schema = z.object({
  nombre: z.string().min(2).max(120),
  telefono: z.string().min(7).max(40),
  email: z.string().email(),
  tipo: z.enum([
    "aduanera",
    "fiscal-sat",
    "imss-infonavit",
    "sanitaria",
    "sict",
    "otro",
  ]),
  mensaje: z.string().min(10).max(4000),
  aviso: z.union([z.boolean(), z.literal("on"), z.string()]).refine(
    (v) => v === true || v === "on" || v === "true",
    "Debes aceptar el aviso de privacidad",
  ),
});

const tipoLabel: Record<string, string> = {
  aduanera: "Defensa aduanera",
  "fiscal-sat": "Defensa fiscal SAT",
  "imss-infonavit": "IMSS / INFONAVIT",
  sanitaria: "Defensa sanitaria",
  sict: "Defensa SICT",
  otro: "Otro",
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Datos inválidos", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM ?? "ADAF <onboarding@resend.dev>";
    const toEmail = process.env.RESEND_TO ?? siteConfig.email;

    if (!apiKey) {
      console.warn("[contacto] RESEND_API_KEY no configurado");
      return NextResponse.json({ ok: true, dev: true });
    }

    const { nombre, telefono, email, tipo, mensaje } = parsed.data;
    const subject = `Nuevo contacto desde el sitio · ${tipoLabel[tipo]} · ${nombre}`;

    const html = `
      <!doctype html>
      <html lang="es">
        <body style="font-family:Inter,Arial,sans-serif;color:#111418;background:#FAFAF7;padding:24px;">
          <div style="max-width:560px;margin:0 auto;background:#fff;padding:32px;border:1px solid #E2DED5;">
            <p style="font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#5A5853;margin:0 0 16px">
              ADAF · Sitio web · Nuevo mensaje
            </p>
            <h1 style="font-family:'Source Serif 4',Georgia,serif;font-size:24px;color:#0F2A47;margin:0 0 20px">
              ${escape(nombre)} · ${escape(tipoLabel[tipo])}
            </h1>
            <table style="width:100%;font-size:14px;line-height:1.5">
              <tr><td style="color:#5A5853;text-transform:uppercase;font-size:10px;letter-spacing:.18em;padding:6px 0">Teléfono</td><td>${escape(telefono)}</td></tr>
              <tr><td style="color:#5A5853;text-transform:uppercase;font-size:10px;letter-spacing:.18em;padding:6px 0">Correo</td><td>${escape(email)}</td></tr>
              <tr><td style="color:#5A5853;text-transform:uppercase;font-size:10px;letter-spacing:.18em;padding:6px 0">Materia</td><td>${escape(tipoLabel[tipo])}</td></tr>
            </table>
            <hr style="border:none;border-top:1px solid #E2DED5;margin:24px 0">
            <p style="font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#5A5853;margin:0 0 8px">Descripción del caso</p>
            <p style="font-size:15px;line-height:1.6;color:#111418;white-space:pre-wrap">${escape(mensaje)}</p>
          </div>
          <p style="text-align:center;font-size:11px;color:#9b9890;margin-top:16px">
            Enviado desde adafsolucionesfiscales.com
          </p>
        </body>
      </html>
    `;

    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject,
      html,
    });

    if (result.error) {
      console.error("[contacto] Resend error", result.error);
      return NextResponse.json(
        { ok: false, error: "No se pudo enviar el mensaje" },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contacto] handler error", err);
    return NextResponse.json(
      { ok: false, error: "Error inesperado" },
      { status: 500 },
    );
  }
}

function escape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
