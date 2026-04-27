import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { siteConfig } from "@/lib/seo";

const schema = z.object({
  nombre: z.string().min(2).max(120),
  email: z.string().email(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Datos inválidos" },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM ?? "ADAF <onboarding@resend.dev>";
    const toEmail = process.env.RESEND_TO ?? siteConfig.email;

    if (!apiKey) {
      console.warn("[lead-magnet] RESEND_API_KEY no configurado");
      return NextResponse.json({ ok: true, dev: true });
    }

    const { nombre, email } = parsed.data;
    const subject = `Lead · Guía 72 horas · ${nombre}`;

    const html = `
      <!doctype html>
      <html lang="es">
        <body style="font-family:Inter,Arial,sans-serif;color:#111418;background:#FAFAF7;padding:24px;">
          <div style="max-width:560px;margin:0 auto;background:#fff;padding:32px;border:1px solid #E2DED5;">
            <p style="font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:#5A5853;margin:0 0 16px">
              ADAF · Sitio web · Lead magnet
            </p>
            <h1 style="font-family:'Source Serif 4',Georgia,serif;font-size:22px;color:#0F2A47;margin:0 0 20px">
              ${escape(nombre)} solicitó la guía de 72 horas.
            </h1>
            <table style="width:100%;font-size:14px;line-height:1.5">
              <tr><td style="color:#5A5853;text-transform:uppercase;font-size:10px;letter-spacing:.18em;padding:6px 0">Nombre</td><td>${escape(nombre)}</td></tr>
              <tr><td style="color:#5A5853;text-transform:uppercase;font-size:10px;letter-spacing:.18em;padding:6px 0">Correo</td><td>${escape(email)}</td></tr>
            </table>
            <p style="font-size:13px;color:#5A5853;margin-top:24px;line-height:1.6">
              Envíale el PDF de la guía y, si aplica, propónle una valoración inicial de su caso.
            </p>
          </div>
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
      console.error("[lead-magnet] Resend error", result.error);
      return NextResponse.json(
        { ok: false, error: "No se pudo registrar tu solicitud" },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead-magnet] handler error", err);
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
