export function Masthead() {
  return (
    <div className="bg-navy text-background">
      <div className="max-w-[1280px] mx-auto px-12 h-9 flex items-center justify-between gap-6">
        <p className="text-[10px] uppercase tracking-[0.22em] font-medium text-background/85">
          ADAF · Tijuana, Baja California · Frontera norte de México
        </p>
        <p className="text-[10px] uppercase tracking-[0.22em] font-medium text-background/55 hidden md:block">
          Defensa fiscal · Aduanera · Administrativa · 25 años
        </p>
        <p className="text-[10px] uppercase tracking-[0.22em] font-medium text-background/85">
          664 647 5018
        </p>
      </div>
    </div>
  );
}
