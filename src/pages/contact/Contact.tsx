import React, { useState } from "react";
import CustomHero from "../../components/CustomHero";
import Button from "../../components/Button";
import telephoneIcon from "../../assets/svgs/telephoneIcon.svg";
import mailIcon from "../../assets/svgs/mailIcon.svg";
import locationIcon from "../../assets/svgs/locationIcon.svg";
import contactImg from "../../assets/svgs/contactImg.svg";

type dataProps = {
  name: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const [data, setData] = useState<dataProps>({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(data);

    // Clear the form after submission
    setData({
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div>
      <CustomHero title="CONTACT US" className=" bg-hero-blog" />
      <div className="w-full px-5 md:px-14 lg:px-28 mb-12 lg:mb-24 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 ">
        <div className=" w-full md:w-1/2 lg:w-full h-[270px] md:h-[350px] lg:h-[376px] p-4 flex items-center justify-center border-[#000] border-r-0 border-8">
          <img src={contactImg} alt="" />
        </div>
        <div className=" w-full flex flex-col items-start justify-start gap-2">
          <div className=" w-full flex items-center justify-start ">
            <span className=" w-3 h-3 flex items-center justify-center bg-primary_color "></span>
            <p className=" font-montserrat font-medium text-sm lg:text-lg text-[#37393F] pl-1">
              Let's Talk
            </p>
          </div>
          <h2 className=" font-montserrat font-bold text-2xl lg:text-4xl text-[#1F2732]">
            Get In Touch With{" "}
            <span className=" text-primary_color">Stratagem LP</span>
          </h2>
          <p className=" font-montserrat font-normal text-base lg:text-lg text-[#7D7D7D] pb-4 lg:pb-8">
            We're here to connect and assist you in every way possible. Whether
            you have inquiries about our legal services, wish to schedule a
            consultation, explore potential partnerships, or wish to provide
            feedback, please do not hesitate to get in touch with us. Our
            dedicated team is prepared to offer you timely and personalized
            assistance.
          </p>
          <div className="w-full flex flex-col items-start justify-start gap-4 lg:gap-7">
            <div className=" w-full flex items-center justify-start gap-2">
              <div className=" w-12 h-12 lg:w-[68px] lg:h-[68px] flex items-center justify-center rounded-full bg-primary_color">
                <img src={telephoneIcon} alt="telephone icon" />
              </div>
              <div className=" font-montserrat font-normal text-sm lg:text-lg">
                <p className=" text-[#7D7D7D]">Have any question?</p>
                <a
                  href="tel:+2348036362308"
                  className=" font-lg text-[#37393F]"
                >
                  Call +234 8036362308
                </a>
              </div>
            </div>
            <div className=" w-full flex items-center justify-start gap-2 lg:gap-4">
              <div className=" w-12 h-12 lg:w-[68px] lg:h-[68px] flex items-center justify-center rounded-full bg-primary_color">
                <img src={mailIcon} alt="mail icon" />
              </div>
              <div className=" font-montserrat font-normal text-sm lg:text-lg">
                <p className=" text-[#7D7D7D]">Write email</p>
                <a
                  href="mailto:info@stratagemlp.com"
                  className=" font-lg text-[#37393F]"
                >
                  info@stratagemlp.com
                </a>
              </div>
            </div>
            <div className=" w-full flex items-center justify-start gap-2 lg:gap-4">
              <div className=" w-12 h-12 lg:w-[68px] lg:h-[68px] flex items-center justify-center rounded-full bg-primary_color">
                <img src={locationIcon} alt="location icon" />
              </div>
              <div className="h-auto font-montserrat font-normal text-sm lg:text-lg">
                <p className=" text-[#7D7D7D]">Visit anytime</p>
                <p>6, Umuahia Close,Off Emeka </p>
                <p>Anyaoku Street, Area 11, Garki Abuja.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full px-4 md:px-14 lg:px-28 pb-14 flex flex-col items-center justify-center">
        <div className=" w-full flex items-center justify-center mb-2 lg:mb-4">
          <span className=" w-3 h-3 flex items-center justify-center bg-primary_color "></span>
          <p className=" font-montserrat font-medium text-sm lg:text-lg text-[#37393F] pl-1">
            Contact Us
          </p>
        </div>
        <h3 className=" font-montserrat font-bold text-2xl lg:text-4xl text-[#1F2732] pb-5 lg:pb-10">
          Request A Call Back!
        </h3>

        <form className="w-full flex flex-col items-center justify-center gap-5 lg:gap-7">
          <div className=" w-full flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
            <input
              name="yourname"
              value={data.name}
              onChange={handleChange}
              className=" w-full h-12 lg:h-16 px-4 lg:px-9 font-montserrat font-normal text-sm lg:text-lg text-[#37393F] bg-[#F8F8F8] border-[1px] border-[#DDD] outline-none"
              placeholder="Your Name"
            />
            <input
              name="email"
              value={data.email}
              onChange={handleChange}
              className=" w-full h-12 lg:h-16 px-4 lg:px-9 font-montserrat font-normal text-sm lg:text-lg text-[#37393F] bg-[#F8F8F8] border-[1px] border-[#DDD] outline-none"
              placeholder="Email Address"
            />
          </div>
          <div className=" w-full flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
            <input
              name="phoneNumber"
              value={data.phoneNumber}
              onChange={handleChange}
              className=" w-full h-12 lg:h-16 px-4 lg:px-9 font-montserrat font-normal text-sm lg:text-lg text-[#37393F] bg-[#F8F8F8] border-[1px] border-[#DDD] outline-none"
              placeholder="Phone Number"
            />
            <input
              name="subject"
              value={data.subject}
              onChange={handleChange}
              className=" w-full h-12 lg:h-16 px-4 lg:px-9 font-montserrat font-normal text-sm lg:text-lg text-[#37393F] bg-[#F8F8F8] border-[1px] border-[#DDD] outline-none"
              placeholder="Subject"
            />
          </div>
          <textarea
            name="message"
            value={data.message}
            onChange={handleChange}
            className=" w-full h-36 lg:h-56 p-4 lg:p-9 font-montserrat font-normal text-sm lg:text-lg text-[#37393F] bg-[#F8F8F8] border-[1px] border-[#DDD] outline-none"
            placeholder="Message"
          ></textarea>
          <Button
            text="Submit"
            className=" w-[184px] h-16 mt-5 font-montserrat font-normal text-sm lg:text-lg text-white bg-[#1F2732]"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
