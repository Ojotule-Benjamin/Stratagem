import React from "react";
import { useLocation } from "react-router-dom";
import checkMark from "../../assets/svgs/checkMark.svg";
import CustomHero from "../../components/CustomHero";

const PracticeArea = () => {
  const location = useLocation();
  const { data } = location.state || {};

  return (
    <div>
      <CustomHero title={data.title} className=" bg-hero-practice-area" />
      <div className="px-0 lg:px-36">
        <div>
          <h3>OVERVIEW</h3>
          <p>{data.overview}</p>
        </div>

        {/* pros */}
        <div className="w-full flex items-start justify-start flex-col gap-12 mt-7">
          <h3 className="  font-playFairDisplay font-bold text-3xl leading-6 text-primary_color ">
            PROS
          </h3>
          <div className="w-10 border-b-[1px] border-secondary_color" />
          {data.pros.map((pro: any, index: any) => (
            <div
              key={pro.heading}
              className="w-full border-4 flex flex-col lg:flex-row items-center justify-start gap-0 lg:gap-20"
            >
              <div className="flex">
                <img src={checkMark} alt="check mark" />
                <h6 className=" ml-4 font-playFairDisplay font-semibold leading-4 tracking-wide text-xl text-secondary_color">
                  {pro.heading}
                </h6>
              </div>

              <div className=" w-6 border-[1px] border-secondary_color"></div>
              <p className=" font-montserrat font-normal text-base text-secondary_color leading-6 ">
                {pro.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeArea;
