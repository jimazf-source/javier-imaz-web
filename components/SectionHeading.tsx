type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p
        className={`mb-5 flex items-center gap-4 text-[.68rem] font-bold uppercase tracking-[.34em] text-gold-light ${
          centered ? "justify-center before:block after:block" : "before:block"
        } before:h-px before:w-9 before:bg-gold after:h-px after:w-9 after:bg-gold`}
      >
        {eyebrow}
      </p>
      <h2 className="font-display text-5xl leading-[1.06] text-ivory sm:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-base leading-8 text-muted">{description}</p>
      )}
    </div>
  );
}
