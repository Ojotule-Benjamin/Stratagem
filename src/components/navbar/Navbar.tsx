import React, { useState } from "react";
import logo from "../../assets/svgs/logo.svg";
import { navLinks } from "../../constants";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Button from "../../components/Button";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  let location = useLocation();

  return (
    <div className=" bg-primary_color_white w-full h-28 md:h-[120px] py-0 md:py-1 lg:py-1 px-2 md:px-5 lg:px-9 flex items-center justify-between">
      <div className=" flex items-center justify-center cursor-pointer ">
        <img src={logo} alt="logo" className="w-16 h-auto md:w-20 md:h-24 " />
        <div className="flex flex-col items-start justify-center">
          <h1 className=" text-primary_color font-playFairDisplay font-bold text-2xl md:text-3xl lg:text-4xl leading-10">
            Stratagem
          </h1>
          <p className=" text-text_color_blackII font-playFairDisplay font-normal text-xl md:text-2xl lg:text-3xl leading-9">
            Legal Practice
          </p>
        </div>
      </div>
      <ul className="hidden lg:flex items-center justify-center gap-4">
        {navLinks.map((link) => {
          return (
            <li key={link.name}>
              <Link
                to={link.url}
                className={`flex font-outfit font-normal text-lg leading-6 cursor-pointer ${
                  location.pathname === link.url
                    ? "text-primary_color"
                    : "text-text_color_blackII"
                }`}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <Button
        text="Book Consultation"
        className=" hidden lg:w-52 lg:h-12 py-3 px-7 text-text_color_white bg-primary_color lg:flex items-center justify-center font-outfit font-medium text-lg leading-6 hover:text-primary_color hover:bg-secondary_color"
      />

      {/* Toggle menu icon */}
      {open ? (
        <div className=" lg:hidden">
          <MenuIcon
            onClick={() => setOpen(false)}
            style={{ fontSize: "28px", color: "#031023" }}
          />
        </div>
      ) : (
        <div className=" lg:hidden">
          <CloseIcon
            onClick={() => setOpen(true)}
            style={{ fontSize: "30px", color: "#031023" }}
          />
        </div>
      )}

      {/* Menu dropdown */}
      {!open && (
        <ul className="w-full h-screen z-20 bg-primary_color_white flex flex-col gap-10 items-center justify-center absolute top-28 left-0 right-0 transition-transform transform ease-in-out duration-5000">
          {navLinks.map((link) => {
            return (
              <li
                key={link.name}
                className=" flex flex-col items-center justify-center"
              >
                <Link
                  to={link.url}
                  className=" hover:border-b-4 border-primary_color flex flex-col font-outfit font-normal text-xl text-text_color_blackII leading-6 cursor-pointer"
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
          <Button
            text="Book Consultation"
            className=" w-52 h-14 lg:hidden text-text_color_white bg-primary_color flex items-center justify-center font-outfit font-medium text-lg leading-6 hover:text-primary_color hover:bg-secondary_color"
          />
        </ul>
      )}
    </div>
  );
};

export default Navbar;
