import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import MotionProvider from "@/components/MotionProvider";
import "./globals.css";
import Backdrop from "@/components/Backdrop";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { education, experience, profile, socials } from "@/data/resume";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://tulshidas39.github.io";
const description = `${profile.role} in ${profile.location} building cross-platform desktop apps in Electron.js and TypeScript, backed by 6+ years of enterprise .NET, AWS and Azure platform work.`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description,
  keywords: [
    profile.name,
    "Electron.js developer",
    "cross-platform desktop apps",
    "TypeScript",
    "Node.js",
    ".NET developer",
    "ASP.NET Core",
    "C#",
    "software engineer Bangladesh",
    "full stack developer",
    "Azure",
    "AWS",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: `${profile.name} — Portfolio`,
    title: `${profile.name} — ${profile.role}`,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description,
  },
  // The site is deliberately kept out of search results. This emits
  // <meta name="robots" content="noindex, nofollow"> alongside the
  // Disallow rules in app/robots.ts.
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#07070b",
  colorScheme: "dark",
};

/** schema.org Person markup so search engines read the CV correctly. */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  sameAs: [socials.github, socials.linkedin],
  worksFor: { "@type": "Organization", name: experience[0].company },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: education.school,
    url: education.link,
  },
  description: profile.summary,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          // Static, author-controlled JSON — safe to inline.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />

        {/*
          Scroll-reveal animations render as inline `opacity:0` in the static
          HTML. Without JavaScript nothing would ever reveal them, so force
          every animated element visible when scripting is off.
        */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<style>[style*="opacity:0"]{opacity:1!important;transform:none!important}</style>`,
          }}
        />

        <a
          href="#about"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:font-display focus:text-sm focus:font-semibold focus:text-ink-950"
        >
          Skip to content
        </a>

        <MotionProvider>
          <Backdrop />
          <Nav />
          <main>{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
