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

export default function Footer() {
  return (
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
  );
}
