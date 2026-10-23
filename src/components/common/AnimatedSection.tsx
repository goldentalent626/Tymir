import type { PropsWithChildren } from "react";
import { SectionReveal } from "./SectionReveal";

interface AnimatedSectionProps extends PropsWithChildren {
  className?: string;
  id?: string;
}

export const AnimatedSection = ({
  children,
  className,
  id,
}: AnimatedSectionProps) => {
  return (
    <SectionReveal id={id} className={className} variant="projects">
      {children}
    </SectionReveal>
  );
};
