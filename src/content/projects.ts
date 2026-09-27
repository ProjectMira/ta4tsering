// Selected work. Numbers come from public GitHub (Search API), Hugging Face and
// Google Play as of Sep 2026. Keep them roughly current or drop them.

export type Link = { label: string; href: string };

export type Project = {
  title: string;
  years: string;
  description: string;
  stack: string[];
  /** Primary destination. Internal case studies start with "/work/". */
  href?: string;
  /** Extra links shown under the description. */
  links?: Link[];
};

export type ProjectGroup = {
  id: string;
  label: string;
  projects: Project[];
};

export const projectGroups: ProjectGroup[] = [
  {
    id: "platforms",
    label: "Buddhist text platforms",
    projects: [
      {
        title: "WeBuddhist",
        years: "2025 – now",
        description:
          "OpenPecha's Buddhist library and daily-practice app. You can read a text next to its translations and commentaries, or follow a guided practice plan. I lead data preparation, helped design the backend, and coordinate the backend, design, library and app teams: priorities, test rounds and feedback reviews.",
        stack: ["Flutter", "React", "FastAPI", "Neo4j"],
        href: "/work/webuddhist",
        links: [
          { label: "webuddhist.com", href: "https://webuddhist.com" },
          { label: "App Store", href: "https://apps.apple.com/us/app/webuddhist/id6745810914" },
          { label: "Google Play", href: "https://play.google.com/store/apps/details?id=org.pecha.app" },
        ],
      },
      {
        title: "OpenPecha backend",
        years: "2025 – 2026",
        description:
          "The text graph behind WeBuddhist. Works, translations, editions and their annotations live as nodes in Neo4j, with BDRC's catalogue imported from RDF. I wrote the product spec. My 182 commits and 76 pull requests are mostly Cypher queries, constraints and API endpoints.",
        stack: ["Python", "Flask", "Firebase Functions", "Neo4j"],
        href: "https://github.com/Webuddhist-tech/openpecha-backend",
      },
      {
        title: "OpenPecha Toolkit v2",
        years: "2024 – 2025",
        description:
          "The openpecha Python package, a stand-off annotation library built on STAM. It has parsers for DOCX, BDRC OCR output and DharmaNexus, and serializers that publish texts to pecha.org and WeBuddhist. I owned the project: 251 commits, 74 pull requests and most of the reviews.",
        stack: ["Python", "STAM"],
        href: "https://github.com/Webuddhist-tech/toolkit-v2",
        links: [{ label: "PyPI", href: "https://pypi.org/project/openpecha/" }],
      },
    ],
  },
  {
    id: "ocr",
    label: "Tibetan OCR",
    projects: [
      {
        title: "OCR training data for BDRC and Monlam AI",
        years: "2022 – 2024",
        description:
          "I led the team that made Tibetan OCR training data: line images with transcriptions for woodblock prints, modern books, Betsug, Drutsa and handwritten cursive. Nearly four million lines across ten datasets are public on Hugging Face, and BDRC trained its OCR models on them.",
        stack: ["Prodigy", "Python", "AWS S3", "Hugging Face"],
        href: "/work/tibetan-ocr-data",
        links: [{ label: "Datasets", href: "https://huggingface.co/openpecha" }],
      },
      {
        title: "Prodigy annotation tools",
        years: "2022 – 2024",
        description:
          "The custom Prodigy setups our annotators used for page-layout analysis, script detection and image sampling, with page images served from S3. I'm the top contributor, with 204 commits.",
        stack: ["Python", "Prodigy", "AWS S3"],
        href: "https://github.com/Webuddhist-tech/prodigy-tools",
      },
      {
        title: "dots.ocr batch API",
        years: "2026",
        description:
          "A Gradio app and API that runs the dots.ocr vision-language model over batches of page images. It's part of an evaluation of Gemini, dots.ocr, PaddleOCR, Google Vision and Tesseract on BDRC's Tibetan corpus.",
        stack: ["Python", "Gradio", "Hugging Face Spaces"],
        href: "https://huggingface.co/spaces/openpecha/bec-dot.orc-api",
      },
    ],
  },
  {
    id: "side",
    label: "Side projects",
    projects: [
      {
        title: "Bojang",
        years: "2025 – now",
        description:
          "An app for English speakers learning Tibetan, with 26 lessons over three levels and audio quizzes. I built it with Tenzin Tsundue. It's on iOS and Android, and version 2 added a backend and API.",
        stack: ["Flutter", "Firebase"],
        href: "https://bojang.in",
        links: [
          { label: "App Store", href: "https://apps.apple.com/app/id6752509504" },
          { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.projectmira.bojang" },
          { label: "Code", href: "https://github.com/ProjectMira/bojang" },
        ],
      },
      {
        title: "Drokpo",
        years: "2026",
        description:
          "A SwiftUI app to help Tibetans meet each other, with swipe matching, real-time chat, and report and block. The backend is FastAPI on Cloud Run, with Firestore and Firebase Auth.",
        stack: ["Swift", "SwiftUI", "FastAPI", "Firebase"],
        href: "https://github.com/ProjectMira/drokpo-app",
        links: [{ label: "Backend", href: "https://github.com/ProjectMira/drokpo-backend" }],
      },
      {
        title: "TSP Past Papers",
        years: "2025 – 2026",
        description:
          "A bilingual English–Tibetan app for practising past multiple-choice exam papers under timed conditions.",
        stack: ["Flutter", "Dart"],
        href: "https://github.com/ProjectMira/TSP-Test",
      },
      {
        title: "Tibetan Cancer Society",
        years: "2025 – 2026",
        description:
          "Website for the Tibetan Cancer Society, with pages for the team, the ambulance service and the community kitchen. I volunteered at their Ladakh health camp in 2022.",
        stack: ["React", "TypeScript", "Tailwind"],
        href: "https://tibetancancersociety.net",
      },
      {
        title: "YAK Infra Builder",
        years: "2026",
        description: "Website for an industrial civil-construction company that works across India.",
        stack: ["Web"],
        href: "https://yakinfrabuilder.com",
      },
      {
        title: "kōra",
        years: "2026",
        description: "Website for kōra, a cold-pressed coffee café in Delhi.",
        stack: ["HTML", "CSS", "Cloudflare Pages"],
        href: "https://xn--kracafe-5lb.com",
      },
    ],
  },
];
