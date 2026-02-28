"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiSun, HiMoon } from "react-icons/hi2";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-10 h-10 rounded-full bg-surface hover:bg-surface-hover border border-border transition-all duration-300 flex items-center justify-center group"
      aria-label="Toggle theme"
    >
      <HiSun className="absolute w-5 h-5 text-amber-400 transition-all duration-300 rotate-0 scale-100 dark:-rotate-90 dark:scale-0" />
      <HiMoon className="absolute w-5 h-5 text-accent-cyan transition-all duration-300 rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
    </button>
  );
}
