import React from "react";
import CustomHero from "../../components/CustomHero";
import WelcomeMessage from "./WelcomeMessage";

const index = () => {
  return (
    <div>
      <CustomHero title="About The Firm" />
      <WelcomeMessage />
    </div>
  );
};

export default index;
