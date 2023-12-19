import React from "react";
import CustomHero from "../../components/CustomHero";
import OurPracticeArea from "../../components/ourPracticeArea/OurPracticeArea";
import OurTeam from "../../components/ourTeam/OurTeam";

const index = () => {
  return (
    <div>
      <CustomHero title="PRACTICE AREAS" className="bg-hero-practice-area" />
      <OurPracticeArea />
      <OurTeam />
    </div>
  );
};

export default index;
