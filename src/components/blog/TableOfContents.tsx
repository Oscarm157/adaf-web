import type { BodyBlock } from "@/lib/posts";
import { slugify } from "@/lib/posts";

const romans = [
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

export function TableOfContents({ body }: { body: BodyBlock[] }) {
  const headings = body
    .filter((b): b is { type: "h2"; text: string } => b.type === "h2")
    .map((h) => ({ text: h.text, slug: slugify(h.text) }));

  if (headings.length < 4) return null;

  return (
    <nav
      aria-label="Tabla de contenidos"
      className="border-y border-rule py-7 mb-12 not-prose"
    >
      <p className="text-[10px] uppercase tracking-[0.22em] font-medium text-muted mb-5">
        En esta nota
      </p>
      <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2.5">
        {headings.map((h, i) => (
          <li key={h.slug} className="flex items-baseline gap-3 leading-[1.4]">
            <span
              aria-hidden="true"
              className="font-serif italic text-[12px] text-olive shrink-0 w-7"
            >
              {romans[i] ?? String(i + 1)}
            </span>
            <a
              href={`#${h.slug}`}
              className="text-[14.5px] text-foreground/85 hover:text-burgundy transition-colors duration-200"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
