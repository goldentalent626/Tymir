import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ExternalLink as ExternalLinkIcon, GitBranch } from "lucide-react";
import { cleanUrl, type PortfolioProject } from "../../data/projects";
import { InteractiveLink } from "../common/InteractiveButton";
import { getInteractiveCardClasses } from "../common/interactiveCardStyles";
import { TechChip } from "../common/TechChip";
import { ProjectGallery, ProjectGalleryToggle } from "./ProjectGallery";

interface ProjectCardProps {
  project: PortfolioProject;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation();
  const description = t(`${project.translationKey}.description`, {
    returnObjects: true,
  }) as string | string[];
  const paragraphs = Array.isArray(description) ? description : [description];
  const demoUrl = project.demoUrl ? cleanUrl(project.demoUrl) : "";
  const [isGalleryExpanded, setIsGalleryExpanded] = useState(false);
  const hasGallery = project.images.length > 0;

  return (
    <article className={getInteractiveCardClasses("project", "space-y-6 p-6")}>
      <div className="space-y-3">
        <h3 className="text-2xl font-semibold text-[var(--color-text)]">
          {t(`${project.translationKey}.title`)}
        </h3>
        <p className="text-[var(--color-cyan)]">
          {t(`${project.translationKey}.tagline`)}
        </p>
        {paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-[var(--color-text-muted)]">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="space-y-3 border-t border-[var(--color-border)] pt-5">
        <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-text-subtle)]">
          {t("projects.technologiesLabel")}
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <TechChip key={technology} label={technology} />
          ))}
        </div>
      </div>

      {project.repoUrl || demoUrl || hasGallery ? (
        <div className="flex flex-wrap items-center gap-3">
          {project.repoUrl ? (
            <InteractiveLink
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="repository"
              className="group/repo w-full sm:w-auto"
            >
              <GitBranch
                size={16}
                className="text-[var(--color-cyan)] transition-[transform,color,filter] duration-200 ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover/repo:translate-x-[2px] [@media(hover:hover)_and_(pointer:fine)]:group-hover/repo:drop-shadow-[0_0_8px_rgba(86,204,242,0.45)]"
                aria-hidden="true"
              />
              {t("projects.actions.viewRepository")}
            </InteractiveLink>
          ) : null}
          {demoUrl ? (
            <InteractiveLink
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="group/demo w-full sm:w-auto"
            >
              <ExternalLinkIcon
                size={16}
                className="transition-transform duration-200 ease-out [@media(hover:hover)_and_(pointer:fine)]:group-hover/demo:translate-x-[2px]"
                aria-hidden="true"
              />
              {t("projects.actions.liveDemo")}
            </InteractiveLink>
          ) : null}
          <ProjectGalleryToggle
            project={project}
            isExpanded={isGalleryExpanded}
            onToggle={() => setIsGalleryExpanded((current) => !current)}
          />
        </div>
      ) : null}

      <ProjectGallery project={project} isExpanded={isGalleryExpanded} />
    </article>
  );
};
