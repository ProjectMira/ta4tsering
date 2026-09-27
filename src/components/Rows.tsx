import Link from "next/link";
import type { Project } from "@/content/projects";
import type { Role } from "@/content/experience";
import type { Note } from "@/content/notes";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const isInternal = (href: string) => href.startsWith("/");

function Arrow({ href }: { href: string }) {
  return isInternal(href) ? (
    <span aria-hidden="true" className="arrow arrow-internal ml-1.5">→</span>
  ) : (
    <span aria-hidden="true" className="arrow arrow-external ml-1">↗</span>
  );
}

function RowTitleLink({ href, children }: { href: string; children: React.ReactNode }) {
  const cls = "row-link print-url";
  return isInternal(href) ? (
    <Link href={href} className={cls}>
      {children}
      <Arrow href={href} />
    </Link>
  ) : (
    <a href={href} className={cls}>
      {children}
      <Arrow href={href} />
    </a>
  );
}

export function ProjectRow({ project }: { project: Project }) {
  const { title, years, description, stack, href, links } = project;
  return (
    <li className="row row-tint rail-grid">
      <p className="font-mono text-meta text-muted">{years}</p>
      <div className="col-main">
        <h3 className="text-lead text-text">
          {href ? <RowTitleLink href={href}>{title}</RowTitleLink> : title}
        </h3>
        <p className="mt-1.5 text-text-2">{description}</p>
        {/* Separators stay on the line they follow, so wrapped lines never start with "·". */}
        <p className="mt-2 font-mono text-meta text-muted">{stack.join(" · ")}</p>
        {links && links.length > 0 && (
          <p className="mt-1.5 font-mono text-meta text-muted flex flex-wrap gap-x-2">
            {links.map((l, i) => (
              <span key={l.href} className="inline-flex gap-x-2">
                <a href={l.href} className="inner-link prose-link print-url">
                  {l.label}
                </a>
                {i < links.length - 1 && <span aria-hidden="true">·</span>}
              </span>
            ))}
          </p>
        )}
      </div>
    </li>
  );
}

export function RoleRow({ role }: { role: Role }) {
  const { from, to, title, org, orgUrl, summary } = role;
  return (
    <li className="row rail-grid">
      <p className="font-mono text-meta text-muted whitespace-nowrap">
        {from}&thinsp;–&thinsp;{to}
      </p>
      <div className="col-main">
        <h3 className="text-lead text-text">
          {title}
          <span className="text-muted"> · </span>
          {orgUrl ? (
            <a href={orgUrl} className="prose-link print-url">
              {org}
            </a>
          ) : (
            org
          )}
        </h3>
        <p className="mt-1.5 text-text-2">{summary}</p>
      </div>
    </li>
  );
}

export function NoteRow({ note }: { note: Note }) {
  const [year, month] = note.date.split("-");
  const date = `${MONTHS[Number(month) - 1]} ${year}`;
  return (
    <li className="row row-tint rail-grid !py-4">
      <p className="font-mono text-meta text-muted">
        <time dateTime={note.date}>{date}</time>
      </p>
      <div className="col-main">
        <h3 className="text-body text-text">
          <RowTitleLink href={note.href}>{note.title}</RowTitleLink>
        </h3>
        <p className="mt-0.5 text-meta text-text-2">{note.dek}</p>
      </div>
    </li>
  );
}
