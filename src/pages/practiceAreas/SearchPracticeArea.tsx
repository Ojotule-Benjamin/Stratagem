import React from "react";
//import { useNavigate } from "react-router-dom";

const SearchPracticeArea = () => {
  //const navigate = useNavigate();
  return (
    <div className=" w-full h-auto lg:h-48 px-5 py-7 lg:px-9 lg:py-14 flex flex-col lg:flex-row items-center justify-start gap-5 lg:gap-10">
      <div className=" w-full lg:w-[444px] h-fit lg:h-28 p-0 lg:p-4 flex flex-col items-start justify-start ">
        <label className=" font-playFairDisplay font-semibold text-base text-[#000] pb-1 lg:pb-3">
          Search by Keyword
        </label>
        <input
          className="w-full h-10 font-montserrat font-light text-base text-[#464646] border-[1px] px-3 border-[#CACACA] shadow-inner md:box-shadow-md inset outline-none"
          placeholder="Search by keyword"
        />
      </div>
      <div className=" w-full lg:w-[444px] h-fit lg:h-28 p-0 lg:p-4 flex flex-col items-start justify-start">
        <label className=" font-playFairDisplay font-semibold text-base text-[#000] pb-1 lg:pb-3">
          Search by Practice Area
        </label>
        <select
          name="cars"
          id="cars"
          className=" w-full h-10 font-montserrat font-light text-base text-[#464646] bg-[#EDEDED] border-[1px] px-3 border-[#CACACA] shadow-inner md:box-shadow-md inset outline-none"
          defaultValue=""
          required
          // onClick={() => navigate("/")}
        >
          <option value="" hidden>
            Select One...
          </option>
          <option value="">option 1</option>
          <option value="">option 2</option>
          <option value="">option 3</option>
          <option value="">option 4</option>
        </select>
        {/* <div className="relative w-full">
          <select
            name="cars"
            id="cars"
            className="w-full h-10 pl-3 pr-10 border-[1px] border-[#CACACA] shadow-inner md:box-shadow-md inset outline-none"
            defaultValue=""
            required
          >
            <option value="" hidden>
              Select One...
            </option>
            <option value="">option 1</option>
            <option value="">option 2</option>
            <option value="">option 3</option>
            <option value="">option 4</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <div className="w-6 h-6 flex items-center justify-center bg-red-500"></div>
          </div>
        </div> */}
        {/* <div className="relative w-full">
          <select
            name="cars"
            id="cars"
            className="w-full h-10 pl-3 pr-10 border-[1px] border-[#CACACA] shadow-inner md:box-shadow-md inset outline-none"
            defaultValue=""
            required
          >
            <option value="" hidden>
              Select One...
            </option>
            <option value="">option 1</option>
            <option value="">option 2</option>
            <option value="">option 3</option>
            <option value="">option 4</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <div className="w-6 h-6 bg-red-500 flex items-center justify-center">
              
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SearchPracticeArea;
