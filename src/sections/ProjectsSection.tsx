import { useTranslation } from "react-i18next";
import { m } from "motion/react";
import { Container } from "../components/common/Container";
import { SectionReveal } from "../components/common/SectionReveal";
import { SectionHeading } from "../components/common/SectionHeading";
import { ProjectCard } from "../components/projects/ProjectCard";
import { projects } from "../data/projects";

export const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <SectionReveal id="projects" className="py-16 md:py-24" variant="projects">
      <Container>
        <SectionHeading
          title={t("projects.title")}
          subtitle={t("projects.subtitle")}
          eyebrow="05"
          subtitleClassName="min-[980px]:max-w-none min-[980px]:whitespace-nowrap"
        />
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <m.div
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: index * 0.08,
              }}
            >
              <ProjectCard project={project} />
            </m.div>
          ))}
        </div>
      </Container>
    </SectionReveal>
  );
};
