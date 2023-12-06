import React from "react";
import Hero from "./Hero";
import AboutUs from "../../components/aboutUs/AboutUs";
import BookConsultation from "./BookConsultation";
import OurTeam from "../../components/ourTeam/OurTeam";
import OurPracticeArea from "../../components/ourPracticeArea/OurPracticeArea";
import CaseStudies from "../../components/caseStudies/CaseStudies";
import Blog from "../../components/blog/Blog";
import ContactUs from "./ContactUs";

const index = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <OurPracticeArea />
      {/* case studies */}
      <div className=" w-full h-auto bg-text_color_white mt-10 lg:mt-20 mb-6 lg:mb-24 flex flex-col items-center justify-center">
        <h6 className=" font-montserrat font-normal text-base lg:text-lg text-[#382E3A]">
          Case Studies
        </h6>
        <h2 className=" px-0 lg:px-64 font-playFairDisplay font-bold text-center text-[#1E2E45] text-2xl lg:text-4xl ">
          {" "}
          Client Case Portfolio
        </h2>
        <h2 className="px-0 lg:px-64 font-playFairDisplay font-bold text-center text-[#1E2E45] text-2xl lg:text-4xl mb-7 lg:mb-14">
          Demonstrating Our Expertise
        </h2>
        <CaseStudies />
      </div>

      <BookConsultation />
      <OurTeam />
      <ContactUs />
      {/* blog */}
      <div className=" w-full h-auto bg-text_color_white mt-10 lg:mt-20 mb-6 lg:mb-7 flex flex-col items-center justify-center">
        <h6 className=" font-montserrat font-normal text-base lg:text-lg text-[#382E3A]">
          Blog
        </h6>
        <h2 className=" px-0 lg:px-64 font-playFairDisplay font-bold text-center text-[#1E2E45] text-2xl lg:text-4xl ">
          {" "}
          Latest News
        </h2>
        <h2 className="px-0 lg:px-64 font-playFairDisplay font-bold text-center text-[#1E2E45] text-2xl lg:text-4xl mb-7 lg:mb-14">
          Demonstrating Our Expertise
        </h2>
        <Blog />
      </div>
    </div>
  );
};

export default index;
