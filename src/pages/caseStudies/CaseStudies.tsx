import React from "react";
import CustomHero from "../../components/CustomHero";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { caseStudies } from "../../constants";
import CaseStudiesCard from "../../components/caseStudies/CaseStudiesCard";
import { CaseStudiesCardProps } from "../../components/caseStudies/CaseStudiesCard";
import { useNavigate } from "react-router-dom";

const CaseStudies = () => {
  const navigate = useNavigate();

  const navigateToCaseStudy = (title: string, data: CaseStudiesCardProps) => {
    navigate(`/case-studies/case-study/${title}`, { state: { data } });
  };

  return (
    <div className=" flex flex-col items-center justify-center">
      <CustomHero title="CASE STUDIES" className="bg-hero-case-study" />
      <div className=" w-full flex items-center justify-center flex-wrap basis-1 gap-10 md:gap-16 mb-7  mt-[38px] lg:mt-[77px] bg-text_color_white ">
        {caseStudies.map((caseStudy) => (
          <CaseStudiesCard
            key={caseStudy.id}
            title={caseStudy.title}
            img={caseStudy.img}
            case={caseStudy.case}
            onClick={() => navigateToCaseStudy(caseStudy.title, caseStudy)}
          />
        ))}
      </div>
      <Stack spacing={2}>
        <Pagination count={5} size="large" />
      </Stack>
    </div>
  );
};

export default CaseStudies;
