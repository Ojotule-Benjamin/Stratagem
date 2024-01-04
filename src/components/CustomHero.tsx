import React from "react";

type CustomHeroProps = {
  title: string;
  className: string;
};

const CustomHero: React.FC<CustomHeroProps> = ({ title, className }) => {
  return (
    <div
      className={`w-full h-[calc(100vh/2.5)] lg:h-[calc(100vh/2)] mb-12 lg:mb-12 flex items-center justify-center bg-cover ${className}`}
    >
      <div className=" hidden lg:flex h-14 lg:h-24 border-r-[5px] border-primary_color mr-5 lg:mr-9"></div>
      <div className="  flex flex-col items-center justify-center">
        <h6 className=" font-montserrat font-medium text-xs lg:text-lg text-text_color_white tracking-[2.6px] uppercase mb-0 lg:mb-3">
          Stratagem LP
        </h6>
        <h1
          className={`max-w-[700px] max-h-40 px-3 line-clamp-4 lg:line-clamp-2 overflow-hidden font-playFairDisplay font-semibold text-base lg:text-5xl text-primary_color tracking-[3px] uppercase text-center `}
        >
          {title}
        </h1>
      </div>
    </div>
  );
};

export default CustomHero;
