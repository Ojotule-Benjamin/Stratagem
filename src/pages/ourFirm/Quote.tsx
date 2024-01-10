import React from "react";
import { motion } from "framer-motion";

import team_member1 from "../../assets/svgs/team_member1.svg";

const Quote = () => {
  return (
    <div className="w-full px-6 mt-10 mb-32 hidden lg:inline-block ">
      <h2 className=" w-full pb-5 font-playFairDisplay font-semibold text-secondary_color text-xl md:text-3xl lg:text-4xl text-center">
        Quote From The CEO
      </h2>
      <div className="w-full flex flex-col lg:flex-row items-center justify-center">
        <img src={team_member1} alt="" />

        <motion.div
          initial={{ scale: 0.5, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="container w-full h-72 p-20 flex flex-col items-start justify-start bg-secondary_color relative -left-12"
        >
          <h3 className="second font-montserrat font-normal text-xl text-white">
            At Stratagem, we're all about pursuing justice by combining legal
            expertise and innovative solutions. We see our clients as
            individuals with unique needs and goals, not just cases. With
            unwavering dedication, we protect their interests, guiding them
            through legal complexities while maintaining the highest ethical
            standards.
          </h3>
          <h1 className=" font-montserrat font-bold text-base ml-10 mt-4 text-white">
            Ejiga Benjamin Ochuma,{" "}
            <span className=" text-primary_color">Managing Partner</span>{" "}
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Quote;
