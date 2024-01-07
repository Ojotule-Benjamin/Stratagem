import React from "react";
import { useLocation } from "react-router-dom";
import checkMark from "../../assets/svgs/checkMark.svg";
import CustomHero from "../../components/CustomHero";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ArrowDown } from "../../assets/icons";
import { practiceAreas } from "../../constants";

const PracticeArea = () => {
  const location = useLocation();
  const { data } = location.state || {};

  return (
    <div>
      <CustomHero title={data.title} className=" bg-hero-practice-area" />
      <div className="w-full px-5 lg:px-24 py-10">
        <div>
          <h3 className=" font-playFairDisplay font-bold text-xl lg:text-3xl leading-6 text-primary_color mb-5 lg:mb-10 ">
            OVERVIEW
          </h3>
          <p className=" font-montserrat font-medium text-base lg:text-lg text-secondary_color text-justify leading-6">
            {data.overview}
          </p>
        </div>

        {/* pros */}
        <div className="w-full flex items-start justify-start flex-col gap-6 mt-7">
          <h3 className=" font-playFairDisplay font-bold text-xl lg:text-3xl leading-6 text-primary_color ">
            PROS
          </h3>

          {data.pros.map((pro: any, index: any) => (
            <div
              key={pro.heading}
              className="w-full flex flex-col lg:flex-row items-center justify-start gap-0 lg:gap-0"
            >
              <div className=" w-full lg:w-1/2 flex items-center justify-start text-center lg:text-start mb-3 lg:mb-0 mr-0 lg:mr-20 ">
                <img src={checkMark} alt="check mark" />
                <h6 className=" ml-4 font-playFairDisplay font-semibold leading-4 tracking-wide text-xl text-secondary_color">
                  {pro.heading}
                </h6>
              </div>

              <div className="hidden lg:flex w-6 border-[1px] mr-10 border-secondary_color"></div>
              <p className=" w-full font-montserrat font-normal text-base lg:text-lg text-justify text-secondary_color leading-6 ">
                {pro.text}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full h-auto px-0 lg:px-52 mt-20 flex flex-col items-center justify-start">
          <h2 className=" mb-8 font-playFairDisplay font-bold text-xl lg:text-3xl leading-6 text-primary_color ">
            MORE EXPERTISE
          </h2>
          {practiceAreas.slice(0, 4).map((practiceArea) => (
            <Accordion key={practiceArea.id}>
              <AccordionSummary
                expandIcon={<ArrowDown />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className=" font-playFairDisplay font-medium text-lg text-secondary_color p-5">
                  {practiceArea.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className=" w-full font-montserrat font-normal text-base lg:text-lg text-justify text-secondary_color leading-0 ">
                  {practiceArea.desc}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeArea;
