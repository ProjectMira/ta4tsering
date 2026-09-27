import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import InlineText from "@/components/InlineText";
import { caseStudies, getCaseStudy, type Block } from "@/content/caseStudies";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.dek,
    alternates: { canonical: `/work/${study.slug}/` },
    openGraph: { title: study.title, description: study.dek },
  };
}

function RenderBlock({ block }: { block: Block }) {
  if (block.type === "p") {
    return (
      <p>
        <InlineText text={block.text} />
      </p>
    );
  }
  if (block.type === "ul") {
    return (
      <ul>
        {block.items.map((item) => (
          <li key={item}>
            <InlineText text={item} />
          </li>
        ))}
      </ul>
    );
  }
  return (
    <figure>
      <table className="w-full text-meta border-collapse">
        <thead>
          <tr className="border-b border-rule-strong text-left">
            {block.head.map((h, i) => (
              <th
                key={h}
                scope="col"
                className={`font-mono text-label text-muted font-normal pb-2 ${i === block.head.length - 1 ? "text-right" : ""}`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((row) => (
            <tr key={row[0]} className="border-b border-rule">
              {row.map((cell, i) => (
                <td
                  key={i}
                  className={`py-2 pr-3 ${i === row.length - 1 ? "font-mono nums text-right pr-0 whitespace-nowrap" : ""} ${i === 1 ? "text-text-2" : ""}`}
                >
                  <InlineText text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {block.caption && (
        <figcaption className="mt-2 font-mono text-label text-muted">{block.caption}</figcaption>
      )}
    </figure>
  );
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const index = caseStudies.indexOf(study);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <article className="container-page pt-8 md:pt-16">
      <div className="rail-grid">
        <p className="font-mono text-meta text-muted mb-8 md:mb-0 no-print">
          <Link href="/#work" className="prose-link">
            ← Work
          </Link>
        </p>
        <header className="col-main">
          <h1 className="text-display text-text">{study.title}</h1>
          <p className="mt-4 text-lead text-text-2">{study.dek}</p>
        </header>
      </div>

      <div className="rail-grid mt-10 md:mt-14 gap-y-10">
        <aside aria-label="Project details" className="md:sticky md:top-12 self-start">
          <dl className="font-mono text-meta space-y-4 border-t border-rule pt-4 md:border-0 md:pt-1">
            <div>
              <dt className="text-label text-muted">Years</dt>
              <dd className="text-text-2">{study.years}</dd>
            </div>
            <div>
              <dt className="text-label text-muted">Role</dt>
              <dd className="text-text-2">{study.role}</dd>
            </div>
            <div>
              <dt className="text-label text-muted">Stack</dt>
              <dd className="text-text-2">{study.stack.join(", ")}</dd>
            </div>
            <div>
              <dt className="text-label text-muted">Links</dt>
              <dd>
                <ul>
                  {study.links.map((l) => (
                    <li key={l.href}>
                      <a href={l.href} className="prose-link print-url text-text-2">
                        {l.label}
                        {"\u00a0"}
                        <span aria-hidden="true" className="arrow arrow-external">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </aside>

        <div className="col-main prose text-text-2">
          {study.sections.map((section) => (
            <section key={section.heading} aria-label={section.heading}>
              <h2 className="text-text">{section.heading}</h2>
              {section.blocks.map((block, i) => (
                <div key={i} className="mt-4">
                  <RenderBlock block={block} />
                </div>
              ))}
            </section>
          ))}

          <section aria-label="Sources" className="!mt-14 border-t border-rule pt-6">
            <h2 className="!mt-0 font-mono !text-label text-muted">Sources</h2>
            <ul className="mt-3 font-mono text-meta">
              {study.sources.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className="prose-link print-url">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {next && next.slug !== study.slug && (
            <nav aria-label="Next case study" className="!mt-14 no-print">
              <Link href={`/work/${next.slug}/`} className="group text-lead text-text">
                <span className="block font-mono text-label text-muted mb-1">Next</span>
                <span className="prose-link">{next.title}</span>
                <span aria-hidden="true" className="arrow arrow-internal ml-1.5">→</span>
              </Link>
            </nav>
          )}
        </div>
      </div>
    </article>
  );
}
