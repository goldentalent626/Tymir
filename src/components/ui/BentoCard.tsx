import type { PropsWithChildren } from "react";
import { InteractiveCard } from "../common/InteractiveCard";
import type { InteractiveCardVariant } from "../common/interactiveCardStyles";

interface BentoCardProps extends PropsWithChildren {
  className?: string;
  variant?: InteractiveCardVariant;
}

export const BentoCard = ({
  children,
  className,
  variant = "about",
}: BentoCardProps) => {
  return (
    <InteractiveCard variant={variant} className={className}>
      {children}
    </InteractiveCard>
  );
};
