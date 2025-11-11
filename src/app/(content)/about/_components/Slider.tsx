"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Video } from "@splidejs/splide-extension-video";
import "@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css";

type ImageSlide = {
  type: "image";
  src: string;
  alt: string;
};

type YouTubeSlide = {
  type: "youtube";
  url: string;
  thumbnail?: string;
  alt?: string;
};

type Slide = ImageSlide | YouTubeSlide;

type SliderProps = {
  slides: Slide[];
};

export default function Slider({ slides }: SliderProps) {
  return (
    <div className="w-full overflow-hidden">
      <Splide
        options={{
          type: "slide",
          interval: 8000,
          autoplay: true,
          arrows: slides.length > 1,
          pagination: true,
          speed: 700,
          video: {
            loop: true,
            mute: true,
          },
        }}
        extensions={{ Video }}
      >
        {slides.map((slide, index) => {
          if (slide.type === "image") {
            return (
              <SplideSlide key={`${slide.src}-${index}`}>
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="aspect-video w-full object-cover"
                />
              </SplideSlide>
            );
          }

          if (slide.type === "youtube") {
            // YouTube URLから動画IDを抽出
            const youtubeId = slide.url.match(
              /(?:youtube\.com\/embed\/|youtu\.be\/|youtube\.com\/watch\?v=)([^&\n?#]+)/,
            )?.[1];

            if (!youtubeId) {
              return null;
            }

            // サムネイルが提供されていない場合、YouTubeのサムネイル画像を自動取得
            const thumbnailUrl =
              slide.thumbnail ||
              `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`;

            return (
              <SplideSlide
                key={`${slide.url}-${index}`}
                data-splide-youtube={`https://www.youtube.com/watch?v=${youtubeId}&autoplay=1`}
              >
                <img
                  src={thumbnailUrl}
                  alt={slide.alt || "YouTube動画"}
                  className="aspect-video object-cover"
                />
              </SplideSlide>
            );
          }

          return null;
        })}
      </Splide>
    </div>
  );
}
