import React from "react";
import Button from "../Button";
import { motion } from "framer-motion";

interface PracticeAreaProsConsItem {
  heading: string;
  text: string;
}

interface OurPracticeAreaCardProps {
  id: number;
  title: string;
  desc: string;
  overview?: string;
  pros?: PracticeAreaProsConsItem[];
  cons?: PracticeAreaProsConsItem[];
  onClick?: () => void;
}

const boxVariant = {
  visible: { scale: 1, x: 0, y: 0, opacity: 1 },
  hidden: { scale: 0, x: -50, y: 100, opacity: 0 },
};

const OurPracticeAreaCard: React.FC<OurPracticeAreaCardProps> = (props) => {
  return (
    <motion.div
      variants={boxVariant}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
      className="w-80  h-80 p-2 md:p-5 bg-[#1A212C] border-none flex flex-col items-center justify-center"
    >
      <h3 className=" font-playFairDisplay font-bold text-center text-xl lg:text-2xl mb-3 text-text_color_white">
        {props.title}
      </h3>
      <p className=" font-montserrat font-normal text-sm mb-6 text-center text-[#D7D7D7]">
        {props.desc}
      </p>
      <div className="w-full border-[0.5px] border-[#3A4553] mb-6"></div>

      <Button
        onClick={props.onClick}
        text="Learn More"
        className=" w-[133px] h-11 font-outfit font-medium text-sm bg-secondary_color text-text_color_white hover:bg-primary_color hover:text-secondary_color"
      />
    </motion.div>
  );
};

export default OurPracticeAreaCard;
