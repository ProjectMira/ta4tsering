"use client";

import { motion } from "framer-motion";
import { interests } from "@/data/interests";
import {
  FiLayers,
  FiActivity,
  FiCommand,
  FiMapPin,
  FiEdit3,
} from "react-icons/fi";

const iconMap: Record<string, React.ElementType> = {
  architecture: FiLayers,
  gamepad: FiActivity,
  keyboard: FiCommand,
  travel: FiMapPin,
  blog: FiEdit3,
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function InterestsSection() {
  return (
    <section id="interests" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            Interests & Explorations
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-accent-teal to-accent-blue rounded-full mb-4" />
          <p className="text-muted mb-12 max-w-2xl">
            Beyond the code editor — things I explore, think about, and
            occasionally write about.
          </p>
        </motion.div>

        <motion.div
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {interests.map((interest) => {
            const Icon = iconMap[interest.icon] || FiLayers;
            const isPlaceholder = interest.isBlogPlaceholder;

            return (
              <motion.div
                key={interest.title}
                variants={cardVariants}
                className="break-inside-avoid"
              >
                <div
                  className={`rounded-2xl border p-6 transition-all duration-300 group ${
                    isPlaceholder
                      ? "border-dashed border-border/60 bg-surface/50"
                      : "border-border bg-surface hover:border-accent-teal/30 hover:-translate-y-1"
                  } ${interest.span === "tall" ? "min-h-[240px]" : ""}`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isPlaceholder
                          ? "bg-surface-hover"
                          : "bg-linear-to-r from-accent-teal/20 to-accent-blue/20 group-hover:from-accent-teal/30 group-hover:to-accent-blue/30"
                      } transition-all`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          isPlaceholder ? "text-muted/50" : "text-accent-teal"
                        }`}
                      />
                    </div>
                    <div>
                      <h3
                        className={`font-semibold mb-2 ${
                          isPlaceholder ? "text-muted/70" : ""
                        }`}
                      >
                        {interest.title}
                      </h3>
                      <p
                        className={`text-sm leading-relaxed ${
                          isPlaceholder ? "text-muted/50 italic" : "text-muted"
                        }`}
                      >
                        {interest.description}
                      </p>
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
