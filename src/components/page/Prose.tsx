import { ReactNode } from "react";

export function Prose({ children, narrow = false }: { children: ReactNode; narrow?: boolean }) {
  return (
    <div
      className={`prose-editorial ${narrow ? "max-w-[640px]" : "max-w-[720px]"}`}
    >
      {children}
    </div>
  );
}

export function Lede({ children }: { children: ReactNode }) {
  return (
    <p className="font-serif italic text-[20px] leading-[1.5] text-foreground/85 mb-9 border-l-2 border-olive pl-5">
      {children}
    </p>
  );
}

export function P({ children }: { children: ReactNode }) {
  return (
    <p className="text-[17px] leading-[1.7] text-foreground/85 mb-5">
      {children}
    </p>
  );
}

export function H2({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2
      id={id}
      className="font-serif text-[24px] md:text-[28px] lg:text-[34px] leading-[1.2] md:leading-[1.15] font-semibold text-navy tracking-[-0.012em] mt-16 mb-6"
    >
      {children}
    </h2>
  );
}

export function H3({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h3
      id={id}
      className="font-serif text-[22px] leading-[1.2] font-medium text-navy tracking-[-0.006em] mt-10 mb-3"
    >
      {children}
    </h3>
  );
}

export function UL({ children }: { children: ReactNode }) {
  return <ul className="space-y-2.5 mb-6 ml-1">{children}</ul>;
}

export function LI({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-baseline gap-3 text-[16.5px] leading-[1.6] text-foreground/85">
      <span className="w-[6px] h-[6px] bg-olive shrink-0 mt-[10px]" />
      <span>{children}</span>
    </li>
  );
}

export function Blockquote({ children, cite }: { children: ReactNode; cite?: string }) {
  return (
    <blockquote className="border-l-2 border-olive pl-6 my-9">
      <p className="font-serif italic text-[20px] leading-[1.5] text-foreground/85">
        {children}
      </p>
      {cite && (
        <footer className="text-[12px] uppercase tracking-[0.18em] text-muted mt-3">
          {cite}
        </footer>
      )}
    </blockquote>
  );
}

export function Note({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="my-9 bg-background-warm border-l-[3px] border-olive px-6 py-5">
      <p className="text-[10px] uppercase tracking-[0.22em] font-medium text-burgundy mb-2">
        {title}
      </p>
      <div className="text-[15px] leading-[1.6] text-foreground/85">{children}</div>
    </aside>
  );
}
