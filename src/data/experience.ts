export interface ExperienceItem {
  id: string;
  company: string;
  titleKey: string;
  dateKey: string;
  descriptionKey: string;
  tags?: string[];
}

export const experienceItems: ExperienceItem[] = [
  {
    id: "skylark",
    company: "Skylark AI Inc. · New York, NY",
    titleKey: "experience.items.skylark.title",
    dateKey: "experience.items.skylark.dates",
    descriptionKey: "experience.items.skylark.description",
    tags: [
      "Data Visualization",
      "Full-Stack Development",
      "Artificial Intelligence",
      "Python",
      "Node.js",
      "Agile",
    ],
  },
  {
    id: "reforge",
    company: "Reforge · San Francisco, CA",
    titleKey: "experience.items.reforge.title",
    dateKey: "experience.items.reforge.dates",
    descriptionKey: "experience.items.reforge.description",
    tags: [
      "Vue.js",
      "Engineering Leadership",
      "TypeScript",
      "Full-Stack Development",
    ],
  },
  {
    id: "therapyzen",
    company: "TherapyZen · Orlando, FL",
    titleKey: "experience.items.therapyzen.title",
    dateKey: "experience.items.therapyzen.dates",
    descriptionKey: "experience.items.therapyzen.description",
    tags: [
      "Project Management",
      "Software Development",
      "API Integration",
      "Scheduling Systems",
    ],
  },
  {
    id: "betterhealth",
    company: "Better Health Therapeutics · San Francisco, CA",
    titleKey: "experience.items.betterhealth.title",
    dateKey: "experience.items.betterhealth.dates",
    descriptionKey: "experience.items.betterhealth.description",
    tags: ["Full-Stack Development", "TypeScript", "Healthcare Platforms"],
  },
];
