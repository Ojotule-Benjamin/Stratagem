import React from "react";
import { motion } from "framer-motion";

type OurTeamMemberCardProps = {
  id: number;
  img: string;
  name: string;
  role: string;
};

const OurTeamMemberCard: React.FC<OurTeamMemberCardProps> = ({
  id,
  img,
  name,
  role,
}) => {
  return (
    <motion.div
      initial={{ scale: 0.5, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
      className="basis-64 grow h-full flex items-center justify-center mb-20 relative"
      key={id}
    >
      <img src={img} alt="team member" className="w-full h-full object-cover" />
      <div className="w-52 h-24 flex flex-col items-center justify-around bg-white absolute -bottom-12 ">
        <div className=" w-full h-1/2 flex flex-col items-center justify-center">
          <h5 className=" font-playFairDisplay font-bold text-base text-center text-[#1C1C1C]">
            {name}
          </h5>
          <p className=" font-outfit font-normal text-sm text-primary_color">
            {role}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default OurTeamMemberCard;
