import type { Metadata } from "next";
import Slider from "../_components/Slider";
import Header from "@/app/welcome/_components/Header";

export const metadata: Metadata = {
  title: "Movie班 - デジクリ",
  description: "デジクリのMovie班についてのページです。",
  alternates: {
    canonical: "https://digicre.net/about/movie/",
  },
};

export default function MoviePage() {
  return (
    <>
      <Header />
      <div className="body flex min-h-screen flex-col lg:ml-[25%]">
        <main className="flex-grow">
          <section
            id="home"
            className="bg-sky w-full"
          >
            <Slider
              slides={[
                {
                  type: "youtube",
                  url: "https://www.youtube.com/embed/EaFvRsJAV9U",
                },
              ]}
            />
          </section>

          <section id="about">
            <div className="mx-auto px-4 py-16">
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-3xl font-bold">Movie班について</h2>
                <div className="bg-sky mx-auto mb-8 h-1 w-24"></div>
              </div>
              <div className="mx-auto max-w-4xl">
                <div className="p-8">
                  <p>
                    Movie班では、主に動画をつくる人が集まっています。
                    <br />
                    詳しく言うと、動画編集から、MAD、モーショングラフィックス、3DCGなどいろいろな人がいろいろな映像を作っています。
                    <br />
                    班の活動としては、企画を立ち上げてそれに沿って映像を作ったり、技術を共有したり、協力して1つの映像を作ったりしています。
                    <br />
                    アナタもこの映像制作沼にちょっと足を踏み入れてみませんか...？
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="activity">
            <div className="mx-auto px-4 py-16">
              <div className="mb-8 text-center">
                <h2 className="mb-4 text-3xl font-bold">
                  過去に開催された企画の例
                </h2>
                <div className="bg-sky mx-auto mb-8 h-1 w-24"></div>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="rounded-2xl border-2 border-black p-6">
                  <h3 className="black mt-0 mb-4 text-xl font-bold">
                    ムビクリ(仮)
                  </h3>
                  <p>1つお題曲を決めて、それに各々が映像をつくるという企画</p>
                </div>
                <div className="rounded-2xl border-2 border-black p-6">
                  <h3 className="black mt-0 mb-4 text-xl font-bold">
                    サークル紹介動画の作成
                  </h3>
                  <p>
                    Movie班、3DCG班、DTM班、デジコプロジェクトの協同でサークル紹介動画を作成しました
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
