import { RESUME_DATA } from "@/data/resume-data";
import { Section } from "@/components/ui/section";

interface SummaryProps {
  summary: typeof RESUME_DATA.summary;
  className?: string;
}

export function Summary({ summary, className }: SummaryProps) {
  return (
    <Section
      className={className}
      style={{ animationDelay: "50ms" }}
    >
      <h2
        className="font-serif text-[16px] font-normal italic text-[var(--muted)] print:text-[12.5px]"
        id="about-section"
      >
        Summary
      </h2>
      <p
        className="text-justify text-[15px] leading-[1.72] text-[var(--ink-2)] print:text-[11px] print:leading-[1.55]"
        aria-labelledby="about-section"
      >
        {summary}
      </p>
    </Section>
  );
}
