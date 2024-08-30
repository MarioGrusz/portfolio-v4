import { useEffect, useState } from "react";
import "./style.scss";
import { motion } from "framer-motion";

const ScrollIndicator = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [atBottom, setAtBottom] = useState(false);
  const transitionSettings = {
    duration: 0.9,
    delay: 1,
    ease: [0.76, 0, 0.24, 1],
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollHeight = docHeight - winHeight;
    const scrollTopPercent = (scrollTop / scrollHeight) * 100;
    setScrollPercent(scrollTopPercent);

    const atBottom = scrollTop + winHeight + 3 >= docHeight;

    if (atBottom) {
      setAtBottom(true);
    } else {
      setAtBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transitionSettings}
      className={`circular-indicator ${atBottom ? "inVisible" : ""}`}
    >
      <div
        className="indicator-circle"
        style={{
          background: `conic-gradient(#c3ff56 ${scrollPercent}%, #ccc ${scrollPercent}%)`,
        }}
      ></div>
      <div className="inner-circle">
        <div className="image"></div>
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;
