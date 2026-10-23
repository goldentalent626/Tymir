export interface PublicationItem {
  id: string;
  title: string;
  subtitle: string;
  url: string;
}

export const publicationItems: PublicationItem[] = [
  {
    id: "pub-1",
    title:
      "The Use and Application of Artificial Intelligence in Modern Asset Management Systems",
    subtitle: "Management and Quality (Zarządzanie i jakość), 3/2024",
    url: "https://zij.edu.pl/wp-content/uploads/2024/09/Jablon%CC%81ski.pdf",
  },
  {
    id: "pub-2",
    title: "Advanced Systems for Managing Volunteer Fire Departments",
    subtitle:
      "MIK-21 International Innovativeness and Competitiveness in the 21st Century, 2024",
    url: "https://www.fnce.info/wp-content/uploads/2024/09/MIK-21-Aspekty-Spoleczne-%E2%80%93-isbn-978-83-68074-81-9_compressed.pdf",
  },
  {
    id: "pub-3",
    title:
      "The Impact of Artificial Intelligence on Optimizing Project Management",
    subtitle:
      "Artificial Intelligence in Theory and Practice (Opportunities, Challenges, Ethics), 2025",
    url: "https://bc.wydawnictwo-tygiel.pl/public/assets/1084/Sztuczna%20inteligencja%20w%20teorii%20i%20praktyce%20%E2%80%93%20szanse,%20wyzwania,%20etyka.pdf",
  },
];
