"use client";

import Slider from "react-slick";
import wallpaper from "../assets/ameer-basheer-gV6taBJuBTk-unsplash.jpg";
import wallpaper2 from "../assets/cristina-gottardi-CSpjU6hYo_0-unsplash.jpg";
import wallpaper3 from "../assets/john-fowler-RsRTIofe0HE-unsplash.jpg";
import wallpaper4 from "../assets/lance-asper-zYKkpnBRpTw-unsplash.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Image from "next/image";

const Slick = () => {
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    infinite: true,
  };

  return (
   <div className= "max-h-[80vh]">
     <div className="w-[100%] mb-12  h-[50vh] md:h-[80vh] z-0 relative">
      <button
        className="rotate-180 absolute z-50 top-[25%] px-1 md:px-4 py-16 md:py-32 md:opacity-0 opacity-40 transition bg-slate-300 md:hover:bg-slate-300 md:hover:opacity-80"
        onClick={sliderRef?.slickPrev}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          stroke="black"
          height="40"
          viewBox="0 -960 960 960"
          width="40"
        >
          <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
        </svg>
      </button>
      <Slider ref={(slider) => setSliderRef(slider)} {...settings}>
        <div className="bg-black">
          <Image
            className="object-fill h-[50vh] md:h-[80vh] w-full"
            src={wallpaper}
            priority={true}
            alt="Wallpaper"
          />
        </div>
        <div className="bg-black">
          <Image
            className="object-fill h-[50vh] md:h-[80vh] w-full"
            src={wallpaper2}
            alt="Wallpaper"
          />
        </div>
        <div className="bg-black">
          <Image
            className="object-fill h-[50vh] md:h-[80vh] w-full"
            src={wallpaper3}
            alt="Wallpaper"
          />
        </div>
        <div className="bg-black">
          <Image
            className="object-fill h-[50vh] md:h-[80vh] w-full"
            src={wallpaper4}
            alt="Wallpaper"
          />
        </div>
      </Slider>
      <button
        className="absolute z-50 top-[25%] right-0 md:hover:cursor-pointer px-1 md:px-4 py-16 md:py-32 md:opacity-0 opacity-40 transition bg-slate-300 md:hover:bg-slate-300 md:hover:opacity-80"
        onClick={sliderRef?.slickNext}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          stroke="black"
          height="40"
          viewBox="0 -960 960 960"
          width="40"
        >
          <path d="m242-200 200-280-200-280h98l200 280-200 280h-98Zm238 0 200-280-200-280h98l200 280-200 280h-98Z" />
        </svg>
      </button>
    </div>
   </div>
  );
};

export default Slick;
