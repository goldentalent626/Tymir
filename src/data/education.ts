export interface EducationItem {
  id: string;
  degreeKey: string;
  fieldKey: string;
  institutionKey: string;
  periodKey: string;
  descriptionKey: string;
  focusAreas: string[];
}

export const educationItems: EducationItem[] = [
  {
    id: "rutgers",
    degreeKey: "education.items.rutgers.degree",
    fieldKey: "education.items.rutgers.field",
    institutionKey: "education.items.rutgers.institution",
    periodKey: "education.items.rutgers.period",
    descriptionKey: "education.items.rutgers.description",
    focusAreas: ["Statistics", "Psychology"],
  },
];
