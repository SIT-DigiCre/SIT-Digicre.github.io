import {
  DigicreLogo,
  MaterialSymbolsArticle,
  MaterialSymbolsInfo,
  MaterialSymbolsLogin,
  MaterialSymbolsMail,
  MaterialSymbolsOpenInNew,
  MaterialSymbolsSchool,
  SimpleIconsGithub,
  SimpleIconsX,
  SimpleIconsYoutube,
} from "@/components/Icon";
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

const menuList = [
  {
    icon: (
      <SimpleIconsX
        className="h-[1.5rem] w-[1.5rem]"
        aria-hidden
      />
    ),
    title: "Twitter / X",
    href: "https://twitter.com/sitdigicre",
  },
  {
    icon: (
      <SimpleIconsYoutube
        className="h-[1.5rem] w-[1.5rem]"
        aria-hidden
      />
    ),
    title: "YouTube",
    href: "https://www.youtube.com/@sitdigicre",
  },
  {
    icon: (
      <SimpleIconsGithub
        className="h-[1.5rem] w-[1.5rem]"
        aria-hidden
      />
    ),
    title: "GitHub",
    href: "https://github.com/SIT-DigiCre",
  },
  {
    icon: (
      <MaterialSymbolsMail
        className="h-[1.5rem] w-[1.5rem]"
        aria-hidden
      />
    ),
    title: "お問い合わせ",
    href: "mailto:contact@digicre.net",
  },
  {
    icon: (
      <MaterialSymbolsArticle
        className="h-[1.5rem] w-[1.5rem]"
        aria-hidden
      />
    ),
    title: "デジコアブログ",
    href: "https://blog.digicre.net/",
  },
  {
    icon: (
      <MaterialSymbolsLogin
        className="h-[1.5rem] w-[1.5rem]"
        aria-hidden
      />
    ),
    title: "デジコア",
    href: "https://core3.digicre.net/",
  },
  {
    icon: (
      <MaterialSymbolsInfo
        className="h-[1.5rem] w-[1.5rem]"
        aria-hidden
      />
    ),
    title: "入部希望の方へ",
    href: "https://digicre.net/welcome/",
  },
  {
    icon: (
      <MaterialSymbolsSchool
        className="h-[1.5rem] w-[1.5rem]"
        aria-hidden
      />
    ),
    title: "芝浦工業大学",
    href: "https://www.shibaura-it.ac.jp/",
  },
];

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

        <footer className="bg-blue">
          <div className="container">
            <nav className="flex flex-col items-center gap-y-[32px] md:gap-y-[64px]">
              <DigicreLogo className="logo" />

              <ul className="border-gray bg-gray grid w-full grid-cols-1 gap-[2px] overflow-hidden rounded-2xl border-2 border-solid md:grid-cols-2 xl:grid-cols-4">
                {menuList.map((item) => (
                  <li
                    key={item.title}
                    className="linkBox hStack bg-white p-[16px]"
                  >
                    {item.icon}
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="linkOverlay grow"
                    >
                      {item.title}
                    </a>
                    <MaterialSymbolsOpenInNew />
                  </li>
                ))}
              </ul>
            </nav>

            <p className="text-center text-white">
              <small className="text-base text-nowrap">
                © {`2004-${new Date().getFullYear()}`} <wbr />
                芝浦工業大学 デジクリ
              </small>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
