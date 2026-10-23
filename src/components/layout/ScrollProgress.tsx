import { m, useScroll, useSpring } from "motion/react";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  return (
    <m.div
      className="fixed inset-x-0 top-0 z-[90] h-1 origin-left bg-[var(--color-azure)]"
      style={{ scaleX }}
    />
  );
};
