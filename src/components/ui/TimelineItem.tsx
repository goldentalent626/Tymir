import type { ReactNode } from "react";
import { getInteractiveCardClasses } from "../common/interactiveCardStyles";

const noWrapPhrases = ["CZĘŚĆ ETATU", "PART TIME", "DevOps Engineer"];

const renderWithNoWrapPhrases = (text: string) => {
  const pattern = new RegExp(`(${noWrapPhrases.join("|")})`, "gi");
  const chunks = text.split(pattern);

  return chunks.map((chunk, index) => {
    const shouldNoWrap = noWrapPhrases.some(
      (phrase) => phrase.toLowerCase() === chunk.toLowerCase(),
    );

    return shouldNoWrap ? (
      <span key={`${chunk}-${index}`} className="whitespace-nowrap">
        {chunk}
      </span>
    ) : (
      <span key={`${chunk}-${index}`}>{chunk}</span>
    );
  });
};

interface TimelineItemProps {
  heading: string;
  company: string;
  period: string;
  description: string;
  tags?: ReactNode;
  className?: string;
}

export const TimelineItem = ({
  heading,
  company,
  period,
  description,
  tags,
  className,
}: TimelineItemProps) => {
  return (
    <article
      className={getInteractiveCardClasses(
        "experience",
        `relative flex h-full flex-col p-5 ${className ?? ""}`,
      )}
    >
      <span
        className="absolute left-0 top-7 h-10 w-1 rounded-r-full bg-[linear-gradient(180deg,var(--color-azure),transparent)] opacity-0 transition duration-200 [@media(hover:hover)_and_(pointer:fine)]:group-hover/card:opacity-100"
        aria-hidden="true"
      />
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-6">
        <div className="md:max-w-[20rem]">
          <h3 className="text-xl font-semibold text-[var(--color-text)]">
            {renderWithNoWrapPhrases(heading)}
          </h3>
          <p className="mt-1 text-sm text-[var(--color-cyan)]">{company}</p>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-text-subtle)]">
            {renderWithNoWrapPhrases(period)}
          </p>
        </div>
        <p className="text-[var(--color-text-muted)] md:max-w-[62ch]">
          {description}
        </p>
      </div>
      {tags ? <div className="mt-4 flex flex-wrap gap-2">{tags}</div> : null}
    </article>
  );
};
