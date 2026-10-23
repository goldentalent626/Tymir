import { useTranslation } from "react-i18next";
import { m } from "motion/react";
import { Container } from "../components/common/Container";
import { SectionReveal } from "../components/common/SectionReveal";
import { SectionHeading } from "../components/common/SectionHeading";
import { TechChip } from "../components/common/TechChip";
import { BentoCard } from "../components/ui/BentoCard";
import { expertiseCategories } from "../data/expertise";

export const ExpertiseSection = () => {
  const { t } = useTranslation();

  return (
    <SectionReveal
      id="expertise"
      className="py-16 md:py-24"
      variant="expertise"
    >
      <Container>
        <SectionHeading
          title={t("expertise.title")}
          subtitle={t("expertise.subtitle")}
          eyebrow="02"
          subtitleClassName="min-[980px]:max-w-none min-[980px]:whitespace-nowrap"
        />
        <div className="grid items-stretch gap-4 md:grid-cols-2 md:auto-rows-fr">
          {expertiseCategories.map((category, index) => (
            <m.div
              key={category.id}
              className="h-full"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: index * 0.06,
              }}
            >
              <BentoCard
                variant="expertise"
                className="flex h-full flex-col p-5"
              >
                <h3 className="text-xl font-semibold text-[var(--color-text)]">
                  {t(category.titleKey)}
                </h3>
                <p className="mt-3 text-sm text-[var(--color-text-muted)]">
                  {t(category.descriptionKey)}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.technologies.map((technology) => (
                    <TechChip key={technology} label={technology} />
                  ))}
                </div>
              </BentoCard>
            </m.div>
          ))}
        </div>
      </Container>
    </SectionReveal>
  );
};
