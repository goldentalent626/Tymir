import clsx from "clsx";

export type InteractiveButtonVariant =
  "primary" | "secondary" | "repository" | "icon";

const baseClassName =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition-[transform,background-color,border-color,box-shadow,color,filter] duration-200 ease-out cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-cyan)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] active:scale-[0.98]";

const variantClassNames: Record<InteractiveButtonVariant, string> = {
  primary:
    "border-[rgba(133,196,255,0.42)] bg-[linear-gradient(118deg,rgba(0,120,212,0.92),rgba(45,212,191,0.78))] text-[var(--color-text)] shadow-[0_10px_28px_rgba(47,140,255,0.24)]",
  secondary:
    "border-[color-mix(in_srgb,var(--color-cyan)_30%,var(--color-border))] bg-[color-mix(in_srgb,var(--color-surface-strong)_84%,transparent)] text-[var(--color-text)] shadow-[0_8px_20px_rgba(5,11,20,0.34)]",
  repository:
    "border-[color-mix(in_srgb,var(--color-azure)_52%,var(--color-border))] bg-[linear-gradient(135deg,rgba(16,31,50,0.86),rgba(10,20,34,0.92))] text-[var(--color-text)] shadow-[0_9px_22px_rgba(5,11,20,0.34)]",
  icon: "min-w-11 border-[var(--color-border)] bg-[var(--color-surface)] px-3 text-[var(--color-text-muted)]",
};

const variantHoverClassNames: Record<InteractiveButtonVariant, string> = {
  primary:
    "[@media(hover:hover)_and_(pointer:fine)]:hover:brightness-105 [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_14px_34px_rgba(47,140,255,0.3)]",
  secondary:
    "[@media(hover:hover)_and_(pointer:fine)]:hover:bg-[color-mix(in_srgb,var(--color-surface-strong)_92%,white_8%)] [@media(hover:hover)_and_(pointer:fine)]:hover:border-[color-mix(in_srgb,var(--color-cyan)_48%,var(--color-border-active))] [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_12px_28px_rgba(47,140,255,0.16)]",
  repository:
    "[@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-[2px] [@media(hover:hover)_and_(pointer:fine)]:hover:border-[color-mix(in_srgb,var(--color-azure)_72%,var(--color-border-active))] [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_12px_30px_rgba(47,140,255,0.2)]",
  icon: "[@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-[2px] [@media(hover:hover)_and_(pointer:fine)]:hover:border-[var(--color-border-active)] [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_12px_26px_rgba(47,140,255,0.18)]",
};

export const getInteractiveButtonClasses = ({
  variant = "secondary",
  className,
}: {
  variant?: InteractiveButtonVariant;
  className?: string;
} = {}) =>
  clsx(
    baseClassName,
    variantClassNames[variant],
    variantHoverClassNames[variant],
    className,
  );
