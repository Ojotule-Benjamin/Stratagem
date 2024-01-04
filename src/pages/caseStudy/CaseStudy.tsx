import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import CustomHero from "../../components/CustomHero";
import OurTeam from "../../components/ourTeam/OurTeam";
import lottie, { AnimationItem } from "lottie-web";
import Animation from "../../assets/lottie/Animation.json";

const CaseStudy = () => {
  const location = useLocation();
  const { data } = location.state || {};
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animation: AnimationItem | null = null;

    if (container.current) {
      animation = lottie.loadAnimation({
        animationData: Animation,
        autoplay: true,
        container: container.current,
        loop: true,
        renderer: "svg",
      });
    }

    // Cleanup on unmount
    return () => {
      if (animation) {
        animation.destroy();
      }
    };
  }, []);

  return (
    <div className=" bg-text_color_white ">
      <CustomHero title="CASE STUDY" className="bg-hero-case-study" />
      <div className=" w-full h-auto px-5 md:px-10 lg:px-12 flex flex-col items-center justify-center mt-12 lg:mt-24 ">
        <h3 className="w-full px-0 md:px-0 lg:px-56  font-playFairDisplay font-bold text-2xl md:text-4xl text-center text-secondary_color uppercase">
          {data.title}
        </h3>
        <div className=" w-full flex items-start justify-center mt-7 lg:mt-14">
          {/* left */}
          <div className=" w-full lg:w-3/5 pr-0 lg:pr-10 flex flex-col items-start justify-start gap-5 bg-text_color_white">
            {/* about case */}
            <div className="w-full flex flex-col items-center justify-center lg:items-start lg:justify-center">
              <h4 className=" font-playFairDisplay font-bold text-primary_color text-xl lg:text-4xl pb-2 md:pb-4">
                About The Case
              </h4>
              <p className=" font-montserrat font-normal text-sm lg:text-lg text-text_color_blackII text-justify">
                {data.case.aboutTheCase}
              </p>
            </div>
            {/* clients need */}
            <div className="w-full flex flex-col items-center justify-center lg:items-start lg:justify-center">
              <h4 className="font-playFairDisplay font-bold text-primary_color text-xl lg:text-4xl pb-2 md:pb-4">
                Clients Need
              </h4>
              <p className=" font-montserrat font-normal text-sm lg:text-lg text-text_color_blackII text-justify">
                {data.case.clientsNeed}
              </p>
            </div>
            {/* challenges in the case */}
            <div className="w-full flex flex-col items-center justify-center lg:items-start lg:justify-center">
              <h4 className=" font-playFairDisplay font-bold text-primary_color text-xl lg:text-4xl pb-2 md:pb-4">
                Challenges In The Case
              </h4>
              <p className=" font-montserrat font-normal text-sm lg:text-lg text-text_color_blackII text-justify">
                {data.case.challenges}
              </p>
            </div>
            {/* how we won */}
            <div className="w-full flex flex-col items-center justify-center lg:items-start lg:justify-center">
              <h4 className=" font-playFairDisplay font-bold text-primary_color text-xl lg:text-4xl pb-2 md:pb-4">
                How We Won
              </h4>
              <p className=" font-montserrat font-normal text-sm lg:text-lg text-text_color_blackII text-justify">
                {data.case.howWeWon}
              </p>
            </div>
          </div>
          {/* right */}
          <div className="hidden lg:flex flex-col items-center justify-center w-2/5 h-full gap-14">
            <div className="w-full h-[400px] ">
              <img
                src={data.img}
                alt=""
                className=" w-full h-full object-cover"
              />
            </div>
            <div
              ref={container}
              id="animation-container "
              className="w-full h-[800px] bg-[#000000]"
            ></div>
            <div className="w-full h-[400px] ">
              <img
                src={data.img}
                alt=""
                className=" w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <OurTeam />
    </div>
  );
};

export default CaseStudy;
