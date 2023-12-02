import React from "react";
import Button from "../Button";

type OurPracticeAreaCardProps = {
  title: string;
  desc: string;
};

const OurPracticeAreaCard: React.FC<OurPracticeAreaCardProps> = (props) => {
  return (
    <div className="basis-80 h-[313px] p-5 bg-[#1A212C] border-none flex flex-col items-center justify-center">
      <h3 className=" font-playFairDisplay font-bold text-xl lg:text-2xl mb-3 text-text_color_white">
        {props.title}
      </h3>
      <p className=" font-montserrat font-normal text-sm mb-6 text-center text-[#D7D7D7]">
        {props.desc}
      </p>
      <div className="w-full border-[0.5px] border-[#3A4553] mb-6"></div>
      <Button
        text="Learn More"
        className=" w-[133px] h-11 font-outfit font-medium text-sm bg-secondary_color text-text_color_white hover:bg-primary_color hover:text-secondary_color"
      />
    </div>
  );
};

export default OurPracticeAreaCard;
