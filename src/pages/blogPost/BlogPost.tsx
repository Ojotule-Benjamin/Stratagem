import React from "react";
import { useLocation } from "react-router-dom";
import CustomHero from "../../components/CustomHero";
import { blogPosts } from "../../constants";

import SuggestedPost from "./SuggestedPost";
import SubscribeToLetter from "./SubscribeToLetter";

const BlogPost = () => {
  const location = useLocation();
  const { data } = location.state || {};

  return (
    <div>
      <CustomHero title={data.title} className=" bg-hero-blog" />
      <div className=" w-full px-5 lg:px-11 flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16">
        <div className=" w-full lg:w-[70%]">
          <p className=" font-montserrat  font-normal text-base lg:text-xl text-justify text-[#1F2732] ">
            {data.article}
          </p>
          <div className=" font-playFairDisplay font-medium text-xs text-primary_color mt-5">
            <p>Published on: | July 30, 2023</p>
          </div>
        </div>
        <div className=" w-full lg:w-[30%]">
          <h3 className=" font-playFairDisplay font-bold text-2xl text-[#121416] mb-5">
            The Latest
          </h3>
          {/* latest blog posts */}
          {blogPosts.slice(0, 4).map((suggestedPost, index) => (
            <SuggestedPost key={index} suggestedPost={suggestedPost} />
          ))}
          <SubscribeToLetter />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
