import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import CloseIcon from "@mui/icons-material/Close";
import { navLinks } from "../../constants";
import { REGULAR_PATHS } from "../../route/paths";

interface MobileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileModal: React.FC<MobileModalProps> = ({ isOpen, onClose }) => {
  const { CONTACT } = REGULAR_PATHS;

  return (
    <div className={`lg:hidden ${isOpen ? "" : "block"}`}>
      {!isOpen && (
        <ul className="bg-red-500  h-full bg-primary_color_white flex flex-col gap-0 items-start justify-start absolute top-24 ">
          {navLinks.map((link) => (
            <li
              key={link.name}
              className="w-full flex flex-col items-center justify-center"
            >
              <Link
                to={link.url}
                onClick={onClose}
                className="hover:border-b-4 border-primary_color flex flex-col font-outfit font-normal text-xl text-text_color_blackII leading-6 cursor-pointer"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <Link to={CONTACT}>
            <Button
              onClick={onClose}
              text="Book Consultation"
              className="w-52 h-12 lg:hidden text-text_color_white bg-primary_color flex items-center justify-center font-outfit font-medium text-lg leading-6 hover:text-primary_color hover:bg-secondary_color"
            />
          </Link>
        </ul>
      )}
    </div>
  );
};

export default MobileModal;
