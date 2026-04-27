import Image from "next/image";

type Tone = "navy" | "burgundy" | "olive";

const toneVar: Record<Tone, string> = {
  navy: "var(--color-navy)",
  burgundy: "var(--color-burgundy)",
  olive: "var(--color-olive)",
};

const toneLabel: Record<Tone, string> = {
  navy: "Navy",
  burgundy: "Burgundy",
  olive: "Olive",
};

const aspectClass: Record<string, string> = {
  "21/9": "aspect-[21/9]",
  "16/9": "aspect-[16/9]",
  "4/3": "aspect-[4/3]",
  "3/4": "aspect-[3/4]",
};

export function EditorialBand({
  numeral,
  title,
  tone,
  aspect = "21/9",
  src,
  alt,
  fullBleed = true,
}: {
  numeral: string;
  title: string;
  tone: Tone;
  aspect?: "21/9" | "16/9" | "4/3" | "3/4";
  src?: string;
  alt?: string;
  fullBleed?: boolean;
}) {
  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    fullBleed ? (
      <section className="bg-background pt-6 pb-6">
        <div className="max-w-[1440px] mx-auto px-6">{children}</div>
      </section>
    ) : (
      <>{children}</>
    );

  return (
    <Wrapper>
      <figure
        className={`relative w-full ${aspectClass[aspect]} bg-background-warm border-y border-rule overflow-hidden`}
      >
        {/* Placeholder mode */}
        {!src && (
          <>
            {/* corner ornaments */}
            <span className="absolute top-3 left-3 w-2 h-2 border-t border-l border-olive" />
            <span className="absolute top-3 right-3 w-2 h-2 border-t border-r border-olive" />
            <span className="absolute bottom-3 left-3 w-2 h-2 border-b border-l border-olive" />
            <span className="absolute bottom-3 right-3 w-2 h-2 border-b border-r border-olive" />

            {/* tone swatch + meta top-right */}
            <div className="absolute top-5 right-6 flex items-center gap-2">
              <span
                className="block w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: toneVar[tone] }}
              />
              <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-muted">
                {toneLabel[tone]} · {aspect.replace("/", ":")}
              </span>
            </div>

            {/* meta top-left */}
            <div className="absolute top-5 left-6 flex items-baseline gap-3">
              <span aria-hidden="true" className="font-serif italic text-[13px] text-olive">
                {numeral}
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-muted">
                Espacio editorial
              </span>
            </div>

            {/* center label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-8">
                <span className="block w-[40px] h-[1px] bg-olive mx-auto" />
                <p className="font-serif text-[28px] leading-[1.15] text-navy/85 tracking-[-0.012em] mt-5">
                  {title}
                </p>
                <p className="font-serif italic text-[13px] text-muted mt-3">
                  Imagen pendiente · Nano Banana
                </p>
              </div>
            </div>

            {/* bottom hairline scale marks */}
            <div className="absolute bottom-5 left-6 right-6 flex items-center gap-1">
              <span className="w-[1px] h-2 bg-foreground/20" />
              <span className="flex-1 h-[1px] bg-foreground/12" />
              <span className="w-[1px] h-2 bg-foreground/20" />
            </div>
          </>
        )}

        {/* Image mode */}
        {src && (
          <Image
            src={src}
            alt={alt ?? title}
            fill
            sizes="(min-width: 1440px) 1440px, 100vw"
            className="object-cover"
          />
        )}
      </figure>
    </Wrapper>
  );
}
