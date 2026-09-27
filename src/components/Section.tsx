import type { ReactNode } from "react";

/** A home-page section: title in the main column, a mono note in the rail. */
export default function Section({
  id,
  title,
  note,
  children,
  className = "",
}: {
  id: string;
  title: string;
  note?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`scroll-mt-8 ${className}`}>
      <div className="rail-grid items-baseline mb-6">
        <p className="font-mono text-meta text-muted order-2 md:order-none" aria-hidden={!note}>
          {note}
        </p>
        <h2 id={`${id}-title`} className="col-main text-title text-text order-1 md:order-none">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}
