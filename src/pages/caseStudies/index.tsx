import React from "react";
import CaseStudies from "../../components/caseStudies/CaseStudies";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const index = () => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <CaseStudies />
      <Stack spacing={2}>
        <Pagination count={10} size="large" />
      </Stack>
    </div>
  );
};

export default index;
