import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "./Hero";
import AboutUs from "../../components/aboutUs/AboutUs";
import BookConsultation from "./BookConsultation";
import OurTeam from "../../components/ourTeam/OurTeam";
import Footer from "../../components/footer/Footer";
import OurPracticeArea from "../../components/ourPracticeArea/OurPracticeArea";
import CaseStudies from "../../components/caseStudies/CaseStudies";
import Blog from "../../components/blog/Blog";
import ContactUs from "./ContactUs";

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
      <ContactUs />
      <Blog />
      <Footer />
    </div>
  );
};

export default index;
