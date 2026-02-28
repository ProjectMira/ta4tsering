"use client";

import { motion } from "framer-motion";
import { journey } from "@/data/journey";
import {
  FiSmartphone,
  FiLayers,
  FiDatabase,
  FiTrendingUp,
  FiCpu,
} from "react-icons/fi";

const iconMap: Record<string, React.ElementType> = {
  foundation: FiSmartphone,
  growth: FiLayers,
  expansion: FiDatabase,
  leadership: FiTrendingUp,
  ai: FiCpu,
};

export default function TimelineSection() {
  return (
    <section id="journey" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            Career Journey
          </h2>
          <div className="w-16 h-1 bg-linear-to-r from-accent-teal to-accent-blue rounded-full mb-16" />
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-px" />

          <div className="space-y-12 lg:space-y-16">
            {journey.map((milestone, index) => {
              const Icon = iconMap[milestone.icon] || FiLayers;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={milestone.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative grid lg:grid-cols-2 gap-4 lg:gap-12 ${
                    isLeft ? "" : "lg:direction-rtl"
                  }`}
                >
                  {/* Dot on timeline */}
                  <div className="absolute left-4 lg:left-1/2 w-3 h-3 rounded-full bg-linear-to-r from-accent-teal to-accent-blue -translate-x-1.5 lg:-translate-x-1.5 top-6 z-10 ring-4 ring-background" />

                  {/* Card */}
                  <div
                    className={`ml-10 lg:ml-0 ${
                      isLeft
                        ? "lg:pr-12 lg:text-right"
                        : "lg:col-start-2 lg:pl-12"
                    }`}
                  >
                    <div className="bg-surface border border-border rounded-2xl p-6 hover:border-accent-teal/30 transition-all duration-300 group">
                      <div
                        className={`flex items-center gap-3 mb-3 ${
                          isLeft ? "lg:justify-end" : ""
                        }`}
                      >
                        <div className="w-10 h-10 rounded-xl bg-linear-to-r from-accent-teal/20 to-accent-blue/20 flex items-center justify-center group-hover:from-accent-teal/30 group-hover:to-accent-blue/30 transition-all">
                          <Icon className="w-5 h-5 text-accent-teal" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-accent-teal">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted leading-relaxed text-sm">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
