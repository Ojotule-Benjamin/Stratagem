import React from "react";
import CaseStudiesCard from "./CaseStudiesCard";
import { caseStudies } from "../../constants";

const CaseStudies = () => {
  return (
    <div className=" w-full h-auto bg-text_color_white px-0 lg:px-20 py-16 lg:py-28 flex flex-col items-center justify-center">
      <h6 className=" font-montserrat font-normal text-base lg:text-lg text-[#382E3A]">
        Case Studies
      </h6>
      <h2 className=" px-0 lg:px-64 font-playFairDisplay font-bold text-center text-text_color text-2xl lg:text-4xl mb-2 lg:mb-6">
        Client Case Portfolio: Demonstrating Our Expertise
      </h2>

      <div className="w-full flex items-center justify-center flex-wrap basis-1 gap-10 md:gap-16">
        {caseStudies.map((caseStudy) => (
          <CaseStudiesCard
            key={caseStudy.id}
            title={caseStudy.title}
            img={caseStudy.img}
            case={caseStudy.case}
          />
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
