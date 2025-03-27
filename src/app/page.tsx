import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { WorkExperience } from "./components/WorkExperience";
import { Projects } from "./components/Projects";
import { Education } from "./components/Education";
import { Summary } from "./components/Summary";
import { Skills } from "./components/Skills";
import { Header } from "./components/Header";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://arrazyfathan.com"),
  title: `${RESUME_DATA.name} - Resume`,
  description: RESUME_DATA.description,
  verification: {
    other: {
      "msvalidate.01": "EBE6268A6D5FBD80B417C927D6DDA565",
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },
  openGraph: {
    title: `${RESUME_DATA.name} - Resume`,
    description: RESUME_DATA.about,
    type: "profile",
    locale: "id_ID",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: `${RESUME_DATA.name}'s profile picture`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${RESUME_DATA.name} - Resume`,
    description: RESUME_DATA.about,
    images: ["/opengraph-image.png"],
  },
  keywords: [
    "arrazy",
    "arrazyfathan",
    "ar razy",
    "ar razy fathan rabbani",
    "fathan",
    " ar razy fathan",
  ],
};

/**
 * Transform social links for command menu
 */
function getCommandMenuLinks() {
  const links = [];

  if (RESUME_DATA.personalWebsiteUrl) {
    links.push({
      url: RESUME_DATA.personalWebsiteUrl,
      title: "Personal Website",
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
        className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-11 md:p-16"
        id="main-content"
      >
        <div className="sr-only">
          <h1>{RESUME_DATA.name}&apos;s Resume</h1>
        </div>

        <section
          className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4"
          aria-label="Resume Content"
        >
          <Header />

          <div className="space-y-8 print:space-y-4">
            <Summary summary={RESUME_DATA.summary} />

            <WorkExperience work={RESUME_DATA.work} />

            <Education education={RESUME_DATA.education} />

            <Skills skills={RESUME_DATA.skills} />

            <Projects projects={RESUME_DATA.projects} />
          </div>
        </section>

        <nav className="print:hidden" aria-label="Quick navigation">
          <CommandMenu links={getCommandMenuLinks()} />
        </nav>
      </main>
    </>
  );
}
