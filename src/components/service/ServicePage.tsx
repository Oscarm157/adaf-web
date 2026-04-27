import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ChapterMark } from "@/components/site/ChapterMark";
import { PageHero } from "@/components/page/PageHero";
import { ProcedureTimeline } from "@/components/visual/ProcedureTimeline";
import { PullQuote } from "@/components/visual/PullQuote";
import type { ServiceData } from "./types";

export function ServicePage({ data }: { data: ServiceData }) {
  return (
    <>
      <PageHero
        crumbs={[
          { label: "Inicio", href: "/" },
          { label: "Servicios", href: "/servicios" },
          { label: data.label },
        ]}
        numeral={data.numeral}
        label={`Materia ${data.numeral} · ${data.label}`}
        h1={data.h1}
        lede={data.lede}
      />

      {/* Plazo crítico card + dual CTA */}
      <section className="bg-background pt-12 pb-12 border-b border-rule">
        <div className="max-w-[1280px] mx-auto px-12 grid grid-cols-12 gap-12 items-center">
          <div className="col-span-12 lg:col-span-8 flex flex-wrap items-center gap-5">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center bg-burgundy text-white text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] hover:bg-burgundy-dark transition-colors duration-200"
            >
              Agenda tu valoración
            </Link>
            <a
              href="https://wa.me/526646475018"
              className="inline-flex items-center justify-center bg-transparent text-navy text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] border border-navy/80 hover:bg-navy hover:text-background transition-colors duration-200"
            >
              Hablar por WhatsApp
            </a>
          </div>
          {data.plazoCritico && (
            <aside className="col-span-12 lg:col-span-4 relative bg-background-warm px-7 py-6 border-l-[3px] border-olive">
              <p className="text-[10px] uppercase tracking-[0.22em] text-burgundy font-medium">
                Plazo crítico
              </p>
              <p className="font-serif text-[36px] leading-none font-semibold text-navy mt-3 tracking-[-0.018em]">
                {data.plazoCritico.numero}
              </p>
              <p className="text-[13px] leading-[1.5] text-foreground/80 mt-3">
                {data.plazoCritico.descripcion}
              </p>
            </aside>
          )}
        </div>
      </section>

      {/* I — ¿Qué es y cuándo aplica? */}
      <section className="bg-background pt-20 pb-20">
        <div className="max-w-[1280px] mx-auto px-12">
          <ChapterMark numeral="I" label="Contexto del procedimiento" />
          <div className="grid grid-cols-12 gap-12 mt-10">
            <div className="col-span-12 lg:col-span-4">
              <h2 className="font-serif text-[36px] leading-[1.1] font-semibold text-navy tracking-[-0.012em] sticky top-32">
                ¿Qué es y cuándo aplica?
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <div className="space-y-6">
                {data.queEs.map((p, i) => (
                  <p
                    key={i}
                    className="text-[17px] leading-[1.7] text-foreground/85 max-w-[640px]"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* II — ¿Cómo te ayudamos? */}
      <section className="bg-background-warm pt-20 pb-20">
        <div className="max-w-[1280px] mx-auto px-12">
          <ChapterMark numeral="II" label="Cómo te ayudamos" />
          <div className="grid grid-cols-12 gap-12 mt-10 mb-14">
            <div className="col-span-12 lg:col-span-7">
              <h2 className="font-serif text-[40px] leading-[1.08] font-semibold text-navy tracking-[-0.014em]">
                Pasos del procedimiento que llevamos por ti.
              </h2>
            </div>
          </div>
          <ol className="border-t border-foreground/15">
            {data.comoAyudamos.map((step) => (
              <li
                key={step.n}
                className="grid grid-cols-12 gap-6 items-baseline border-b border-rule py-6 px-1"
              >
                <span className="col-span-12 md:col-span-1 font-serif italic text-[18px] font-medium text-olive">
                  {step.n}
                </span>
                <p className="col-span-12 md:col-span-11 text-[17px] leading-[1.65] text-foreground/85 max-w-[820px]">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* III — Plazos y consecuencias */}
      <section className="bg-background pt-20 pb-20">
        <div className="max-w-[1280px] mx-auto px-12">
          <ChapterMark numeral="III" label="Plazos y consecuencias" />
          <div className="grid grid-cols-12 gap-12 mt-10 mb-12">
            <div className="col-span-12 lg:col-span-7">
              <h2 className="font-serif text-[40px] leading-[1.08] font-semibold text-navy tracking-[-0.014em]">
                Plazos legales que están corriendo.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pt-2">
              <p className="text-[14px] leading-[1.65] text-muted max-w-[400px]">
                Los plazos corren a partir de la notificación, no del momento
                en que decides actuar.
              </p>
            </div>
          </div>

          <div className="border-y border-foreground/15 py-6 mb-2">
            <ProcedureTimeline steps={data.plazos} />
          </div>

          <aside className="mt-10 bg-background-warm border-l-[3px] border-burgundy px-7 py-6 max-w-[820px]">
            <p className="text-[10px] uppercase tracking-[0.22em] text-burgundy font-medium">
              Si no actúas dentro del plazo
            </p>
            <p className="text-[16px] leading-[1.65] text-foreground/85 mt-3">
              {data.advertencia}
            </p>
          </aside>
        </div>
      </section>

      {/* IV — Documentos */}
      <section className="bg-background-warm pt-20 pb-20">
        <div className="max-w-[1280px] mx-auto px-12">
          <ChapterMark numeral="IV" label="Documentación" />
          <div className="grid grid-cols-12 gap-12 mt-10">
            <div className="col-span-12 lg:col-span-5">
              <h2 className="font-serif text-[36px] leading-[1.1] font-semibold text-navy tracking-[-0.012em]">
                Documentos que necesitamos para empezar.
              </h2>
              <p className="text-[14.5px] leading-[1.65] text-muted mt-5 max-w-[400px]">
                Tener esta documentación lista en la primera reunión acelera el
                diagnóstico y permite estimar tiempos con mayor precisión.
              </p>
            </div>
            <ul className="col-span-12 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
              {data.documentos.map((d, i) => (
                <li
                  key={i}
                  className="flex items-baseline gap-3 text-[15px] leading-[1.55] text-foreground/85 border-b border-rule pb-3"
                >
                  <span className="font-serif italic text-[12px] text-olive shrink-0 w-6">
                    {romanize(i + 1)}
                  </span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* V — Resultado esperado */}
      <section className="bg-background pt-20 pb-20">
        <div className="max-w-[1280px] mx-auto px-12">
          <ChapterMark numeral="V" label="Expectativa realista" />
          <div className="mt-10 max-w-[820px]">
            <h2 className="font-serif text-[36px] leading-[1.1] font-semibold text-navy tracking-[-0.012em]">
              Resultado esperado.
            </h2>
            <p className="text-[18px] leading-[1.65] text-foreground/85 mt-7 max-w-[720px]">
              {data.resultado}
            </p>
          </div>
        </div>
      </section>

      {/* VI — FAQ */}
      <section className="bg-background-warm pt-20 pb-20">
        <div className="max-w-[1280px] mx-auto px-12">
          <ChapterMark numeral="VI" label="Preguntas frecuentes" />
          <div className="grid grid-cols-12 gap-12 mt-10">
            <div className="col-span-12 lg:col-span-4">
              <h2 className="font-serif text-[36px] leading-[1.1] font-semibold text-navy tracking-[-0.012em] sticky top-32">
                Preguntas frecuentes.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <div className="border-t border-foreground/15">
                {data.faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="group border-b border-rule py-6 px-1 [&[open]]:bg-background/50 transition-colors"
                  >
                    <summary className="flex items-baseline gap-4 cursor-pointer list-none">
                      <span className="font-serif italic text-[14px] text-olive shrink-0 w-7">
                        {romanize(i + 1)}
                      </span>
                      <span className="font-serif text-[20px] leading-[1.3] font-medium text-navy tracking-[-0.005em] flex-1 group-hover:text-burgundy transition-colors">
                        {faq.q}
                      </span>
                      <span className="font-serif italic text-[20px] text-olive group-open:rotate-45 transition-transform duration-200 select-none">
                        +
                      </span>
                    </summary>
                    <div className="ml-11 mt-4 max-w-[640px]">
                      <p className="text-[15.5px] leading-[1.7] text-foreground/85">
                        {faq.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VII — CTA final navy */}
      <section className="bg-navy text-background relative overflow-hidden">
        <span className="absolute top-8 left-8 w-3 h-3 border-t border-l border-olive/60" />
        <span className="absolute top-8 right-8 w-3 h-3 border-t border-r border-olive/60" />
        <span className="absolute bottom-8 left-8 w-3 h-3 border-b border-l border-olive/60" />
        <span className="absolute bottom-8 right-8 w-3 h-3 border-b border-r border-olive/60" />

        <div className="max-w-[1280px] mx-auto px-12 py-20">
          <div className="flex items-baseline gap-4 mb-8 justify-center">
            <span className="font-serif italic text-[14px] text-olive">VII</span>
            <span className="w-[80px] h-[1px] bg-background/30" />
            <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-background/60">
              Atención
            </span>
          </div>
          <div className="max-w-[760px] mx-auto text-center">
            <h2 className="font-serif text-[36px] leading-[1.12] font-semibold tracking-[-0.012em]">
              Escríbenos los detalles de tu asunto.
            </h2>
            <p className="text-[16px] text-background/80 mt-5 leading-[1.55] max-w-[600px] mx-auto">
              Te respondemos en horario hábil con una valoración inicial sin
              costo y los plazos legales que están corriendo.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-9">
              <a
                href="https://wa.me/526646475018"
                className="inline-flex items-center justify-center bg-burgundy text-white text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] hover:bg-burgundy-dark transition-colors duration-200"
              >
                Hablar por WhatsApp
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center bg-transparent text-background text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] border border-background/40 hover:bg-background hover:text-navy transition-colors duration-200"
              >
                Enviar mensaje
              </Link>
              <Link
                href="/contacto#agendar"
                className="inline-flex items-center justify-center bg-transparent text-background text-[13px] font-medium tracking-[0.06em] uppercase px-7 h-12 rounded-[2px] border border-background/40 hover:bg-background hover:text-navy transition-colors duration-200"
              >
                Agendar 20 min
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VIII — Materias relacionadas */}
      <section className="bg-background pt-20 pb-24">
        <div className="max-w-[1280px] mx-auto px-12">
          <ChapterMark numeral="VIII" label="Otras materias" />
          <div className="grid grid-cols-12 gap-12 mt-10 mb-12 items-end">
            <div className="col-span-12 lg:col-span-8">
              <h2 className="font-serif text-[34px] leading-[1.1] font-semibold text-navy tracking-[-0.012em]">
                Materias relacionadas con tu asunto.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:pb-2">
              <Link
                href="/servicios"
                className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] font-medium text-navy hover:text-burgundy transition-colors duration-200"
              >
                Ver las 10 áreas
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-foreground/15">
            {data.relacionados.map((r, i) => (
              <Link
                key={r.slug}
                href={`/servicios/${r.slug}`}
                className={`group block px-1 md:px-7 py-9 transition-colors duration-300 hover:bg-background-warm ${
                  i < data.relacionados.length - 1 ? "md:border-r border-rule" : ""
                } ${i > 0 ? "border-t md:border-t-0 border-rule" : ""}`}
              >
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-serif italic text-[14px] font-medium text-olive">
                    {r.numeral}
                  </span>
                  <span className="text-[12px] uppercase tracking-[0.14em] text-navy font-medium">
                    {r.label}
                  </span>
                </div>
                <h3 className="font-serif text-[22px] leading-[1.2] font-medium text-foreground tracking-[-0.005em] group-hover:text-burgundy transition-colors duration-300 ml-9">
                  {r.pregunta}
                </h3>
                <span className="ml-9 mt-4 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] font-medium text-burgundy group-hover:gap-3 transition-all duration-300">
                  Ver materia
                  <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function romanize(n: number): string {
  const r = [
    "I",
    "II",
    "III",
    "IV",
    "V",
    "VI",
    "VII",
    "VIII",
    "IX",
    "X",
    "XI",
    "XII",
    "XIII",
    "XIV",
    "XV",
  ];
  return r[n - 1] ?? String(n);
}
