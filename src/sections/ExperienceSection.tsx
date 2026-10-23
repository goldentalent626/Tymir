import { useTranslation } from "react-i18next";
import { m } from "motion/react";
import { Container } from "../components/common/Container";
import { SectionReveal } from "../components/common/SectionReveal";
import { SectionHeading } from "../components/common/SectionHeading";
import { TechChip } from "../components/common/TechChip";
import { TimelineItem } from "../components/ui/TimelineItem";
import { experienceItems } from "../data/experience";

export const ExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <SectionReveal
      id="experience"
      className="py-16 md:py-24"
      variant="experience"
    >
      <Container>
        <SectionHeading
          title={t("experience.title")}
          subtitle={t("experience.subtitle")}
          eyebrow="03"
        />
        <div className="grid gap-4">
          {experienceItems.map((item, index) => (
            <m.div
              key={item.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{
                duration: 0.42,
                ease: "easeOut",
                delay: index * 0.06,
              }}
            >
              <TimelineItem
                heading={t(item.titleKey)}
                company={item.company}
                period={t(item.dateKey)}
                description={t(item.descriptionKey)}
                tags={item.tags?.map((tag) => (
                  <TechChip key={tag} label={tag} />
                ))}
              />
            </m.div>
          ))}
        </div>
      </Container>
    </SectionReveal>
  );
};
