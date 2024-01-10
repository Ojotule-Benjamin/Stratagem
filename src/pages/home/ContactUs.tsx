import React, { useRef, useEffect } from "react";
import lottie, { AnimationItem } from "lottie-web";
import contactUs from "../../assets/lottie/contactUs.json";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { REGULAR_PATHS } from "../../route/paths";
import { motion } from "framer-motion";

const ContactUs = () => {
  const navigate = useNavigate();
  const container = useRef<HTMLDivElement | null>(null);
  const { CONTACT } = REGULAR_PATHS;

  useEffect(() => {
    let animation: AnimationItem | null = null;

    if (container.current) {
      animation = lottie.loadAnimation({
        animationData: contactUs,
        autoplay: true,
        container: container.current,
        loop: true,
        renderer: "svg",
      });
    }

    //clean up animation
    return () => {
      if (animation) {
        animation.destroy();
      }
    };
  }, []);

  const handleNavigation = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    navigate(CONTACT);
  };

  return (
    <div className=" bg-secondary_color w-full h-auto px-4 md:px-24 lg:px-36 py-20 lg:py-14 flex flex-col lg:flex-row items-center justify-center gap-10">
      {/* left */}
      <div className=" w-full lg:w-1/2 h-full flex flex-col items-center justify-center lg:items-start lg:justify-start ">
        <motion.h2 className=" font-playFairDisplay text-2xl md:text-3xl text-center lg:text-start text-text_color_white font-semibold pb-4">
          Our Expert professional law team is always ready to serve you the best
          solution!
        </motion.h2>
        <p className=" font-playFairDisplay font-normal text-center lg:text-start text-sm md:text-base text-[#D7D7D7] pb-6">
          There are of Lorem Ipsum available, but the majority have alteration
          in some form, by injected oir which don't look even slightly
          believable.
        </p>

        <Button
          onClick={handleNavigation}
          text="Contact Us"
          className=" w-64 h-14 font-montserrat font-medium text-base text-secondary_color hover:text-text_color_white bg-primary_color"
        />
      </div>
      {/* right */}
      <div className=" w-full lg:w-1/2 h-[413px] px-3 md:px-20 lg:pl-[71px] lg:pr-0 flex flex-col items-center justify-center border-8 border-r-0">
        <div
          ref={container}
          id="animation-container "
          className=" w-full h-[380px] md:w-full lg:w-full lg:h-full "
        ></div>
      </div>
    </div>
  );
};

export default ContactUs;
