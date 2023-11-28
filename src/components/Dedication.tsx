import React, { useRef, useEffect } from "react";
import lottie, { AnimationItem } from "lottie-web";
import stratagem from "../assets/lottie/stratagem.json";

const Dedication = () => {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let animation: AnimationItem | null = null;

    if (container.current) {
      animation = lottie.loadAnimation({
        animationData: stratagem,
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
    <div className="w-full h-full border-[20px] md:border-[50px] border-secondary_color relative">
      <div ref={container} id="animation-container "></div>
    </div>
  );
};

export default Dedication;
