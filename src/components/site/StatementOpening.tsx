import { Reveal } from "@/components/motion/Reveal";

const anchors = [
  { k: "25", s: "años de práctica continua" },
  { k: "10", s: "áreas de defensa especializada" },
  { k: "1:1", s: "un abogado responsable por caso" },
];

export function StatementOpening() {
  return (
    <section aria-label="Posicionamiento" className="bg-background pt-24 md:pt-32 pb-24 md:pb-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-12 gap-y-14 gap-x-6 md:gap-x-12 items-start">
          {/* Columna ancla, izquierda */}
          <div className="col-span-12 lg:col-span-4">
            <Reveal>
              <p className="text-[10px] uppercase tracking-[0.24em] font-medium text-muted">
                ADAF · Frontera norte
              </p>
              <dl className="mt-8 divide-y divide-rule border-y border-rule">
                {anchors.map((a) => (
                  <div key={a.k} className="flex items-baseline gap-5 py-4">
                    <dt className="font-serif text-[34px] leading-none font-semibold text-navy tabular-nums tracking-[-0.02em] w-[72px] shrink-0">
                      {a.k}
                    </dt>
                    <dd className="text-[13.5px] leading-[1.5] text-muted">{a.s}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Statement, desplazado a la derecha */}
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <Reveal delay={0.1}>
              <p className="display-md text-foreground">
                Cada asunto lo lleva un abogado responsable,{" "}
                <span className="text-burgundy">de la primera notificación al fallo.</span>{" "}
                No delegamos el expediente en pasantes ni lo movemos entre escritorios.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
