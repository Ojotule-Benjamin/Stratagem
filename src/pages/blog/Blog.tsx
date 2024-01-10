import React, { useState } from "react";
import CustomHero from "../../components/CustomHero";
import { blogPosts } from "../../constants";
import BlogPostCard, {
  blogPostCardProps,
} from "../../components/blog/BlogPostCard";
import { useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Blog = () => {
  const navigate = useNavigate();
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const navigatetoBlogPost = (title: string, data: blogPostCardProps) => {
    navigate(`/blog/blog-post/${title}`, { state: { data } });
  };

  return (
    <div className="w-full h-full flex items-center justify-center flex-wrap gap-14 md:gap-7 mb-5 md:mb-10">
      <CustomHero title="Recent BLOG" className=" bg-hero-blog" />
      <div className=" bg-text_color_white w-full flex items-center justify-center flex-wrap gap-5 md:gap-7 ">
        {blogPosts.slice(startIndex, endIndex).map((blogPost) => {
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
      <Stack
        spacing={2}
        className="w-auto mt-10 lg:mt-10 text-white rounded bg-primary_color"
      >
        <Pagination
          count={Math.ceil(blogPosts.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          size="large"
        />
      </Stack>
    </div>
  );
};

export default Blog;
