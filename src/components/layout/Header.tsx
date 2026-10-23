import { GitBranch, Menu } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { navigation, type SectionId } from "../../data/navigation";
import { IconButton } from "../common/IconButton";
import { Container } from "../common/Container";
import { profile } from "../../data/profile";
import { MobileMenu } from "./MobileMenu";

interface HeaderProps {
  activeSection: SectionId;
}

export const Header = ({ activeSection }: HeaderProps) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[80] border-b border-[var(--color-border)] bg-[rgba(5,11,20,0.78)] backdrop-blur-md">
        <Container className="flex h-18 items-center justify-between gap-4">
          <a
            href="#home"
            className="font-mono text-sm tracking-[0.2em] text-[var(--color-text)]"
          >
            <img
              src="images/cloud-home.svg"
              alt="Home"
              className="h-8 w-8 object-contain sm:h-9 sm:w-9 lg:h-10 lg:w-10"
              loading="eager"
              decoding="async"
            />
            {/* {t("navigation.brand")} */}
          </a>
          <div className="hidden items-center gap-6 xl:flex">
            <nav className="flex items-center gap-2" aria-label="primary">
              {navigation.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={
                    activeSection === item.id ? "location" : undefined
                  }
                  className="rounded-full px-3 py-2 text-sm text-[var(--color-text-muted)] transition hover:text-[var(--color-text)] aria-[current=location]:bg-[var(--color-surface-strong)] aria-[current=location]:text-[var(--color-text)]"
                >
                  {t(item.labelKey)}
                </a>
              ))}
            </nav>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label={t("accessibility.github")}
            >
              <GitBranch size={18} />
            </a>
          </div>
          <div className="flex items-center gap-2 xl:hidden">
            <IconButton
              aria-expanded={open}
              aria-label={t("accessibility.openMenu")}
              onClick={() => setOpen(true)}
            >
              <Menu size={18} />
            </IconButton>
          </div>
        </Container>
      </header>
      <MobileMenu
        activeSection={activeSection}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};
