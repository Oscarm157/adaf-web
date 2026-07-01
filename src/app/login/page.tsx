import { redirect } from "next/navigation";
import Image from "next/image";

import { getCurrentUser } from "@/lib/session";
import { LoginForm } from "./login-form";

export default async function LoginPage() {
  const me = await getCurrentUser();
  if (me) redirect("/admin");

  return (
    <main className="crm-root flex min-h-[100dvh] items-center justify-center bg-[var(--crm-bg)] px-4 py-12">
      <div className="w-full max-w-sm">
        <div className="flex justify-center">
          <Image
            src="/logo-adaf.png"
            alt="ADAF · Asesoría y Defensa Aduanera Fiscal"
            width={500}
            height={172}
            priority
            className="h-12 w-auto select-none"
          />
        </div>
        <div className="crm-tricolor mt-6 w-full" />

        <div className="crm-card-raised mt-6 p-7">
          <p className="crm-eyebrow text-[var(--crm-ink-faint)]">Panel interno</p>
          <h1 className="crm-h1 mt-1.5 text-[22px]">Iniciar sesión</h1>
          <p className="mt-1.5 text-[13.5px] text-[var(--crm-ink-soft)]">
            Entra con tu correo y contraseña.
          </p>
          <div className="mt-6">
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}
