import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import CustomHero from "../../components/CustomHero";
import { blogPosts } from "../../constants";
import SuggestedPost from "./SuggestedPost";
import SubscribeToLetter from "./SubscribeToLetter";
import Button from "../../components/Button";
import Comments from "./Comments";

type commentsProps = {
  user: string;
  comment: string;
};

const BlogPost = () => {
  const location = useLocation();
  const { data } = location.state || {};

  const [newComment, setNewComment] = useState({
    userName: "",
    comment: "",
  });
  const [comments, setComments] = useState<commentsProps[]>(
    data.comments || []
  );
  const userNameInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewComment((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePost = (e: React.SyntheticEvent) => {
    e.preventDefault();
    // Add the new comment to the beginning of the array
    setComments((prevComments) => [
      { user: newComment.userName, comment: newComment.comment },
      ...prevComments,
    ]);
    // Clear the input fields
    setNewComment({ userName: "", comment: "" });
  };

  const handleReply = () => {
    // Focus on the userName input when the "Reply" button is clicked
    if (userNameInputRef.current) {
      userNameInputRef.current.focus();
      // Scroll to the focused input
      userNameInputRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  };

  return (
    <div>
      <CustomHero title={data.title} className=" bg-hero-blog" />
      <div className=" w-full px-5 md:px-5 lg:px-11 pb-20 flex flex-col lg:flex-row items-start justify-between gap-16 md:gap-5 lg:gap-16">
        <div className=" w-full lg:w-[70%]">
          <p className=" font-montserrat  font-normal text-base text-justify text-[#1F2732] ">
            {data.article}
          </p>
          <div className=" font-playFairDisplay font-medium text-xs text-primary_color mt-5">
            <p>Published on: | July 30, 2023</p>
          </div>
          <div className="w-full flex flex-col items-start justify-start gap-5 lg:gap-7 mt-5 lg:mt-10">
            <h2 className=" font-montserrat font-normal text-xl lg:text-3xl text-[#1F2732]">
              Comments
            </h2>
            <div className=" w-full flex flex-col lg:flex-row items-start justify-start gap-5">
              <input
                ref={userNameInputRef}
                name="userName"
                value={newComment.userName}
                onChange={handleChange}
                className=" w-full lg:w-40 h-10 border-[1px] rounded-md p-4 border-[#00000080] font-montserrat font-normal text-sm text-[#1F2732] outline-none"
                placeholder="Username..."
              />
              <input
                name="comment"
                value={newComment.comment}
                onChange={handleChange}
                className=" w-full lg:w-96 h-10 border-[1px] rounded-md p-4 border-[#00000080] font-montserrat font-normal text-sm text-[#1F2732] outline-none"
                placeholder="Your Comment..."
              />
              <Button
                onClick={handlePost}
                text="Comment"
                className=" w-[133px] h-10 border-[1px] rounded-md p-4 border-[#00000080] font-montserrat font-normal text-sm bg-black text-white"
              />
            </div>

            {/* Display all comments */}
            {comments.map((comment, index) => (
              <div key={index} className=" w-full">
                <Comments comments={comment} onReply={handleReply} />
              </div>
            ))}
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
