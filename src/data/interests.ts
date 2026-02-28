export interface Interest {
  title: string;
  description: string;
  icon: string;
  span?: "tall" | "wide";
  isBlogPlaceholder?: boolean;
}

export const interests: Interest[] = [
  {
    title: "Software Architecture Patterns",
    description:
      "Deep dives into event-driven architectures, CQRS, hexagonal design, and the trade-offs between monoliths and microservices in real-world systems.",
    icon: "architecture",
    span: "tall",
  },
  {
    title: "Mathematics of Game Mechanics",
    description:
      "Exploring probability theory, reward curves, and balancing equations that power engaging game systems. Fascinated by the intersection of math and player experience.",
    icon: "gamepad",
  },
  {
    title: "Mechanical Keyboards",
    description:
      "Optimizing keyboard layouts, switch profiles, and firmware configurations for maximum coding productivity and comfort during long sessions.",
    icon: "keyboard",
  },
  {
    title: "Travel & Coordination",
    description:
      "Planning and coordinating travel logistics, from route optimization to cultural immersion. Bringing a systems-thinking approach to exploration.",
    icon: "travel",
    span: "wide",
  },
  {
    title: "Thoughts on System Design",
    description:
      "Coming soon -- a series on practical system design lessons learned from building production infrastructure.",
    icon: "blog",
    isBlogPlaceholder: true,
  },
  {
    title: "Notes from the Field",
    description:
      "Coming soon -- personal essays on the craft of software engineering, remote collaboration, and continuous learning.",
    icon: "blog",
    isBlogPlaceholder: true,
  },
];
