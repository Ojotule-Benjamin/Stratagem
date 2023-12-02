import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "./Hero";
import AboutUs from "../../components/aboutUs/AboutUs";
import BookConsultation from "./BookConsultation";
import OurTeam from "../../components/ourTeam/OurTeam";
import Footer from "../../components/footer/Footer";
import OurPracticeArea from "../../components/ourPracticeArea/OurPracticeArea";
import CaseStudies from "../../components/caseStudies/CaseStudies";

const index = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <OurPracticeArea />
      <CaseStudies />
      <BookConsultation />
      <OurTeam />
      <Footer />
    </div>
  );
};

export default index;
