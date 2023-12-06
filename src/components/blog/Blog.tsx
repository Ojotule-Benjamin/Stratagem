import React from "react";
import BlogPostCard from "./BlogPostCard";
import { blogPosts } from "../../constants";

const Blog = () => {
  return (
    <div className="w-full flex items-center justify-center flex-wrap basis-1 gap-14 md:gap-6 mb-7">
      {blogPosts.slice(0, 3).map((blogPost) => (
        <BlogPostCard
          key={blogPost.id}
          id={blogPost.id}
          title={blogPost.title}
          img={blogPost.img}
          article={blogPost.article}
        />
      ))}
    </div>
  );
};

export default Blog;
