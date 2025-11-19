import type { Metadata } from "next";
import AboutSection from "./_components/AboutSection";
import FaqSection from "./_components/FaqSection";
import Hero from "./_components/Hero";
import JoinSection from "./_components/JoinSection";
import TeamsSection from "./_components/TeamsSection";

export const metadata: Metadata = {
  title: "デジクリの紹介 - 芝浦工業大学 デジクリ",
  description:
    "創作活動をしたい方は必見！　芝浦工業大学のサークル「デジクリ」をご紹介します。",
  openGraph: {
    title: "デジクリの紹介 - 芝浦工業大学 デジクリ",
    description:
      "創作活動をしたい方は必見！　芝浦工業大学のサークル「デジクリ」をご紹介します。",
    type: "website",
    url: "https://digicre.net/welcome/",
    siteName: "デジクリの紹介 - 芝浦工業大学 デジクリ",
    locale: "ja",
    images: [
      {
        url: "/welcome/ogp.png",
        width: 1200,
        height: 630,
        alt: "デジクリの紹介",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function WelcomePage() {
  return (
    <main className="flex-grow">
      <Hero />
      <AboutSection />
      <TeamsSection />
      <FaqSection />
      <JoinSection />
    </main>
  );
}
