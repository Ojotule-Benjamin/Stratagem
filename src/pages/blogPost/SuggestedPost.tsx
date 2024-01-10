import React from "react";
import ReadingTime from "../../components/ReadingTime";
import readTime from "../../assets/svgs/readTime.svg";
import { useNavigate } from "react-router-dom";

interface SuggestedPostProps {
  suggestedPost: {
    id: number;
    img: string;
    title: string;
    article: string;
    onClick?: () => void;
  };
}

const SuggestedPost: React.FC<SuggestedPostProps> = ({ suggestedPost }) => {
  const navigate = useNavigate();

  const navigatetoBlogPost = () => {
    // Call the onClick function if it is provided
    if (suggestedPost.onClick) {
      suggestedPost.onClick();
    }

    navigate(`/blog/blog-post/${suggestedPost.title}`, {
      state: { data: suggestedPost },
    });
  };
  return (
    <div
      onClick={navigatetoBlogPost}
      className={`w-full h-40 border border-solid border-[#F2EEEE] bg-[#F2EEEE] shadow-lg mb-10 flex  items-center justify-center cursor-pointer relative ${
        suggestedPost.id === 0 ? "bg-none " : "bg-white "
      } `}
    >
      {suggestedPost.id === 0 && (
        <img
          src={suggestedPost.img}
          alt=""
          className="w-full h-full object-cover"
        />
      )}
      <div
        className={`h-full py-3 lg:py-5 font-playFairDisplay font-semibold text-base flex flex-col items-start justify-between absolute left-2 right-2 lg:left-6 lg:right-6 text-white`}
      >
        <h3
          className={`${
            suggestedPost.id === 0 ? "text-white" : "text-[#121416]"
          } line-clamp-3`}
        >
          {suggestedPost.title}
        </h3>
        <div className=" w-full flex items-center justify-between text-sm">
          <span
            className={`${
              suggestedPost.id === 0 ? "text-[#ffffffcd]" : "text-[#121416]"
            }`}
          >
            September 06, 2023
          </span>
          <span className="w-5 h-[1px] border-[1px] border-[#121416]"></span>
          <div className=" flex items-center justify-center">
            <img src={readTime} alt="" />
            <ReadingTime content={suggestedPost.article} />
          </div>
        </div>
      </div>
      <div className="w-full h-full opacity-70 absolute top-0 left-0 mix-blend-color bg-[#00000084]"></div>
    </div>
  );
};

export default SuggestedPost;
