// Long-form write-ups for /work/[slug]. Inline links use [label](href).
// Every claim is backed by a link in `sources`.

import type { Link } from "./projects";

export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][]; caption?: string };

export type CaseStudy = {
  slug: string;
  title: string;
  dek: string;
  years: string;
  role: string;
  stack: string[];
  links: Link[];
  sections: { heading: string; blocks: Block[] }[];
  sources: Link[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "webuddhist",
    title: "WeBuddhist",
    dek: "A Buddhist library and practice app, and the graph of texts underneath it.",
    years: "2025 – now",
    role: "Technical lead: data, backend design, delivery",
    stack: ["Flutter", "React", "FastAPI", "Python", "Neo4j", "Firebase", "Google Cloud Storage"],
    links: [
      { label: "webuddhist.com", href: "https://webuddhist.com" },
      { label: "App Store", href: "https://apps.apple.com/us/app/webuddhist/id6745810914" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=org.pecha.app" },
      { label: "Backend code", href: "https://github.com/Webuddhist-tech/openpecha-backend" },
    ],
    sections: [
      {
        heading: "The problem",
        blocks: [
          {
            type: "p",
            text: "Buddhist texts come in many formats and many versions. One root text can have several editions, translations and commentaries, spread across archives that each use their own formats. For a reader to go from a verse to its translations and commentaries, those relationships first have to exist as data.",
          },
        ],
      },
      {
        heading: "Data",
        blocks: [
          {
            type: "p",
            text: "I lead the data work: getting texts out of DOCX files, BDRC's OCR output and other sources, and into the OpenPecha format. That format stores the text separately from its annotations (segmentation, pagination, footnotes, alignments), so new layers can be added without touching the text. The parsers live in the [openpecha toolkit](https://github.com/Webuddhist-tech/toolkit-v2), which I owned through 2025.",
          },
        ],
      },
      {
        heading: "Backend",
        blocks: [
          {
            type: "p",
            text: "I helped design the backend and wrote its [product spec](https://forum.openpecha.org/t/prd-of-pecha-server-and-api/467). Text and annotation files are versioned in Google Cloud Storage. Their metadata and the links between them live in a Neo4j graph modelled on FRBR: a work, its expressions (the original and each translation or commentary), and the editions that carry them. BDRC's catalogue was imported into the same graph from RDF.",
          },
          {
            type: "p",
            text: "In the [backend repository](https://github.com/Webuddhist-tech/openpecha-backend) I made 182 commits and 76 pull requests, mostly Cypher queries, constraints and API endpoints. I also wrote an MCP server that gives AI assistants 26 read-only tools for querying the library.",
          },
        ],
      },
      {
        heading: "Delivery",
        blocks: [
          {
            type: "p",
            text: "Four teams build WeBuddhist: backend, design, library and app. I coordinate them. I decide feature priorities with each team, lead the test rounds before releases, and run the feedback reviews afterwards. Since September 2025 I've filed 65 issues in the app repository alone, covering feedback rounds, groups, chants, notifications and localization.",
          },
        ],
      },
      {
        heading: "Where it is now",
        blocks: [
          {
            type: "ul",
            items: [
              "The study platform is live at [webuddhist.com](https://webuddhist.com).",
              "The practice app has been on the [App Store](https://apps.apple.com/us/app/webuddhist/id6745810914) since September 2025. On [Google Play](https://play.google.com/store/apps/details?id=org.pecha.app) it has 1K+ installs (September 2026).",
              "Teachers build practice plans for the app in [WeBuddhist Studio](https://studio.webuddhist.com).",
            ],
          },
        ],
      },
    ],
    sources: [
      { label: "Pecha Server and API PRD (OpenPecha forum, Sep 2025)", href: "https://forum.openpecha.org/t/prd-of-pecha-server-and-api/467" },
      { label: "OpenPecha projects and working groups (Sep 2025)", href: "https://forum.openpecha.org/t/openpecha-projects-working-groups/485" },
      { label: "openpecha-backend on GitHub", href: "https://github.com/Webuddhist-tech/openpecha-backend" },
      { label: "WeBuddhist app on GitHub", href: "https://github.com/Webuddhist-tech/WeBuddhist-app" },
      { label: "PechaAPI planning issues", href: "https://github.com/Webuddhist-tech/PechaAPI" },
    ],
  },
  {
    slug: "tibetan-ocr-data",
    title: "Tibetan OCR training data",
    dek: "Getting machines to read Tibetan woodblock prints, modern books and manuscripts, one annotated line at a time.",
    years: "2022 – 2024",
    role: "Lead, OCR data creation (BDRC, for the Monlam AI OCR project)",
    stack: ["Prodigy", "Python", "AWS S3", "Hugging Face", "Google Vision"],
    links: [
      { label: "Datasets", href: "https://huggingface.co/openpecha" },
      { label: "Annotation tools", href: "https://github.com/Webuddhist-tech/prodigy-tools" },
      { label: "Pipeline overview", href: "https://forum.openpecha.org/t/the-current-state-of-tibetan-ocr-bdrc-and-monlam-ai/146" },
    ],
    sections: [
      {
        heading: "The problem",
        blocks: [
          {
            type: "p",
            text: "Reading a Tibetan page takes several models. One finds the layout: text areas, images, margins and captions. One splits the text into lines, and one turns each line image into text. A script classifier comes first, because a woodblock Kangyur, a modern print and a cursive manuscript look nothing alike. Each style needs its own human-checked training data.",
          },
        ],
      },
      {
        heading: "What I did",
        blocks: [
          {
            type: "ul",
            items: [
              "Led the data creation team and supported the annotators who produced the training data.",
              "Built and maintained the [Prodigy annotation tools](https://github.com/Webuddhist-tech/prodigy-tools) for layout analysis, script detection and image sampling, with page images served from S3. Wrote the RFC for the layout annotation tool.",
              "Prepared the datasets and published them on Hugging Face, split by script and source.",
              "Wrote a [public overview](https://forum.openpecha.org/t/the-current-state-of-tibetan-ocr-bdrc-and-monlam-ai/146) of every model we trained and the data behind it.",
            ],
          },
        ],
      },
      {
        heading: "The datasets",
        blocks: [
          {
            type: "table",
            head: ["Dataset", "Script", "Lines"],
            rows: [
              ["[Norbuketaka](https://huggingface.co/datasets/openpecha/OCR-Norbuketaka)", "Modern print", "≈ 2,240,000"],
              ["[Google Books](https://huggingface.co/datasets/openpecha/OCR-Google_Books)", "Modern print", "751,456"],
              ["[Lithang Kanjur](https://huggingface.co/datasets/openpecha/OCR-Lithangkanjur)", "Woodblock", "527,437"],
              ["[Lhasa Kanjur](https://huggingface.co/datasets/openpecha/OCR-Lhasakanjur)", "Woodblock", "161,309"],
              ["[Handwritten cursive](https://huggingface.co/datasets/openpecha/OCR-Handwritten_Tibetan_Cursive)", "Cursive", "70,528"],
              ["[Drutsa](https://huggingface.co/datasets/openpecha/OCR-Drutsa)", "Drutsa", "32,364"],
              ["[Betsug](https://huggingface.co/datasets/openpecha/OCR-Betsug)", "Betsug", "28,318"],
              ["[Karmapa](https://huggingface.co/datasets/openpecha/OCR-Karmapa8)", "Woodblock", "24,968"],
              ["[Norbuketaka numbers](https://huggingface.co/datasets/openpecha/OCR-NorbuketakaNumbers)", "Woodblock", "17,511"],
              ["[Khyentse Wangpo](https://huggingface.co/datasets/openpecha/OCR-KhyentseWangpo)", "Woodblock", "13,524"],
            ],
            caption: "Line counts from each dataset card, September 2026.",
          },
        ],
      },
      {
        heading: "Result",
        blocks: [
          {
            type: "p",
            text: "BDRC trained its layout, line and OCR models on this data, and in March 2025 it released a free Tibetan OCR app. [Its announcement](https://www.bdrc.io/blog/2025/03/14/bdrc-announces-the-release-of-ocr-app-for-tibetan/) credits the Monlam AI team, “especially Tashi Tsering”. BDRC's Google Books OCR models name my Google Books dataset as their training data.",
          },
          {
            type: "p",
            text: "I've come back to OCR in 2026, evaluating Gemini, dots.ocr, PaddleOCR, Google Vision and Tesseract on BDRC's corpus. For that I built a [batch API for dots.ocr](https://huggingface.co/spaces/openpecha/bec-dot.orc-api) on Hugging Face Spaces.",
          },
        ],
      },
    ],
    sources: [
      { label: "BDRC: OCR app release (Mar 2025)", href: "https://www.bdrc.io/blog/2025/03/14/bdrc-announces-the-release-of-ocr-app-for-tibetan/" },
      { label: "BDRC: the OCR project (Aug 2024)", href: "https://www.bdrc.io/blog/2024/08/28/transforming-tibetan-text-digitization-bdrcs-groundbreaking-ocr-project/" },
      { label: "The current state of Tibetan OCR (Dec 2024)", href: "https://forum.openpecha.org/t/the-current-state-of-tibetan-ocr-bdrc-and-monlam-ai/146" },
      { label: "openpecha on Hugging Face", href: "https://huggingface.co/openpecha" },
    ],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
