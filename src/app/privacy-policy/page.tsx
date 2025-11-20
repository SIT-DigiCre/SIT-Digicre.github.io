import type { Metadata } from "next";
import Link from "next/link";
import { DigicreLogo } from "@/components/Icon";
import Footer from "../_components/Footer";

export const metadata: Metadata = {
  title: "プライバシーポリシー - 芝浦工業大学 デジクリ",
  openGraph: {
    type: "website",
    url: "https://digicre.net/privacy-policy/",
    title: "プライバシーポリシー",
    siteName: "芝浦工業大学 デジクリ",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "デジクリ Digital Creation Circle",
      },
    ],
  },
  alternates: {
    canonical: "https://digicre.net/privacy-policy/",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <main className="bg-sky">
        <div className="container">
          <div className="flex flex-col items-center gap-y-[32px] md:gap-y-[64px]">
            <Link href={"/"}>
              <DigicreLogo className="h-12 w-[176px] text-white md:h-24 md:w-[352px]" />
            </Link>
          </div>

          <article className="card px-[16px] py-[32px]">
            <h2>プライバシーポリシー</h2>

            <h3>Google Analyticsについて</h3>

            <p>
              本サイトでは、アクセス状況の把握およびサイトの品質向上を目的としてGoogle
              Analyticsを利用しています。
            </p>

            <p>
              Google
              Analyticsでは、Cookieを用いて本サイトへのアクセス状況に関するデータを収集します。これらのデータは、Google社のプライバシーポリシーに則って取り扱われます。詳しくは「
              <Link
                href="https://marketingplatform.google.com/about/analytics/terms/jp/"
                target="_blank"
              >
                Google アナリティクス利用規約
              </Link>
              」をご覧ください。
            </p>
            <p>
              なお、Google
              Analyticsによるデータ収集をオプトアウトする方法に関しては「
              <Link
                href="https://tools.google.com/dlpage/gaoptout?hl=ja"
                target="_blank"
              >
                Google アナリティクス オプトアウト アドオン
              </Link>
              」をご参照ください。
            </p>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
}
