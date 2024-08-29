import React from "react";
import "./style.scss";

interface TextAnimatorProps {
  text: string;
  animate: boolean;
  className: string;
  animationDelayMultiplier: number;
}

const TextAnimator: React.FC<TextAnimatorProps> = ({
  text,
  animate,
  className,
  animationDelayMultiplier = 0.05,
}) => {
  return (
    <span className={className}>
      {text.split("").map((char: string, index: number) => (
        <span
          key={index}
          className={`mask ${animate ? "open" : ""}`}
          style={{ animationDelay: `${animationDelayMultiplier * index}s` }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default TextAnimator;
