"use client";

import { useState } from "react";
import Link from "next/link";
import {
  DigicreLogo,
  MaterialSymbolsMenu,
  MaterialSymbolsClose,
  MaterialSymbolsInfo,
  MaterialSymbolsGroups,
  MaterialSymbolsHelp,
  MaterialSymbolsOpenInNew,
  SimpleIconsX,
  SimpleIconsYoutube,
  SimpleIconsLine,
  MaterialSymbolsLanguage,
  MaterialSymbolsMail,
} from "@/components/Icon";

const navigationItems = [
  {
    href: "#about-us",
    label: "デジクリとは？",
    icon: MaterialSymbolsInfo,
    type: "toc" as const,
  },
  {
    href: "#teams",
    label: "班紹介",
    icon: MaterialSymbolsGroups,
    type: "toc" as const,
  },
  {
    href: "#faq",
    label: "よくある質問",
    icon: MaterialSymbolsHelp,
    type: "toc" as const,
  },
  {
    href: "https://forms.gle/cY25Kc6fssqv2tZz9",
    label: "入部受付",
    icon: MaterialSymbolsOpenInNew,
    type: "external" as const,
    isJoinUs: true,
  },
];

const socialLinks = [
  {
    href: "https://twitter.com/sitdigicre",
    label: "X (Twitter)",
    icon: SimpleIconsX,
  },
  {
    href: "https://www.youtube.com/@sitdigicre",
    label: "YouTube",
    icon: SimpleIconsYoutube,
  },
  // {
  //   href: "https://line.me/ti/g2/UfhEOyteJRjyQLm-c9Mmhj_9wvIKCBDEohh_WQ",
  //   label: "LINE オープンチャット",
  //   icon: SimpleIconsLine,
  // },
  {
    href: "https://digicre.net",
    label: "ウェブサイト",
    icon: MaterialSymbolsLanguage,
  },
  {
    href: "mailto:contact@digicre.net",
    label: "お問い合わせ",
    icon: MaterialSymbolsMail,
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <input
        type="checkbox"
        name="toggle"
        id="header-toggle"
        className="hidden"
        checked={isOpen}
        onChange={handleToggle}
      />

      <label
        htmlFor="header-toggle"
        className={`header__toggle-button header__toggle-button--open ${!isOpen ? "block" : "hidden"}`}
        aria-label="メニューを開く"
      >
        <MaterialSymbolsMenu className="block h-8 w-8 text-white" />
      </label>

      <div className={`header__wrapper ${isOpen ? "block" : "hidden lg:flex"}`}>
        <label
          htmlFor="header-toggle"
          className="header__toggle-button header__toggle-button--close"
          aria-label="メニューを閉じる"
        >
          <MaterialSymbolsClose className="block h-8 w-8 text-white" />
        </label>

        <Link
          href="/welcome"
          className="logo mx-auto block"
          aria-label="デジクリ"
          onClick={handleLinkClick}
        >
          <DigicreLogo className="h-12 w-[176px] text-white" />
        </Link>

        <nav className="menu">
          <ul>
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isToc = item.type === "toc";
              const isJoinUs = item.isJoinUs;

              if (isToc) {
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="menu__item"
                      onClick={handleLinkClick}
                    >
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </a>
                  </li>
                );
              }

              if (isJoinUs) {
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="menu__item menu__item--join-us"
                      onClick={handleLinkClick}
                    >
                      {item.label}
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                );
              }

              return null;
            })}
          </ul>
        </nav>

        <nav className="menu">
          <ul>
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="menu__item"
                    onClick={handleLinkClick}
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                    <MaterialSymbolsOpenInNew className="ml-auto h-4 w-4" />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
