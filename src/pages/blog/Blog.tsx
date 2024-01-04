import React from "react";
import CustomHero from "../../components/CustomHero";
import { blogPosts } from "../../constants";
import BlogPostCard, {
  blogPostCardProps,
} from "../../components/blog/BlogPostCard";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  const navigatetoBlogPost = (title: string, data: blogPostCardProps) => {
    navigate(`/blog/blog-post/${title}`, { state: { data } });
  };

  return (
    <div className="w-full h-96 flex items-center justify-center flex-wrap gap-14 md:gap-7 mb-5 md:mb-10">
      <CustomHero title="Recent BLOG" className=" bg-hero-blog" />
      <div className=" bg-text_color_white w-full flex items-center justify-center flex-wrap gap-14 md:gap-7 ">
        {blogPosts.map((blogPost) => {
          return (
            <BlogPostCard
              key={blogPost.id}
              id={blogPost.id}
              title={blogPost.title}
              img={blogPost.img}
              article={blogPost.article}
              onClick={() => navigatetoBlogPost(blogPost.title, blogPost)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
