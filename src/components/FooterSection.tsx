"use client";

import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/ta4tsering",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tashi-tsering-7989891b5/",
    icon: FiLinkedin,
  },
  {
    label: "Email",
    href: "mailto:hello@tashitsering.dev",
    icon: FiMail,
  },
];

export default function FooterSection() {
  return (
    <footer id="contact" className="py-16 sm:py-20 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-linear-to-r from-accent-teal to-accent-blue bg-clip-text text-transparent mb-3">
              Tashi Tsering
            </h3>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Senior System Architect & Software Developer building at the
              intersection of mobile, backend, and AI infrastructure.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {["About", "Journey", "Projects", "Interests"].map((link) => (
                <button
                  key={link}
                  onClick={() =>
                    document
                      .querySelector(`#${link.toLowerCase()}`)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-sm text-muted hover:text-foreground transition-colors"
                >
                  {link}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">
              Get in Touch
            </h4>
            <p className="text-sm text-muted mb-4">
              Open to collaboration, consulting, and interesting conversations.
            </p>
            <a
              href="mailto:hello@tashitsering.dev"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-accent-teal to-accent-blue text-white text-sm font-medium shadow-lg shadow-accent-teal/20 hover:shadow-accent-teal/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <FiMail className="w-4 h-4" />
              Say Hello
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border">
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-accent-teal/30 hover:bg-surface-hover transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Tashi Tsering. Crafted with
            Next.js & Tailwind CSS.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-muted hover:text-foreground hover:border-accent-teal/30 transition-all duration-300"
            aria-label="Back to top"
          >
            <FiArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
