"use client";

import * as React from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Globe,
  Mail,
  MapPin,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RESUME_DATA } from "@/data/resume-data";

export function Header() {
  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = React.useCallback(async () => {
    try {
      await navigator.clipboard.writeText(RESUME_DATA.contact.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${RESUME_DATA.contact.email}`;
    }
  }, []);

  return (
    <header className="cv-stagger space-y-5 print:space-y-3">
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0 flex-1 space-y-2.5 print:space-y-1.5">
          <h1
            className="font-display text-[30px] font-bold leading-[1.08] tracking-[-0.03em] text-[var(--ink)] sm:text-[36px] print:text-[26px]"
            id="resume-name"
          >
            {RESUME_DATA.name}
          </h1>

          <p
            className="text-[15.5px] font-medium text-[var(--ink-2)] print:text-[13px]"
            aria-labelledby="resume-name"
          >
            {RESUME_DATA.about}
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-0.5 text-[13px] text-[var(--muted)] print:hidden">
            <a
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--ink)]"
              href={RESUME_DATA.locationLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Location: ${RESUME_DATA.location}`}
            >
              <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
              <span>{RESUME_DATA.location}</span>
            </a>

            <span className="inline-flex items-start gap-2 text-[var(--muted)]">
              <span className="cv-status-dot mt-[6.5px]" aria-hidden="true" />
              <span>{RESUME_DATA.availability}</span>
            </span>
          </div>
        </div>

        <Avatar
          className="size-20 shrink-0 rounded-2xl border border-[var(--line-strong)] bg-[var(--sunken)] sm:size-24 print:size-[72px]"
          aria-hidden="true"
        >
          <AvatarImage
            alt={`${RESUME_DATA.name}'s portrait`}
            src={RESUME_DATA.avatarUrl}
            className="object-cover"
          />
          <AvatarFallback className="rounded-2xl font-display text-lg font-bold text-[var(--ink-2)]">
            {RESUME_DATA.initials}
          </AvatarFallback>
        </Avatar>
      </div>

      {/* Screen Contact & Social Links — Minimal Editorial Row */}
      <div
        className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-0.5 text-[13.5px] print:hidden"
        role="list"
        aria-label="Contact and social links"
      >
        <div role="listitem" className="inline-flex items-center gap-1.5">
          <a
            href={`mailto:${RESUME_DATA.contact.email}`}
            className="group inline-flex items-center gap-1.5 text-[var(--ink)] transition-colors hover:text-[var(--accent)]"
          >
            <Mail
              className="size-3.5 text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]"
              aria-hidden="true"
            />
            <span className="font-mono text-[13px] underline decoration-[var(--line-strong)] underline-offset-[5px] transition-colors group-hover:decoration-[var(--accent)]">
              {RESUME_DATA.contact.email}
            </span>
          </a>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="cv-press inline-flex items-center gap-1 rounded px-1 py-0.5 font-mono text-[11.5px] text-[var(--muted)] hover:text-[var(--ink)]"
            aria-label="Copy email address"
            title="Copy email"
          >
            {copied ? (
              <>
                <Check className="size-3 text-[var(--ok)]" aria-hidden="true" />
                <span className="text-[var(--ok)]">Copied</span>
              </>
            ) : (
              <Copy className="size-3" aria-hidden="true" />
            )}
          </button>
        </div>

        <a
          role="listitem"
          href={RESUME_DATA.personalWebsiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-[var(--ink-2)] transition-colors hover:text-[var(--ink)]"
        >
          <Globe
            className="size-3.5 text-[var(--muted)] transition-colors group-hover:text-[var(--ink)]"
            aria-hidden="true"
          />
          <span className="underline decoration-[var(--line-strong)] underline-offset-[5px] transition-colors group-hover:decoration-[var(--ink)]">
            Website
          </span>
          <ArrowUpRight
            className="size-3.5 text-[var(--quiet)] transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--ink)]"
            aria-hidden="true"
          />
        </a>

        {RESUME_DATA.contact.social.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              role="listitem"
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-[var(--ink-2)] transition-colors hover:text-[var(--ink)]"
              aria-label={`${social.name}: ${social.handle}`}
            >
              <Icon
                className="size-3.5 text-[var(--muted)] transition-colors group-hover:text-[var(--ink)]"
                aria-hidden="true"
              />
              <span className="underline decoration-[var(--line-strong)] underline-offset-[5px] transition-colors group-hover:decoration-[var(--ink)]">
                {social.name}
              </span>
              <ArrowUpRight
                className="size-3.5 text-[var(--quiet)] transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--ink)]"
                aria-hidden="true"
              />
            </a>
          );
        })}
      </div>

      {/* Print-Only Compact Contact Line */}
      <div
        className="hidden flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[10.5px] text-[var(--ink-2)] print:flex"
        aria-label="Print contact information"
      >
        <span>{RESUME_DATA.location}</span>
        <span aria-hidden="true">·</span>
        <a href={`mailto:${RESUME_DATA.contact.email}`}>
          {RESUME_DATA.contact.email}
        </a>
        <span aria-hidden="true">·</span>
        <a href={RESUME_DATA.personalWebsiteUrl}>arrazyfathan.com</a>
        <span aria-hidden="true">·</span>
        <a href="https://github.com/arrazyfathan">github.com/arrazyfathan</a>
        <span aria-hidden="true">·</span>
        <a href="https://www.linkedin.com/in/arrazyfathan/">
          linkedin.com/in/arrazyfathan
        </a>
      </div>
    </header>
  );
}
