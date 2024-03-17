import React from "react";
import heroImg from "../images/hero_img.png";
import heroLeftImg from "../images/hero_img_left.png";
import arrowDownImg from "../images/arrow-down.png";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../Carousal.css";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

import slide_image_1 from "../images/1.png";
import slide_image_2 from "../images/2.png";
import slide_image_3 from "../images/3.png";
import slide_image_4 from "../images/4.png";
import slide_image_5 from "../images/5.png";

const Hero = () => {
  return (
    <div className="container mt-28 lg:w-[1200px] mx-auto zoom-7">
      <div className="row mx-4">
        <div className="col-5">
          <div className="flex flex-col lg:ml-[80px] zoom-9">
            <img src={heroLeftImg} alt="hero-left-img" width={"100%"} />
          </div>
          <div className="flex flex-col">
            <button className="subscribe-now-btn p-[10px_20px] lg:p-[10px_40px] text-[14px] lg:text-[18] w-full lg:w-[200px] lg:ml-[80px]">
              Subscribe Now!
            </button>
            <button className="w-[76px] h-[76px] lg:ml-[80px]">
              <img
                src={arrowDownImg}
                alt="arrow-down"
                className="object-cover w-[50px] h-[50px]"
              />
            </button>
          </div>
        </div>
        <div className="col-6 normalzoom px-[80px]">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            // centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }} // Autoplay with a delay of 2000ms (2 seconds)
            className="swiper_container"
          >
            <SwiperSlide>
              <img src={slide_image_1} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_2} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_3} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_4} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_5} alt="slide_image" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
