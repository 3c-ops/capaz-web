type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeaderProps) {
  const alignment = align === 'center' ? 'mx-auto text-center' : '';

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-foreground/45">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-semibold leading-tight tracking-[-0.035em] text-brand-navy md:text-5xl md:leading-[1.05]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-pretty text-lg font-light leading-8 text-foreground/70 md:text-xl">
          {description}
        </p>
      ) : null}
    </div>
  );
}
