import React from "react";
import { practiceAreas } from "../../constants";
import { useNavigate } from "react-router-dom";

const SearchPracticeArea = () => {
  const navigate = useNavigate();

  // const navigatetoPracticeArea = (title: string, data: any) => {
  //   navigate(`/practice-areas/practice-area/${title}`, { state: { data } });
  // };

  const navigatetoPracticeArea = (title: string) => {
    navigate(`/practice-areas/practice-area/${title}`);
  };

  return (
    <div className=" w-full h-auto lg:h-48 px-5 py-7 lg:px-9 lg:py-14 flex flex-col lg:flex-row items-center justify-start gap-5 lg:gap-10">
      <div className=" w-full lg:w-[444px] h-fit lg:h-28 p-0 lg:p-4 flex flex-col items-start justify-start">
        <label className=" font-playFairDisplay font-semibold text-base text-[#000] pb-1 lg:pb-3">
          Search by Practice Area
        </label>
        <select
          className="w-full h-10 font-montserrat font-light text-base text-[#464646] bg-[#EDEDED] border-[1px] px-3 border-[#CACACA] shadow-inner md:box-shadow-md inset outline-none"
          defaultValue=""
          required
          //onClick={(e) => navigatetoPracticeArea("/")}
          // onChange={(e) => navigatetoPracticeArea()}
        >
          <option value="" hidden>
            Select One...
          </option>
          {practiceAreas.map((practiceArea) => (
            <option key={practiceArea.id} value={practiceArea.title}>
              {practiceArea.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchPracticeArea;
