import React from "react";

import team_member1 from "../../assets/svgs/team_member1.svg";

const Quote = () => {
  return (
    <div className="w-full px-6 mt-10 mb-32 hidden lg:inline-block ">
      <h2 className=" w-full pb-5 font-playFairDisplay font-semibold text-secondary_color text-xl md:text-3xl lg:text-4xl text-center">
        Quote From The CEO
      </h2>
      <div className="w-full flex flex-col lg:flex-row items-center justify-center">
        <img src={team_member1} alt="" />

        <div className="container w-full h-72 p-20 flex flex-col items-start justify-start bg-secondary_color relative -left-12">
          <h3 className="second font-montserrat font-normal text-xl text-white">
            Our clients are at the heart of our work. This firm’s unique
            strength lies in incorporating our culture of inclusivity into our
            work to ensure success for our clients. This mindset is the force
            behind our strength and the reason I’m proud to call DLA Piper home.
          </h3>
          <h1 className=" font-montserrat font-bold text-base ml-10 mt-4 text-white">
            Ejiga Benjamin Ochuma,{" "}
            <span className=" text-primary_color">Managing Partner</span>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Quote;
