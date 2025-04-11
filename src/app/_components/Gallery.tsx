"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Video } from "@splidejs/splide-extension-video";
import "@splidejs/splide-extension-video/dist/css/splide-extension-video.min.css";

const slideList = [
  "/img/buff_zavas.webp",
  "/img/credit_bread.webp",
  "/img/kawaii_akizuki.webp",
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
          <SplideSlide key={item}>
            <img
              src={item}
              alt=""
              className="aspect-video object-cover"
            />
          </SplideSlide>
        ))}

        <SplideSlide data-splide-youtube="https://www.youtube.com/watch?v=nnJ5ml6D2UE">
          <img
            src="/img/pv.webp"
            alt="PV"
            className="aspect-video object-cover"
          />
        </SplideSlide>
      </Splide>
    </div>
  );
}
