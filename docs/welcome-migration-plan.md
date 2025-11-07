## 概要

- 目的: `temp/index.html` に実装されたウェルカムページを Next.js (App Router) 上のページとして再構築し、`https://digicre.net/` と同一リポジトリで管理できるようにする。
- 要件: 既存サイトのトーン&マナーと Tailwind CSS 設計に合わせた構造化、共通要素のデータ駆動化、画像アセットは `temp` 配下から `public` 配下へコピー利用する。
- 除外: 既存 welcome サイトで使用している sitemap や外部ビルド用スクリプト類は移行しない。

## 現状整理

- HTML 構成: ヘッダー(二段ナビ), ヒーロー(YouTube 埋め込み), 「デジクリとは？」紹介, 班紹介カードグリッド, FAQ リスト, 入部 CTA, フッター。
- スタティック資産: `temp/img` 以下に 8 枚の画像 (ヒーロー含む), favicon 類, OGP 画像, 2 本の JS, 1 本の CSS。
- 相互リンク: 内部スクロールリンク (`#about-us` 等)、外部リンク (Twitter, YouTube, Google Form, digicre.net 内各班ページ) を保持する必要あり。
- 動的挙動: ScrollReveal やメニュー開閉を支える JS が存在するが、Next.js では「ハンバーガーメニュー + レスポンシブナビ」のみ再現し、スクロールに連動したアニメーションは実装しない。

## Next.js 実装方針

- ルート: `src/app/welcome/page.tsx` を新規作成し、App Router の静的ページとして提供。
- メタデータ: `metadata` を定義し、`description` や OGP 用設定 (画像パスは `public/welcome` に配置) を現在の HTML から引き継ぐ。`robots` は index を許可する (noindex 指定は行わない)。
- レイアウト: 既存 `src/app/page.tsx` と同様 `main > div.container` を基礎に Tailwind ユーティリティで構成。全体背景色の指定が必要なら `bg-sky` 等を検討。
- レイアウト整理: 現状 `src/app/layout.tsx` に存在するトップページ固有のフッターや配色は `src/app/page.tsx` 側へ移行し、`layout.tsx` はフォント設定と `<html><body>` など共通処理だけに縮小する。これによりトップページと welcome ページの個別デザインを維持。
- ナビゲーション: ハンバーガー開閉は `useState` + `Transition` などシンプルなコンポーネントで再構築、SVG アイコンは `src/components/Icon.tsx` に既存実装があれば流用、なければ新規定義。
- セクション構造: セクションごとにコンポーネント化 (`Hero`, `AboutSection`, `TeamsSection`, `FaqSection`, `JoinSection`) し、`page.tsx` で組み立てる。

## データ設計

- ナビゲーション項目: 配列 `const navigationItems = [...]` に `href`, `label`, `type`(toc|external) などで管理し、共通で使う。
- ヒーロー: 埋め込み iframe の URL・タイトル・CTA をオブジェクトとして定義。ノースクリプト用画像は `next/image` (`<Image>`) を使用し、適切な width/height を指定。
- 班紹介: `const teams = [{ title, href?, image, targetBlank }]` のような配列を作成。リンク無しの「文字書き班」は `href` を省略し、全画像レンダリングには `next/image` を用い、width/height を明示。
- FAQ: `const faqs = [{ question, answer (Markdown or JSX) }]`. 表は `faq` 配列内で `tableData` を持たせコンポーネントでレンダリング。
- ソーシャルリンク: ヘッダー右側および CTA で利用するリンクを `const socialLinks = [...]` として SVG アイコンと紐付け。

## コンポーネント分割案

- `src/app/welcome/_components/Hero.tsx`: iframe, Scroll ボタン。Scroll ボタンは `next/link` でアンカー。
- `src/app/welcome/_components/AboutSection.tsx`: テキスト + 画像。レイアウトは `flex-col md:flex-row`。
- `src/app/welcome/_components/TeamsSection.tsx`: カードグリッド、`teams` 配列を `map` で描画。
- `src/app/welcome/_components/FaqSection.tsx`: QA カード, テーブルは独立サブコンポーネント。
- `src/app/welcome/_components/JoinSection.tsx`: CTA ボタン。
- `src/app/welcome/_components/Header.tsx` & `Footer.tsx`: ページ固有のヘッダー/フッター。既存サイトの `logo` 用 SVG は `public/welcome/logo.svg` として保存。

## Tailwind & スタイル

- カードベース: 既存 `card` ユーティリティ (globals.css) を再利用。余白, グリッド, タイポグラフィは Tailwind クラスで定義。
- レスポンシブ: モバイルファースト。`md:` ブレークポイントでグリッド/フレックス切り替え。
- 色/フォント: 既存サイトが `Inter` `Noto Sans JP` を利用。Next.js 側では `next/font/google` でフォント読み込み済みか確認、必要なら `layout.tsx` に対応追加 (今回は既存設定を尊重しページ内でフォント指定不要)。
- アクセシビリティ: 見出し構造 (h1→h2→h3), `alt` テキスト追加, 外部リンクは `rel="noopener noreferrer"`。

## 作業タスク

1. `src/app/layout.tsx` からトップページ専用のフッター／配色を取り除き、共通設定のみを残す。同時に `src/app/page.tsx` へ移した要素を組み込み、現行トップページのデザインを保持。
2. `public/welcome/` ディレクトリを作成し、`temp/img` など必要画像をコピー配置 (スクリプトではなく手動で必要枚数)。
3. `src/app/welcome/` 以下にページとコンポーネント群を実装。Tailwind クラス, データ配列, SVG アイコン整理。
4. ヘッダーメニューの開閉ロジックを React で構築し、RWD を確認。
5. FAQ テーブルをセマンティック HTML で再現 (Tailwind でスタイリング)。
6. `metadata` を設定し、`noindex` を反映させる。
7. ページ遷移後にスクロールするアンカーリンクを `id` 付与で調整。`Scroll` ボタンは hero 内に配置。
8. `temp` ディレクトリは最終的に参照しないが、削除は次のステップで検討 (今回は保持)。
9. ESLint/TSC チェック、`pnpm lint` or `pnpm run lint` (要確認) を実施。

## オープン課題/確認事項

- ScrollReveal によるアニメーションは必要か? → ページ軽量化のため初回では未対応、必要なら後続で `framer-motion` など導入を検討。
- `robots` の扱い: 現在 `noindex` 指定されているが、この指定は外す。
- 画像最適化: 全ての画像レンダリングに `next/image` を採用し、各画像で width/height を指定した上で遅延読み込みなど標準最適化を活用。
