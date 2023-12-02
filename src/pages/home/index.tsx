import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "./Hero";
import AboutUs from "../../components/aboutUs/AboutUs";
import BookConsultation from "./BookConsultation";
import OurTeam from "../../components/ourTeam/OurTeam";
import Footer from "../../components/footer/Footer";
import OurPracticeArea from "../../components/ourPracticeArea/OurPracticeArea";

const index = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <OurPracticeArea />
      <BookConsultation />
      <OurTeam />
      <Footer />
    </div>
  );
};

export default index;
