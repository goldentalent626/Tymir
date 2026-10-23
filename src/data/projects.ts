export interface PortfolioProject {
  id: string;
  // title: string;
  translationKey: string;
  /** GitHub repository link. Leave empty to hide the "View repository" button. */
  repoUrl?: string;
  /** Live demo link. Leave empty to hide the "Live demo" button. */
  demoUrl?: string;
  technologies: string[];
  images: {
    src: string;
    altKey: string;
    width: number;
    height: number;
  }[];
}

export const projects: PortfolioProject[] = [
  {
    id: "adaptive-mbti-quiz-engine",
    translationKey: "projects.mbti",
    repoUrl: "https://github.com/goldentalent626/mbti-quiz-adaptive-engine",
    demoUrl: "",
    technologies: [
      "Python",
      "FastAPI",
      "Bayesian Inference",
      "Adaptive Algorithms",
      "REST API",
      "Automated Testing",
      "MBTI Classification",
      "Statistical Modeling",
      "Question Selection",
      "Scoring Engine",
      "Frontend Integration",
      "Simulation & Benchmarking",
      "State Management",
      "Vercel",
    ],
    images: [
      {
        src: "/projects/mbti/adaptive-quiz-interface.webp",
        altKey: "projects.gallery.mbtiQuizInterface",
        width: 1672,
        height: 941,
      },
      {
        src: "/projects/mbti/mbti-test-question.webp",
        altKey: "projects.gallery.mbtiTestQuestion",
        width: 1024,
        height: 1024,
      },
      {
        src: "/projects/mbti/adaptive-engine-architecture.webp",
        altKey: "projects.gallery.mbtiArchitecture",
        width: 2048,
        height: 1190,
      },
      {
        src: "/projects/mbti/performance-dashboard.webp",
        altKey: "projects.gallery.mbtiDashboard",
        width: 571,
        height: 499,
      },
    ],
  },
  {
    id: "azure-network-infrastructure-lab",
    // title: "Azure Network Infrastructure Lab",
    translationKey: "projects.networkLab",
    repoUrl: "https://github.com/goldentalent626/zis-azure-terraform",
    technologies: [
      "Microsoft Azure",
      "Terraform",
      "Azure Virtual Network",
      "Network Security Groups",
      "Windows Server",
      "Ubuntu Server",
      "Wazuh",
      "Git",
    ],
    images: [
      {
        src: "/projects/network-lab/project-overview.webp",
        altKey: "projects.gallery.networkLabOverview",
        width: 1436,
        height: 1043,
      },
      {
        src: "/projects/network-lab/apply-infra.webp",
        altKey: "projects.gallery.networkLabApplyInfra",
        width: 993,
        height: 529,
      },
    ],
  },
];

/**
 * Removes tracking parameters such as ?utm_source=chatgpt.com so links stay clean.
 */
export const cleanUrl = (url: string): string => {
  try {
    const parsed = new URL(url);
    [...parsed.searchParams.keys()]
      .filter((key) => key.toLowerCase().startsWith("utm_"))
      .forEach((key) => parsed.searchParams.delete(key));
    return parsed.toString();
  } catch {
    return url;
  }
};
