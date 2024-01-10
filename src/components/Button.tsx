import React from "react";
import { motion } from "framer-motion";

type buttonprops = {
  text: string;
  className?: string;
  icon?: React.ReactNode;
  //onClick?: () => void;
  onClick?: (e: React.SyntheticEvent) => void;
};

const Button: React.FC<buttonprops> = ({ text, className, icon, onClick }) => {
  return (
    <motion.button
      initial={{ scale: 0.5, x: 50 }}
      whileInView={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      onClick={onClick}
      className={` flex items-center justify-center ${className}`}
    >
      {text}
      {icon}
    </motion.button>
  );
};

export default Button;
