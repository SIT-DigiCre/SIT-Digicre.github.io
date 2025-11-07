import Image from "next/image";
import Link from "next/link";
import { MaterialSymbolsOpenInNew } from "@/components/Icon";

const teams = [
  {
    title: "PG 班",
    image: "/welcome/teams/pg.webp",
    href: "https://digicre.net/about/pg",
  },
  {
    title: "イラスト班",
    image: "/welcome/teams/2dcg.webp",
    href: "https://digicre.net/about/2dcg",
  },
  {
    title: "3DCG 班",
    image: "/welcome/teams/3dcg.webp",
    href: "https://digicre.net/about/3dcg",
  },
  {
    title: "DTM 班",
    image: "/welcome/teams/dtm.webp",
    href: "https://digicre.net/about/dtm",
  },
  {
    title: "Movie 班",
    image: "/welcome/teams/movie.webp",
    href: "https://digicre.net/about/movie",
  },
  {
    title: "VTuber 班",
    image: "/welcome/teams/v-tuber.webp",
    href: "https://www.youtube.com/channel/UCgh1tbd7SC4qv9A6RffbB0g",
  },
  {
    title: "文字書き班",
    image: "/welcome/teams/writing.webp",
    href: undefined,
  },
];

export default function TeamsSection() {
  return (
    <div className="teams bg-white p-8 text-black" id="teams">
      <h2 className="mb-8 text-2xl font-bold leading-tight tracking-normal [font-feature-settings:'palt'] md:text-3xl">
        班紹介
      </h2>

      <div className="teams__content mb-8 space-y-2 leading-[1.5]">
        <p>
          デジクリにおける「<strong>班</strong>」とは、「<strong>自分の興味分野</strong>」という意味合いです。同じ班（興味分野）のメンバー同士で交流したり、作品を創ったりします。
        </p>
      </div>

      <div className="teams__wrapper grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {teams.map((team) => (
          <article key={team.title} className="teams__card relative aspect-video overflow-hidden rounded-2xl bg-black text-white">
            {team.href ? (
              <Link
                href={team.href}
                rel="noopener noreferrer"
                target="_blank"
                className="absolute inset-0"
              >
                <Image
                  src={team.image}
                  alt=""
                  width={256}
                  height={144}
                  className="teams__card-image absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <h3 className="absolute bottom-0 left-0 right-0 flex items-center gap-2 rounded-tr-2xl bg-black/50 p-4 text-xl font-bold leading-tight backdrop-blur-sm [font-feature-settings:'palt']">
                  {team.title}
                  <MaterialSymbolsOpenInNew className="h-4 w-4" />
                </h3>
              </Link>
            ) : (
              <>
                <Image
                  src={team.image}
                  alt=""
                  width={256}
                  height={144}
                  className="teams__card-image absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <h3 className="absolute bottom-0 left-0 right-0 flex items-center gap-2 rounded-tr-2xl bg-black/50 p-4 text-xl font-bold leading-tight backdrop-blur-sm [font-feature-settings:'palt']">
                  {team.title}
                </h3>
              </>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

