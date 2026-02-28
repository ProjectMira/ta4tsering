export interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: string;
}

export const journey: Milestone[] = [
  {
    year: "Foundation",
    title: "Mobile & Backend Development",
    description:
      "Built a strong foundation in mobile development for iOS and Android platforms, along with backend services using Python and PostgreSQL. Focused on writing clean, maintainable code and understanding software design patterns.",
    icon: "foundation",
  },
  {
    year: "Growth",
    title: "Cross-Platform Architecture",
    description:
      "Transitioned to cross-platform development with Flutter and Firebase, architecting comprehensive enterprise applications. Designed modular, reusable component systems and implemented real-time data synchronization layers.",
    icon: "growth",
  },
  {
    year: "Expansion",
    title: "Database & API Design",
    description:
      "Took ownership of database schema design and RESTful API development. Built robust data models for complex business domains and created well-documented, versioned API endpoints serving multiple client applications.",
    icon: "expansion",
  },
  {
    year: "Leadership",
    title: "System Architecture",
    description:
      "Evolved into leading complex system architecture decisions. Designed scalable infrastructure patterns, established CI/CD pipelines, and mentored teams on best practices for distributed system design.",
    icon: "leadership",
  },
  {
    year: "Current",
    title: "AI Infrastructure & LLM Orchestration",
    description:
      "Pioneering local LLM deployment and cloud GPU infrastructure. Orchestrating models like DeepSeek-R1 and Qwen through Ollama and OpenClaw, while managing GPU resources on Vast.ai for cost-efficient AI workloads.",
    icon: "ai",
  },
];
