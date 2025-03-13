import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";

type ProgrammingLanguage = readonly string[];

interface ProgrammingLanguagesListProps {
  programmingLanguages: ProgrammingLanguage;
  className?: string;
}

/**
 * Renders a list of skills as badges
 */
function ProgrammingLanguageList({ programmingLanguages, className }: ProgrammingLanguagesListProps) {
  return (
    <ul
      className={cn("flex list-none flex-wrap gap-1 p-0", className)}
      aria-label="List of skills"
    >
      {programmingLanguages.map((programmingLanguage) => (
        <li key={programmingLanguage}>
          <Badge className="print:text-[10px]" aria-label={`Skill: ${programmingLanguage}`}>
            {programmingLanguage}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface ProgrammingLanguagesProps {
  programmingLanguage: ProgrammingLanguage;
  className?: string;
}

/**
 * Skills section component
 * Displays a list of professional skills as badges
 */
export function ProgrammingLanguages({ programmingLanguage, className }: ProgrammingLanguagesProps) {
  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="skills-section">
        Programming Languages
      </h2>
      <ProgrammingLanguageList programmingLanguages={programmingLanguage} aria-labelledby="skills-section" />
    </Section>
  );
}
