import React from "react";
import chickenafe from "../components/images/chickenafe.png";
import chickenspot from "../components/images/chickenspot.png";
import Easygoo from "../components/images/Easygoo.png";
import leRoyalBondy from "../components/images/leRoyalBondy.png";
import maxinChicken from "../components/images/maxinChicken.png";
import Subway from "../components/images/Subway.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const LogoSlider = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={10}
      slidesPerGroup={3}
      loop={true}
      loopFillGroupWithBlank={false}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false
      }}
      breakpoints={{
        1024: {
          slidesPerView: 5,
          spaceBetween: 50
        }
      }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide>
        <img src={chickenafe} alt="Logo" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={chickenspot} alt="Logo" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Easygoo} alt="Logo" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={leRoyalBondy} alt="Logo" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={maxinChicken} alt="Logo" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Subway} alt="Logo" />
      </SwiperSlide>
    </Swiper>
  );
};

export default LogoSlider;
