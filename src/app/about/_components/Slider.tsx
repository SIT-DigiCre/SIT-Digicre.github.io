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
          arrows: true,
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
                  className="aspect-video object-cover"
                />
              </SplideSlide>
            );
          }

          if (slide.type === "youtube") {
            // YouTube URLから動画IDを抽出
            const youtubeId = slide.url.match(
              /(?:youtube\.com\/embed\/|youtu\.be\/|youtube\.com\/watch\?v=)([^&\n?#]+)/
            )?.[1];

            if (!youtubeId) {
              return null;
            }

            return (
              <SplideSlide
                key={`${slide.url}-${index}`}
                data-splide-youtube={`https://www.youtube.com/watch?v=${youtubeId}`}
              >
                {slide.thumbnail ? (
                  <img
                    src={slide.thumbnail}
                    alt={slide.alt || "YouTube動画"}
                    className="aspect-video object-cover"
                  />
                ) : (
                  <div className="flex aspect-video items-center justify-center bg-gray-800">
                    <span className="text-white">YouTube動画</span>
                  </div>
                )}
              </SplideSlide>
            );
          }

          return null;
        })}
      </Splide>
    </div>
  );
}

