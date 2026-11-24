import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Gabarito, Geist, Geist_Mono, Newsreader } from "next/font/google";
import React from "react";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cv.arrazyfathan.com"),
};

const gabarito = Gabarito({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-serif",
  display: "swap",
});

const themeInitScript = `
(function () {
  try {
    var saved = sessionStorage.getItem('cv-theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${gabarito.variable} ${geist.variable} ${geistMono.variable} ${newsreader.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        className="min-h-screen bg-[var(--bg)] font-sans text-[var(--ink)] antialiased selection:bg-[var(--accent)] selection:text-white print:bg-white print:text-[#17150F]"
        suppressHydrationWarning
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
