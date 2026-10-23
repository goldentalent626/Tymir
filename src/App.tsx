import { LazyMotion, domAnimation } from "motion/react";
import { m } from "motion/react";
import { PortfolioPreloader } from "./components/layout/PortfolioPreloader";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { ScrollProgress } from "./components/layout/ScrollProgress";
import { SkipLink } from "./components/common/SkipLink";
import { useActiveSection } from "./hooks/useActiveSection";
import { useIntroLoader } from "./hooks/useIntroLoader";
import { navigation } from "./data/navigation";
import { profile } from "./data/profile";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { ExpertiseSection } from "./sections/ExpertiseSection";
import { ExperienceSection } from "./sections/ExperienceSection";
import { CredentialsSection } from "./sections/CredentialsSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { EducationSection } from "./sections/EducationSection";
import { ContactSection } from "./sections/ContactSection";
import { useLanguage } from "./hooks/useLanguage";

function App() {
  const ids = navigation.map((item) => item.id);
  const activeSection = useActiveSection(ids);
  useLanguage();
  const intro = useIntroLoader();

  const personSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: profile.siteUrl,
    jobTitle: "Full Stack Engineer",
    sameAs: [profile.githubUrl, profile.linkedinUrl],
    knowsAbout: [
      "Artificial Intelligence",
      "Full-Stack Development",
      "Data Visualization",
      "Python",
      "TypeScript",
      "Node.js",
      "Vue.js",
      "Next.js",
      "AWS",
      "Docker",
      "PostgreSQL",
    ],
  });

  return (
    <LazyMotion features={domAnimation}>
      {intro.isVisible ? (
        <PortfolioPreloader
          progress={intro.progress}
          stageIndex={intro.stageIndex}
          onSkip={intro.skip}
        />
      ) : null}
      <m.div
        initial={false}
        animate={intro.isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
        transition={{ duration: 0.26, ease: "easeOut" }}
        data-app-shell
        aria-hidden={intro.isVisible && !intro.isReady ? "true" : undefined}
        inert={intro.isVisible && !intro.isReady}
        className={
          intro.isVisible && !intro.isReady ? "pointer-events-none" : ""
        }
      >
        <SkipLink />
        <ScrollProgress />
        <Header activeSection={activeSection} />
        <m.main id="main-content" aria-busy={intro.isVisible}>
          <HeroSection />
          <AboutSection />
          <ExpertiseSection />
          <ExperienceSection />
          <CredentialsSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
        </m.main>
        <Footer />
      </m.div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: personSchema }}
      />
    </LazyMotion>
  );
}

export default App;
