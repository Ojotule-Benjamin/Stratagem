import React from "react";
import CustomHero from "../../components/CustomHero";
import OurPracticeArea from "../../components/ourPracticeArea/OurPracticeArea";
import OurTeam from "../../components/ourTeam/OurTeam";
import SearchPracticeArea from "./SearchPracticeArea";

const index = () => {
  return (
    <div>
      <CustomHero title="PRACTICE AREAS" className="bg-hero-practice-area" />
      <SearchPracticeArea />
      <OurPracticeArea />
      <OurTeam />
    </div>
  );
};

export default index;
