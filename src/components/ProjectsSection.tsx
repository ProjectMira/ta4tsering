"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import {
  FiSmartphone,
  FiCpu,
  FiEye,
  FiGitBranch,
  FiCode,
  FiDatabase,
  FiGithub,
  FiExternalLink,
} from "react-icons/fi";

const iconMap: Record<string, React.ElementType> = {
  mobile: FiSmartphone,
  brain: FiCpu,
  eye: FiEye,
  robot: FiGitBranch,
  code: FiCode,
  database: FiDatabase,
};

const categoryColors: Record<string, string> = {
  "Enterprise Mobile Applications": "from-sky-500/20 to-blue-500/20",
  "AI & NLP Infrastructure": "from-purple-500/20 to-pink-500/20",
  "Local AI Agents": "from-green-500/20 to-emerald-500/20",
  "Open Source Contributions": "from-amber-500/20 to-orange-500/20",
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">Projects</h2>
          <div className="w-16 h-1 bg-linear-to-r from-accent-teal to-accent-blue rounded-full mb-4" />
          <p className="text-muted mb-12 max-w-2xl">
            A selection of projects spanning enterprise mobile apps, AI/NLP
            infrastructure, local AI agents, and open-source tools.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project) => {
            const Icon = iconMap[project.icon] || FiCode;
            const gradientBg =
              categoryColors[project.category] ||
              "from-accent-teal/20 to-accent-blue/20";

            return (
              <motion.div key={project.title} variants={cardVariants}>
                <div className="h-full bg-surface border border-border rounded-2xl overflow-hidden hover:border-accent-teal/30 hover:-translate-y-1 transition-all duration-300 group flex flex-col">
                  <div
                    className={`h-32 bg-linear-to-br ${gradientBg} flex items-center justify-center`}
                  >
                    <Icon className="w-10 h-10 text-foreground/60 group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="text-xs font-semibold uppercase tracking-wider text-accent-teal mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-lg font-semibold mb-3">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-surface-hover border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2 border-t border-border">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-medium text-muted hover:text-foreground transition-colors"
                        >
                          <FiGithub className="w-3.5 h-3.5" />
                          Code
                        </a>
                      )}
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-medium text-muted hover:text-foreground transition-colors"
                        >
                          <FiExternalLink className="w-3.5 h-3.5" />
                          Demo
                        </a>
                      )}
                      {project.links.huggingface && (
                        <a
                          href={project.links.huggingface}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-medium text-muted hover:text-foreground transition-colors"
                        >
                          <FiExternalLink className="w-3.5 h-3.5" />
                          HF Spaces
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
