import React from "react";
import CustomHero from "../../components/CustomHero";
import CaseStudies from "../../components/caseStudies/CaseStudies";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { caseStudies } from "../../constants";
import CaseStudiesCard from "../../components/caseStudies/CaseStudiesCard";

const index = () => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <CustomHero title="CASE STUDIES" />
      <CaseStudies className=" mt-[38px] lg:mt-[77px]">
        {caseStudies.map((caseStudy) => (
          <CaseStudiesCard
            key={caseStudy.id}
            title={caseStudy.title}
            img={caseStudy.img}
            case={caseStudy.case}
          />
        ))}
        <Stack spacing={2}>
          <Pagination count={10} size="large" />
        </Stack>
      </CaseStudies>
    </div>
  );
};

export default index;
