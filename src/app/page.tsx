import { Metadata } from "next";
import Script from "next/script";

import { CommandMenu } from "@/components/command-menu";
import { RESUME_DATA } from "@/data/resume-data";
import { Education } from "./components/Education";
import { Header } from "./components/Header";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Summary } from "./components/Summary";
import { UtilityBar } from "./components/UtilityBar";
import { WorkExperience } from "./components/WorkExperience";

export const metadata: Metadata = {
  metadataBase: new URL("https://cv.arrazyfathan.com"),
  title: `${RESUME_DATA.name} — Resume`,
  description: RESUME_DATA.description,
  authors: [{ name: RESUME_DATA.name, url: RESUME_DATA.personalWebsiteUrl }],
  alternates: {
    canonical: "https://cv.arrazyfathan.com/",
  },
  verification: {
    other: {
      "msvalidate.01": "EBE6268A6D5FBD80B417C927D6DDA565",
    },
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: `${RESUME_DATA.name} — Resume`,
    description: RESUME_DATA.ogDescription,
    url: "https://cv.arrazyfathan.com/",
    siteName: RESUME_DATA.name,
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@arrazyfathann",
    creator: "@arrazyfathann",
    title: `${RESUME_DATA.name} — Resume`,
    description: RESUME_DATA.ogDescription,
  },
  keywords: [
    "Ar Razy Fathan Rabbani",
    "Mobile Engineer",
    "Android Engineer",
    "Kotlin",
    "Jetpack Compose",
    "Flutter",
    "Kotlin Multiplatform",
    "Resume",
    "CV",
  ],
};

function getCommandMenuLinks() {
  const links: { url: string; title: string }[] = [];

  if (RESUME_DATA.personalWebsiteUrl) {
    links.push({
      url: RESUME_DATA.personalWebsiteUrl,
      title: "Personal Website (arrazyfathan.com)",
    });
  }

  return [
    ...links,
    ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
      url: socialMediaLink.url,
      title: socialMediaLink.name,
    })),
  ];
}

export default function ResumePage() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-RJ4100DQ7M"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-RJ4100DQ7M');
        `}
      </Script>

      <main
        className="mx-auto w-full max-w-[740px] px-5 pb-16 pt-6 sm:px-8 sm:pt-10 print:max-w-none print:px-0 print:py-0"
        id="main-content"
      >
        <UtilityBar />

        <div
          className="space-y-8 print:space-y-4"
          aria-label="Resume Content"
        >
          <Header />
          <Summary summary={RESUME_DATA.summary} />
          <WorkExperience work={RESUME_DATA.work} />
          <Projects projects={RESUME_DATA.projects} />
          <Skills skills={RESUME_DATA.skills} />
          <Education education={RESUME_DATA.education} />
        </div>

        <CommandMenu links={getCommandMenuLinks()} />
      </main>
    </>
  );
}
