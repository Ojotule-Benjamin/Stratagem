import React from "react";
import quotationFirst from "../../assets/svgs/quotationFirst.svg";
import quotationSecond from "../../assets/svgs/quotationFirst.svg";
import team_member1 from "../../assets/svgs/team_member1.svg";

const Quote = () => {
  return (
    <div className="w-full px-6 mt-10 mb-32 hidden lg:inline-block ">
      <h2 className=" w-full pb-5 font-playFairDisplay font-semibold text-secondary_color text-xl md:text-3xl lg:text-4xl text-center">
        Quote From The CEO
      </h2>
      <div className="w-full flex flex-col lg:flex-row items-center justify-center">
        <img src={team_member1} alt="" />
        <div className="w-full h-72 p-20 flex items-center justify-center bg-secondary_color relative -left-12">
          <p className=" font-montserrat font-normal text-lg inline-block text-text_color_white">
            <img src={quotationFirst} alt="quotation" />
            Our clients are at the heart of our work. This firm’s unique
            strength lies in incorporating our culture of inclusivity into our
            work to ensure success for our clients. This mindset is the force
            behind our strength and the reason I’m proud to call DLA Piper home.
            <img src={quotationSecond} alt="quotation" />
            <div className=" flex text-text_color_white">
              <p className=" text-primary_color">Ochuma Ejiga Benjamin,</p>{" "}
              <p>Managing Partner</p>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
