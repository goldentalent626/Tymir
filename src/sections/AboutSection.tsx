import { useTranslation } from "react-i18next";
import { m } from "motion/react";
import { Container } from "../components/common/Container";
import { SectionReveal } from "../components/common/SectionReveal";
import { SectionHeading } from "../components/common/SectionHeading";
import { BentoCard } from "../components/ui/BentoCard";

export const AboutSection = () => {
  const { t } = useTranslation();
  const facts = t("about.facts", { returnObjects: true }) as string[];

  return (
    <SectionReveal id="about" className="py-16 md:py-24" variant="about">
      <Container>
        <SectionHeading
          title={t("about.title")}
          subtitle={t("about.subtitle")}
          eyebrow="01"
        />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <m.div
            className="space-y-4 text-[var(--color-text-muted)]"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <p>{t("about.paragraph1")}</p>
            <p>{t("about.paragraph2")}</p>
            <p>{t("about.paragraph3")}</p>
          </m.div>
          <m.div
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.16 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
          >
            {facts.map((fact) => (
              <BentoCard key={fact} variant="about" className="p-5">
                <p className="text-sm font-medium text-[var(--color-text)] transition duration-200 [@media(hover:hover)_and_(pointer:fine)]:group-hover/card:text-white">
                  {fact}
                </p>
              </BentoCard>
            ))}
          </m.div>
        </div>
      </Container>
    </SectionReveal>
  );
};
