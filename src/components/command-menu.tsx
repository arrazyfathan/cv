"use client";

import * as React from "react";
import { Command, Copy, Moon, Printer } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { RESUME_DATA } from "@/data/resume-data";

interface Props {
  links: { url: string; title: string }[];
}

export const CommandMenu = ({ links }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [isMac, setIsMac] = React.useState(true);

  React.useEffect(() => {
    setIsMac(window.navigator.userAgent.indexOf("Mac") > -1);
  }, []);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "j" || e.key === "k") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      sessionStorage.setItem("cv-theme", isDark ? "dark" : "light");
    } catch {
      // Ignore storage errors.
    }
  };

  const shortcut = isMac ? "⌘J" : "Ctrl+J";

  return (
    <>
      <footer className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--line)] pt-6 font-mono text-[12px] text-[var(--muted)] print:hidden">
        <span>
          {RESUME_DATA.name} · {RESUME_DATA.location}
        </span>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => window.print()}
            className="transition-colors hover:text-[var(--ink)]"
          >
            Print PDF
          </button>
          <span aria-hidden="true" className="text-[var(--quiet)]">
            ·
          </span>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--ink)]"
          >
            <Command className="size-3" aria-hidden="true" />
            <span>Menu</span>
            <kbd className="rounded border border-[var(--line-strong)] bg-[var(--sunken)] px-1.5 py-0.5 text-[10.5px] font-medium text-[var(--ink-2)]">
              {shortcut}
            </kbd>
          </button>
        </div>
      </footer>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search actions or links..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem
              onSelect={() => {
                setOpen(false);
                window.setTimeout(() => window.print(), 100);
              }}
            >
              <Printer className="mr-2 size-4" aria-hidden="true" />
              <span>Print / Save as PDF</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setOpen(false);
                navigator.clipboard?.writeText(RESUME_DATA.contact.email);
              }}
            >
              <Copy className="mr-2 size-4" aria-hidden="true" />
              <span>Copy email ({RESUME_DATA.contact.email})</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setOpen(false);
                toggleTheme();
              }}
            >
              <Moon className="mr-2 size-4" aria-hidden="true" />
              <span>Toggle light / dark paper</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Links">
            {links.map(({ url, title }) => (
              <CommandItem
                key={url}
                onSelect={() => {
                  setOpen(false);
                  window.open(url, "_blank", "noopener,noreferrer");
                }}
              >
                <span>{title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};
