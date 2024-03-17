import React from "react";
import bgImg from "../images/about_us_bg.png";
import bgTextImg from "../images/about_us_bg_text.png";
import bgMainImg from "../images/about_us_bg_main.png";
import arrowDownImg from "../images/arrow-down.png";

const Aboutus = () => {
  return (
    <div data-aos="zoom-in" className="h-[450px] md:h-[650px] lg:h-[850px]">
      <div className="flex justify-center md:mx-10 lg:mx-0">
        <div className="relative zoom-9">
          <img src={bgImg} width={1000} className="relative -top-10" />
          <img
            src={bgTextImg}
            width={500}
            className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-10"
          />
          <img
            src={bgMainImg}
            alt="bg-main-img"
            className="absolute top-[30%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-20"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row border contact-form-box-shadow border-b-0 rounded-md lg:w-[97%] xl:w-[78%] lg:h-[300px] lg:mx-auto md:mx-5 p-5 lg:p-10 relative z-30 -top-[140px] lg:-top-[230px] bg-[#F0F0F3] zoom-9">
        <div className="border-0 lg:border-r-[3px] border-r-[#95909040]">
          <h3 className="uppercase lg:text-[16px] about-h3-text-color">
            About us
          </h3>
          <h2 className="lg:text-[38px] font-bold lg:w-[65%]">
            Grow your net worth by growing your network.
          </h2>
        </div>
        <div className="lg:w-[60%]">
          <p className=" text-[12px] lg:text-[14px] text-[#202020] about-p-fm p-0 lg:pl-10 flex items-center zoom-9">
            UpWealth magazine is a premier magazine for entrepreneurs by
            entrepreneurs. Do you ever wonder how entrepreneurs become debt-free
            and financially free while spending time with their loved ones and
            doing the thing they enjoy? Well, look no further. UPWealth has all
            the answers you need. Read from small to large business owners who
            have mastered the art of creating and maintaining business systems,
            sticking to their visions and persisting in their missions!The power
            of leveraging other businesses is unmatched.
          </p>
          <button className="ml-20 lg:mt-9 xl:mt-0 btn btn-hover">
            <img src={arrowDownImg} className="float-right" width={50} />
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Aboutus;
