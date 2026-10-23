import { useTranslation } from "react-i18next";
import { Container } from "../components/common/Container";
import { HeroTechnologyOrbit } from "../components/hero/HeroTechnologyOrbit";
import { HeroActions } from "../components/hero/HeroActions";
import { StatusBadge } from "../components/hero/StatusBadge";
import { SocialLinks } from "../components/ui/SocialLinks";

export const HeroSection = () => {
  const { t } = useTranslation();
  // const roles = t("hero.roles", { returnObjects: true }) as string[];

  return (
    <section id="home" className="hero-full-viewport pb-16 pt-10 md:py-0">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--color-cyan)]">
            {t("hero.eyebrow")}
          </p>
          <p className="mt-5 text-lg text-[var(--color-text-muted)]">
            {t("hero.hello")}
          </p>
          <h1 className="mt-1 text-pretty text-[clamp(2rem,6vw,4rem)] font-semibold leading-tight text-[var(--color-text)]">
            {t("hero.name")}
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-[var(--color-text)] md:text-2xl">
            {t("hero.headline")}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {/* {roles.map((role) => (
              <li key={role}>
                <StatusBadge text={role} />
              </li>
            ))} */}
          </ul>
          <p className="mt-6 max-w-2xl text-[var(--color-text-muted)]">
            {t("hero.description")}
          </p>
          <div className="mt-7">
            <HeroActions />
          </div>
          <div className="mt-6 flex items-center justify-between gap-4">
            <SocialLinks />
            <StatusBadge text={t("hero.location")} />
          </div>
        </div>
        <HeroTechnologyOrbit />
      </Container>
    </section>
  );
};
