import Link from "next/link";
import { MaterialSymbolsOpenInNew } from "@/components/Icon";

export default function JoinSection() {
  return (
    <div className="grid md:grid-cols-[3fr_1fr]">
      <article className="bg-[#404040] p-8 text-white">
        <h2 className="mb-8 text-2xl leading-tight font-bold tracking-normal [font-feature-settings:'palt'] md:text-3xl">
          デジクリで活動してみませんか？
        </h2>

        <div className="space-y-2 leading-[1.5]">
          <p>
            <strong>入部受付フォーム</strong>
            から登録されたメールアドレス宛に、
            <strong>入部方法や見学等のご案内メール</strong>
            をお送りします。
          </p>
        </div>
      </article>

      <Link
        href="https://forms.gle/cY25Kc6fssqv2tZz9"
        rel="noopener noreferrer"
        target="_blank"
        className="flex items-center justify-center gap-0 bg-[#00b0f0] p-16 text-xl leading-tight font-bold text-white transition-colors duration-300 ease-in-out [font-feature-settings:'palt'] hover:bg-[#71d9ff]"
      >
        入部受付
        <MaterialSymbolsOpenInNew className="h-4 w-4" />
      </Link>
    </div>
  );
}
