"use client";

import { markdownToBlocks, type BodyBlock } from "@/lib/blog-markdown";

// Vista previa del cuerpo con la MISMA convención que renderiza el blog público
// (markdownToBlocks), en tokens del CRM. Así lo que ves aquí es lo que se publica,
// sin depender de una lib de markdown genérica.
function PreviewBlock({ block }: { block: BodyBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-7 text-[19px] font-semibold tracking-[-0.01em] text-[var(--crm-ink)] first:mt-0">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-6 text-[16px] font-semibold tracking-[-0.01em] text-[var(--crm-ink)]">
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p className="mt-3.5 text-[14px] leading-relaxed text-[var(--crm-ink-soft)] first:mt-0">
          {block.text}
        </p>
      );
    case "ul":
      return (
        <ul className="mt-3.5 list-disc space-y-2 pl-5 marker:text-[var(--crm-accent)]">
          {block.items.map((it, i) => (
            <li key={i} className="pl-1 text-[14px] leading-relaxed text-[var(--crm-ink-soft)]">
              {it}
            </li>
          ))}
        </ul>
      );
    case "blockquote":
      return (
        <blockquote className="mt-4 border-l-2 border-[var(--crm-accent-ring)] pl-4 text-[14px] italic text-[var(--crm-ink-mute)]">
          {block.text}
          {block.cite && <span className="mt-1 block not-italic text-[12.5px]">— {block.cite}</span>}
        </blockquote>
      );
    case "note":
      return (
        <div className="mt-4 rounded-[var(--crm-r-md)] border border-[var(--crm-line-strong)] bg-[var(--crm-surface-2)] px-4 py-3">
          <p className="text-[12.5px] font-semibold text-[var(--crm-ink)]">{block.title}</p>
          <p className="mt-1 text-[14px] leading-relaxed text-[var(--crm-ink-soft)]">{block.text}</p>
        </div>
      );
  }
}

export function MarkdownPreview({ children }: { children: string }) {
  const text = children.trim();
  if (!text) {
    return <p className="text-[13px] text-[var(--crm-ink-faint)]">Nada que previsualizar todavía.</p>;
  }
  const blocks = markdownToBlocks(children);
  return (
    <div>
      {blocks.map((b, i) => (
        <PreviewBlock key={i} block={b} />
      ))}
    </div>
  );
}
