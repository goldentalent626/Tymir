export interface ExpertiseCategory {
  id: string;
  titleKey: string;
  descriptionKey: string;
  technologies: string[];
}

export const expertiseCategories: ExpertiseCategory[] = [
  {
    id: "ai",
    titleKey: "expertise.cards.ai.title",
    descriptionKey: "expertise.cards.ai.description",
    technologies: [
      "OpenAI",
      "Whisper",
      "Python",
      "Node.js",
      "Document Intelligence",
      "AI Workflows",
    ],
  },
  {
    id: "fullstack",
    titleKey: "expertise.cards.fullstack.title",
    descriptionKey: "expertise.cards.fullstack.description",
    technologies: [
      "TypeScript",
      "Vue.js",
      "Next.js",
      "Node.js",
      "Django",
      "REST APIs",
      "SaaS Development",
      "Web Development",
      "Custom Software Development",
    ],
  },
  {
    id: "cloud",
    titleKey: "expertise.cards.cloud.title",
    descriptionKey: "expertise.cards.cloud.description",
    technologies: [
      "AWS",
      "Google Cloud",
      "Docker",
      "Kubernetes",
      "PostgreSQL",
      "MongoDB",
      "Database Development",
      "Cloud Application Development",
    ],
  },
  {
    id: "data",
    titleKey: "expertise.cards.data.title",
    descriptionKey: "expertise.cards.data.description",
    technologies: [
      "Data Visualization",
      "Engineering Leadership",
      "Project Management",
      "Agile",
      "Enterprise Content Management",
    ],
  },
];
