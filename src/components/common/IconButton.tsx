import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { getInteractiveButtonClasses } from "./interactiveButtonStyles";

interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
  active?: boolean;
}

export const IconButton = ({
  children,
  className,
  active,
  ...rest
}: IconButtonProps) => {
  return (
    <button
      {...rest}
      className={getInteractiveButtonClasses({
        variant: "icon",
        className: [
          "h-11 min-w-11 px-3 text-sm font-medium",
          active
            ? "border-[var(--color-border-active)] bg-[var(--color-surface-strong)] text-[var(--color-text)]"
            : "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-muted)] [@media(hover:hover)_and_(pointer:fine)]:hover:text-[var(--color-text)]",
          className,
        ].join(" "),
      })}
    >
      {children}
    </button>
  );
};
