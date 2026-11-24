import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";

type SkillsData = typeof RESUME_DATA.skills;

interface SkillRowProps {
  label: string;
  items: readonly string[];
}

function SkillRow({ label, items }: SkillRowProps) {
  return (
    <div className="cv-avoid-break grid grid-cols-1 gap-y-2 sm:grid-cols-[116px_1fr] sm:items-start sm:gap-x-5 print:grid-cols-[96px_1fr] print:gap-x-4">
      <h3 className="font-mono text-[12px] font-medium text-[var(--muted)] sm:pt-1 print:pt-0.5 print:text-[10px]">
        {label}
      </h3>
      <ul
        className="flex flex-wrap gap-1.5 print:gap-1"
        aria-label={`${label} skills`}
      >
        {items.map((skill) => (
          <li
            key={skill}
            className="rounded-md border border-[var(--line)] bg-[var(--sunken)] px-2.5 py-0.5 text-[12.5px] font-medium text-[var(--ink-2)] transition-colors hover:border-[var(--line-strong)] hover:text-[var(--ink)] print:px-1.5 print:py-0 print:text-[9.5px]"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

interface SkillsProps {
  skills: SkillsData;
  className?: string;
}

export function Skills({ skills, className }: SkillsProps) {
  return (
    <Section className={className} style={{ animationDelay: "200ms" }}>
      <h2
        className="font-serif text-[16px] font-normal italic text-[var(--muted)] print:text-[12.5px]"
        id="skills-section"
      >
        Skills
      </h2>
      <div className="space-y-4 print:space-y-2" aria-labelledby="skills-section">
        <SkillRow label="Languages" items={skills.programmingLanguages} />
        <SkillRow label="Mobile" items={skills.mobile} />
        <SkillRow label="Tools" items={skills.toolbox} />
      </div>
    </Section>
  );
}
