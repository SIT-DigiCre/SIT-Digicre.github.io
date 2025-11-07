import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const notoSansJp = Noto_Sans_JP({
  subsets: ["vietnamese"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://digicre.net/"),
  title: "芝浦工業大学 デジクリ",
  description: "芝浦工業大学の公認サークル『デジクリ』の Web サイトです。",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://digicre.net/",
    title: "芝浦工業大学 デジクリ",
    siteName: "芝浦工業大学 デジクリ",
    description: "芝浦工業大学の公認サークル『デジクリ』の Web サイトです。",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "デジクリ Digital Creation Circle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sitdigicre",
    creator: "@sitdigicre",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <GoogleAnalytics gaId="G-5GLTJ9X6XX" />
      <body className={`${notoSansJp.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
