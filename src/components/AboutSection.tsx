"use client";

import { motion } from "framer-motion";
import {
  SiFlutter,
  SiFirebase,
  SiPython,
  SiPostgresql,
  SiNextdotjs,
} from "react-icons/si";
import { FiCpu, FiCloud, FiServer } from "react-icons/fi";

const techStack = [
  { name: "Flutter", icon: SiFlutter, color: "text-sky-400" },
  { name: "Firebase", icon: SiFirebase, color: "text-amber-400" },
  { name: "Python", icon: SiPython, color: "text-yellow-400" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-foreground" },
  { name: "Ollama", icon: FiCpu, color: "text-green-400" },
  { name: "OpenClaw", icon: FiServer, color: "text-purple-400" },
  { name: "Vast.ai", icon: FiCloud, color: "text-orange-400" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const pillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">About Me</h2>
          <div className="w-16 h-1 bg-linear-to-r from-accent-teal to-accent-blue rounded-full mb-10" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            className="lg:col-span-3 space-y-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-lg leading-relaxed text-muted">
              I&apos;m a Senior System Architect and Software Developer with a
              deep passion for building robust, scalable systems. My journey
              spans from crafting polished mobile applications for iOS and
              Android to designing the backend infrastructure that powers them.
            </p>
            <p className="text-lg leading-relaxed text-muted">
              Today, my focus sits at the intersection of{" "}
              <span className="text-foreground font-medium">
                full-stack development
              </span>
              ,{" "}
              <span className="text-foreground font-medium">
                AI model orchestration
              </span>
              , and{" "}
              <span className="text-foreground font-medium">
                system optimization
              </span>
              . I architect solutions that bridge the gap between complex AI
              infrastructure and practical, production-ready applications.
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-surface rounded-2xl border border-border p-6">
              <div className="font-mono text-xs text-muted mb-1">
                ~/tashi-tsering
              </div>
              <div className="font-mono text-sm space-y-1">
                <div>
                  <span className="text-accent-teal">const</span>{" "}
                  <span className="text-accent-blue">approach</span> ={" "}
                  <span className="text-amber-400">&quot;systems-first&quot;</span>;
                </div>
                <div>
                  <span className="text-accent-teal">const</span>{" "}
                  <span className="text-accent-blue">passion</span> ={" "}
                  <span className="text-amber-400">
                    &quot;building things that scale&quot;
                  </span>
                  ;
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted mb-6">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <motion.div key={tech.name} variants={pillVariants}>
                <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-surface border border-border hover:bg-surface-hover hover:border-accent-teal/30 transition-all duration-300 group cursor-default">
                  <tech.icon
                    className={`w-4 h-4 ${tech.color} group-hover:scale-110 transition-transform duration-300`}
                  />
                  <span className="text-sm font-medium">{tech.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
