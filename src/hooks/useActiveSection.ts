import { useEffect, useState } from "react";
import type { SectionId } from "../data/navigation";

export const useActiveSection = (ids: SectionId[]): SectionId => {
  const [active, setActive] = useState<SectionId>("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActive(visible[0].target.id as SectionId);
        }
      },
      {
        rootMargin: "-96px 0px -50% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    ids.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
};
