export const profile = {
  name: "Tymir Barr",
  shortName: "TB",
  location: "Tampa, Florida",
  // Add your email here to show the email button and icon, e.g. "you@example.com".
  email: "" as string,
  githubUrl: "https://github.com/goldentalent626",
  linkedinUrl: "https://www.linkedin.com/in/tymir-barr/",
  orcidUrl: "https://orcid.org/0009-0000-9122-6862",
  siteUrl: "https://goldentalentfocus.vercel.app/",
} as const;

export const profileEmailUrl = profile.email ? `mailto:${profile.email}` : null;
