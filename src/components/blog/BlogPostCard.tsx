import React from "react";
import Button from "../Button";

type blogPostCardProps = {
  id: number;
  img: string;
  title: string;
  article: string;
};

const BlogPostCard: React.FC<blogPostCardProps> = ({
  id,
  img,
  title,
  article,
}) => {
  return (
    <div className="w-full lg:w-96 h-auto px-6 md:px-24 lg:px-0 ">
      <img
        src={img}
        alt="case studies"
        className=" w-full h-full lg:h-[334px] object-contain md:object-cover"
      />
      <div className=" mt-2 md:mt-3 flex flex-col items-start justify-start gap-5 lg:gap-6 ">
        <h2 className=" h-14 md:h-16 font-playFairDisplay font-semibold text-lg md:text-xl lg:text-2xl text-text_color line-clamp-4">
          {title}
          <span className=" font-medium text-sm text-primary_color ml-5 lg:ml-5">
            Legal Advice
          </span>
          <span className=" text-xs border-[1px] border-t-0 border-r-0 border-primary_color mx-2"></span>
          <span className=" font-medium text-sm text-primary_color">
            July 15th 2023
          </span>
        </h2>

        <p className="font-montserrat font-normal text-sm text-[#382E3A] overflow-hidden line-clamp-4">
          {article}
        </p>
        <Button
          text="Read More"
          className=" w-[183px] h-10 font-outfit font-medium text-sm bg-secondary_color text-text_color_white hover:bg-primary_color hover:text-secondary_color"
        />
      </div>
    </div>
  );
};

export default BlogPostCard;
