"use client";

import Link from "next/link";
import { useState } from "react";

const inputClass =
  "w-full bg-background-warm border-b border-foreground/30 h-12 px-4 text-[15px] text-foreground placeholder:text-muted focus:outline-none focus:border-burgundy transition-colors";

type State = "idle" | "submitting" | "ok" | "error";

export function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setError(null);

    const fd = new FormData(e.currentTarget);
    const payload = {
      nombre: String(fd.get("nombre") ?? ""),
      telefono: String(fd.get("telefono") ?? ""),
      email: String(fd.get("email") ?? ""),
      tipo: String(fd.get("tipo") ?? ""),
      mensaje: String(fd.get("mensaje") ?? ""),
      aviso: fd.get("aviso") === "on" || fd.get("aviso") === "true",
    };

    try {
      const res = await fetch("/api/contacto", {
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
        setError(data?.error ?? "No se pudo enviar el mensaje");
      }
    } catch {
      setState("error");
      setError("Error de red. Intenta nuevamente.");
    }
  }

  if (state === "ok") {
    return (
      <div className="border border-rule bg-background-warm px-7 py-9 max-w-[480px]">
        <p className="text-[10px] uppercase tracking-[0.22em] text-burgundy font-medium mb-3">
          Mensaje recibido
        </p>
        <h3 className="font-serif text-[20px] md:text-[24px] leading-[1.25] md:leading-[1.2] font-semibold text-navy tracking-[-0.008em]">
          Te respondemos en horario hábil.
        </h3>
        <p className="text-[15px] leading-[1.6] text-foreground/80 mt-4">
          Revisaremos los datos de tu asunto y te contactaremos por la vía que
          prefieras. Si el plazo legal está corriendo y necesitas orientación
          inmediata, escríbenos por WhatsApp al 664 647 5018.
        </p>
        <button
          type="button"
          onClick={() => setState("idle")}
          className="mt-6 text-[12px] uppercase tracking-[0.16em] font-medium text-burgundy hover:text-burgundy-dark transition-colors"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="nombre"
          className="block text-[10px] uppercase tracking-[0.22em] text-muted font-medium mb-2"
        >
          Nombre completo
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          required
          minLength={2}
          maxLength={120}
          className={inputClass}
          placeholder="Tu nombre"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="telefono"
            className="block text-[10px] uppercase tracking-[0.22em] text-muted font-medium mb-2"
          >
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            required
            minLength={7}
            maxLength={40}
            className={inputClass}
            placeholder="664 000 0000"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-[10px] uppercase tracking-[0.22em] text-muted font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={inputClass}
            placeholder="tu@correo.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="tipo"
          className="block text-[10px] uppercase tracking-[0.22em] text-muted font-medium mb-2"
        >
          Tipo de asunto
        </label>
        <select
          id="tipo"
          name="tipo"
          required
          className={`${inputClass} appearance-none`}
          defaultValue=""
        >
          <option value="" disabled>
            Selecciona la materia
          </option>
          <option value="aduanera">Aduanera</option>
          <option value="fiscal-sat">Fiscal SAT</option>
          <option value="imss-infonavit">IMSS / INFONAVIT</option>
          <option value="sanitaria">Sanitaria (COFEPRIS / COEPRIS)</option>
          <option value="sict">SICT (autotransporte)</option>
          <option value="otro">Otro</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="mensaje"
          className="block text-[10px] uppercase tracking-[0.22em] text-muted font-medium mb-2"
        >
          Descripción del caso
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={5}
          required
          minLength={10}
          maxLength={4000}
          className="w-full bg-background-warm border-b border-foreground/30 px-4 py-3 text-[15px] text-foreground placeholder:text-muted focus:outline-none focus:border-burgundy transition-colors resize-none"
          placeholder="Cuéntanos qué notificación recibiste y de qué autoridad."
        />
      </div>

      <label className="flex items-start gap-3 text-[13px] leading-[1.55] text-foreground/80">
        <input
          type="checkbox"
          name="aviso"
          required
          className="mt-1 accent-burgundy"
        />
        <span>
          He leído y acepto el{" "}
          <Link
            href="/aviso-de-privacidad"
            className="text-burgundy underline-offset-2 hover:underline"
          >
            aviso de privacidad
          </Link>
          .
        </span>
      </label>

      {state === "error" && error && (
        <p className="text-[13px] text-burgundy bg-background-warm border-l-[3px] border-burgundy px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting"}
        className="inline-flex items-center justify-center bg-burgundy text-white text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] hover:bg-burgundy-dark transition-colors duration-200 disabled:opacity-60 disabled:cursor-wait"
      >
        {state === "submitting" ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
