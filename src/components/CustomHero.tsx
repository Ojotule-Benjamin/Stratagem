import React from "react";
import { motion } from "framer-motion";

type CustomHeroProps = {
  title: string;
  className: string;
};

const CustomHero: React.FC<CustomHeroProps> = ({ title, className }) => {
  return (
    <div
      className={`w-full h-[calc(100vh/3)] md:h-[calc(100vh/2.5)] lg:h-[calc(100vh/2)] mb-6 md:mb-12 flex items-center justify-center bg-cover ${className}`}
    >
      <motion.div
        initial={{ scale: 0, x: -100 }}
        whileInView={{ scale: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className=" hidden lg:flex h-14 lg:h-24 border-r-[5px] border-primary_color mr-5 lg:mr-9"
      ></motion.div>
      <div className="  flex flex-col items-center justify-center">
        <motion.h6
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1, x: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className=" font-montserrat font-medium text-xs md:text-base lg:text-lg text-text_color_white tracking-[2.6px] uppercase mb-0 lg:mb-3"
        >
          Stratagem LP
        </motion.h6>
        <motion.h1
          initial={{ scale: 0, x: -100, y: -20 }}
          whileInView={{ scale: 1, x: 1, y: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className={`max-w-[43rem] max-h-40 px-3 line-clamp-4 lg:line-clamp-2 overflow-hidden font-playFairDisplay font-semibold text-base md:text-4xl lg:text-5xl text-primary_color tracking-[3px] uppercase text-center `}
        >
          {title}
        </motion.h1>
      </div>
    </div>
  );
};

export default CustomHero;
