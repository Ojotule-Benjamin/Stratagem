import React from "react";

type CustomHeroProps = {
  title: string;
  className?: string;
};

const CustomHero: React.FC<CustomHeroProps> = ({ title, className }) => {
  return (
    <div
      className={`w-full h-[calc(100vh/1.5)] flex items-center justify-center ${className}`}
    >
      <div className=" h-[170px] border-r-[5px] border-primary_color mr-9"></div>
      <div className="  flex flex-col items-center justify-center">
        <h6 className=" font-montserrat font-medium text-lg text-text_color_white leading-4 tracking-[3.6px] uppercase mb-5">
          Stratagem LP
        </h6>
        <h1 className="max-w-[700px] max-h-40 line-clamp-2 overflow-hidden font-playFairDisplay font-semibold text-7xl text-primary_color tracking-[3px] uppercase text-center ">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default CustomHero;
