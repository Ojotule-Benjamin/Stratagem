import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface CustomHeaderProps {
  name?: string;
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
    <div className=" w-full h-auto bg-text_color_white mt-10 lg:mt-20 mb-6 lg:mb-0 flex flex-col items-center justify-center">
      <motion.h6
        initial={{ scale: 0.5, x: -50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className=" font-montserrat font-normal text-base lg:text-lg text-[#382E3A]"
      >
        {name}
      </motion.h6>
      <motion.h2
        initial={{ scale: 0.5, x: 50 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className=" px-0 lg:px-64 font-playFairDisplay font-bold text-center text-text_color text-2xl lg:text-4xl "
      >
        {" "}
        {title}
      </motion.h2>
      <motion.h2
        initial={{ scale: 0.5, x: 100 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="px-0 lg:px-64 font-playFairDisplay font-bold text-center text-text_color text-2xl lg:text-4xl mb-7 lg:mb-14"
      >
        {description}
      </motion.h2>
      {children}
    </div>
  );
};

export default CustomHeader;
