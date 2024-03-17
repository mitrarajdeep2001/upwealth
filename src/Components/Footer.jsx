import React from "react";
import logo from "../images/logo.png";
// import socialMediaImg from "../assets/social_media_img.png";
import fbImg from "../images/fb.png";
import instaImg from "../images/Insta.png";
import linkedinImg from "../images/linkedin.png";
import twitterImg from "../images/Twitter.png";

const Footer = () => {
  return (
    <div className="footer-shadow">
      <div className="lg:w-[78%] lg:mx-auto md:mx-10 mx-2 zoom-9">
        <div className="flex justify-between items-center gap-3 h-[100px]">
          <div>
            <img src={logo} width={"90%"} />
          </div>
          <ul className="flex gap-3 lg:gap-7 text-[10px] lg:text-[16px]">
            <li>Home</li>
            <li>Kaltech</li>
            <li>Insurance Life</li>
          </ul>
          <div className="flex">
            <button className="btn btn-hover">
              <img src={fbImg} />
            </button>
            <button className="btn btn-hover">
              <img src={instaImg} />
            </button>
            <button className="btn btn-hover">
              <img src={linkedinImg} />
            </button>
            <button className="btn btn-hover">
              <img src={twitterImg} />
            </button>
          </div>
        </div>
        <div className="mx-auto lg:w-[300px] pb-3">
          <div className="bg-gray-300 h-[1px] w-44 relative left-[100px] md:left-[200px] lg:-left-[0px]"></div>
          <p className="font-medium text-[12px] mt-5 relative md:right-[40px] lg:right-[50px] w-full text-center lg:text-start">
            © 2022 - 2024 | Alrights reserved by Kaltech Designs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
