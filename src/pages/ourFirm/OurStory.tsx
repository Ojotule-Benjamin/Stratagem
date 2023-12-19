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
          Our Story
        </h3>
        <p className=" font-montserrat font-normal text-base text-text_color_blackII text-center lg:text-justify">
          Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie
          pellentesque urna libero velit porta. Velit pellentesque hac gravida
          pellentesque est semper. Duis lectus gravida ultricies eleifend in
          pharetra faucibus orci sem. Proin ac a cursus praesent. Malesuada
          risus amet nunc posuere rhoncus accumsan congue id dolor. Convallis
          maecenas sed in pellentesque. Diam tristique semper mauris dolor amet.
          Dolor elit nunc purus quam amet laoreet eu risus.Cum mattis mollis
          odio gravida adipiscing. Facilisis scelerisque non lacinia tincidunt
          faucibus tortor vel.
          <br />
          <br />
          Augue tristique quis fringilla nisl quam nisi. Erat pellentesque
          elementum consequat quis volutpat diam praesent molestie. Molestie
          scelerisque eleifend eu amet quam vitae fusce aliquam ornare. Accumsan
          est ut at tristique arcu. Semper lectus vulputate volutpat consectetur
          gravida ac gravida. Sem placerat pellentesque turpis tellus etiam
          porttitor sed. Scelerisque condimentum volutpat tempus lobortis.
          Accumsan dui felis turpis elementum. Leo nibh magnis sociis diam purus
          dui. Amet nulla urna curabitur{" "}
        </p>
      </div>
    </div>
  );
};

export default OurStory;
