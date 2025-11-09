import type { Metadata } from "next";
import Slider from "../_components/Slider";
import Header from "@/app/welcome/_components/Header";

export const metadata: Metadata = {
  title: "SysDev班 - デジクリ",
  description: "デジクリのSysDev班についてのページです。",
  alternates: {
    canonical: "https://digicre.net/about/sysdev/",
  },
};

export default function SysDevPage() {
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
                <h2 className="mb-4 text-3xl font-bold">
                  SystemDevelopment班について
                </h2>
                <div className="bg-sky mx-auto mb-8 h-1 w-24"></div>
              </div>
              <div className="mx-auto max-w-4xl">
                <div className="card p-8">
                  <p className="text-center">
                    SystemDevelopment班はデジクリでの創作活動や運営をサポートするシステムを開発する集団です。
                    <br />
                    主に、デジクリ用グループウェア「デジコア」やホームページなどのWebページ
                    <br />
                    他にもテキスト読み上げやVC入退室のDiscordBotや
                    <br />
                    ニコニコ動画風に文字を流せるデスクトップソフトなどを開発しています。
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
                <h2 className="mb-4 text-3xl font-bold">開発の例</h2>
                <div className="bg-sky mx-auto mb-8 h-1 w-24"></div>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="card p-6">
                  <h3 className="mb-4 text-xl font-bold">デジコア</h3>
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
                <div className="card p-6">
                  <h3 className="mb-4 text-xl font-bold">Bolide</h3>
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
      </div>
    </>
  );
}
