import React from "react";
import team_member_1 from "../../assets/svgs/team_member1.svg";

const WelcomeMessage = () => {
  return (
    <div className=" w-full h-full bg-text_color_white p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-14">
      {/* left */}
      <div className=" w-full h-full lg:w-1/2 px-0 md:px-20 lg:px-0 flex flex-col items-center justify-center lg:items-start lg:justify-start relative">
        <div className=" w-80 h-80 lg:w-[540px] lg:h-[553px] border-8  border-b-0 lg:border-[13px] lg:border-r-0 border-secondary_color"></div>
        <div className=" w-80 h-80 lg:w-[540px] lg:h-[553px] border-8 border-b-0 lg:border-[13px] lg:border-r-0 border-primary_color absolute top-5 lg:top-5 left-4 lg:left-7 flex items-center justify-center ">
          <img
            src={team_member_1}
            alt=""
            className=" w-full h-72 lg:h-[480px] object-contain lg:mt-5 lg:mb-10"
          />
        </div>
      </div>

      {/* right */}
      <div className=" w-full lg:w-1/2 h-full flex flex-col items-center justify-center lg:items-start lg:justify-start gap-4 lg:gap-2">
        <div className=" flex flex-col items-center justify-center lg:items-start lg:justify-start">
          <p className=" font-playFairDisplay font-normal text-xs lg:text-base text-[#382E3A]">
            Welcome Message
          </p>
          <h3 className=" font-playFairDisplay font-bold text-xl md:text-4xl text-center lg:text-start text-secondary_color pr-0 lg:pr-20">
            Hello People
          </h3>
          <h3 className=" font-playFairDisplay font-bold text-xl md:text-4xl text-center lg:text-start text-secondary_color pr-0 lg:pr-20">
            Welcome To{" "}
            <span className=" font-playFairDisplay font-bold text-xl md:text-4xl text-center lg:text-start text-primary_color pr-0 lg:pr-20">
              Stratagem
            </span>
          </h3>
        </div>
        <p className=" w-full font-montserrat font-normal text-base text-justify">
          Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie
          pellentesque urna libero velit porta. Velit pellentesque hac gravida
          pellentesque est semper. Duis lectus gravida ultricies eleifend in
          pharetra faucibus orci sem. Proin ac a cursus praesent. Malesuada
          risus amet nunc posuere rhoncus accumsan congue id dolor. Convallis
          maecenas sed in pellentesque. Diam tristique semper mauris dolor amet.
          Dolor elit nunc et purus quam amet laoreet eu risus.Cum mattis mollis
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
          dui. Amet nulla urna curabitur
        </p>
      </div>
    </div>
  );
};

export default WelcomeMessage;
