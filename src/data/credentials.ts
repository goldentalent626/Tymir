export interface CertificationBadge {
  id: string;
  name: string;
  issuer: string;
  /** Badge image in public/certifications/. */
  image: string;
  /** Credly or vendor verification link. When set, the badge becomes a link. */
  verifyUrl?: string;
}

/**
 * Badges shown in the scrolling "Current Certifications" row.
 * Remove or replace entries here to change what is displayed.
 */
export const certificationBadges: CertificationBadge[] = [
  {
    id: "azure-fundamentals",
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    image: "/certifications/azure-fundamentals.webp",
    verifyUrl: "",
  },
  {
    id: "azure-developer-associate",
    name: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    image: "/certifications/azure-developer-associate.webp",
    verifyUrl: "",
  },
  {
    id: "azure-solutions-architect-expert",
    name: "Microsoft Certified: Azure Solutions Architect Expert",
    issuer: "Microsoft",
    image: "/certifications/azure-solutions-architect-expert.webp",
    verifyUrl: "",
  },
  {
    id: "azure-devops-engineer-expert",
    name: "Microsoft Certified: DevOps Engineer Expert",
    issuer: "Microsoft",
    image: "/certifications/azure-devops-engineer-expert.webp",
    verifyUrl: "",
  },
  {
    id: "azure-administrator-associate",
    name: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft",
    image: "/certifications/azure-administrator-associate.webp",
    verifyUrl: "",
  },
  {
    id: "aws-cloud-practitioner",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    image: "/certifications/aws-cloud-practitioner.webp",
    verifyUrl: "",
  },
  {
    id: "aws-solutions-architect-associate",
    name: "AWS Certified Solutions Architect Associate",
    issuer: "Amazon Web Services",
    image: "/certifications/aws-solutions-architect-associate.webp",
    verifyUrl: "",
  },
  {
    id: "aws-devops-engineer-professional",
    name: "AWS Certified DevOps Engineer Professional",
    issuer: "Amazon Web Services",
    image: "/certifications/aws-devops-engineer-professional.webp",
    verifyUrl: "",
  },
  {
    id: "aws-security-specialty",
    name: "AWS Certified Security Specialty",
    issuer: "Amazon Web Services",
    image: "/certifications/aws-security-specialty.webp",
    verifyUrl: "",
  },
  {
    id: "gcp-cloud-digital-leader",
    name: "Google Cloud Certified Cloud Digital Leader",
    issuer: "Google Cloud",
    image: "/certifications/gcp-cloud-digital-leader.webp",
    verifyUrl: "",
  },
  {
    id: "gcp-associate-cloud-engineer",
    name: "Google Cloud Certified Associate Cloud Engineer",
    issuer: "Google Cloud",
    image: "/certifications/gcp-associate-cloud-engineer.webp",
    verifyUrl: "",
  },
  {
    id: "gcp-professional-cloud-architect",
    name: "Google Cloud Certified Professional Cloud Architect",
    issuer: "Google Cloud",
    image: "/certifications/gcp-professional-cloud-architect.webp",
    verifyUrl: "",
  },
  {
    id: "gcp-professional-data-engineer",
    name: "Google Cloud Certified Professional Data Engineer",
    issuer: "Google Cloud",
    image: "/certifications/gcp-professional-data-engineer.webp",
    verifyUrl: "",
  },
  {
    id: "gcp-professional-ml-engineer",
    name: "Google Cloud Certified Professional Machine Learning Engineer",
    issuer: "Google Cloud",
    image: "/certifications/gcp-professional-ml-engineer.webp",
    verifyUrl: "",
  },
  {
    id: "kubernetes-cka",
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "The Linux Foundation",
    image: "/certifications/kubernetes-cka.webp",
    verifyUrl: "",
  },
  {
    id: "docker-certified-associate",
    name: "Docker Certified Associate",
    issuer: "Docker",
    image: "/certifications/docker-certified-associate.webp",
    verifyUrl: "",
  },
  {
    id: "terraform-associate",
    name: "HashiCorp Certified: Terraform Associate",
    issuer: "HashiCorp",
    image: "/certifications/terraform-associate.webp",
    verifyUrl: "",
  },
  {
    id: "terraform-professional",
    name: "HashiCorp Certified: Terraform Professional",
    issuer: "HashiCorp",
    image: "/certifications/terraform-professional.webp",
    verifyUrl: "",
  },
  {
    id: "github-foundations",
    name: "GitHub Foundations",
    issuer: "GitHub",
    image: "/certifications/github-foundations.webp",
    verifyUrl: "",
  },
  {
    id: "gitlab-certified-associate",
    name: "GitLab Certified Associate",
    issuer: "GitLab",
    image: "/certifications/gitlab-certified-associate.webp",
    verifyUrl: "",
  },
  {
    id: "databricks-data-engineer-associate",
    name: "Databricks Certified Data Engineer Associate",
    issuer: "Databricks",
    image: "/certifications/databricks-data-engineer-associate.webp",
    verifyUrl: "",
  },
  {
    id: "snowflake-snowpro-core",
    name: "SnowPro Core Certification",
    issuer: "Snowflake",
    image: "/certifications/snowflake-snowpro-core.webp",
    verifyUrl: "",
  },
  {
    id: "salesforce-administrator",
    name: "Salesforce Certified Administrator",
    issuer: "Salesforce",
    image: "/certifications/salesforce-administrator.webp",
    verifyUrl: "",
  },
  {
    id: "hubspot-certified-partner",
    name: "HubSpot Certified Partner",
    issuer: "HubSpot",
    image: "/certifications/hubspot-certified-partner.webp",
    verifyUrl: "",
  },
  {
    id: "oracle-certified-professional",
    name: "Oracle Certified Professional",
    issuer: "Oracle",
    image: "/certifications/oracle-certified-professional.webp",
    verifyUrl: "",
  },
  {
    id: "comptia-security-plus",
    name: "CompTIA Security+",
    issuer: "CompTIA",
    image: "/certifications/comptia-security-plus.webp",
    verifyUrl: "",
  },
  {
    id: "isaca-cism",
    name: "ISACA Certified Information Security Manager (CISM)",
    issuer: "ISACA",
    image: "/certifications/isaca-cism.webp",
    verifyUrl: "",
  },
];
