import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";

type SkillsData = typeof RESUME_DATA.skills;

interface SkillsListProps {
  skills: readonly string[];
  className?: string;
}

/**
 * Renders a list of skills as badges
 */
function SkillsList({ skills, className }: SkillsListProps) {
  return (
    <ul
      className={cn("flex list-none flex-wrap gap-1 p-0", className)}
      aria-label="List of skills"
    >
      {skills.map((skill) => (
        <li key={skill}>
          <Badge className="print:text-[10px]" aria-label={`Skill: ${skill}`}>
            {skill}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface SkillsProps {
  skills: SkillsData;
  className?: string;
}

/**
 * Skills section component
 * Displays a list of professional skills as badges
 */
export function Skills({ skills, className }: SkillsProps) {
  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="skills-section">
        Skills
      </h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-normal mb-2">Programming Languages :</h3>
          <SkillsList skills={skills.programmingLanguages} />
        </div>
        <div>
          <h3 className="text-sm font-normal mb-2">Mobile :</h3>
          <SkillsList skills={skills.mobile} />
        </div>
        <div>
          <h3 className="text-sm font-normal mb-2">Toolbox :</h3>
          <SkillsList skills={skills.toolbox} />
        </div>
      </div>
    </Section>
  );
}
