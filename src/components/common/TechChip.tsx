interface TechChipProps {
  label: string;
}

export const TechChip = ({ label }: TechChipProps) => {
  return (
    <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-3 py-1 text-xs font-medium text-[var(--color-text-muted)] transition duration-200 [@media(hover:hover)_and_(pointer:fine)]:group-hover/card:-translate-y-px [@media(hover:hover)_and_(pointer:fine)]:group-hover/card:border-[var(--color-border-active)] [@media(hover:hover)_and_(pointer:fine)]:group-hover/card:text-[var(--color-text)]">
      {label}
    </span>
  );
};
