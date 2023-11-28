import React from "react";

type buttonprops = {
  text: string;
  className?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<buttonprops> = ({ text, className, icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-64 md:w-72 lg:w-[302px] h-16 font-montserrat font-medium text-text_color_white hover:text-primary_color text-base md:text-lg bg-primary_color hover:bg-text_color_white flex items-center justify-center ${className}`}
    >
      {text}
      {icon}
    </button>
  );
};

export default Button;
