import type { HTMLAttributes, PropsWithChildren } from "react";
import {
  getInteractiveCardClasses,
  type InteractiveCardVariant,
} from "./interactiveCardStyles";

interface InteractiveCardProps
  extends HTMLAttributes<HTMLElement>, PropsWithChildren {
  variant?: InteractiveCardVariant;
  as?: "article" | "div" | "details";
}

export const InteractiveCard = ({
  children,
  variant = "about",
  as = "article",
  className,
  ...rest
}: InteractiveCardProps) => {
  const Component = as;

  return (
    <Component
      {...rest}
      className={getInteractiveCardClasses(variant, className)}
    >
      {children}
    </Component>
  );
};
