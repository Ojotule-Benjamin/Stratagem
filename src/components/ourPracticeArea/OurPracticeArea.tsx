import React from "react";
import OurPracticeAreaCard from "./OurPracticeAreaCard";
import { practiceAreas } from "../../constants";
import { useNavigate } from "react-router-dom";

const OurPracticeArea = () => {
  const navigate = useNavigate();

  const navigatetoPracticeArea = (title: string, data: any) => {
    navigate(`/practice-areas/practice-area/${title}`, { state: { data } });
  };
  return (
    <div className=" w-full h-auto bg-secondary_color px-0 lg:px-20 py-24 lg:py-28 flex flex-col items-center justify-center">
      <h2 className=" font-playFairDisplay font-bold text-2xl lg:text-4xl text-text_color_white mb-2 lg:mb-3">
        Our Practice Areas
      </h2>
      <p className=" font-montserrat font-normal text-xs text-primary_color px-10 md:px-32 lg:px-64 mb-7 text-center ">
        We are passionate about the law and providing successful outcomes for
        our clients. Our promise to all our clients is to offer the very best
        legal advice and to consistently exceed your expectations.
      </p>
      <div className="w-full flex items-center justify-center flex-wrap basis-1 gap-5">
        {practiceAreas.map((practiceArea) => (
          <OurPracticeAreaCard
            key={practiceArea.id}
            title={practiceArea.title}
            desc={practiceArea.desc}
            onClick={() =>
              navigatetoPracticeArea(practiceArea.title, practiceArea)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default OurPracticeArea;
