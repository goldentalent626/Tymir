export type SectionId =
  | "home"
  | "about"
  | "expertise"
  | "experience"
  | "credentials"
  | "projects"
  | "education"
  | "contact";

export const navigation = [
  { id: "home", labelKey: "navigation.home" },
  { id: "about", labelKey: "navigation.about" },
  { id: "expertise", labelKey: "navigation.expertise" },
  { id: "experience", labelKey: "navigation.experience" },
  { id: "credentials", labelKey: "navigation.credentials" },
  { id: "projects", labelKey: "navigation.projects" },
  { id: "education", labelKey: "navigation.education" },
  { id: "contact", labelKey: "navigation.contact" },
] as const;
