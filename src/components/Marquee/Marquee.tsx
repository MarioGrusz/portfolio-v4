import React from "react";
import "./style.scss";

interface MarqueeProps {
  content: string | JSX.Element;
  isReverse?: boolean;
  animationTime?: string;
}

const Marquee: React.FC<MarqueeProps> = ({
  content,
  isReverse = false,
  animationTime = "12s",
}) => {
  const animationDirection = isReverse ? "reverse" : "normal";

  const marqueeStyle = {
    animation: `scroll ${animationTime} linear infinite`,
    animationDirection: animationDirection,
  };

  return (
    <section className="marquee">
      <div className="element-front"></div>
      <div
        className={`marquee__content ${isReverse ? "reverse" : ""}`}
        style={marqueeStyle}
      >
        <div className="marquee__text-block">{content} &nbsp;&nbsp;</div>
      </div>
      <div
        className={`marquee__content ${isReverse ? "reverse" : ""}`}
        style={marqueeStyle}
      >
        <div className="marquee__text-block">{content} &nbsp;&nbsp;</div>
      </div>
      <div className="element-back"></div>
    </section>
  );
};

export default Marquee;
