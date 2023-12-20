import React from "react";
import CustomHero from "../../components/CustomHero";
import WelcomeMessage from "./WelcomeMessage";
import OurPracticeArea from "../../components/ourPracticeArea/OurPracticeArea";
import OurStory from "./OurStory";
import OurMission from "./OurMission";
import Quote from "./Quote";
import OurTeam from "../../components/ourTeam/OurTeam";

const index = () => {
  return (
    <div>
      <CustomHero title="About The Firm" className=" bg-hero-about" />
      <WelcomeMessage />
      <h1 className=" px-5 lg:px-36 py-8 lg:py-16 font-playFairDisplay font-bold text-xl md:text-3xl lg:text-5xl leading-normal text-center text-text_color_black">
        At <span className=" text-primary_color">Stratagem LP</span>, we
        redefine the role of lawyers by becoming your strategic allies,
        collaborating with you in your{" "}
        <span className=" text-primary_color">legal journey</span>.
      </h1>
      <OurStory />
      <OurMission />
      <Quote />
      <OurPracticeArea />
      <OurTeam />
    </div>
  );
};

export default index;
