export interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
    huggingface?: string;
  };
  icon: string;
}

export const projects: Project[] = [
  {
    title: "Enterprise Employee Management",
    category: "Enterprise Mobile Applications",
    description:
      "A comprehensive cross-platform employee management and salary calculation application built with Flutter and Firebase. Features real-time data sync, role-based access control, and automated payroll workflows.",
    tags: ["Flutter", "Firebase", "Dart", "Cloud Functions"],
    links: {
      github: "https://github.com/ta4tsering",
    },
    icon: "mobile",
  },
  {
    title: "OpenPecha Toolkit V2",
    category: "AI & NLP Infrastructure",
    description:
      "A modular toolkit for Tibetan text processing and NLP pipelines. Includes OCR benchmarking, text segmentation, and integration with vision-language models for Tibetan script recognition.",
    tags: ["Python", "NLP", "OCR", "Tibetan"],
    links: {
      github: "https://github.com/ta4tsering",
    },
    icon: "brain",
  },
  {
    title: "dots-ocr Vision-Language Model",
    category: "AI & NLP Infrastructure",
    description:
      "Deployment of vision-language models for Tibetan OCR on Hugging Face Spaces and private API environments. Achieved high accuracy on complex diacritical Tibetan scripts.",
    tags: ["Hugging Face", "Python", "Docker", "FastAPI"],
    links: {
      huggingface: "https://huggingface.co/spaces",
      github: "https://github.com/ta4tsering",
    },
    icon: "eye",
  },
  {
    title: "Local AI Agent Orchestration",
    category: "Local AI Agents",
    description:
      "Integration framework for deploying and orchestrating local LLMs like DeepSeek-R1 and Qwen through Ollama and OpenClaw. Includes GPU resource management and model routing for multi-agent workflows.",
    tags: ["Ollama", "OpenClaw", "DeepSeek-R1", "Qwen", "Vast.ai"],
    links: {
      github: "https://github.com/ta4tsering",
    },
    icon: "robot",
  },
  {
    title: "Tibetan Font Generation Pipeline",
    category: "Open Source Contributions",
    description:
      "Custom font generation toolchain for Tibetan Unicode scripts. Automates glyph creation, kerning tables, and OpenType feature compilation from design sources.",
    tags: ["Python", "FontTools", "Unicode", "Open Source"],
    links: {
      github: "https://github.com/ta4tsering",
    },
    icon: "code",
  },
  {
    title: "Data Processing Utilities",
    category: "Open Source Contributions",
    description:
      "A collection of open-source data processing scripts and utilities for cleaning, transforming, and validating large text corpora. Optimized for batch processing and parallel execution.",
    tags: ["Python", "PostgreSQL", "ETL", "Open Source"],
    links: {
      github: "https://github.com/ta4tsering",
    },
    icon: "database",
  },
];
