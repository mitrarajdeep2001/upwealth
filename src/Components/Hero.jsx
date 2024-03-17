import heroLeftImg from "../images/hero_img_left.png";
import arrowDownImg from "../images/arrow-down.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "../carousal.css";

import { EffectCoverflow, Autoplay } from "swiper/modules";

import slide_image_1 from "../images/slide_1.png";
import slide_image_2 from "../images/slide_2.png";
import slide_image_3 from "../images/slide_3.png";
import slide_image_4 from "../images/slide_4.png";
import slide_image_5 from "../images/slide_5.png";
import { useMediaQuery } from "@mui/material";

const Hero = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className="flex flex-col lg:flex-row lg:w-[78%] mx-3 md:mx-10 lg:mx-auto mt-10">
      <div className="lg:w-[40%] zoom-9">
        <div className="flex flex-col items-end zoom-9">
          <img src={heroLeftImg} alt="hero-left-img" width={"100%"} />
        </div>
        <div className="flex flex-col">
          <button className="subscribe-now-btn btn btn-hover p-[10px_20px] lg:p-[10px_40px] text-[14px] lg:text-[18] w-40 lg:w-52">
            Subscribe Now!
          </button>
          <button className="w-[76px] h-[76px] btn btn-hover">
            <img
              src={arrowDownImg}
              alt="arrow-down"
              className="object-cover w-[50px] h-[50px]"
            />
          </button>
        </div>
      </div>
      <div className="lg:w-[60%]">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={isMobile ? 2 : 3}
          spaceBetween={"-15"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          modules={[EffectCoverflow, Autoplay]}
          autoplay={{
            delay: 1500,
            // disableOnInteraction: true,
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
  );
};

export default Hero;
