import React from "react";
import Button from "../Button";
import arrow from "../../assets/svgs/arrow.svg";
import Dedication from "../Dedication";

const AboutUs = () => {
  return (
    <div className=" w-full h-full bg-text_color_white p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-center gap-5">
      {/* left */}
      <div className=" w-full lg:w-1/2 px-0 md:px-20 lg:px-0 h-full flex flex-col items-center justify-center lg:items-start lg:justify-start ">
        <Dedication />
      </div>

      {/* right */}
      <div className=" w-full lg:w-1/2 h-full flex flex-col items-center justify-center lg:items-start lg:justify-start gap-4 lg:gap-2">
        <p className=" font-playFairDisplay font-bold text-base text-secondary_color">
          About Us
        </p>
        <h3 className=" font-playFairDisplay font-bold text-xl md:text-4xl text-center lg:text-start text-primary_color  pr-0 lg:pr-20">
          We are a Nigerian based law firm focused on excellence.
        </h3>
        <p className=" w-full font-montserrat font-normal text-base text-justify">
          STRATAGEM LP officially became a registered fully-service Law Firm in
          Nigeria on September 17th, 2008. Our operational reach extends to
          Abuja, Lagos, Makurdi, Lokoja, and Suleja.
          <br />
          <br />
          Our vision is to establish ourselves as a preeminent international law
          firm of exceptional standing. This aspiration is deeply embedded
          within the three core pillars of our strategic approach: Ensuring the
          alignment of our practice with client needs, setting a benchmark in
          the spectrum of legal advisory and services.
          <br />
          <br />
          Our commitment is to lead the industry across all significant legal
          domains. Prioritizing our clients to cultivate enduring relationships,
          becoming their trusted advisors over the long haul. Our focus is on
          nurturing successful partnerships that stand the test of time. We are
          dedicated to making our firm the ultimate workplace, where talent
          flourishes.
        </p>
        <Button
          text="Learn more"
          icon={<img src={arrow} alt="icon" />}
          className=" lg:w-36 lg:h-12 hover:bg-secondary_color hover:text-primary_color font-montserrat text-sm lg:text-sm font-medium"
        />
      </div>
    </div>
  );
};

export default AboutUs;
