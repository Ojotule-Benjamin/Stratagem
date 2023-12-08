import React, { ReactNode } from "react";

interface CaseStudiesProps {
  className?: string;
  children: ReactNode;
}

const CaseStudies: React.FC<CaseStudiesProps> = ({ children, className }) => {
  return (
    <div
      className={`w-full bg-text_color_white flex items-center justify-center flex-wrap basis-1 gap-10 md:gap-16 mb-7 ${className}`}
    >
      {children}
    </div>
  );
};

export default CaseStudies;
