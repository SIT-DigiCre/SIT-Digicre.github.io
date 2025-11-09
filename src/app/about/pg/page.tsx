import type { Metadata } from "next";
import Slider from "../_components/Slider";
import Header from "@/app/welcome/_components/Header";

export const metadata: Metadata = {
  title: "PG班 - デジクリ",
  description: "デジクリのPG班についてのページです。",
  alternates: {
    canonical: "https://digicre.net/about/pg/",
  },
};

export default function PGPage() {
  return (
    <>
      <Header />
      <div className="body flex min-h-screen flex-col lg:ml-[25%]">
        <main className="flex-grow">
          {/* Home Section */}
          <section
            id="home"
            className="bg-sky container"
          >
            <div className="mb-8 text-center">
              <h1 className="text-4xl font-bold text-white">
                Welcome to Digicre
              </h1>
            </div>
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

          {/* About Section */}
          <section id="about">
            <div className="container mx-auto px-4 py-16">
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-3xl font-bold">PG班について</h2>
                <div className="bg-sky mx-auto mb-8 h-1 w-24"></div>
              </div>
              <div className="mx-auto max-w-4xl">
                <div className="card p-8">
                  <p className="text-center">
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

          {/* Activity Section */}
          <section id="activity">
            <div className="container mx-auto px-4 py-16">
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-3xl font-bold">集団開発の例</h2>
                <div className="bg-sky mx-auto mb-8 h-1 w-24"></div>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="card p-6">
                  <h3 className="mb-4 text-xl font-bold">RemakeRPG</h3>
                  <p>
                    ペイントアクションを使ったアクションRPGです。
                    <br />
                    デジゲー博2019に展示しました。
                  </p>
                </div>
                <div className="card p-6">
                  <h3 className="mb-4 text-xl font-bold">Fleet VR企画</h3>
                  <p>
                    VR向けゲーム開発企画。Quest2向け擬人化海戦シューティングゲーム。デジゲー博2022にて展示。
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
