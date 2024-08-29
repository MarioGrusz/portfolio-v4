import "./style.scss";
import { useState } from "react";

interface ButtonProps {
  text: string;
  content: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, content, onClick }) => {
  const [isActive, setIsActive] = useState(false);

  const handleMouseOver = () => {
    setIsActive(true);
  };

  const handleMouseOut = () => {
    setIsActive(false);
  };

  return (
    <span
      className="animated-button"
      onClick={onClick}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <span className="animated-button__border"></span>
      <span className="animated-button__ripple">
        <span className={`${isActive ? "active" : ""}`}></span>
      </span>
      <span className="animated-button__title">
        <span
          data-text={content}
          className={`text ${isActive ? "active" : ""}`}
        >
          {text}
        </span>
      </span>
    </span>
  );
};

export default Button;
