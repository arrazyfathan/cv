import { cn } from "@/lib/utils";
import React from "react";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {}

export function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "cv-stagger flex min-h-0 flex-col gap-y-4 border-t border-[var(--line)] pt-7 print:gap-y-2 print:pt-4",
        className,
      )}
      {...props}
    />
  );
}
