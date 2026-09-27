import CopyEmail from "./CopyEmail";
import { site } from "@/content/site";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const built = new Date();
const lastUpdated = `${built.getDate()} ${MONTHS[built.getMonth()]} ${built.getFullYear()}`;

export default function Footer() {
  return (
    <footer id="contact" className="container-page mt-16 md:mt-24">
      <div className="rail-grid border-t border-rule pt-12 md:pt-16 pb-12">
        <p className="font-mono text-meta text-muted pb-3 md:pb-0">Contact</p>
        <div className="col-main">
          <p className="text-text-2 max-w-[34rem]">
            Happy to talk about Buddhist text data, Tibetan OCR, graph-shaped
            libraries, or building apps with small teams.
          </p>
          <p className="mt-4 flex flex-wrap items-baseline gap-x-3">
            <a href={`mailto:${site.email}`} className="prose-link text-text">
              {site.email}
            </a>
            <CopyEmail email={site.email} />
          </p>
          <p className="mt-3 font-mono text-meta text-muted flex flex-wrap gap-x-2">
            <a className="prose-link" href={site.links.github}>GitHub</a>
            <span aria-hidden="true">·</span>
            <a className="prose-link" href={site.links.linkedin}>LinkedIn</a>
            <span aria-hidden="true">·</span>
            <a className="prose-link" href={site.links.huggingface}>Hugging Face</a>
            <span aria-hidden="true">·</span>
            <a className="prose-link" href={site.links.forum}>OpenPecha forum</a>
          </p>

          <div className="mt-12 font-mono text-label text-muted space-y-1">
            <p>
              Set in Newsreader, IBM Plex Mono &amp; Noto Serif Tibetan. Built
              with Next.js. Last updated {lastUpdated}.
            </p>
            <p>© {new Date().getFullYear()} {site.name}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
