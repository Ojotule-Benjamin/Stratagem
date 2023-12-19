import React from "react";
import arrow from "../../assets/svgs/arrow.svg";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import { REGULAR_PATHS } from "../../route/paths";
import { motion } from "framer-motion";

const Hero = () => {
  const { CASE_STUDIES } = REGULAR_PATHS;
  //const list = { visible: { opacity: 0 } };

  return (
    <div className=" w-full h-[calc(100vh-7rem)] md:h-[calc(100vh-120px)] flex flex-col items-center justify-center bg-hero-lg bg-cover bg-center bg-secondary_color">
      <div className=" w-full h-auto flex flex-col items-center justify-center gap-2 md:gap-5 lg:gap-5">
        <motion.h4
          //variants={list}
          initial={{ scale: 0 }}
          // initial={{ scale: 0, x: -500 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className="w-full font-montserrat font-medium text-base md:text-sm text-center text-text_color_white leading-5"
        >
          Stratagem LP
        </motion.h4>
        <motion.h2
          initial={{ scale: 0 }}
          // initial={{ scale: 0, x: 500 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          className=" px-0 md:px-36 lg:px-[346px] font-playFairDisplay font-medium text-2xl md:text-4xl text-primary_color capitalize text-center"
        >
          Navigating Legal Complexities, Delivering Justice
        </motion.h2>
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className=" px-7 md:px-8 lg:px-[200px] font-montserrat font-normal leading-5 text-text_color_white text-center text-base md:text-lg"
        >
          Committed to upholding justice, Stratagem LP stands as your unwavering
          partner in the legal realm. Our experienced team of legal
          professionals merges deep expertise with a client-focused approach,
          ensuring each case receives the strategic insight and unwavering
          representation it merits. Backed by a history of accomplishments, we
          are prepared to advocate for your rights and safeguard your interests.
        </motion.p>

        <Link to={CASE_STUDIES}>
          <Button
            text="Explore Our Case Victories"
            icon={<img src={arrow} alt="icon" />}
            className=" w-72 md:w-72 mt-5 lg:w-[302px] h-16 font-montserrat font-medium text-text_color_white hover:text-primary_color text-base md:text-lg bg-primary_color hover:bg-text_color_white flex items-center justify-center"
          />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
