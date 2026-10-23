import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle: string;
  eyebrow?: ReactNode;
  subtitleClassName?: string;
}

export const SectionHeading = ({
  title,
  subtitle,
  eyebrow,
  subtitleClassName,
}: SectionHeadingProps) => {
  return (
    <div className="mb-8 md:mb-12">
      {eyebrow ? (
        <div className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-cyan)]">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-pretty text-3xl font-semibold text-[var(--color-text)] md:text-4xl">
        {title}
      </h2>
      <p
        className={`mt-4 max-w-3xl text-base text-[var(--color-text-muted)] md:text-lg ${subtitleClassName ?? ""}`}
      >
        {subtitle}
      </p>
    </div>
  );
};
