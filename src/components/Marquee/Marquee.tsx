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
    animation: `marquee ${animationTime} cubic-bezier(0.5, 0, 0.5, 1) infinite`,
    animationDirection: animationDirection,
  };

  return (
    <section className="marquee" aria-label="Scrolling content">
      <div className="element-front" />
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
      <div className="element-back" />
    </section>
  );
};

export default Marquee;
