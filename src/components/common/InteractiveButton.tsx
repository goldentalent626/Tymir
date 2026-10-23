import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  PropsWithChildren,
} from "react";
import {
  getInteractiveButtonClasses,
  type InteractiveButtonVariant,
} from "./interactiveButtonStyles";

interface SharedInteractiveButtonProps {
  variant?: InteractiveButtonVariant;
  className?: string;
}

type InteractiveButtonProps = SharedInteractiveButtonProps &
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

type InteractiveLinkProps = SharedInteractiveButtonProps &
  PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>;

export const InteractiveButton = ({
  children,
  variant = "secondary",
  className,
  ...rest
}: InteractiveButtonProps) => {
  return (
    <button
      {...rest}
      className={getInteractiveButtonClasses({ variant, className })}
    >
      {children}
    </button>
  );
};

export const InteractiveLink = ({
  children,
  variant = "secondary",
  className,
  ...rest
}: InteractiveLinkProps) => {
  return (
    <a
      {...rest}
      className={getInteractiveButtonClasses({ variant, className })}
    >
      {children}
    </a>
  );
};
