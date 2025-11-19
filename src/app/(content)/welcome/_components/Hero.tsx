import Image from "next/image";
import Link from "next/link";
import { MaterialSymbolsKeyboardArrowDown } from "@/components/Icon";

export default function Hero() {
  return (
    <div className="relative h-screen w-full md:aspect-video md:h-auto md:max-h-screen">
      <iframe
        width={320}
        height={240}
        src="https://www.youtube-nocookie.com/embed/nnJ5ml6D2UE?autoplay=1&mute=1&modestbranding=1&playsinline=1&disablekb=1&loop=1&controls=0&end=57&playlist=nnJ5ml6D2UE"
        className="absolute inset-0 h-full w-full bg-black object-cover text-white"
        loading="lazy"
        title="デジクリ紹介動画"
        allow="autoplay; encrypted-media"
      />

      <noscript>
        <Image
          src="https://img.youtube.com/vi/nnJ5ml6D2UE/maxresdefault.jpg"
          alt="デジクリ紹介動画"
          width={320}
          height={180}
          className="absolute inset-0 h-full w-full bg-black object-cover"
          loading="lazy"
        />
      </noscript>

      <Link
        href="#about-us"
        className="absolute right-0 bottom-16 flex items-center gap-4 rounded-l-2xl bg-[#00b0f0] p-4 text-white shadow-[0_2px_8px_0_rgba(0,0,0,0.5)] transition-colors duration-300 ease-in-out [writing-mode:vertical-lr] hover:bg-[#71d9ff]"
      >
        Scroll
        <MaterialSymbolsKeyboardArrowDown className="h-4 w-4" />
      </Link>
    </div>
  );
}
