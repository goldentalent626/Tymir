import { useTranslation } from "react-i18next";
import { AtSign, MessageCircle } from "lucide-react";
import { profile, profileEmailUrl } from "../data/profile";
import { Container } from "../components/common/Container";
import { InteractiveLink } from "../components/common/InteractiveButton";
import { getInteractiveCardClasses } from "../components/common/interactiveCardStyles";
import { SectionReveal } from "../components/common/SectionReveal";

export const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <SectionReveal id="contact" className="py-16 md:py-24" variant="contact">
      <Container>
        <div
          className={getInteractiveCardClasses("contact", "p-8 text-center")}
        >
          <h2 className="text-balance text-3xl font-semibold text-[var(--color-text)]">
            {t("contact.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[var(--color-text-muted)]">
            {t("contact.description")}
          </p>
          <div className="mx-auto mt-6 flex w-full max-w-3xl flex-col items-stretch justify-center gap-3 sm:flex-row">
            <InteractiveLink
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="group/linkedin w-full sm:min-w-[15rem]"
            >
              {t("contact.button")}
              <MessageCircle
                size={16}
                className="text-[var(--color-cyan)] transition-[transform,filter] duration-200 ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover/linkedin:translate-x-[2px] [@media(hover:hover)_and_(pointer:fine)]:group-hover/linkedin:drop-shadow-[0_0_8px_rgba(86,204,242,0.42)]"
                aria-hidden="true"
              />
            </InteractiveLink>
            {profileEmailUrl ? (
              <InteractiveLink
                href={profileEmailUrl}
                variant="secondary"
                className="group/email w-full sm:min-w-[15rem]"
              >
                {t("contact.emailButton")}
                <AtSign
                  size={16}
                  className="text-[var(--color-cyan)] transition-[transform,filter] duration-200 ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover/email:translate-x-[2px] [@media(hover:hover)_and_(pointer:fine)]:group-hover/email:drop-shadow-[0_0_8px_rgba(86,204,242,0.42)]"
                  aria-hidden="true"
                />
              </InteractiveLink>
            ) : null}
          </div>
          <div className="mt-6 flex justify-center"></div>
        </div>
      </Container>
    </SectionReveal>
  );
};
