import { useTranslation } from "react-i18next";
import { Container } from "../components/common/Container";
import { SectionReveal } from "../components/common/SectionReveal";
import { SectionHeading } from "../components/common/SectionHeading";
import { certificationBadges } from "../data/credentials";
import { CertificationMarquee } from "../components/credentials/CertificationMarquee";

export const CredentialsSection = () => {
  const { t } = useTranslation();

  return (
    <SectionReveal
      id="credentials"
      className="py-16 md:py-24"
      variant="credentials"
    >
      <Container>
        <SectionHeading
          title={t("credentials.title")}
          subtitle={t("credentials.subtitle")}
          eyebrow="04"
        />

        <h3 className="mb-4 text-xl font-semibold text-[var(--color-text)]">
          {t("credentials.certificationsTitle")}
        </h3>
        <CertificationMarquee badges={certificationBadges} />
      </Container>
    </SectionReveal>
  );
};
