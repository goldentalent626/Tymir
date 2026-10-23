import { useTranslation } from "react-i18next";
import { Container } from "../common/Container";
import { SocialLinks } from "../ui/SocialLinks";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-[var(--color-border)] py-8">
      <Container className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-[var(--color-text-muted)]">
          {t("footer.copyright")}
        </p>
        <div className="flex items-center gap-4">
          <SocialLinks />
          <a href="#home" className="text-sm text-[var(--color-cyan)]">
            {t("footer.backToTop")}
          </a>
        </div>
      </Container>
    </footer>
  );
};
