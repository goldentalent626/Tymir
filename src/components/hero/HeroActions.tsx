import { ArrowDownRight, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { InteractiveLink } from "../common/InteractiveButton";

export const HeroActions = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-wrap items-center gap-3">
      <InteractiveLink
        href="#projects"
        variant="primary"
        className="group/primary w-full sm:w-auto"
      >
        {t("hero.featuredProject")}
        <ArrowDownRight
          size={16}
          className="transition-transform duration-200 ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover/primary:translate-x-[3px]"
          aria-hidden="true"
        />
      </InteractiveLink>
      <InteractiveLink
        href="#contact"
        variant="secondary"
        className="group/linkedin w-full sm:w-auto"
      >
        {t("hero.contactButton")}
        <MessageCircle
          size={16}
          className="text-[var(--color-cyan)] transition-[transform,filter] duration-200 ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover/linkedin:translate-x-[2px] [@media(hover:hover)_and_(pointer:fine)]:group-hover/linkedin:drop-shadow-[0_0_8px_rgba(86,204,242,0.42)]"
          aria-hidden="true"
        />
      </InteractiveLink>
    </div>
  );
};
