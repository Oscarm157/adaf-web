"use client";

import Link from "next/link";
import { useState } from "react";

type State = "idle" | "submitting" | "ok" | "error";

export function LeadMagnetForm({ withConsent = false }: { withConsent?: boolean }) {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setError(null);

    const fd = new FormData(e.currentTarget);
    const payload = {
      nombre: String(fd.get("nombre") ?? ""),
      email: String(fd.get("email") ?? ""),
    };

    try {
      const res = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setState("ok");
        e.currentTarget.reset();
      } else {
        setState("error");
        setError(data?.error ?? "No se pudo registrar tu solicitud");
      }
    } catch {
      setState("error");
      setError("Error de red. Intenta nuevamente.");
    }
  }

  if (state === "ok") {
    return (
      <div className="mt-10 max-w-[520px] border border-rule bg-background-warm px-6 py-7">
        <p className="text-[10px] uppercase tracking-[0.22em] text-burgundy font-medium mb-3">
          Solicitud recibida
        </p>
        <h3 className="font-serif text-[20px] leading-[1.25] font-semibold text-navy tracking-[-0.008em]">
          Te enviaremos la guía en horario hábil.
        </h3>
        <p className="text-[14.5px] leading-[1.6] text-foreground/80 mt-3">
          Si tu asunto es urgente, escríbenos por WhatsApp al 664 647 5018.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 max-w-[520px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input
          type="text"
          name="nombre"
          required
          minLength={2}
          maxLength={120}
          placeholder="Nombre completo"
          className="h-12 px-4 bg-background-warm border-b border-foreground/30 text-[14px] focus:outline-none focus:border-burgundy transition-colors"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Correo electrónico"
          className="h-12 px-4 bg-background-warm border-b border-foreground/30 text-[14px] focus:outline-none focus:border-burgundy transition-colors"
        />
      </div>
      {withConsent && (
        <label className="flex items-start gap-3 mt-6 text-[13px] leading-[1.55] text-foreground/80">
          <input
            type="checkbox"
            name="aviso"
            required
            className="mt-[5px] accent-burgundy"
          />
          <span>
            He leído y acepto el{" "}
            <Link
              href="/aviso-de-privacidad"
              className="underline underline-offset-2 hover:text-burgundy"
            >
              aviso de privacidad
            </Link>
            .
          </span>
        </label>
      )}
      {state === "error" && error && (
        <p className="text-[13px] text-burgundy bg-background-warm border-l-[3px] border-burgundy px-4 py-3 mt-4">
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={state === "submitting"}
        className="mt-5 inline-flex items-center justify-center bg-burgundy text-white text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] hover:bg-burgundy-dark transition-colors duration-200 disabled:opacity-60 disabled:cursor-wait"
      >
        {state === "submitting" ? "Enviando..." : "Descargar la guía"}
      </button>
      <p className="text-[13px] leading-[1.55] text-muted mt-5 max-w-[420px]">
        Te enviaremos la guía en horario hábil al correo que registres.
      </p>
      <p className="text-[11px] uppercase tracking-[0.16em] text-muted mt-3">
        Sujeto al aviso de privacidad
      </p>
    </form>
  );
}
