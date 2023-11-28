import React from "react";
import { teamMembers } from "../../constants";
import OurTeamMemberCard from "./OurTeamMemberCard";

const OurTeam = () => {
  return (
    <div className=" bg-text_color_white w-full h-auto px-5 lg:px-[50px] pt-10 lg:pt-20 pb-14 lg:pb-24">
      <div className="flex flex-col items-center justify-start">
        <h6 className=" font-montserrat font-bold text-lg text-center text-[#3A3A38] pb-1 lg:pb-4">
          Meet Our Team
        </h6>
        <h3 className=" font-playFairDisplay font-bold capitalize text-[#1E2E45] text-2xl lg:text-4xl text-center px-0 md:px-40 lg:px-80 ">
          Professional lawyers and advisors with more experience
        </h3>
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
                linkedInUrl={teamMember.linkedIn}
                facebookUrl={teamMember.facebook}
                twitterUrl={teamMember.twitter}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
