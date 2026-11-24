import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";

type EducationItemData = (typeof RESUME_DATA)["education"][number];

interface EducationListProps {
  education: readonly EducationItemData[];
}

export function Education({ education }: EducationListProps) {
  return (
    <Section style={{ animationDelay: "250ms" }}>
      <h2
        className="font-serif text-[16px] font-normal italic text-[var(--muted)] print:text-[12.5px]"
        id="education-section"
      >
        Education
      </h2>
      <div className="space-y-4 print:space-y-2" aria-labelledby="education-section">
        {education.map((item) => (
          <article key={item.school} className="cv-avoid-break space-y-1">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
              <h3 className="font-display text-[17.5px] font-bold tracking-[-0.015em] text-[var(--ink)] print:text-[13px]">
                {item.school}
              </h3>
              <span
                className="font-mono text-[12.5px] tabular-nums text-[var(--muted)] print:text-[10.5px]"
                aria-label={`Period: ${item.start} to ${item.end}`}
              >
                {item.start} — {item.end}
              </span>
            </div>
            <p className="text-[14.5px] text-[var(--ink-2)] print:text-[11px]">
              {item.degree}
              {item.gpa && (
                <span className="font-mono text-[12.5px] text-[var(--muted)] print:text-[10px]">
                  {" "}
                  · GPA {item.gpa}
                </span>
              )}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
