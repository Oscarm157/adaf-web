export function Masthead() {
  return (
    <div className="bg-navy text-background">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-12 h-9 flex items-center justify-between gap-6">
        <p className="text-[10px] uppercase tracking-[0.22em] font-medium text-background/85 truncate min-w-0">
          ADAF · Tijuana, Baja California
          <span className="hidden sm:inline"> · Frontera norte de México</span>
        </p>
        <p className="text-[10px] uppercase tracking-[0.22em] font-medium text-background/55 hidden md:block">
          Defensa fiscal · Aduanera · Administrativa · 25 años
        </p>
        <p className="text-[10px] uppercase tracking-[0.22em] font-medium text-background/85 shrink-0 whitespace-nowrap">
          664 252 1509
        </p>
      </div>
    </div>
  );
}
