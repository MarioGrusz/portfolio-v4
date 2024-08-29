import React, { useState } from "react";
import "./style.scss";
import AnimateHeight from "react-animate-height";

interface AccordionProps {
  accordionData: {
    problemId: number;
    problemHeader: string;
    problemText: string;
    solutionId: number;
    solutionHeader: string;
    solutionText: string;
    architectureId: number;
    architectureHeader: string;
    architectureArray: string[];
  };
}

const Accordion: React.FC<AccordionProps> = ({ accordionData }) => {
  const [selected, setSelected] = useState<number | null>(1);

  const handleClick = (currentId: number) => {
    setSelected(currentId === selected ? null : currentId);
  };

  const Icon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
    >
      <path d="M0 24H48" stroke="black"></path>
      <path
        className={`svg-plus ${isOpen ? "open" : ""}`}
        d="M24 48L24 -1.43051e-06"
        stroke="black"
      ></path>
    </svg>
  );

  return (
    <section className="accordions">
      <div className="accordion">
        <div className="header-textbtn-wrapper">
          <h3>{accordionData.problemHeader}</h3>
          <div
            className="button"
            onClick={() => handleClick(accordionData.problemId)}
          >
            <Icon isOpen={selected === accordionData.problemId} />
          </div>
        </div>

        <AnimateHeight
          duration={500}
          height={selected === accordionData.problemId ? "auto" : 0}
        >
          <div
            className={`text-description-wrapper ${
              selected === accordionData.problemId ? "open" : ""
            }`}
          >
            <div
              className={`text-description ${
                selected === accordionData.problemId ? "open" : ""
              }`}
            >
              <p>{accordionData.problemText}</p>
            </div>
          </div>
        </AnimateHeight>
      </div>

      <div className="accordion">
        <div className="header-textbtn-wrapper">
          <h3>{accordionData.solutionHeader}</h3>
          <div
            className="button"
            onClick={() => handleClick(accordionData.solutionId)}
          >
            <Icon isOpen={selected === accordionData.solutionId} />
          </div>
        </div>
        <AnimateHeight
          duration={500}
          height={selected === accordionData.solutionId ? "auto" : 0}
        >
          <div
            className={`text-description-wrapper ${
              selected === accordionData.solutionId ? "open" : ""
            }`}
          >
            <div
              className={`text-description ${
                selected === accordionData.solutionId ? "open" : ""
              }`}
            >
              <p>{accordionData.solutionText}</p>
            </div>
          </div>
        </AnimateHeight>
      </div>

      <div className="accordion">
        <div className="header-textbtn-wrapper">
          <h3>{accordionData.architectureHeader}</h3>
          <div
            className="button"
            onClick={() => handleClick(accordionData.architectureId)}
          >
            <Icon isOpen={selected === accordionData.architectureId} />
          </div>
        </div>
        <AnimateHeight
          duration={500}
          height={selected === accordionData.architectureId ? "auto" : 0}
        >
          <div
            className={`text-description-wrapper ${
              selected === accordionData.architectureId ? "open" : ""
            }`}
          >
            <div
              className={`text-description ${
                selected === accordionData.architectureId ? "open" : ""
              }`}
            >
              <div className="btns-container">
                {accordionData.architectureArray.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </AnimateHeight>
      </div>
    </section>
  );
};

export default Accordion;
