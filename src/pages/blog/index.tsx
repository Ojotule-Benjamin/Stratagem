import React from "react";
import Blog from "../../components/blog/Blog";
import CustomHero from "../../components/CustomHero";
import { blogPosts } from "../../constants";
import BlogPostCard from "../../components/blog/BlogPostCard";

const index = () => {
  return (
    <div className="">
      <CustomHero title="Recent BLOG" />
      <Blog className=" mt-[38px] lg:mt-[77px]">
        {blogPosts.map((blogPost) => (
          <BlogPostCard
            key={blogPost.id}
            id={blogPost.id}
            title={blogPost.title}
            img={blogPost.img}
            article={blogPost.article}
          />
        ))}
      </Blog>
    </div>
  );
};

export default index;
