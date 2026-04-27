import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

export function PageHero({
  numeral,
  label,
  h1,
  lede,
  crumbs,
}: {
  numeral?: string;
  label?: string;
  h1: string;
  lede?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="bg-background pt-14 pb-16 border-b border-rule">
      <div className="max-w-[1280px] mx-auto px-12">
        {crumbs && crumbs.length > 0 && (
          <nav
            aria-label="breadcrumb"
            className="flex items-center gap-2 text-[12px] text-muted mb-10"
          >
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                {c.href ? (
                  <Link
                    href={c.href}
                    className="hover:text-burgundy transition-colors"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-foreground">{c.label}</span>
                )}
                {i < crumbs.length - 1 && (
                  <ChevronRight className="w-3 h-3 text-muted" strokeWidth={1.5} />
                )}
              </span>
            ))}
          </nav>
        )}

        {(numeral || label) && (
          <div className="flex items-baseline gap-4 mb-8">
            {numeral && (
              <span className="font-serif italic text-[14px] text-olive">
                {numeral}
              </span>
            )}
            <span className="w-[80px] h-[1px] bg-rule" />
            {label && (
              <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-muted">
                {label}
              </span>
            )}
          </div>
        )}

        <h1 className="font-serif text-[48px] md:text-[56px] leading-[1.06] font-semibold text-navy tracking-[-0.016em] max-w-[920px]">
          {h1}
        </h1>

        {lede && (
          <p className="text-[18px] leading-[1.6] text-foreground/85 mt-7 max-w-[720px]">
            {lede}
          </p>
        )}
      </div>
    </section>
  );
}
