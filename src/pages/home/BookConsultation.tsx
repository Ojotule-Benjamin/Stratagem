import React, { useState } from "react";
import Button from "../../components/Button";
import dash from "../../assets/svgs/dash.svg";

type FormDataProps = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  message: string;
};

const BookConsultation = () => {
  const [formData, setFormData] = useState<FormDataProps>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Use formData in your desired way
    console.log(formData);
    // Clear the form after submission
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className=" w-full h-auto bg-secondary_color lg:px-32 py-7 lg:py-14 flex flex-col lg:flex-row items-start justify-start">
      {/* left */}
      <div className=" w-full lg:w-1/2 h-full flex flex-col items-center justify-center lg:items-start lg:justify-start ">
        <p className=" font-playFairDisplay font-bold text-base text-text_color_white ">
          Stratagem LP
        </p>
        <h3 className=" font-playFairDisplay font-bold text-2xl md:text-4xl text-primary_color leading-10">
          Why Choose Us
        </h3>
        <div className=" w-full flex flex-col items-center justify-center lg:items-center lg:justify-center gap-6 py-10">
          <div className=" flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-start px-5 md:px-40  lg:px-0 gap-5">
            <img src={dash} alt="dashed icon" className="pt-0 lg:pt-2" />
            <p className=" w-full  font-montserrat font-normal leading-5 text-xs md:text-sm text-center lg:text-start text-text_color_white pr-0 lg:pr-20">
              Our team comprises seasoned legal experts with a wealth of
              knowledge and experience across diverse practice areas, ensuring
              that your legal matters are handled with the utmost proficiency.
            </p>
          </div>
          <div className=" flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-start px-5 md:px-40  lg:px-0 gap-5">
            <img src={dash} alt="dashed icon" className="pt-0 lg:pt-2" />
            <p className=" w-full  font-montserrat font-normal leading-5 text-xs md:text-sm text-center lg:text-start text-text_color_white pr-0 lg:pr-20">
              We prioritize your needs and concerns, placing you at the heart of
              our strategy. Our tailored solutions are designed to address your
              unique challenges and goals.
            </p>
          </div>
          <div className=" flex flex-col lg:flex-row items-center justify-center lg:items-start lg:justify-start px-5 md:px-40 lg:px-0 gap-5">
            <img src={dash} alt="dashed icon" className="pt-0 lg:pt-2" />
            <p className=" w-full  font-montserrat font-normal leading-5 text-xs md:text-sm text-center lg:text-start text-text_color_white pr-0 lg:pr-20">
              With a history of successful outcomes and satisfied clients, our
              track record speaks for itself. We consistently deliver results
              that exceed expectations.
            </p>
          </div>
        </div>
      </div>

      {/* right */}
      <div className=" w-full lg:w-1/2 h-full flex flex-col items-center justify-center lg:items-start lg:justify-start">
        <p className=" font-playFairDisplay font-bold text-base text-text_color_white ">
          Need a Lawyer
        </p>
        <h3 className=" font-playFairDisplay font-bold text-2xl md:text-4xl text-primary_color leading-10">
          Book a Consultation
        </h3>
        <form
          className=" w-full flex flex-col px-5 md:px-20 lg:px-0 py-5 lg:py-10"
          onSubmit={handleSubmit}
        >
          <div className=" w-full flex flex-col items-center lg:items-start justify-center gap-5 ">
            <div className=" w-full flex flex-col lg:flex-row items-center justify-center gap-5">
              {/* first name */}
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className=" w-full h-12 rounded-md py-3 px-5 outline-none font-montserrat font-bold text-sm"
                placeholder="First Name"
              />

              {/* last name */}
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className=" w-full h-12 rounded-md py-3 px-5 outline-none font-montserrat font-bold text-sm"
                placeholder="Last Name"
              />
            </div>

            <div className=" w-full flex flex-col lg:flex-row items-center justify-center gap-5">
              {/* phone number */}
              <input
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className=" w-full h-12 rounded-md py-3 px-5 outline-none font-montserrat font-bold text-sm"
                placeholder="Phone Number"
              />
              {/* email */}
              <input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className=" w-full h-12 rounded-md py-3 px-5 outline-none font-montserrat font-bold text-sm"
                placeholder="Email"
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className=" w-full h-36 rounded-md py-4 px-5 outline-none font-montserrat font-bold text-sm"
              placeholder="Message"
            ></textarea>
            <Button text="Book Consultation" className=" mt-5" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookConsultation;
