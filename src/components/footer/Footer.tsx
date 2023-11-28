import React from "react";
import facebook from "../../assets/svgs/facebook.svg";
import linkedIn from "../../assets/svgs/linkedIn.svg";
import twitter from "../../assets/svgs/twitter.svg";
import instagram from "../../assets/svgs/instagram.svg";
import phone from "../../assets/svgs/phone.svg";
import location from "../../assets/svgs/location.svg";
import email from "../../assets/svgs/email.svg";

const Footer = () => {
  return (
    <div className=" w-full h-auto lg:h-[477px] px-4 md:px-6 lg:px-32 py-10 lg:py-[72px] bg-secondary_color flex flex-col items-center justify-center">
      <div className=" w-full h-auto py-5 md:py-9 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-5 lg:gap-2 border-2 border-white border-l-0 border-r-0">
        <div className="w-full h-full flex flex-col items-center lg:items-start justify-between gap-1 lg:gap-4">
          <h2 className=" font-montserrat font-bold text-lg lg:text-base text-text_color_white ">
            About Us
          </h2>
          <p className=" font-montserrat font-normal text-sm text-center lg:text-start text-text_color_white">
            STRATAGEM LEGAL PRACTITIONERS officially became a registered
            full-service Law Firm in Nigeria on September 17th, 2008.{" "}
          </p>
          <div className=" flex items-start justify-center gap-3 ">
            <img
              src={facebook}
              alt="facebook icon"
              className="cursor-pointer"
            />
            <img
              src={linkedIn}
              alt="linkedIn icon"
              className="cursor-pointer"
            />
            <img src={twitter} alt="twitter icon" className="cursor-pointer" />
            <img
              src={instagram}
              alt="instagram icon"
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="w-full h-full flex flex-col items-center lg:items-start justify-center lg:justify-start gap-1 lg:gap-4">
          <h2 className=" font-montserrat font-bold text-lg lg:text-base text-text_color_white ">
            Services
          </h2>
          <div className=" flex flex-row lg:flex-col items-start justify-start gap-4 font-montserrat font-normal text-sm text-text_color_white">
            <span>Arbitration</span>
            <span>Intellectual Property</span>
            <span>Regulatory Compliance</span>
            <span>General Lawyer</span>
          </div>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center lg:items-start lg:justify-start gap-1 lg:gap-4">
          <h2 className=" font-montserrat font-bold text-lg lg:text-base text-text_color_white ">
            Page
          </h2>
          <div className=" flex flex-row lg:flex-col items-start justify-start gap-3 font-montserrat font-normal text-sm text-text_color_white">
            <span>Home</span>
            <span> About Us</span>
            <span>Cases </span>
            <span> Blog</span>
            <span>Contact</span>
          </div>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center lg:items-start lg:justify-start gap-1 lg:gap-4">
          <h2 className=" font-montserrat font-bold text-lg lg:text-base text-text_color_white ">
            Links
          </h2>
          <div className=" flex lex-row lg:flex-col items-start justify-start gap-4 font-montserrat font-normal text-sm text-text_color_white">
            <span>Term of Use</span>
            <span>Privacy Policy</span>
          </div>
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center lg:items-start lg:justify-start gap-1 lg:gap-4">
          <h2 className=" font-montserrat font-bold text-lg lg:text-base text-text_color_white ">
            Contact Us
          </h2>
          <div className=" flex flex-col items-center lg:items-start justify-center gap-3 font-montserrat font-normal text-sm text-text_color_white">
            <div className=" flex items-center justify-center gap-3">
              <img src={phone} alt="phone icon" />
              <span>08036362308</span>
            </div>
            <div className=" flex items-center justify-center gap-3">
              <img src={location} alt="location icon" />
              <span className=" text-center lg:text-start">
                No 6, Umuahia Close, Off Emeka Anyaoku Str, Area 11, Garki
                Abuja.
              </span>
            </div>
            <div className=" flex items-center justify-center gap-3">
              <img src={email} alt="email icon" />
              <span>legal@stratagemlp.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className=" font-montserrat font-normal text-sm text-text_color_white pt-2 lg:pt-9">
        <span>&copy;</span>
        <span>{new Date().getFullYear()}</span>{" "}
        <span>Stratagem LP All Right Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
