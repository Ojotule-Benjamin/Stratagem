import React, { useState } from "react";
import CustomHero from "../../components/CustomHero";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { caseStudies } from "../../constants";
import CaseStudiesCard from "../../components/caseStudies/CaseStudiesCard";
import { CaseStudiesCardProps } from "../../components/caseStudies/CaseStudiesCard";
import { useNavigate } from "react-router-dom";

const CaseStudies = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const handlePageChange = (e: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const navigateToCaseStudy = (title: string, data: CaseStudiesCardProps) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`/case-studies/case-study/${title}`, { state: { data } });
  };

  return (
    <div className=" w-full flex flex-col items-center justify-center">
      <CustomHero title="CASE STUDIES" className="bg-hero-case-study" />
      <div className=" w-full flex items-center justify-center flex-wrap px-5 gap-10 md:gap-16 mb-7  mt-[38px] lg:mt-[77px] bg-text_color_white ">
        {caseStudies.slice(startIndex, endIndex).map((caseStudy) => (
          <CaseStudiesCard
            key={caseStudy.id}
            title={caseStudy.title}
            img={caseStudy.img}
            case={caseStudy.case}
            onClick={() => navigateToCaseStudy(caseStudy.title, caseStudy)}
          />
        ))}
      </div>
      <Stack spacing={2} className="w-auto my-5 text-white ">
        <Pagination
          count={Math.ceil(caseStudies.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          size="large"
        />
      </Stack>
    </div>
  );
};

export default CaseStudies;
