import type { Metadata } from "next";
import Slider from "../_components/Slider";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "PG班 - デジクリ",
  description: "デジクリのPG班についてのページです。",
  alternates: {
    canonical: "https://digicre.net/about/pg/",
  },
};

export default function PGPage() {
  return (
    <main className="flex-grow">
      <section
        id="home"
        className="bg-sky w-full"
      >
        <Slider
          slides={[
            {
              type: "image",
              src: "/about/img/pg.jpg",
              alt: "",
            },
          ]}
        />
      </section>

      <section id="about">
        <div className="mx-auto px-4 py-16">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold">PG班について</h2>
            <div className="bg-sky mx-auto mb-8 h-1 w-24"></div>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="p-8">
              <p>
                PG班ではプログラミング言語を用いて色々なものを製作しています。
                <br />
                プログラミングというとゲーム開発やスマホアプリ開発などをイメージする人が多いかもしれませんが
                <br />
                他にもWeb開発やマイコンやRaspberryPiなどを用いた開発、機械学習など、様々な分野があります。
                <br />
                活動は個人で作りたい物を作る個人開発と、イラスト班やDTM班を巻き込んで数人数十人で協力して一つのゲームなどを開発する集団開発があります。
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="activity">
        <div className="mx-auto px-4 py-16">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold">開発の例</h2>
            <div className="bg-sky mx-auto mb-8 h-1 w-24"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-black p-6">
              <h3 className="black mt-0 mb-4 text-xl font-bold">デジコア</h3>
              <p>
                企業などで利用されるグループウェアをデジクリ向けに1から開発しました。入部・継続管理やイベントフォーム、作品投稿などができます。
                <br />
                <a
                  href="https://github.com/SIT-DigiCre/digicore_v3_frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue underline"
                >
                  GitHub
                </a>
                にてOSSで公開中です。
              </p>
            </div>
            <div className="rounded-2xl border-2 border-black p-6">
              <h3 className="black mt-0 mb-4 text-xl font-bold">Bolide</h3>
              <p>
                Zoomなどを使用する際にニコニコ動画風に匿名コメントをデスクトップに流すことができるソフトウェアです。
                <br />
                定例会などで使用しています。
                <br />
                <a
                  href="https://github.com/SIT-DigiCre/bolide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue underline"
                >
                  GitHub
                </a>
                にてOSSで公開中です。
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
