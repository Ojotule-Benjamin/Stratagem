import React from "react";
import CaseStudiesCard from "./CaseStudiesCard";
import { caseStudies } from "../../constants";

const CaseStudies = () => {
  return (
    <div className="w-full bg-text_color_white flex items-center justify-center flex-wrap basis-1 gap-10 md:gap-16 mb-7">
      {caseStudies.map((caseStudy) => (
        <CaseStudiesCard
          key={caseStudy.id}
          title={caseStudy.title}
          img={caseStudy.img}
          case={caseStudy.case}
        />
      ))}
    </div>
  );
};

export default CaseStudies;
