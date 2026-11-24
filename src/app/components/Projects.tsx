import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";

type ProjectItem = (typeof RESUME_DATA)["projects"][number];

function ProjectRow({ project }: { project: ProjectItem }) {
  const href = project.link?.href;
  const label = project.link?.label;

  return (
    <article className="cv-avoid-break border-b border-[var(--line)] py-4 first:pt-0 last:border-b-0 last:pb-0 print:py-2.5">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-display text-[17px] font-bold tracking-[-0.01em] text-[var(--ink)] print:text-[12.5px]">
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 transition-colors hover:text-[var(--accent)]"
              aria-label={`${project.title} (${label})`}
            >
              <span>{project.title}</span>
              <ArrowUpRight
                className="size-3.5 text-[var(--quiet)] transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)] print:hidden"
                aria-hidden="true"
              />
            </a>
          ) : (
            <span>{project.title}</span>
          )}
        </h3>

        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11.5px] text-[var(--muted)] transition-colors hover:text-[var(--accent)] print:text-[9.5px]"
          >
            {label}
          </a>
        ) : (
          label && (
            <span className="font-mono text-[11px] text-[var(--quiet)] print:text-[9.5px]">
              {label}
            </span>
          )
        )}
      </div>

      <p className="mt-1.5 text-pretty text-[14px] leading-[1.62] text-[var(--ink-2)] print:mt-0.5 print:text-[10.5px] print:leading-[1.45]">
        {project.description}
      </p>

      {project.techStack.length > 0 && (
        <ul
          className="mt-2.5 flex flex-wrap gap-1.5 print:mt-1.5"
          aria-label="Technologies used"
        >
          {project.techStack.map((tag) => (
            <li
              key={tag}
              className="rounded-md border border-[var(--line)] bg-[var(--sunken)] px-2 py-0.5 font-mono text-[11px] text-[var(--muted)] print:px-1.5 print:py-0 print:text-[8.5px]"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

interface ProjectsProps {
  projects: (typeof RESUME_DATA)["projects"];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <Section style={{ animationDelay: "150ms" }}>
      <h2
        className="font-serif text-[16px] font-normal italic text-[var(--muted)] print:text-[12.5px]"
        id="selected-projects"
      >
        Selected Projects
      </h2>
      <div aria-labelledby="selected-projects">
        {projects.map((project) => (
          <ProjectRow key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
