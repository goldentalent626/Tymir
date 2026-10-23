interface StatusBadgeProps {
  text: string;
}

export const StatusBadge = ({ text }: StatusBadgeProps) => {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs text-[var(--color-text-muted)]">
      <span
        className="size-2 rounded-full bg-[var(--color-lime)]"
        aria-hidden="true"
      />
      {text}
    </span>
  );
};
