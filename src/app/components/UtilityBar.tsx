"use client";

import * as React from "react";
import { ArrowLeft, Moon, Printer, Sun } from "lucide-react";
import { RESUME_DATA } from "@/data/resume-data";

export function UtilityBar() {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = React.useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      try {
        sessionStorage.setItem("cv-theme", next ? "dark" : "light");
      } catch {
        // Ignore storage errors in restricted contexts.
      }
      return next;
    });
  }, []);

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        e.metaKey ||
        e.ctrlKey ||
        e.altKey ||
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable
      ) {
        return;
      }
      if (e.key === "d" || e.key === "D") {
        e.preventDefault();
        toggleTheme();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [toggleTheme]);

  return (
    <nav
      aria-label="Resume utilities"
      className="mb-10 flex items-center justify-between gap-4 border-b border-[var(--line)] pb-4 print:hidden"
    >
      <a
        href={RESUME_DATA.personalWebsiteUrl}
        className="group inline-flex items-center gap-1.5 font-mono text-[12.5px] text-[var(--muted)] transition-colors hover:text-[var(--ink)]"
      >
        <ArrowLeft
          className="size-3.5 transition-transform duration-200 ease-out group-hover:-translate-x-0.5"
          aria-hidden="true"
        />
        <span>arrazyfathan.com</span>
      </a>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => window.print()}
          className="cv-press inline-flex items-center gap-1.5 rounded-full border border-[var(--line-strong)] bg-[var(--surface)] px-3 py-1.5 font-mono text-[12px] font-medium text-[var(--ink)] hover:border-[var(--ink)]/30 hover:bg-[var(--sunken)]"
          aria-label="Print or save resume as PDF"
        >
          <Printer className="size-3.5 text-[var(--muted)]" aria-hidden="true" />
          <span>Print PDF</span>
        </button>

        <button
          type="button"
          onClick={toggleTheme}
          className="cv-press inline-flex size-8 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] hover:border-[var(--line-strong)] hover:text-[var(--ink)]"
          aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          title={isDark ? "Light mode (D)" : "Dark mode (D)"}
        >
          {isDark ? (
            <Sun className="size-3.5" aria-hidden="true" />
          ) : (
            <Moon className="size-3.5" aria-hidden="true" />
          )}
        </button>
      </div>
    </nav>
  );
}
