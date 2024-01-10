import React from "react";
import Button from "../Button";

export type CaseStudiesCardProps = {
  img: string;
  title: string;
  case: {
    aboutTheCase: string;
    clientsNeed: string;
    challenges: string;
    howWeWon: string;
  };
  onClick?: () => void;
  className?: string;
};

const CaseStudiesCard: React.FC<CaseStudiesCardProps> = (props) => {
  return (
    <div
      className={`w-full lg:w-96 h-auto px-6 md:px-24 lg:px-0 ${props.className}`}
    >
      <img
        src={props.img}
        alt="case studie"
        className=" w-full lg:w-96 h-full lg:h-96 object-contain md:object-cover"
      />
      <div className=" mt-3 md:mt-3 flex flex-col items-start justify-start gap-5 ">
        <h2 className=" font-playFairDisplay font-semibold text-2xl  text-text_color">
          {props.title}
        </h2>
        <p className="font-montserrat font-normal text-sm text-[#382E3A] overflow-hidden line-clamp-3">
          {props.case.aboutTheCase}
        </p>

        <Button
          onClick={props.onClick}
          text="See Details"
          className=" w-[183px] h-10 font-outfit font-medium text-sm bg-secondary_color text-text_color_white hover:bg-primary_color hover:text-secondary_color"
        />
      </div>
    </div>
  );
};

export default CaseStudiesCard;
