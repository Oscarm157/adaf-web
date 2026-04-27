export function ChapterMark({
  numeral,
  label,
  align = "left",
}: {
  numeral: string;
  label: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={`flex items-baseline gap-4 ${
        align === "center" ? "justify-center" : ""
      }`}
    >
      <span
        aria-hidden="true"
        className="font-serif italic text-[14px] text-olive tracking-wide"
      >
        {numeral}
      </span>
      <span className="flex-1 max-w-[120px] h-[1px] bg-rule" />
      <span className="text-[10px] uppercase tracking-[0.22em] font-medium text-muted">
        {label}
      </span>
    </div>
  );
}
