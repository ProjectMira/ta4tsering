// Roles and dates from Tashi's CV (Nov 2024), extended with what he does now.
// TODO(tashi): confirm the employer name and start date for the WeBuddhist role,
// and when the Monlam AI role ended. "2025" below is inferred from GitHub activity.

export type Role = {
  from: string;
  to: string;
  title: string;
  org: string;
  orgUrl?: string;
  summary: string;
};

export const roles: Role[] = [
  {
    from: "2025",
    to: "now",
    title: "Technical Lead, WeBuddhist",
    org: "OpenPecha",
    orgUrl: "https://openpecha.org",
    summary:
      "I lead preparing Buddhist texts for the library: collecting, cleaning and structuring them. I helped design the Neo4j-based backend. I also coordinate the WeBuddhist backend, design, library and app teams: I decide what gets built next, lead test rounds, and go through the feedback with each team.",
  },
  {
    from: "Oct 2024",
    to: "2025",
    title: "Senior Developer & Associate Technical Lead",
    org: "Monlam AI",
    orgUrl: "https://monlam.ai",
    summary:
      "I led the OpenPecha project and owned OpenPecha Toolkit v2, which was built to support critical editions. I also started the Neo4j proof of concept and the BDRC-to-Neo4j imports that grew into the WeBuddhist backend.",
  },
  {
    from: "Sep 2022",
    to: "Sep 2024",
    title: "Consultant, Lead of OCR Data Creation",
    org: "Buddhist Digital Resource Center",
    orgUrl: "https://www.bdrc.io",
    summary:
      "I was tech lead for Tibetan OCR training data for the Monlam AI OCR project. I built the annotation tooling, supported the annotators and published the datasets. BDRC's OCR models, and the Tibetan OCR app it released in 2025, were trained on this data.",
  },
  {
    from: "Jan 2021",
    to: "Aug 2022",
    title: "Senior Developer",
    org: "Esukhia",
    orgUrl: "https://esukhia.org",
    summary:
      "Core member of Esukhia's open-source Tibetan NLP team. I led the OpenPecha data-archiving team and the OCR team, which ran Google Vision over scanned texts. I also worked on the OpenPecha Toolkit, including its hOCR parser, and on Pedurma and Bospell.",
  },
  {
    from: "Sep 2020",
    to: "Dec 2020",
    title: "Intern",
    org: "Esukhia",
    orgUrl: "https://esukhia.org",
    summary: "I archived Buddhist texts as OpenPecha repositories on GitHub.",
  },
];

export const education = {
  from: "2015",
  to: "2019",
  title: "B.Tech",
  org: "Guru Gobind Singh Indraprastha University, Delhi",
};
