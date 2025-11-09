import type { Metadata } from "next";
import Slider from "../_components/Slider";
import Header from "@/app/welcome/_components/Header";

export const metadata: Metadata = {
  title: "3DCG班 - デジクリ",
  description: "デジクリの3DCG班についてのページです。",
  alternates: {
    canonical: "https://digicre.net/about/3dcg/",
  },
};

export default function ThreeDCGPage() {
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
                  src: "/about/img/3dcg/デジコ登場.png",
                  alt: "",
                },
                {
                  type: "image",
                  src: "/about/img/3dcg/デジコ登場メイキング.png",
                  alt: "",
                },
                {
                  type: "image",
                  src: "/about/img/3dcg/3dcg-hobocube.png",
                  alt: "",
                },
                {
                  type: "image",
                  src: "/about/img/3dcg/maya_akizuki.png",
                  alt: "",
                },
                {
                  type: "image",
                  src: "/about/img/3dcg/dustbox2.png",
                  alt: "",
                },
                {
                  type: "youtube",
                  url: "https://www.youtube.com/embed/EaFvRsJAV9U",
                },
              ]}
            />
          </section>

          {/* About Section */}
          <section id="about">
            <div className="container mx-auto px-4 py-16">
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-3xl font-bold">3DCG班について</h2>
                <div className="bg-sky mx-auto mb-8 h-1 w-24"></div>
              </div>
              <div className="mx-auto max-w-4xl">
                <div className="card p-8">
                  <p className="text-center">
                    3DCG班の活動には、個人でモデリング自体を楽しむ、企画に参加してサークルオリジナルのVtuberやゲームキャラクターなどのモデルの制作をする、3DCG動画に使うモデル作成をするなどがあります。
                    <br />
                    3DCG班個人製作は半年に一度の最終発表に向けて活動しています。キャラクター、動画の背景、車、身の回りの物など各々の好きなものを作っています。
                    <br />
                    企画に参加しての制作は、共同制作を通して行う一つのモデルへの複数人での作業も経験できるでしょう。
                    <br />
                    完成したモデルをただ様々な角度から眺めるだけでももちろん楽しいですし、他の班と協力する企画に参加したりすれば自分のモデルをより堪能できます。
                    <br />
                    頂点で表現するため観察眼が育てられます。週一回の定例会で初めての方に初心者講座を行う予定なので、全く触ったことがない人も大歓迎です。
                    <br />
                    好きの気持ちがあれば細かく観察できるのでイラストを描いたことがない人でもモデルが作れます。3DCG班はおすすめです。時間をかけただけ良いものができあがります。
                    <br />
                    同じことに興味のある同志は学科もそうですがサークルでもできるものです。みなさんの入部をお待ちしています。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Activity Section */}
          <section id="activity">
            <div className="container mx-auto px-4 py-16">
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-3xl font-bold">企画の例</h2>
                <div className="bg-sky mx-auto mb-8 h-1 w-24"></div>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="card p-6">
                  <h3 className="mb-4 text-xl font-bold">定期3DCG企画</h3>
                  <p>
                    お題なしで自由に制作します。
                    <br />
                    モデル、一枚絵、動画などを制作し、最終発表までに自分の作りたいものを作りましょう。
                  </p>
                </div>
                <div className="card p-6">
                  <h3 className="mb-4 text-xl font-bold">
                    クソダサグランプリ企画
                  </h3>
                  <p>
                    とにかくダサい創作物を作るお遊び企画です。
                    <br />
                    この企画は3DCG班のみならず、イラスト班やMovie班も参加します。
                    <br />
                    ひたすらにダサさをきわめてデジクリのクソダサ王を目指せ！
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Work Section */}
          <section id="work">
            <div className="container mx-auto px-4 py-16">
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-3xl font-bold">作品例</h2>
                <div className="bg-sky mx-auto mb-8 h-1 w-24"></div>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="card p-6">
                  <img
                    src="/about/img/3dcg/credit_bread.png"
                    alt=""
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="card p-6">
                  <img
                    src="/about/img/3dcg/digico_preview.jpg"
                    alt=""
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
