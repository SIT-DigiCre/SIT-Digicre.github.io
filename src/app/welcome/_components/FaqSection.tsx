import Link from "next/link";
import { MaterialSymbolsOpenInNew } from "@/components/Icon";

const memberTableData = [
  { year: "2025", total: "219", female: "36" },
  { year: "2024", total: "116", female: "19" },
  { year: "2023", total: "121", female: "18" },
];

const faqs = [
  {
    question: "サークル参加費は何円ですか？",
    answer: (
      <>
        <p>
          <strong>年間 2000 円</strong>です。
        </p>
        <p>参加費は、部室の備品購入やイベントへの出展料などに使用します。</p>
      </>
    ),
  },
  {
    question: "兼部やアルバイトとの両立は可能ですか？",
    answer: (
      <>
        <p>
          <strong>はい</strong>。<strong>両立可能</strong>です。
        </p>
        <p>
          他のサークル・部活動等と掛け持ちやアルバイトをしながら活動するデジクリ部員も少なくありません。
        </p>
      </>
    ),
  },
  {
    question: "部員数を教えてください",
    answer: (
      <>
        <p>
          <strong>2025 年 11 月現在</strong>、学部生・大学院生を合わせて{" "}
          <strong>219 名</strong>のデジクリ部員が活動しています。
        </p>
        <p>
          <strong>過去 3 年間</strong>の部員数の推移は、下表の通りです。
        </p>
        <table className="faq__content-table mx-auto">
          <thead>
            <tr>
              <th className="border border-[#404040] p-4 text-center leading-tight font-bold">
                入学年度
              </th>
              <th className="border border-[#404040] p-4 text-center leading-tight font-bold">
                合計
              </th>
              <th className="border border-[#404040] p-4 text-center leading-tight font-bold">
                女子
              </th>
            </tr>
          </thead>
          <tbody>
            {memberTableData.map((row) => (
              <tr
                key={row.year}
                className={
                  parseInt(row.year) % 2 === 0 ? "bg-white" : "bg-[#e9e9e9]"
                }
              >
                <td className="border border-[#404040] p-4 text-center">
                  {row.year}
                </td>
                <td className="border border-[#404040] p-4 text-center">
                  {row.total}
                </td>
                <td className="border border-[#404040] p-4 text-center">
                  {row.female}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    ),
  },
  {
    question: "定例会とは何ですか？",
    answer: (
      <>
        <p>
          <strong>毎週月曜の 21 時</strong>より{" "}
          <strong>Zoom で実施しているミーティング</strong>
          のことです。
        </p>
        <p>
          定例会では、デジクリ部員全体への連絡、企画の進捗報告、講座、LT（ライトニングトーク）などを行います。
        </p>
      </>
    ),
  },
  {
    question: "定例会への参加は必須ですか？",
    answer: (
      <>
        <p>
          <strong>いいえ</strong>。参加は<strong>任意</strong>です。
        </p>
        <p>
          なお、定例会の内容は、議事録やアーカイブとして残るため、後から確認することができます。
        </p>
      </>
    ),
  },
  {
    question: "上記以外に質問があるのですが、どうしたら良いですか？",
    answer: (
      <p>
        <Link
          href="https://twitter.com/sitdigicre"
          rel="noopener noreferrer"
          target="_blank"
          className="font-bold text-[#005aff] hover:underline"
        >
          デジクリ公式 Twitter
          <MaterialSymbolsOpenInNew className="relative bottom-0.5 inline-block h-4 w-4" />
        </Link>
        宛に DM をお送りいただくか、
        <Link
          href="mailto:contact@digicre.net"
          rel="noopener noreferrer"
          target="_blank"
          className="font-bold text-[#005aff] hover:underline"
        >
          メール
          <MaterialSymbolsOpenInNew className="relative bottom-0.5 inline-block h-4 w-4" />
        </Link>
        にてお問い合わせください。
      </p>
    ),
  },
];

export default function FaqSection() {
  return (
    <div
      className="faq bg-[#e9e9e9] p-8 text-black"
      id="faq"
    >
      <h2 className="mb-8 text-2xl leading-tight font-bold tracking-normal [font-feature-settings:'palt'] md:text-3xl">
        よくある質問
      </h2>

      <div className="faq__wrapper grid gap-8">
        {faqs.map((faq) => (
          <article
            key={faq.question}
            className="faq__card rounded-2xl bg-white p-8"
          >
            <h3 className="mb-4 text-lg leading-tight font-bold tracking-normal [font-feature-settings:'palt']">
              {faq.question}
            </h3>

            <div className="faq__content space-y-2 leading-[1.5]">
              {faq.answer}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
