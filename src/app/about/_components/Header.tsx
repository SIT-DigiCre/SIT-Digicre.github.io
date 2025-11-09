"use client";

import { useState } from "react";
import Link from "next/link";
import {
  DigicreLogo,
  MaterialSymbolsMenu,
  MaterialSymbolsClose,
  MaterialSymbolsOpenInNew,
  SimpleIconsX,
  SimpleIconsYoutube,
  MaterialSymbolsLanguage,
  MaterialSymbolsMail,
} from "@/components/Icon";

type NavigationItem = {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

type HeaderProps = {
  navigationItems: NavigationItem[];
};

const socialLinks = [
  {
    href: "https://x.com/sitdigicre",
    label: "X (Twitter)",
    icon: SimpleIconsX,
  },
  {
    href: "https://www.youtube.com/@sitdigicre",
    label: "YouTube",
    icon: SimpleIconsYoutube,
  },
  {
    href: "/",
    label: "ウェブサイト",
    icon: MaterialSymbolsLanguage,
  },
  {
    href: "mailto:contact@digicre.net",
    label: "お問い合わせ",
    icon: MaterialSymbolsMail,
  },
];

export default function Header({ navigationItems }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="relative">
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
        className={`fixed top-0 left-0 z-10 cursor-pointer rounded-br-[16px] bg-[#00b0f0] p-4 shadow-[0_2px_8px_0_rgba(0,0,0,0.5)] transition-colors duration-300 ease-in-out hover:bg-[#71d9ff] lg:hidden ${!isOpen ? "block" : "hidden"}`}
        aria-label="メニューを開く"
      >
        <MaterialSymbolsMenu className="block h-8 w-8 text-white" />
      </label>

      <div
        className={`fixed top-0 left-0 z-10 flex h-full w-full flex-col gap-8 overflow-y-auto bg-[#202020] px-4 py-16 text-white lg:w-1/4 ${isOpen ? "block" : "hidden lg:flex"}`}
      >
        <label
          htmlFor="header-toggle"
          className="absolute top-0 left-0 z-10 cursor-pointer rounded-br-[16px] bg-[#00b0f0] p-4 shadow-[0_2px_8px_0_rgba(0,0,0,0.5)] transition-colors duration-300 ease-in-out hover:bg-[#71d9ff] lg:hidden"
          aria-label="メニューを閉じる"
        >
          <MaterialSymbolsClose className="block h-8 w-8 text-white" />
        </label>

        <Link
          href="/about"
          className="mx-auto block h-[48px] w-[176px] text-white"
          aria-label="デジクリ"
          onClick={handleLinkClick}
        >
          <DigicreLogo className="h-12 w-[176px] text-white" />
        </Link>

        <nav>
          <ul className="overflow-hidden rounded-2xl bg-[#404040]">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isExternal = item.href.startsWith("http");

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    target={isExternal ? "_blank" : "_self"}
                    className="flex flex-grow items-center gap-4 p-4 hover:bg-[#606060]"
                    onClick={handleLinkClick}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <nav>
          <ul className="overflow-hidden rounded-2xl bg-[#404040]">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    target={link.href.startsWith("http") ? "_blank" : "_self"}
                    className="flex flex-grow items-center gap-4 p-4 hover:bg-[#606060]"
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

