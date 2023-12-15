import React from "react";
import CustomHero from "../../components/CustomHero";
import WelcomeMessage from "./WelcomeMessage";
import OurPracticeArea from "../../components/ourPracticeArea/OurPracticeArea";

const index = () => {
  return (
    <div>
      <CustomHero title="About The Firm" />
      <WelcomeMessage />
      <OurPracticeArea />
    </div>
  );
};

export default index;
