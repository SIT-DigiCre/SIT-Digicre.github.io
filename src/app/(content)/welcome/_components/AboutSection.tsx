import Image from "next/image";
import Link from "next/link";
import { MaterialSymbolsOpenInNew } from "@/components/Icon";

export default function AboutSection() {
  return (
    <div className="grid md:grid-cols-[3fr_1fr]" id="about-us">
      <article className="bg-[#00b0f0] p-8 text-white">
        <h2 className="mb-8 text-2xl leading-tight font-bold tracking-normal [font-feature-settings:'palt'] md:text-3xl">
          デジクリとは？
        </h2>

        <div className="space-y-2 leading-[1.5]">
          <p>
            「<strong>デジクリ</strong>」は、
            <Link
              href="https://www.shibaura-it.ac.jp/"
              rel="noopener noreferrer"
              target="_blank"
              className="font-bold text-inherit hover:underline"
            >
              芝浦工業大学
              <MaterialSymbolsOpenInNew className="relative top-0.5 inline-block h-4 w-4" />
            </Link>
            の文化系サークルです。
          </p>
          <p>
            プログラミング、ゲーム開発、イラスト、3DCG、音楽（DTM）、動画制作、VTuber
            など、<strong>幅広いジャンルでデジタルコンテンツの制作</strong>
            ができます。
          </p>
          <p>少しでも気になった方は、ぜひこのページを最後までご覧ください！</p>
        </div>
      </article>

      <Image
        src="/welcome/about-us.webp"
        alt=""
        width={320}
        height={240}
        className="h-full w-full bg-[#404040] object-cover"
        loading="lazy"
      />
    </div>
  );
}
