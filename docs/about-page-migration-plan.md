# About ページ移行計画

## 概要

`temp/` ディレクトリ以下にある各班のHTMLファイルをNext.jsのページコンポーネントとして実装し、`/about/` 以下にデプロイする。

## 対象ファイル

- `temp/2dcg.html` → `/about/2dcg/`
- `temp/3dcg.html` → `/about/3dcg/`
- `temp/dtm.html` → `/about/dtm/`
- `temp/movie.html` → `/about/movie/`
- `temp/pg.html` → `/about/pg/`
- `temp/sysdev.html` → `/about/sysdev/`
- `temp/xr.html` → `/about/xr/`

## 移行方針

### 1. レイアウト

- welcomeページと同様の左サイドバーレイアウトを採用
- ヘッダーコンポーネントを共通化
- フッターコンポーネントを共通化

### 2. スタイリング

- CSSはすべてTailwind CSSで書き直し
- classNameにインラインで指定
- Bootstrap、カスタムCSSは使用しない
- アニメーション(WOW.js、Animate.css)は実装しない

### 3. スライダー

- Splideを使用(トップページと同様)
- `@splidejs/react-splide`パッケージを利用(既にインストール済み)
- YouTube埋め込みには`@splidejs/splide-extension-video`を使用

### 4. テキストの扱い

- 文章は一字一句変えずに移行
- HTMLコメントは移行しない

## ディレクトリ構造

```
src/app/about/
├── layout.tsx          # 共通レイアウト(左サイドバー)
├── _components/
│   ├── Header.tsx      # サイドバーナビゲーション
│   ├── Footer.tsx      # フッター
│   └── Slider.tsx      # Splideスライダー共通コンポーネント
├── 2dcg/
│   └── page.tsx
├── 3dcg/
│   └── page.tsx
├── dtm/
│   └── page.tsx
├── movie/
│   └── page.tsx
├── pg/
│   └── page.tsx
├── sysdev/
│   └── page.tsx
└── xr/
    └── page.tsx
```

## アセットファイルの配置

### 画像ファイル

```
temp/img/ → public/about/img/
├── icon.jpg
├── logo.svg
├── pg.jpg
├── 2dcg/
│   ├── arknights.png
│   ├── buff_zavas.png
│   ├── kawaii.png
│   ├── kumoko.png
│   ├── syawa5-7-3.png
│   ├── 妹に無理やりコスさせた_CFの膝2.png
│   └── 02b76e9f59b03b8b.png
├── 3dcg/
│   ├── 3dcg-hobocube.png
│   ├── credit_bread.png
│   ├── digico_preview.jpg
│   ├── dustbox2.png
│   ├── maya_akizuki.png
│   ├── test06_0265.png
│   ├── デジコ登場.png
│   ├── デジコ登場メイキング.png
│   └── ｒｇｂ前.png のコピー.png
```

注: `30280aa293da6847.png:Zone.Identifier` は除外(Windowsのメタデータファイル)

### 音声ファイル

```
temp/file/mp3/ → public/about/audio/
├── Electro Fire.mp3
├── What-s Today-s New Knowledge_8bit.mp3
├── breakthrough.mp3
├── oh,future.mp3
└── たいくつゆううつレイン.mp3
```

## 各ページの構造

すべてのページは以下のセクション構成を持つ:

1. **Homeセクション**: スライダー表示(タイトル "Welcome to Digicre" を表示)
2. **Aboutセクション**: 班の説明
3. **Activityセクション**: 企画の例・集団製作の例
4. **Workセクション**: 作品例(一部のページでは省略)
5. **Contactセクション**: フッターに統合(既存HTMLのContactセクションは削除)

## スライダーの設定

既存HTMLのSwiperの設定を踏襲:

- 自動再生: 8秒間隔
- エフェクト: coverflow (Splideで対応可能な場合)
- ナビゲーション: 前/次ボタン、ページネーション
- 速度: 700ms

## ヘッダーナビゲーション

welcomeページのHeaderコンポーネントを参考に、about用のHeaderを作成:

- ロゴ(DigicreLogo)
- ナビゲーション項目: 各ページのセクションへのアンカーリンク
  - (例: 3DCG班ページの場合)
  - 3DCG班について (#about)
  - 企画の例 (#activity)
  - 作品例 (#work)
- ソーシャルリンク:
  - X (Twitter)
  - YouTube
  - ウェブサイト
  - お問い合わせ

## 各ページの詳細

### 1. イラスト班 (`/about/2dcg/`)

- **スライダー**: 3枚の画像
  - kawaii.png
  - buff_zavas.png
  - syawa5-7-3.png
- **Aboutセクション**: イラスト班についての説明
- **Activityセクション**:
  - リレーマンガ企画
  - DigicreGraphicWorks
- **Workセクション**: 作品例
  - あーくないつのウィーディです！！！！！！！！！！！！！！！！ (arknights.png)
  - 蜘蛛子☁ (kumoko.png)

### 2. 3DCG班 (`/about/3dcg/`)

- **スライダー**: 5枚の画像 + 1つのYouTube動画
  - デジコ登場.png
  - デジコ登場メイキング.png
  - 3dcg-hobocube.png
  - maya_akizuki.png
  - dustbox2.png
  - YouTube: https://www.youtube.com/embed/EaFvRsJAV9U
- **Aboutセクション**: 3DCG班についての説明
- **Activityセクション**:
  - 定期3DCG企画
  - クソダサグランプリ企画
- **Workセクション**: 作品例
  - credit_bread.png
  - digico_preview.jpg

### 3. DTM班 (`/about/dtm/`)

- **スライダー**: 4つのYouTube動画
  - https://www.youtube.com/embed/oX9M1nhSimA
  - https://www.youtube.com/embed/GMzgvtX4j2o
  - https://www.youtube.com/embed/rqOH0YQHfwg
  - https://www.youtube.com/embed/Eh54HvDiDWw
- **Aboutセクション**: DTM班についての説明
- **Activityセクション**:
  - アレンジリレー企画
  - ミュージックアルバム企画
- **Workセクション**: 作品例(音声プレイヤー)
  - Electro Fire / Bronze
  - Oh future / teikume
  - breakthrough / Kunitochi
  - What-s Today-s New Knowledge / Pinyo

### 4. Movie班 (`/about/movie/`)

- **スライダー**: 1つのYouTube動画
  - https://www.youtube.com/embed/EaFvRsJAV9U
- **Aboutセクション**: Movie班についての説明
- **Activityセクション**:
  - ムビクリ(仮)
  - サークル紹介動画の作成
- **Workセクション**: なし

### 5. PG班 (`/about/pg/`)

- **スライダー**: 1枚の画像
  - pg.jpg
- **Aboutセクション**: PG班についての説明
- **Activityセクション**:
  - RemakeRPG
  - Fleet VR企画
- **Workセクション**: なし(HTMLでコメントアウトされている)

注: タイトルの誤字("Welocome" → "Welcome")は修正する

### 6. SysDev班 (`/about/sysdev/`)

- **スライダー**: 1枚の画像
  - pg.jpg(PG班と同じ画像を使用)
- **Aboutセクション**: SystemDevelopment班についての説明
- **Activityセクション**:
  - デジコア
  - Bolide
- **Workセクション**: なし(HTMLでコメントアウトされている)

注: タイトルの誤字("Welocome" → "Welcome")は修正する

### 7. xR班 (`/about/xr/`)

- **スライダー**: 3つのYouTube動画
  - https://www.youtube.com/embed/oev4Ic2wYjI
  - https://www.youtube.com/embed/rTbLAK26I9U
  - https://www.youtube.com/embed/ul2LbgbX7No
- **Aboutセクション**: xR班についての説明
- **Activityセクション**:
  - VTuber企画
  - Fleet VR企画
- **Workセクション**: なし

## Tailwind変換の方針

### Bootstrapクラスの変換例

| Bootstrap         | Tailwind                                   |
| ----------------- | ------------------------------------------ |
| `container-fluid` | `container mx-auto px-4`                   |
| `row`             | `flex flex-wrap` または `grid grid-cols-*` |
| `col-md-6`        | `md:w-1/2` または `md:col-span-6`          |
| `col-12`          | `w-full`                                   |
| `text-center`     | `text-center`                              |
| `mb-0`            | `mb-0`                                     |
| `p-5`             | `p-5` (値は調整)                           |
| `py-4`            | `py-4`                                     |

### カスタムクラスの変換

- `.jumbotron` → Tailwindのユーティリティクラスで再現
- `.heading` → `text-2xl font-bold` など
- `.heading-underline` → `border-b-2` など
- `.card` → `bg-white rounded-lg shadow-md p-4` など
- `.floating` → 固定位置ボタン(実装しない、またはTailwindで再現)

## JavaScriptの扱い

以下の機能は削除または別の方法で実装:

- ❌ jQuery依存のコード(削除)
- ❌ WOW.js(アニメーション削除)
- ❌ Swiper.js → ✅ Splideに置き換え
- ❌ scroll to top機能(floating button) → 削除または後で実装
- ❌ h1のフェードイン/アウト → 削除

## メタデータ

各ページに適切なメタデータを設定:

```typescript
export const metadata: Metadata = {
  title: "イラスト班 - デジクリ",
  description: "デジクリのイラスト班についてのページです。",
  alternates: {
    canonical: "https://digicre.net/about/2dcg/",
  },
};
```

## 実装順序

1. ✅ ドキュメント作成(このファイル)
2. アセットファイルのコピー
3. 共通コンポーネントの作成
   - `src/app/about/_components/Header.tsx`
   - `src/app/about/_components/Footer.tsx`
   - `src/app/about/_components/Slider.tsx`(オプション)
4. レイアウトファイルの作成
   - `src/app/about/layout.tsx`
5. 各ページの実装
   - `src/app/about/2dcg/page.tsx`
   - `src/app/about/3dcg/page.tsx`
   - `src/app/about/dtm/page.tsx`
   - `src/app/about/movie/page.tsx`
   - `src/app/about/pg/page.tsx`
   - `src/app/about/sysdev/page.tsx`
   - `src/app/about/xr/page.tsx`
6. 動作確認
7. デプロイ

## 注意事項

- HTMLコメント内の情報(例: `<!--アップルパイやべぇ、すこ-->`)は移行しない
- 既存のBootstrap依存コードはすべて削除
- 外部CDNへの依存をなくす
- 画像の最適化は後で検討(webp変換など)
- SEO対策(alt属性など)は適切に設定
- アクセシビリティを考慮

## 確認事項

- [ ] すべてのテキストが一字一句そのまま移行されているか
- [ ] すべての画像・音声ファイルが正しく表示/再生されるか
- [ ] YouTubeの埋め込みが正しく動作するか
- [ ] レスポンシブデザインが適切に動作するか
- [ ] ナビゲーションが正しく機能するか
- [ ] メタデータが適切に設定されているか

## 未使用ファイル

以下のファイルは移行に使用しない:

- `temp/scss/**/*` (SCSS/CSSファイル)
- `temp/css/style.css`, `temp/css/style.min.css`
- `temp/LICENSE`
- `temp/file/mp3/たいくつゆううつレイン.mp3` (HTMLで参照されていない)
