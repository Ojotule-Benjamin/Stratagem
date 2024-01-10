import React, { useRef, useEffect } from "react";
import lottie, { AnimationItem } from "lottie-web";
import Animation from "../../assets/lottie/Animation.json";

const OurStory = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animation: AnimationItem | null = null;

    if (container.current) {
      animation = lottie.loadAnimation({
        animationData: Animation,
        autoplay: true,
        container: container.current,
        loop: true,
        renderer: "svg",
      });
    }

    // Cleanup on unmount
    return () => {
      if (animation) {
        animation.destroy();
      }
    };
  }, []);
  return (
    <div className=" w-full h-auto lg:h-[628px] px-5 md:px-16 lg:px-11 my-12 lg:my-24 bg-text_color_white flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-8">
      {/* left */}
      <div
        className="w-full h-full bg-[#1E293B] border-[20px] md:border-[50px] lg:border-[50px] border-[#1E293B] relative"
        ref={container}
        id="animation-container "
      ></div>
      {/* right */}
      <div className="w-full h-full flex flex-col items-center lg:items-start justify-center">
        <h3 className=" font-playFairDisplay font-bold text-2xl text-primary_color">
          Our Values
        </h3>
        <p className=" font-montserrat font-normal text-base text-text_color_blackII text-center lg:text-justify">
          The philosophy of our firm is encapsulated by our core values:
          Excellence: We are devoted to achieving excellence in every facet of
          our endeavors. Integrity: We embrace openness and honesty in all
          aspects of our operations. Commitment and Focus: We are unwaveringly
          dedicated to meeting our clients' needs and ensuring the future
          success of the firm. Support and Loyalty: We take pride in supporting
          the success of both our clients and the firm. Enjoyment: We aspire to
          create an environment where everyone finds joy in their work. As we
          expand, we are resolute in maintaining our informal and friendly
          approach. Furthermore, we believe in continual investment in our
          capabilities, providing tangible value for our clients and enhancing
          the effectiveness and enjoyment of our lawyers' work. Our commitment
          extends to ongoing training and staying abreast of developments,
          fostering a conducive working environment for our clients, and
          investing accordingly.
        </p>
      </div>
    </div>
  );
};

export default OurStory;
