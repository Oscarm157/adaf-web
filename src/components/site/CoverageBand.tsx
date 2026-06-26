import { CoverageMap } from "@/components/visual/CoverageMap";

export function CoverageBand() {
  return (
    <section aria-label="Cobertura" className="bg-ink text-cream py-24 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-12 gap-y-12 gap-x-6 md:gap-x-12 items-center">
          <div className="col-span-12 lg:col-span-4">
            <div className="flex items-baseline gap-4 mb-8">
              <span aria-hidden="true" className="font-serif italic text-[14px] text-[#C9B85A]">III</span>
              <span className="w-[80px] h-px bg-cream/25" />
              <span className="text-[10px] uppercase tracking-[0.24em] font-medium text-cream/60">
                Cobertura procesal
              </span>
            </div>
            <h2 className="display-md text-cream">
              Baja California, y ante los tribunales federales.
            </h2>
            <p className="text-[15px] leading-[1.7] text-cream/75 mt-7 max-w-[380px]">
              Atendemos a clientes en Tijuana, Tecate, Rosarito, Mexicali y Ensenada,
              y los representamos ante el Tribunal Federal de Justicia Administrativa,
              los Juzgados de Distrito y los Tribunales Colegiados de Circuito.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <CoverageMap variant="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}
