import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { site } from "@/content/site";

const nav = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Notes", href: "/#notes" },
  { label: "About", href: "/#about" },
];

export default function Header() {
  return (
    <header className="container-page">
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-4 md:min-h-[72px]">
        <Link href="/" className="text-lead leading-none text-text whitespace-nowrap py-2">
          <span style={{ fontWeight: 480 }}>{site.name}</span>
          <span lang="bo" className="ml-[0.6em] text-[0.85em] text-muted" aria-hidden="true">
            {site.tibetanName}
          </span>
          <span className="sr-only"> (in Tibetan script: {site.tibetanName})</span>
        </Link>

        <nav aria-label="Primary" className="no-print flex items-center gap-x-5 sm:gap-x-6 -mr-1">
          <ul className="flex flex-wrap items-center gap-x-4 sm:gap-x-6">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-flex min-h-11 items-center text-text-2 hover:text-text transition-colors duration-[120ms]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
