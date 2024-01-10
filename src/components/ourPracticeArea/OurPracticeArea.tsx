import React, { useState } from "react";
import OurPracticeAreaCard from "./OurPracticeAreaCard";
import { practiceAreas } from "../../constants";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../Button";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { REGULAR_PATHS } from "../../route/paths";

const OurPracticeArea = () => {
  const { PRACTICE_AREAS } = REGULAR_PATHS;
  const navigate = useNavigate();
  const location = useLocation();

  //identify the current page
  const isHomePage = location.pathname === "/";

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  //navigate to practice areas from home page
  const viewMorePracticeAreas = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(PRACTICE_AREAS);
  };

  //navigate to practice area to view more
  const navigatetoPracticeArea = (title: string, data: any) => {
    navigate(`/practice-areas/practice-area/${title}`, { state: { data } });
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div className="w-full h-auto bg-secondary_color px-5 lg:px-20 py-16 lg:py-24 flex flex-col items-center justify-center">
      {isHomePage ? (
        <>
          <h2 className="font-playFairDisplay font-bold text-2xl lg:text-4xl text-text_color_white mb-2 lg:mb-3">
            Our Practice Areas
          </h2>
          <p className="font-montserrat font-normal text-xs text-primary_color px-5 md:px-32 lg:px-64 mb-7 text-center">
            We are passionate about the law and providing successful outcomes
            for our clients. Our promise to all our clients is to offer the very
            best legal advice and to consistently exceed your expectations.
          </p>
        </>
      ) : (
        <h1 className="font-montserrat font-bold text-xl lg:text-3xl text-primary_color px-0 md:px-32 lg:px-64 mb-7 text-center">
          We are passionate about the law and providing successful outcomes for
          our clients.
        </h1>
      )}
      <div className="w-full flex items-center justify-center flex-wrap gap-5">
        {practiceAreas.slice(startIndex, endIndex).map((practiceArea) => (
          <OurPracticeAreaCard
            key={practiceArea.id}
            id={practiceArea.id}
            title={practiceArea.title}
            desc={practiceArea.desc}
            onClick={() =>
              navigatetoPracticeArea(practiceArea.title, practiceArea)
            }
          />
        ))}
      </div>
      {isHomePage && (
        <Button
          onClick={viewMorePracticeAreas}
          text="View More"
          className="w-40 h-11 mt-10 font-outfit font-medium text-sm text-text_color_white bg-primary_color hover:text-secondary_color"
        />
      )}
      {!isHomePage && (
        <Stack
          spacing={2}
          className="w-auto mt-10 lg:mt-20 text-white rounded bg-primary_color"
        >
          <Pagination
            count={Math.ceil(practiceAreas.length / itemsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            size="large"
          />
        </Stack>
      )}
    </div>
  );
};

export default OurPracticeArea;
