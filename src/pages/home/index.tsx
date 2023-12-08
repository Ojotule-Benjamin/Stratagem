import React from "react";
import Hero from "./Hero";
import AboutUs from "../../components/aboutUs/AboutUs";
import BookConsultation from "./BookConsultation";
import OurTeam from "../../components/ourTeam/OurTeam";
import OurPracticeArea from "../../components/ourPracticeArea/OurPracticeArea";
import CustomHeader from "../../components/CustomHeader";
import { blogPosts } from "../../constants";
import Blog from "../../components/blog/Blog";
import ContactUs from "./ContactUs";
import { caseStudies } from "../../constants";
import CaseStudiesCard from "../../components/caseStudies/CaseStudiesCard";
import BlogPostCard from "../../components/blog/BlogPostCard";

const index = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <OurPracticeArea />
      {/* case studies */}
      <CustomHeader
        name="Case Studies"
        title="Case Studies"
        description=" Demonstrating Our Expertise"
      >
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-20 lg:mb-44">
          {caseStudies.slice(0, 3).map((caseStudy) => (
            <CaseStudiesCard
              key={caseStudy.id}
              title={caseStudy.title}
              img={caseStudy.img}
              case={caseStudy.case}
            />
          ))}
        </div>
      </CustomHeader>

      <BookConsultation />

      <OurTeam />
      <ContactUs />
      {/* blog */}
      <CustomHeader
        name="Blog"
        title=" Latest News"
        description="Demonstrating Our Expertise"
      >
        <Blog>
          {blogPosts.slice(0, 3).map((blogPost) => (
            <BlogPostCard
              key={blogPost.id}
              id={blogPost.id}
              title={blogPost.title}
              img={blogPost.img}
              article={blogPost.article}
            />
          ))}
        </Blog>
      </CustomHeader>
    </div>
  );
};

export default index;
