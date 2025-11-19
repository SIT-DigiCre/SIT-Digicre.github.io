"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Video } from "@splidejs/splide-extension-video";
import "@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css";

const slideList = [
  {
    src: "/img/buff_zavas.webp",
    alt: "頭部がプロテイン飲料のザバスになった男性キャラクター2人を描いたイラスト。1人は白いワイシャツにネクタイとチョッキを着用し、腕を捲っている。もう1人は上裸でこちらを振り向きながら、筋肉を見せつけるようなガッツポーズをしている",
  },
  { src: "/img/credit_bread.webp", alt: "モデリングソフトで作った単位パン" },
  {
    src: "/img/kawaii_akizuki.webp",
    alt: "3人の可愛らしい小さな女の子を描いたイラスト。3人とも白地にピンクやグレーのラインが入った不思議なデザインの服を着ている",
  },
];

export default function Gallery() {
  return (
    <div className="card overflow-hidden">
      <Splide
        options={{
          type: "slide",
          interval: 3000,
          autoplay: true,
          arrows: false,
          video: {
            loop: true,
            mute: true,
          },
        }}
        extensions={{ Video }}
      >
        {slideList.map((item) => (
          <SplideSlide key={item.src}>
            <img
              src={item.src}
              alt={item.alt}
              className="aspect-video w-full object-cover"
            />
          </SplideSlide>
        ))}

        <SplideSlide data-splide-youtube="https://www.youtube.com/watch?v=nnJ5ml6D2UE">
          <img
            src="/img/pv.webp"
            alt="デジクリ紹介PV 2024 【芝浦工業大学公認サークル】"
            className="aspect-video w-full object-cover"
          />
        </SplideSlide>
      </Splide>
    </div>
  );
}
