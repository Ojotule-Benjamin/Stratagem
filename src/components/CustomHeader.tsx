import React, { ReactNode } from "react";

interface CustomHeaderProps {
  name: string;
  title?: string;
  description?: string;
  children?: ReactNode;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  name,
  title,
  description,
  children,
}) => {
  return (
    <div className=" w-full h-auto bg-text_color_white mt-10 lg:mt-20 mb-6 lg:mb-7 flex flex-col items-center justify-center">
      <h6 className=" font-montserrat font-normal text-base lg:text-lg text-[#382E3A]">
        {name}
      </h6>
      <h2 className=" px-0 lg:px-64 font-playFairDisplay font-bold text-center text-text_color text-2xl lg:text-4xl ">
        {" "}
        {title}
      </h2>
      <h2 className="px-0 lg:px-64 font-playFairDisplay font-bold text-center text-text_color text-2xl lg:text-4xl mb-7 lg:mb-14">
        {description}
      </h2>
      {children}
    </div>
  );
};

export default CustomHeader;
