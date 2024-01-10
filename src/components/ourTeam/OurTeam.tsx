import React from "react";
import { teamMembers } from "../../constants";
import OurTeamMemberCard from "./OurTeamMemberCard";
import { motion } from "framer-motion";

const OurTeam = () => {
  return (
    <div className=" bg-text_color_white w-full h-auto px-5 lg:px-[50px] pt-10 lg:pt-20 pb-14 lg:pb-24">
      <div className="flex flex-col items-center justify-start">
        <motion.h6
          initial={{ scale: 0.5, x: -50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className=" font-montserrat font-normal text-lg text-center text-[#3A3A38]"
        >
          Meet Our Team
        </motion.h6>
        <motion.h3
          initial={{ scale: 0.5, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className=" font-playFairDisplay font-bold capitalize text-[#1E2E45] text-2xl lg:text-4xl text-center px-0 md:px-40 lg:px-80 "
        >
          Professional lawyers and advisors with more experience
        </motion.h3>
        <div className=" w-full h-auto flex items-center justify-center px-4 lg:px-0 flex-wrap gap-3 lg:gap-5 mt-10 lg:mt-16">
          {/* team card */}
          {teamMembers.slice(0, 4).map((teamMember) => {
            return (
              <OurTeamMemberCard
                key={teamMember.id}
                id={teamMember.id}
                img={teamMember.img}
                name={teamMember.name}
                role={teamMember.role}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
