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
    iconSize: 32,
  },
  {
    href: "https://www.youtube.com/@sitdigicre",
    label: "YouTube",
    icon: SimpleIconsYoutube,
    iconSize: 16,
  },
  {
    href: "https://line.me/ti/g2/UfhEOyteJRjyQLm-c9Mmhj_9wvIKCBDEohh_WQ",
    label: "LINE オープンチャット",
    icon: SimpleIconsLine,
    iconSize: 32,
  },
  {
    href: "https://digicre.net",
    label: "ウェブサイト",
    icon: MaterialSymbolsLanguage,
    iconSize: 16,
  },
  {
    href: "mailto:contact@digicre.net",
    label: "お問い合わせ",
    icon: MaterialSymbolsMail,
    iconSize: 16,
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
    <>
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

      <div
        className={`header__wrapper top-0 left-0 z-10 lg:fixed ${isOpen ? "block" : "hidden lg:flex"}`}
      >
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
          <DigicreLogo className="h-12 w-[176px] text-white md:h-24 md:w-[352px]" />
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
                      className="menu__item menu__item--toc"
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
              const iconClass = link.iconSize === 32 ? "h-8 w-8" : "h-4 w-4";
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="menu__item"
                    onClick={handleLinkClick}
                  >
                    <Icon className={iconClass} />
                    {link.label}
                    <MaterialSymbolsOpenInNew className="ml-auto h-4 w-4" />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
