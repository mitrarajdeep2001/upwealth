import React from "react";
import arrowDownImg from "./images/arrow-down.png";
// import contactBtnSectionImg from "./assets/contact-btn-section.png";
import chatBtnImg from "./images/chat-btn.png";
import callBtnImg from "./images/call-btn.png";
import emailBtnImg from "./images/email-btn.png";
import Navbar from "./Components/Navbar";

const ContactForm = () => {
  return (
    <>
      <div>
        <form
          data-aos="flip-up"
          className="w-[500px] h-[400px] mx-auto mt-10 p-5 contact-form-box-shadow rounded-md text-center bg-[#F0F0F3] zoom-7"
        >
          <h2 className="text-[28px] contact-form-h2 font-bold uppercase text-center">
            Contact our friendly team
          </h2>
          <p className="text-center text-[14px] text-[#202020]">
            Let us know how we can help
          </p>
          <div className="mt-10">
            <div className="flex justify-center gap-5">
              <input
                type="text"
                placeholder="First Name"
                className="p-2 rounded-lg contact-form-input-box-shadow bg-transparent"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-2 rounded-lg contact-form-input-box-shadow bg-transparent"
              />
            </div>
            <div className="flex justify-center gap-5 mt-5">
              <input
                type="text"
                placeholder="First Name"
                className="p-2 rounded-lg contact-form-input-box-shadow bg-transparent"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-2 rounded-lg contact-form-input-box-shadow bg-transparent"
              />
            </div>
            <div className="w-[408px] mx-auto mt-5">
              <textarea className="w-full p-2 rounded-lg contact-form-input-box-shadow bg-transparent resize-none" />
              <button className="btn btn-hover mt-5 contact-form-box-shadow w-[150px] h-[40px] rounded-md text-center font-[600]">
                Submit
              </button>
            </div>
          </div>
        </form>
        <button className="btn btn-hover absolute right-[160px] md:right-[50px] md:bottom-[0px] lg:right-[100px] lg:bottom-[0px] xl:right-[200px] xl:bottom-[0px]">
          <img src={arrowDownImg} width={50} height={50} />
        </button>
        <div className="lg:w-[80%] md:w-[87%] md:mx-auto my-44 mx-3 flex gap-10 items-center zoom-7 bg-[#F0F0F3]">
          <div className="w-[50%]">
            <h2 className="font-bold text-xl lg:text-3xl mb-3">
              Get in touch with Upwealth magazine
            </h2>
            <p className="text-[14px] lg:w-[320px]">
              If you have any questions regarding subscriptions, or how to
              feature or advertise in our magazine, don't hesitate to get in
              touch
            </p>
          </div>
          <div className="w-[50%] flex justify-end gap-8">
            <div className="flex">
              <img
                src={chatBtnImg}
                className="w-[90px] lg:w-[150px] btn btn-hover"
              />
              <img
                src={callBtnImg}
                className="-ml-10 w-[90px] lg:w-[150px] btn btn-hover"
              />
            </div>
            <img
              src={emailBtnImg}
              className="w-[90px] lg:w-[150px] btn btn-hover"
            />
          </div>
        </div>
        {/* <div>
        <img src={contactBtnSectionImg}/>
      </div> */}
      </div>
    </>
  );
};

export default ContactForm;
