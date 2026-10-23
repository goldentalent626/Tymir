import clsx from "clsx";

export type InteractiveCardVariant =
  | "about"
  | "expertise"
  | "credentials"
  | "courses"
  | "experience"
  | "project"
  | "academic"
  | "contact";

const baseClassName =
  "group/card relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_86%,transparent)] shadow-[0_10px_40px_rgba(0,0,0,0.22)] transition-[transform,border-color,box-shadow,background-color] duration-200 ease-out focus-within:border-[var(--color-border-active)] focus-within:shadow-[0_16px_44px_rgba(47,140,255,0.16)] active:scale-[0.985]";

const hoverClassName =
  "[@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-[4px] [@media(hover:hover)_and_(pointer:fine)]:hover:border-[var(--color-border-active)]";

const variantClassNames: Record<InteractiveCardVariant, string> = {
  about:
    "bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_18px_40px_rgba(45,212,191,0.10)]",
  expertise:
    "before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[linear-gradient(90deg,transparent,var(--color-cyan),transparent)] before:opacity-0 before:transition-opacity before:duration-200 [@media(hover:hover)_and_(pointer:fine)]:hover:before:opacity-100",
  credentials:
    "[@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_16px_36px_rgba(47,140,255,0.14)] after:absolute after:inset-x-6 after:top-0 after:h-px after:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.8),transparent)] after:opacity-0 after:transition-opacity after:duration-200 [@media(hover:hover)_and_(pointer:fine)]:hover:after:opacity-35",
  courses:
    "rounded-2xl [@media(hover:hover)_and_(pointer:fine)]:hover:border-[rgba(45,212,191,0.4)]",
  experience:
    "rounded-2xl [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_18px_40px_rgba(47,140,255,0.12)]",
  project:
    "[@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_22px_52px_rgba(47,140,255,0.12)]",
  academic:
    "before:absolute before:left-0 before:top-6 before:h-10 before:w-px before:bg-[linear-gradient(180deg,var(--color-cyan),transparent)] before:opacity-0 before:transition-opacity before:duration-200 [@media(hover:hover)_and_(pointer:fine)]:hover:before:opacity-100",
  contact:
    "bg-[radial-gradient(circle_at_top,rgba(47,140,255,0.12),transparent_55%),color-mix(in_srgb,var(--color-surface)_86%,transparent)] [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_20px_52px_rgba(45,212,191,0.14)]",
};

export const getInteractiveCardClasses = (
  variant: InteractiveCardVariant = "about",
  className?: string,
) => clsx(baseClassName, hoverClassName, variantClassNames[variant], className);
