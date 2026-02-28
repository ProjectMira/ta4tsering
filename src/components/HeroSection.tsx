"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiGithub, FiLinkedin, FiChevronDown } from "react-icons/fi";

export default function HeroSection() {
  const [connectOpen, setConnectOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p className="text-accent-teal font-medium mb-3 tracking-wide text-sm uppercase">
              Welcome to my portfolio
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              <span className="bg-linear-to-r from-accent-teal to-accent-blue bg-clip-text text-transparent">
                Tashi Tsering
              </span>
            </h1>

            <div className="text-lg sm:text-xl text-muted mb-8 h-8">
              <TypeAnimation
                sequence={[
                  "Senior System Architect",
                  2000,
                  "Software Developer",
                  2000,
                  "AI Infrastructure Enthusiast",
                  2000,
                ]}
                repeat={Infinity}
                speed={40}
                deletionSpeed={60}
                cursor={true}
              />
            </div>

            <p className="text-muted mb-8 max-w-lg leading-relaxed">
              Building robust systems at the intersection of mobile
              development, backend architecture, and AI infrastructure.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-6 py-3 rounded-full bg-linear-to-r from-accent-teal to-accent-blue text-white font-medium shadow-lg shadow-accent-teal/25 hover:shadow-accent-teal/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                View Projects
              </button>

              <div className="relative">
                <button
                  onClick={() => setConnectOpen(!connectOpen)}
                  className="px-6 py-3 rounded-full border border-border font-medium hover:bg-surface hover:-translate-y-0.5 transition-all duration-300"
                >
                  Connect
                </button>

                {connectOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    className="absolute top-full mt-2 left-0 bg-background border border-border rounded-xl shadow-xl p-2 min-w-[180px] z-10"
                  >
                    <a
                      href="https://github.com/ta4tsering"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-surface transition-colors text-sm"
                    >
                      <FiGithub className="w-4 h-4" />
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tashi-tsering-7989891b5/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-surface transition-colors text-sm"
                    >
                      <FiLinkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-accent-teal/20 to-accent-blue/20 rounded-full blur-2xl animate-pulse" />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-border shadow-2xl">
                <Image
                  src="/images/profile.jpeg"
                  alt="Tashi Tsering"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() =>
            document
              .querySelector("#about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="text-muted hover:text-foreground transition-colors"
          aria-label="Scroll to about section"
        >
          <FiChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
