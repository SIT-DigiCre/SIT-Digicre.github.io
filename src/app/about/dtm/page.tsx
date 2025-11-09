import type { Metadata } from "next";
import Header from "../_components/Header";
import Slider from "../_components/Slider";

export const metadata: Metadata = {
  title: "DTM班 - デジクリ",
  description: "デジクリのDTM班についてのページです。",
  alternates: {
    canonical: "https://digicre.net/about/dtm/",
  },
};

export default function DTMPage() {
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
                  url: "https://www.youtube.com/embed/oX9M1nhSimA",
                },
                {
                  type: "youtube",
                  url: "https://www.youtube.com/embed/GMzgvtX4j2o",
                },
                {
                  type: "youtube",
                  url: "https://www.youtube.com/embed/rqOH0YQHfwg",
                },
                {
                  type: "youtube",
                  url: "https://www.youtube.com/embed/Eh54HvDiDWw",
                },
              ]}
            />
          </section>

          {/* About Section */}
          <section id="about" >
            <div className="container mx-auto px-4 py-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">DTM班について</h2>
                <div className="w-24 h-1 bg-sky mx-auto mb-8"></div>
              </div>
              <div className="max-w-4xl mx-auto">
                <div className="card p-8">
                  <p className="text-center">
                    DTM班では、主にパソコンを使った音楽制作をしています。<br />
                    DTMとはDeskTop Musicの略で、一般にパソコンと電子機器を接続して演奏する音楽、またその制作行為のことを指します。<br />
                    DTMの良いところとして、楽器が無くても音楽を作ることができるため初心者でも入りやすいことがよく挙げられます。<br />
                    実際私たちDTM班の中でも大学に入ってから始めたという人が多く、大学の趣味として始めるのに非常におすすめだと思います！<br />
                    DTM班の主な活動として、企画への楽曲提供の他、下記のDTM班内で立ち上がる企画などがあります。
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
                  <h3 className="text-xl font-bold mb-4">アレンジリレー企画</h3>
                  <p>
                    既存の曲の一部をアレンジし、それを数人がリレー方式で繋いでいく企画です。<br />
                    最終的に動画作成者と協力して、最終発表の日に動画を部内に発表します。<br />
                    一人が担当するパートも短く、既存曲のアレンジということもあって、非常に初心者向けの企画になっています。
                  </p>
                  <p>
                    過去の題材及び作品はこちらです↓<br />
                    2019年：シャルル、てってってー、宇宙よりも遠い場所OP『The Girls Are Alright!』<br />
                    2018年：少女終末旅行OP『動く、動く』、You
                  </p>
                </div>
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-4">ミュージックアルバム企画</h3>
                  <p>
                    企画参加者全員で一つのテーマを決め、そのテーマで曲を作りアルバムを制作する企画です。<br />
                    DTM班の企画の中では唯一部外にむけて発信するタイプの企画で、例年M3という同人音楽の即売会やコミケなどで頒布します。またアレンジリレー企画と同様に、動画作成者と協力してXFD動画をYouTubeに公開したり、
                    SoundCloudに投稿したりします。
                  </p>
                  <p>
                    過去の作品はこちらです↓<br />
                    <span><a
                      href="https://www.youtube.com/watch?v=oX9M1nhSimA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue underline"
                    >2019年前期企画：Emotions</a></span><br />
                    <span><a
                      href="https://www.youtube.com/watch?v=GMzgvtX4j2o"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue underline"
                    >2018年後期企画：Metropolis</a></span><br />
                    <span><a
                      href="https://www.youtube.com/watch?v=rqOH0YQHfwg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue underline"
                    >2018年前期企画：Dinner</a></span><br />
                    <span><a
                      href="https://www.youtube.com/watch?v=Eh54HvDiDWw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue underline"
                    >2017年後期企画：Japonism</a></span>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Work Section */}
          <section id="work" >
            <div className="container mx-auto px-4 py-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">作品例</h2>
                <div className="w-24 h-1 bg-sky mx-auto mb-8"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-4">・Electro Fire / Bronze</h3>
                  <audio src="/about/audio/Electro Fire.mp3" controls className="w-full"></audio>
                </div>
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-4">・Oh future / teikume</h3>
                  <audio src="/about/audio/oh,future.mp3" controls className="w-full"></audio>
                </div>
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-4">・breakthrough / Kunitochi</h3>
                  <audio src="/about/audio/breakthrough.mp3" controls className="w-full"></audio>
                </div>
                <div className="card p-6">
                  <h3 className="text-xl font-bold mb-4">・What-s Today-s New Knowledge / Pinyo</h3>
                  <audio src="/about/audio/What-s Today-s New Knowledge_8bit.mp3" controls className="w-full"></audio>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

