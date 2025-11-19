import type { Metadata } from "next";
import Slider from "../_components/Slider";

export const metadata: Metadata = {
  title: "イラスト班 - デジクリ",
  description: "デジクリのイラスト班についてのページです。",
  alternates: {
    canonical: "https://digicre.net/about/2dcg/",
  },
};

export default function TwoDCGPage() {
  return (
    <main className="flex-grow">
      <section id="home" className="bg-sky w-full">
        <Slider
          slides={[
            {
              type: "image",
              src: "/about/img/2dcg/kawaii.webp",
              alt: "",
            },
            {
              type: "image",
              src: "/about/img/2dcg/buff_zavas.webp",
              alt: "",
            },
            {
              type: "image",
              src: "/about/img/2dcg/syawa5-7-3.webp",
              alt: "",
            },
          ]}
        />
      </section>

      <section id="about">
        <div className="mx-auto px-4 py-16">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold">イラスト班について</h2>
            <div className="bg-sky mx-auto mb-8 h-1 w-24"></div>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="p-8">
              <p>
                イラスト班では、主にパソコンやタブレットなどを使ったデジタルイラストの制作をしています。
                <br />
                デジタルイラストは、文字通りデジタルで描くイラストのことで、加工や編集が容易なことに加え、様々な表現の幅を持っています。
                <br />
                また、デバイスとソフトさえ購入すれば、画材や紙を必要としないのもデジタルイラストの強みのひとつです。
                <br />
                班員の仲には、大学に入ってからデジタルを、さらにはイラスト制作自体を始めた人が多く、初めてでも楽しめる環境になっています。
                <br />
                イラスト班ではイラストを制作して発表することに加え、イベントでのイラスト集頒布や、他班のCDやゲームのイラスト提供などを行っています。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="activity">
        <div className="mx-auto px-4 py-16">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold">集団製作の例</h2>
            <div className="bg-sky mx-auto mb-8 h-1 w-24"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-black p-6">
              <h3 className="black mt-0 mb-4 text-xl font-bold">
                リレーマンガ企画
              </h3>
              <p>
                事前の打ち合わせ無しで、一人一人が一コマずつ描き、マンガを完成させる企画です。
              </p>
            </div>
            <div className="rounded-2xl border-2 border-black p-6">
              <h3 className="black mt-0 mb-4 text-xl font-bold">
                DigicreGraphicWorks
              </h3>
              <p>
                イラスト合同本を作成しました。
                <br />
                2020年夏コミにて頒布予定でした。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="work">
        <div className="mx-auto px-4 py-16">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold">作品例</h2>
            <div className="bg-sky mx-auto mb-8 h-1 w-24"></div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-2xl border-2 border-black p-6">
              {/*アップルパイやべぇ、すこ*/}
              <h3 className="black mt-0 mb-4 text-xl font-bold">
                あーくないつのウィーディです！！！！！！！！！！！！！！！！
              </h3>
              <img
                src="/about/img/2dcg/arknights.webp"
                alt=""
                className="w-full rounded-lg"
              />
            </div>
            <div className="rounded-2xl border-2 border-black p-6">
              {/*くもこかわいい！かわいい！*/}
              <h3 className="black mt-0 mb-4 text-xl font-bold">蜘蛛子☁</h3>
              <img
                src="/about/img/2dcg/kumoko.webp"
                alt=""
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
