import React from "react";
import "./style.scss";

interface MarqueeProps {
  content: string | JSX.Element;
  isReverse?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({ content, isReverse = false }) => {
  return (
    <section className="marquee">
      <div className="element-front"></div>
      <div className={`marquee__content scroll ${isReverse ? "reverse" : ""}`}>
        <div className="marquee__text-block">{content} &nbsp;&nbsp;</div>
      </div>
      <div className={`marquee__content scroll ${isReverse ? "reverse" : ""}`}>
        <div className="marquee__text-block">{content} &nbsp;&nbsp;</div>
      </div>
      <div className="element-back"></div>
    </section>
  );
};

export default Marquee;
