import { DigicreLogo, MaterialSymbolsOpenInNew } from "@/components/Icon";
import Markdown from "react-markdown";
import Gallery from "./_components/Gallery";
import type { Metadata } from "next";

const contents = [
  {
    title: "デジクリとは",
    body: [
      "デジクリは、芝浦工業大学に所属するデジタルクリエーションサークルです。ゲーム制作をはじめ、アプリケーション開発などのプログラミング、イラスト制作、3Dモデリング、音楽制作、動画制作、VTuber活動など、さまざまなデジタルコンテンツの創作活動を行なっています。",
      "",
      "おもにPG班、イラスト班、3DCG班、DTM班、Movie班、SysDev班、VTuber班の7つに分かれており、協力して作品を作っています。班に所属することで活動が制限されることはないので、複数の班に所属している部員も多く、自由に創作活動をしています。詳細については新入生向けサイトをご覧ください。",
      "",
      "基本的に、企画を立てる → 制作する → 発表する、という流れで活動しています。",
    ].join("\n"),
  },
  {
    title: "活動理念",
    body: [
      "1. より良い作品を作れるように日々努力し",
      "2. 自分の作品の発表をすることで、プレゼン能力を高め",
      "3. 楽しく、他人にとって魅力ある作品を作れるように励むこと",
    ].join("\n"),
  },
  {
    title: "活動内容",
    body: [
      "毎週月曜日に定例会を開催して集まっています。ここでは作品の進捗を話したり、好きなものを布教する講座やLT（Lightning Talks : 短いプレゼンテーション）を行ったりしています。学校で活動できない期間はclusterというSNSを使い、バーチャル空間で集まっていました。",
      "",
      "普段は、一緒にわいわいゲームをしたり、お題に沿って制作したものをそれぞれ評価して技術を高めたりしています。",
      "",
      "### ① 企画作成・発表",
      "",
      "1年間で前期と後期の2回に分けて行なっています。まずはじめに、企画発表でやりたいことを発信して、メンバーを募集します。そして協力して制作し、中間発表を経て、最終発表で成果を披露します。個人で制作したものを発表する部員も多くいます。",
      "",
      "### ② 合宿",
      "8月に夏合宿、2月に冬合宿を行なっています。合宿中には様々な講座が行われ、技術を向上させたり、交流を深めたりすることができます。コロナ禍の2020～2022年度はオンラインで開催しました。",
    ].join("\n"),
  },
];
const menu = [
  {
    title: "お知らせ (Twitter / X)",
    href: "https://twitter.com/sitdigicre",
  },
  {
    title: "入部希望の方へ",
    href: "https://digicre.net/welcome/",
  },
];

export const metadata: Metadata = {
  alternates: {
    canonical: "https://digicre.net/",
  },
};

export default function Home() {
  return (
    <main className="bg-sky">
      <div className="container">
        <section className="flex flex-col items-center gap-y-[32px] md:gap-y-[64px]">
          <DigicreLogo className="logo" />

          <Gallery />
        </section>

        <section className="grid grid-cols-1 gap-[16px] md:grid-cols-2 md:gap-[32px]">
          {contents.map((item) => (
            <article
              key={item.title}
              className="card px-[16px] py-[32px]"
            >
              <h2>{item.title}</h2>
              <Markdown>{item.body}</Markdown>
            </article>
          ))}

          {/* <article className="card px-[16px] py-[32px]">
            <h2>おもちゃ箱</h2>
            <p>リロードするたびにランダムにコンテンツが切り替わります。</p>
            <div className="aspect-video bg-gray" />
          </article> */}
        </section>

        <nav>
          <ul className="grid grid-cols-1 gap-[16px] md:grid-cols-2 md:gap-[32px]">
            {menu.map((item) => (
              <li
                key={item.title}
                className="linkBox hStack button"
              >
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
      </div>
    </main>
  );
}
