import React, { useState } from "react";
import CustomHero from "../../components/CustomHero";
import Button from "../../components/Button";

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
