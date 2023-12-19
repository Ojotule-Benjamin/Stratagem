import React from "react";
import Marquee from "react-fast-marquee";
import mission1 from "../../assets/svgs/mission1.svg";
import mission2 from "../../assets/svgs/mission2.svg";
import mission3 from "../../assets/svgs/mission3.svg";

const OurMission = () => {
  const images = [mission1, mission2, mission3];
  return (
    <div className=" w-full flex flex-col items-center justify-center">
      <h2 className=" w-full pb-3 font-playFairDisplay font-semibold text-secondary_color text-xl md:text-3xl lg:text-4xl text-center">
        Our Mission
      </h2>

      <p className=" px-8 md:px-16 lg:px-44 font-montserrat font-normal text-center text-base text-text_color_blackII leading-6 ">
        At Stratagem LP, we are defined by our dedication to legal mastery and
        unwavering client support. With a proven history of successful outcomes
        and a commitment to upholding justice, we stand as a reliable partner on
        your legal journey. Our team of seasoned experts merges profound
        knowledge with a personalized approach, ensuring tailored solutions that
        align with your unique needs. Discover how we are reshaping the legal
        landscape, one case at a time.
      </p>
      <Marquee loop={0} autoFill={true} pauseOnClick={true}>
        <div className=" w-full h-auto flex items-center justify-center">
          {images.map((image) => {
            return (
              <img src={image} alt="" className="w-96 h-96 mx-4" key={image} />
            );
          })}
        </div>
      </Marquee>
    </div>
  );
};

export default OurMission;
