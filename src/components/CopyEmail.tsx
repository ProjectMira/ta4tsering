"use client";

import { useEffect, useRef, useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard unavailable (e.g. insecure context): the mailto link still works.
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={onCopy}
        className="no-print font-mono text-label text-muted hover:text-accent transition-colors duration-[120ms] underline decoration-rule-strong underline-offset-[0.2em]"
      >
        {copied ? "copied" : "copy"}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? "Email copied" : ""}
      </span>
    </>
  );
}
