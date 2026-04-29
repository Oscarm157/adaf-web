import Image from "next/image";
import { ChapterMark } from "./ChapterMark";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const pillars = [
  {
    n: "i",
    title: "Trayectoria comprobada",
    body: "Veinticinco años de representación continua en materia aduanera, fiscal y administrativa en la frontera norte. Conocemos los criterios de las autoridades locales y los tiempos reales de cada procedimiento.",
  },
  {
    n: "ii",
    title: "Trato directo y confidencial",
    body: "Cada caso lo lleva un abogado responsable de principio a fin. La información que el cliente comparte se maneja bajo el secreto profesional que exige la práctica jurídica.",
  },
  {
    n: "iii",
    title: "Análisis técnico antes de actuar",
    body: "Antes de presentar un escrito, revisamos plazos, fundamento legal y pruebas. Le explicamos al cliente qué procede, qué riesgos hay y qué resultado realista puede esperar.",
  },
];

export function Pillars() {
  return (
    <section aria-label="Principios" className="bg-background-warm pt-24 pb-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
        <ChapterMark numeral="III" label="Principios" />

        <div className="grid grid-cols-12 gap-y-10 gap-x-6 md:gap-x-10 lg:gap-x-16 mt-12 mb-20 items-center">
          <Reveal className="col-span-12 md:col-span-7 lg:col-span-7">
            <h2 className="font-serif text-[32px] md:text-[44px] lg:text-[52px] leading-[1.04] md:leading-[1.02] font-semibold text-navy tracking-[-0.018em] max-w-[580px]">
              Tres principios sostienen cada caso.
            </h2>
            <div className="flex items-baseline gap-3 mt-7">
              <span aria-hidden="true" className="font-serif italic text-[13px] text-olive">
                III·b
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-muted font-medium">
                Expedientes y método de trabajo
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.15} className="col-span-12 md:col-span-5 lg:col-span-5">
            <figure className="relative w-full aspect-square overflow-hidden border border-rule">
              <Image
                src="/editorial/editorial-ii-expedientes.png"
                alt="Pila de expedientes burgundy sobre escritorio walnut"
                fill
                sizes="(min-width: 1024px) 480px, (min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </figure>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-14 border-t border-foreground/15 pt-12">
          {pillars.map((p) => (
            <StaggerItem key={p.n}>
              <article className="relative">
                <div className="flex items-baseline gap-3 mb-5">
                  <span
                    aria-hidden="true"
                    className="font-serif italic text-[18px] text-olive"
                  >
                    {p.n}.
                  </span>
                  <span className="flex-1 h-[1px] bg-rule" />
                </div>

                <h3 className="font-serif text-[20px] md:text-[24px] leading-[1.25] md:leading-[1.2] font-semibold text-navy tracking-[-0.008em]">
                  {p.title}
                </h3>

                <p className="text-[15px] leading-[1.65] text-foreground/80 mt-4">
                  {p.body}
                </p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
