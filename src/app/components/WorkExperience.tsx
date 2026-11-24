import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";

type WorkItem = (typeof RESUME_DATA)["work"][number];

function CompanyTitle({ company, link }: { company: string; link: string }) {
  if (!link) {
    return <span>{company}</span>;
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1 transition-colors hover:text-[var(--accent)]"
      aria-label={`${company} website`}
    >
      <span>{company}</span>
      <ArrowUpRight
        className="size-3.5 text-[var(--quiet)] transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)] print:hidden"
        aria-hidden="true"
      />
    </a>
  );
}

function WorkExperienceItem({ work }: { work: WorkItem }) {
  const {
    company,
    link,
    location,
    badges,
    title,
    start,
    end,
    description,
    highlights,
  } = work;

  return (
    <article className="cv-avoid-break space-y-2.5 print:space-y-1.5">
      <div className="space-y-0.5">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
          <h3 className="font-display text-[18.5px] font-bold tracking-[-0.015em] text-[var(--ink)] print:text-[13.5px]">
            <CompanyTitle company={company} link={link} />
          </h3>
          <span
            className="font-mono text-[12.5px] tabular-nums text-[var(--muted)] print:text-[10.5px]"
            aria-label={`Employment period: ${start} to ${end ?? "Present"}`}
          >
            {start} — {end ?? "Present"}
          </span>
        </div>

        <p className="text-[14px] font-medium text-[var(--ink-2)] print:text-[11px]">
          {title}
          {location && (
            <span className="font-normal text-[var(--muted)]">
              {" "}
              · {location}
            </span>
          )}
        </p>
      </div>

      <p className="text-justify text-[14.5px] leading-[1.68] text-[var(--ink-2)] print:text-[10.5px] print:leading-[1.5]">
        {description}
      </p>

      <ul className="space-y-1.5 pl-4 text-[14px] leading-[1.65] text-[var(--ink-2)] marker:text-[var(--quiet)] list-disc print:space-y-1 print:text-[10.5px] print:leading-[1.45]">
        {highlights.map((bullet) => (
          <li key={bullet} className="pl-1 text-pretty">
            {bullet}
          </li>
        ))}
      </ul>

      {badges.length > 0 && (
        <ul
          className="flex flex-wrap gap-1.5 pt-1 print:pt-0.5"
          aria-label="Primary stack"
        >
          {badges.map((badge) => (
            <li
              key={badge}
              className="rounded-md border border-[var(--line)] bg-[var(--sunken)] px-2 py-0.5 font-mono text-[11px] font-medium text-[var(--muted)] print:px-1.5 print:py-0 print:text-[9px]"
            >
              {badge}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}

interface WorkExperienceProps {
  work: (typeof RESUME_DATA)["work"];
}

export function WorkExperience({ work }: WorkExperienceProps) {
  return (
    <Section style={{ animationDelay: "100ms" }}>
      <h2
        className="font-serif text-[16px] font-normal italic text-[var(--muted)] print:text-[12.5px]"
        id="work-experience"
      >
        Experience
      </h2>
      <div
        className="space-y-8 print:space-y-4"
        aria-labelledby="work-experience"
      >
        {work.map((item) => (
          <WorkExperienceItem
            key={`${item.company}-${item.start}`}
            work={item}
          />
        ))}
      </div>
    </Section>
  );
}
