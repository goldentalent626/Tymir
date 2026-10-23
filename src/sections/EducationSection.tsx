import { useTranslation } from "react-i18next";
import { m } from "motion/react";
import { CalendarDays, GraduationCap } from "lucide-react";
import { educationItems } from "../data/education";
import { Container } from "../components/common/Container";
import { SectionReveal } from "../components/common/SectionReveal";
import { SectionHeading } from "../components/common/SectionHeading";
import { TechChip } from "../components/common/TechChip";
import { BentoCard } from "../components/ui/BentoCard";

export const EducationSection = () => {
  const { t } = useTranslation();

  return (
    <SectionReveal
      id="education"
      className="py-16 md:py-24"
      variant="academic"
    >
      <Container>
        <SectionHeading
          title={t("education.title")}
          subtitle={t("education.subtitle")}
          eyebrow="06"
        />
        <div className="grid gap-4">
          {educationItems.map((item, index) => (
            <m.div
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{
                duration: 0.42,
                ease: "easeOut",
                delay: index * 0.08,
              }}
            >
              <BentoCard variant="academic" className="p-5 md:p-6">
                <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between md:gap-8">
                  <div className="flex items-start gap-4">
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-[rgba(47,140,255,0.12)] text-[var(--color-cyan)]"
                      aria-hidden="true"
                    >
                      <GraduationCap size={22} />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--color-text)]">
                        {t(item.degreeKey)}, {t(item.fieldKey)}
                      </h3>
                      <p className="mt-1 text-sm text-[var(--color-cyan)]">
                        {t(item.institutionKey)}
                      </p>
                      <p className="mt-2 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-text-subtle)]">
                        <CalendarDays size={14} aria-hidden="true" />
                        {t(item.periodKey)}
                      </p>
                    </div>
                  </div>
                  <div className="md:max-w-[62ch]">
                    <p className="text-[var(--color-text-muted)]">
                      {t(item.descriptionKey)}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.focusAreas.map((area) => (
                        <TechChip key={area} label={area} />
                      ))}
                    </div>
                  </div>
                </div>
              </BentoCard>
            </m.div>
          ))}
        </div>
      </Container>
    </SectionReveal>
  );
};
