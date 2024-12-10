"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export const HomeSlider = () => {
  return (
    <Swiper
      className="w-full h-72 rounded-lg"
      spaceBetween={30}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="bg-red-300 rounded-lg">Slide 1</SwiperSlide>
      <SwiperSlide className="bg-red-400 rounded-lg">Slide 2</SwiperSlide>
      <SwiperSlide className="bg-red-500 rounded-lg">Slide 3</SwiperSlide>
      <SwiperSlide className="bg-red-600 rounded-lg">Slide 4</SwiperSlide>
    </Swiper>
  );
};
