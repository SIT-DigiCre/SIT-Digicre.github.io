import type { Metadata } from "next";
import Header from "../_components/Header";
import Slider from "../_components/Slider";

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
          {/* Home Section */}
          <section id="home" className="bg-sky container">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-white">Welcome to Digicre</h1>
            </div>
            <Slider
              slides={[
                {
                  type: "youtube",
                  url: "https://www.youtube.com/embed/EaFvRsJAV9U",
                },
              ]}
            />
          </section>

          {/* About Section */}
          <section id="about" >
            <div className="container mx-auto px-4 py-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">Movie班について</h2>
                <div className="w-24 h-1 bg-sky mx-auto mb-8"></div>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="card p-8">
                  <p className="text-center">
                    Movie班では、主に動画をつくる人が集まっています。<br />
                    詳しく言うと、動画編集から、MAD、モーショングラフィックス、3DCGなどいろいろな人がいろいろな映像を作っています。<br />
                    班の活動としては、企画を立ち上げてそれに沿って映像を作ったり、技術を共有したり、協力して1つの映像を作ったりしています。<br />
                    アナタもこの映像制作沼にちょっと足を踏み入れてみませんか...？<br />
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Activity Section */}
          <section id="activity" >
            <div className="container mx-auto px-4 py-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">過去に開催された企画の例</h2>
                <div className="w-24 h-1 bg-sky mx-auto mb-8"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-4">ムビクリ(仮)</h3>
                  <p>
                    1つお題曲を決めて、それに各々が映像をつくるという企画
                  </p>
                </div>
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-4">サークル紹介動画の作成</h3>
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

