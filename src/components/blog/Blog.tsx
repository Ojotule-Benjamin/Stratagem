import React from "react";
import BlogPostCard from "./BlogPostCard";

const Blog = () => {
  return (
    <div className=" w-full h-auto bg-text_color_white px-0 lg:px-0 py-20 lg:py-28 flex flex-col items-center justify-center">
      <h6 className=" font-montserrat font-normal text-base lg:text-lg text-[#382E3A]">
        Blog
      </h6>
      <h2 className=" px-0 lg:px-64 font-playFairDisplay font-bold text-center text-[#1E2E45] text-2xl lg:text-4xl ">
        {" "}
        Latest News
      </h2>
      <h2 className=" px-0 lg:px-64 font-playFairDisplay font-bold text-center text-[#1E2E45] text-2xl lg:text-4xl mb-6">
        Demonstrating Our Expertise
      </h2>

      <div className="w-full flex items-center justify-center flex-wrap basis-1 gap-14 md:gap-6">
        <BlogPostCard />
        <BlogPostCard />
        <BlogPostCard />
      </div>
    </div>
  );
};

export default Blog;
