import { m } from "motion/react";
import type { TargetAndTransition } from "motion/react";
import type { HTMLAttributes, PropsWithChildren } from "react";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

type RevealVariant =
  | "about"
  | "expertise"
  | "credentials"
  | "experience"
  | "projects"
  | "academic"
  | "contact";

interface SectionRevealProps
  extends
    PropsWithChildren,
    Pick<HTMLAttributes<HTMLElement>, "className" | "id"> {
  variant: RevealVariant;
}

const revealStates: Record<
  RevealVariant,
  { hidden: TargetAndTransition; visible: TargetAndTransition }
> = {
  about: {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  },
  expertise: {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  },
  credentials: {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  },
  experience: {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  },
  projects: {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  },
  academic: {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  },
  contact: {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  },
};

export const SectionReveal = ({
  children,
  className,
  id,
  variant,
}: SectionRevealProps) => {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <m.section
      id={id}
      className={`scroll-mt-[var(--header-height)] ${className ?? ""}`}
      initial={reducedMotion ? false : revealStates[variant].hidden}
      whileInView={reducedMotion ? undefined : revealStates[variant].visible}
      animate={reducedMotion ? revealStates[variant].visible : undefined}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      {children}
    </m.section>
  );
};
