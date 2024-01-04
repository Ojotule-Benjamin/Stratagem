import React from "react";
import Button from "../../components/Button";

const SubscribeToLetter = () => {
  return (
    <div className=" w-full px-2 lg:px-6 py-3 lg:py-5 mt-6">
      <h1 className=" font-montserrat font-bold text-base lg:text-xl text-[#121416] text-justify ">
        Subscribe to our newsletter and receive a selection of cool articles
        every week
      </h1>
      <input
        className="w-full h-14 lg:h-[70px] font-playFairDisplay font-normal text-base lg:text-lg text-[#757575] mt-6 outline-none px-6 border-[1px]"
        placeholder="Enter your email"
      />
      <Button
        text="SUBCRIBE"
        className="w-full h-14 lg:h-[70px] bg-black font-playFairDisplay font-bold text-base lg:text-lg text-white mt-3 leading-7 tracking-[4.5px]"
      />
    </div>
  );
};

export default SubscribeToLetter;
