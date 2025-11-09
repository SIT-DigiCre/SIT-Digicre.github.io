import type { Metadata } from "next";
import Header from "../_components/Header";
import Slider from "../_components/Slider";

export const metadata: Metadata = {
  title: "xR班 - デジクリ",
  description: "デジクリのxR班についてのページです。",
  alternates: {
    canonical: "https://digicre.net/about/xr/",
  },
};

export default function XRPage() {
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
                  url: "https://www.youtube.com/embed/oev4Ic2wYjI",
                },
                {
                  type: "youtube",
                  url: "https://www.youtube.com/embed/rTbLAK26I9U",
                },
                {
                  type: "youtube",
                  url: "https://www.youtube.com/embed/ul2LbgbX7No",
                },
              ]}
            />
          </section>

          {/* About Section */}
          <section id="about" >
            <div className="container mx-auto px-4 py-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">xR班について</h2>
                <div className="w-24 h-1 bg-sky mx-auto mb-8"></div>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="card p-8">
                  <p className="text-center">
                    xR班では、主に仮想世界に関わるコンテンツを制作しています。<br />
                    xRとは、VR・AR・MRなど「～R」と呼ばれる技術をまとめた名称で、現実世界と仮想世界を融合させる技術を指します。
                    エックスアールという読み方のほかに、クロス・リアリティ（Cross Reality）やエクステンデッド・リアリティ（Extended Reality）というものもあります。
                    表記もXRだったり、xR（xが小文字）だったりします。<br /><br />
                    VR（Virtual Reality）とは、仮想現実とも呼ばれ、その名の通り仮想空間を表示させ体験できる技術です。
                    「Oculus Quest 2」のようなHMD（ヘッドマウントディスプレイ）を装着することで、バーチャル空間に没入することができます。<br />
                    AR（Augmented Reality）とは、拡張現実とも呼ばれ、現実世界に対して情報を加えて表示する技術です。「Pokémon GO」に活用されていることで有名ですね。
                    ニンテンドー3DSに内蔵されていた「ARゲームズ」という、カメラで写したカードからキャラクターが飛び出して見えるミニゲームで遊んだ方も多いのではないでしょうか。<br />
                    この2つを合わせた中間のものがMR（Mixed Reality）で、複合現実ともいいます。現実世界と仮想空間が相互に影響しあうのが特徴です。<br />
                    これらの境界線はかなり曖昧なので、大雑把に理解すれば大丈夫です。<br /><br />
                    xR技術はプログラミングや3DCGなどの複合技術であるため、様々な班が関わっており、xR班のみに在籍しているメンバーはおりません。
                    なので、xR班が単独で活動することはなく、様々な班のメンバーが集まり制作する企画として存在しています。<br />
                    具体的には、VR機器に対応したスタイリッシュ海戦シューティングゲームを開発する「Fleet VR企画」や、
                    サークル独自のVtuberを運営する「デジコVTuber企画」などがあります。<br /><br />
                    この技術はまだまだ新しく、これから世界を変えていく可能性を大いに秘めています。<br /><br />
                    どの班に所属していても参加できるので、少しでも興味があったら一緒に活動してみませんか？
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Activity Section */}
          <section id="activity" >
            <div className="container mx-auto px-4 py-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">現在進行している企画の例</h2>
                <div className="w-24 h-1 bg-sky mx-auto mb-8"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-4">VTuber企画</h3>
                  <p>
                    デジクリのオリジナルキャラクター「デジコ」を用いてVTuberを始めました。<br />
                    <a
                      href="https://www.youtube.com/channel/UCgh1tbd7SC4qv9A6RffbB0g"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue underline"
                    >・デジコちゃんねる(YouTube)</a><br />
                    <a
                      href="https://www.youtube.com/channel/UCKz8KYao5CXcHlBgq7QfbUg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue underline"
                    >・デジクリ公式YouTubeチャンネル</a>
                  </p>
                </div>
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-4">Fleet VR企画</h3>
                  <p>
                    VR向けゲーム開発企画。スタイリッシュ海戦シューティングゲームを目指して現在進行中。
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

