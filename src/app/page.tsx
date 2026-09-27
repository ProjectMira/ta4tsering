import Image from "next/image";
import Section from "@/components/Section";
import { NoteRow, ProjectRow, RoleRow } from "@/components/Rows";
import { site } from "@/content/site";
import { projectGroups } from "@/content/projects";
import { education, roles } from "@/content/experience";
import { notes } from "@/content/notes";

const projectCount = projectGroups.reduce((n, g) => n + g.projects.length, 0);

export default function Home() {
  return (
    <div className="container-page">
      {/* Intro */}
      <section aria-labelledby="intro" className="pt-10 md:pt-24">
        <div className="rail-grid gap-y-6">
          <figure className="w-[88px] md:w-full">
            <Image
              src={site.photo.src}
              alt={site.photo.alt}
              width={site.photo.width}
              height={site.photo.height}
              priority
              sizes="(min-width: 900px) 168px, 88px"
              className="block w-full h-auto rounded-[2px] border border-rule dark:saturate-[0.9]"
            />
          </figure>
          <div className="col-main">
            <h1 id="intro" className="text-intro text-text">
              <span style={{ fontWeight: 500 }}>{site.name}</span> turns Buddhist
              texts into structured data, and leads the teams building{" "}
              <a href="https://webuddhist.com" className="prose-link">
                WeBuddhist
              </a>
              , a library and practice app built on top of it.
            </h1>
            <p className="mt-5 text-lead text-text-2">
              Since 2020 I&apos;ve worked on Tibetan text technology in {site.location}: OCR
              training data for BDRC and Monlam AI, the OpenPecha toolkit, and now a Neo4j
              graph that links each text to its translations and commentaries.
            </p>
            <p className="mt-5 font-mono text-meta text-muted flex flex-wrap gap-x-2 gap-y-1">
              <a className="prose-link" href={`mailto:${site.email}`}>Email</a>
              <span aria-hidden="true">·</span>
              <a className="prose-link" href={site.links.github}>GitHub</a>
              <span aria-hidden="true">·</span>
              <a className="prose-link" href={site.links.huggingface}>Hugging Face</a>
              <span aria-hidden="true">·</span>
              <a className="prose-link" href={site.links.linkedin}>LinkedIn</a>
            </p>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <Section id="work" title="Selected work" note={String(projectCount).padStart(2, "0")} className="mt-24 md:mt-32">
        {projectGroups.map((group) => (
          <div key={group.id} className="mt-12 first:mt-2">
            <p className="font-mono text-label text-text pb-3">
              {group.label}
            </p>
            <ul>
              {group.projects.map((p) => (
                <ProjectRow key={p.title} project={p} />
              ))}
            </ul>
          </div>
        ))}
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience" className="mt-24">
        <ul>
          {roles.map((r) => (
            <RoleRow key={`${r.org}-${r.from}`} role={r} />
          ))}
          <li className="row rail-grid">
            <p className="font-mono text-meta text-muted whitespace-nowrap">
              {education.from}&thinsp;–&thinsp;{education.to}
            </p>
            <div className="col-main">
              <h3 className="text-lead text-text">
                {education.title}
                <span className="text-muted"> · </span>
                {education.org}
              </h3>
            </div>
          </li>
        </ul>
      </Section>

      {/* Notes */}
      <Section id="notes" title="Notes" note="OpenPecha forum" className="mt-24">
        <ul>
          {notes.map((n) => (
            <NoteRow key={n.href} note={n} />
          ))}
        </ul>
      </Section>

      {/* About */}
      <Section id="about" title="About" className="mt-24">
        <div className="rail-grid">
          <div className="col-main space-y-4 text-text-2 max-w-[34rem]">
            <p>
              I went to Tibetan Children&apos;s Village School in Selakui, then studied for a
              B.Tech at Guru Gobind Singh Indraprastha University in Delhi. In 2020 I joined
              Esukhia as an intern, archiving Buddhist texts on GitHub, and I&apos;ve worked on
              Buddhist text technology ever since.
            </p>
            <p>
              Most of my code lives in organisation repositories (OpenPecha, OpenPecha-Data,
              Esukhia and Monlam AI) rather than on my own profile. I presented at Monlam AI&apos;s
              Monlam Manifest launches in 2023 and 2024.
            </p>
            <p>
              Outside work I build apps and websites with friends under{" "}
              <a href={site.links.projectMira} className="prose-link">
                ProjectMira
              </a>
              . I volunteered at the Tibetan Cancer Society&apos;s health camp in Ladakh in 2022,
              and I&apos;m a member of the Regional Tibetan Youth Congress. I speak Tibetan, Hindi
              and English.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
