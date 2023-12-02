import React from "react";
import Button from "../Button";
import arrow from "../../assets/svgs/arrow.svg";
import blogImg1 from "../../assets/img/blogImg1.png";

const BlogPostCard = () => {
  return (
    <div className="w-full lg:w-96 h-auto px-6 md:px-24 lg:px-0 ">
      <img
        src={blogImg1}
        alt="case studies"
        className=" w-full h-full lg:h-[334px] object-contain md:object-cover"
      />
      <div className=" mt-2 md:mt-3 flex flex-col items-start justify-start gap-5 lg:gap-6 ">
        <h2 className=" font-playFairDisplay font-semibold text-lg lg:text-2xl text-text_color">
          How Can your Start Up hire a quality lawyer?
          <span className=" font-medium text-sm text-primary_color ml-5 lg:ml-5">
            Legal Advice
          </span>
          <span className=" text-xs border-[1px] border-t-0 border-r-0 border-primary_color mx-2"></span>
          <span className=" font-medium text-sm text-primary_color">
            July 15th 2023
          </span>
        </h2>

        <p className="font-montserrat font-normal text-sm text-[#382E3A] overflow-hidden line-clamp-7">
          Starting a new venture can be exciting and challenging. It is
          important that you hire a lawyer too as all companies, irrespective of
          their size needs legal representation. When you start your business,
          you will find that you need legal guidance at every step and at
          different phases of the business life, from the initial incorporation
          to raising capital for expansion to hiring employees, you need the
          services of a good lawyer. It goes without saying that most
          businessmen cannot handle the legal matters in a way that professional
          and competent lawyers can.
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
