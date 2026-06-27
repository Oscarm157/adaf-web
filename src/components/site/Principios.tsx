import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";

const pillars = [
  { n: "i", title: "Trayectoria comprobada", body: "Veinticinco años de representación continua en materia aduanera, fiscal y administrativa en la frontera norte. Conocemos los criterios de las autoridades locales y los tiempos reales de cada procedimiento." },
  { n: "ii", title: "Trato directo y confidencial", body: "Cada caso lo lleva un abogado responsable de principio a fin. La información del cliente se maneja bajo el secreto profesional que exige la práctica jurídica." },
  { n: "iii", title: "Análisis técnico antes de actuar", body: "Antes de presentar un escrito revisamos plazos, fundamento legal y pruebas. Explicamos qué procede, qué riesgos hay y qué resultado realista esperar." },
];

export function Principios() {
  return (
    <section aria-label="Principios" className="bg-background pt-24 pb-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
        <Reveal className="mb-16">
          <div className="flex items-baseline gap-4 mb-6">
            <span aria-hidden="true" className="font-serif italic text-[14px] text-olive">VII</span>
            <span className="w-[80px] h-px bg-rule" />
            <span className="text-[10px] uppercase tracking-[0.24em] font-medium text-muted">Principios</span>
          </div>
          <h2 className="display-md text-navy max-w-[600px]">
            Tres principios sostienen cada caso.
          </h2>
        </Reveal>

        <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {pillars.map((p) => (
            <StaggerItem key={p.n}>
              <article>
                <div className="flex items-baseline gap-3 mb-6">
                  <span aria-hidden="true" className="font-serif italic text-[20px] text-olive">{p.n}.</span>
                  <span className="flex-1 h-px bg-rule" />
                </div>
                <h3 className="font-serif text-[22px] md:text-[26px] leading-[1.2] font-semibold text-navy tracking-[-0.01em]">
                  {p.title}
                </h3>
                <p className="text-[15px] leading-[1.7] text-foreground/80 mt-4">{p.body}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
