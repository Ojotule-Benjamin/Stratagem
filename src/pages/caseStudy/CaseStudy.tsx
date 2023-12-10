import React from "react";
import { useLocation } from "react-router-dom";

const CaseStudy = () => {
  const location = useLocation();
  const { data } = location.state || {};

  return (
    <div className=" bg-text_color_white">
      <h1>case study</h1>
      <p>Data: {JSON.stringify(data)}</p>
      <p>Title: {data.case.aboutTheCase}</p>
      <img src={data.img} alt="" />
    </div>
  );
};

export default CaseStudy;
