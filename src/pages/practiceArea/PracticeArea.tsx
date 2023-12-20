import React from "react";
import { useLocation } from "react-router-dom";

const PracticeArea = () => {
  const location = useLocation();
  const { data } = location.state || {};

  return (
    <div>
      <h1>Data: {JSON.stringify(data)}</h1>
      <p>hhhhh</p>
    </div>
  );
};

export default PracticeArea;
