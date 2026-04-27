export function SectionRule({ numeral }: { numeral?: string }) {
  if (!numeral) {
    return <div className="h-[1px] bg-rule" />;
  }
  return (
    <div className="flex items-center gap-4">
      <span className="flex-1 h-[1px] bg-rule" />
      <span aria-hidden="true" className="font-serif italic text-[12px] text-olive">{numeral}</span>
      <span className="flex-1 h-[1px] bg-rule" />
    </div>
  );
}
