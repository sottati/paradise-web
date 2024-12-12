"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";

export const HomeSlider = () => {
  return (
    <Swiper
      className="w-full h-72 rounded-lg"
      modules={[Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true} // Permite que el slider sea infinito
    >
      <SwiperSlide className="bg-red-300 rounded-lg">
        <Image
          src="/general/general-001.jpeg"
          alt="Prueba"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-lg"
        />
      </SwiperSlide>
      <SwiperSlide className="bg-red-400 rounded-lg">
        <Image
          src="/general/general-002.jpeg"
          alt="Prueba"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-lg"
        />
      </SwiperSlide>
    </Swiper>
  );
};
