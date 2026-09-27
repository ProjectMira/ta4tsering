// Documents Tashi published on the OpenPecha forum (forum.openpecha.org/u/Tashi_Tsering).

export type Note = {
  title: string;
  date: string; // ISO yyyy-mm-dd
  dek: string;
  href: string;
};

export const notes: Note[] = [
  {
    title: "OpenPecha projects and working groups",
    date: "2025-09-30",
    dek: "How the OpenPecha work is divided into working groups, from the WeBuddhist apps to the data teams.",
    href: "https://forum.openpecha.org/t/openpecha-projects-working-groups/485",
  },
  {
    title: "Pecha Server and API: product requirements",
    date: "2025-09-22",
    dek: "Storing Buddhist texts and annotations in one format, with Neo4j holding the relationships between them.",
    href: "https://forum.openpecha.org/t/prd-of-pecha-server-and-api/467",
  },
  {
    title: "Pecha AI Studio: a Buddhist AI evaluation platform",
    date: "2025-09-22",
    dek: "Public benchmarks and leaderboards for Tibetan OCR, speech-to-text and translation models.",
    href: "https://forum.openpecha.org/t/pecha-ai-studio-buddhist-ai-evaluation-platform-prd/470",
  },
  {
    title: "Pecha Data: data requirements",
    date: "2025-06-23",
    dek: "From bibliographic records to annotated, translated texts, stage by stage.",
    href: "https://forum.openpecha.org/t/pecha-data-data-requirements-document-drd/320",
  },
  {
    title: "The current state of Tibetan OCR (BDRC and Monlam AI)",
    date: "2024-12-06",
    dek: "The layout, line and OCR models we trained, and the datasets behind each one.",
    href: "https://forum.openpecha.org/t/the-current-state-of-tibetan-ocr-bdrc-and-monlam-ai/146",
  },
];
