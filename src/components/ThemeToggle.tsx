"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

const order = ["system", "light", "dark"] as const;
const labels: Record<string, string> = {
  system: "Auto",
  light: "Light",
  dark: "Dark",
};

const subscribe = () => () => {};

export default function ThemeToggle() {
  const { theme = "system", setTheme } = useTheme();
  // The theme is only known on the client; render a stable placeholder first.
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );

  const current = mounted ? theme : "system";
  const next = order[(order.indexOf(current as (typeof order)[number]) + 1) % order.length];

  const onClick = () => {
    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => unknown;
    };
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!doc.startViewTransition || reduce) {
      setTheme(next);
      return;
    }
    // The transition callback waits for a rendered frame; if the page isn't
    // painting (throttled tab, embedded webview), apply the theme anyway.
    let applied = false;
    const apply = () => {
      if (applied) return;
      applied = true;
      setTheme(next);
    };
    doc.startViewTransition(apply);
    setTimeout(apply, 300);
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Switch theme (current: ${labels[current]})`}
      className="no-print font-mono text-label text-muted hover:text-text transition-colors duration-[120ms] min-h-11 min-w-11 px-1 -mx-1 inline-flex items-center justify-end"
    >
      <span aria-hidden="true" className={mounted ? undefined : "invisible"}>
        {labels[current]}
      </span>
    </button>
  );
}
