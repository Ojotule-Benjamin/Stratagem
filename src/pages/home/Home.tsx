import React from "react";
import Hero from "./Hero";
import AboutUs from "../../components/aboutUs/AboutUs";
import BookConsultation from "./BookConsultation";
import OurTeam from "../../components/ourTeam/OurTeam";
import OurPracticeArea from "../../components/ourPracticeArea/OurPracticeArea";
import CustomHeader from "../../components/CustomHeader";
import { blogPosts } from "../../constants";
import ContactUs from "./ContactUs";
import { caseStudies } from "../../constants";
import CaseStudiesCard, {
  CaseStudiesCardProps,
} from "../../components/caseStudies/CaseStudiesCard";
import BlogPostCard, {
  blogPostCardProps,
} from "../../components/blog/BlogPostCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const navigateToCaseStudy = (
    title: string,
    data: CaseStudiesCardProps | blogPostCardProps
  ) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(
      `/case-studies/case-study/${title}` || `/blog/blog-post/${title}`,
      { state: { data } }
    );
  };

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
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mb-20 lg:mb-44 ">
          {caseStudies.slice(0, 2).map((caseStudy) => (
            <CaseStudiesCard
              key={caseStudy.id}
              title={caseStudy.title}
              img={caseStudy.img}
              case={caseStudy.case}
              onClick={() => navigateToCaseStudy(caseStudy.title, caseStudy)}
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
        <div className=" w-full flex items-center justify-center flex-wrap basis-1 gap-14 md:gap-7">
          {blogPosts.slice(0, 3).map((blogPost) => (
            <BlogPostCard
              key={blogPost.id}
              id={blogPost.id}
              title={blogPost.title}
              img={blogPost.img}
              article={blogPost.article}
              onClick={() => navigateToCaseStudy(blogPost.title, blogPost)}
            />
          ))}
        </div>
      </CustomHeader>
    </div>
  );
};

export default Home;
