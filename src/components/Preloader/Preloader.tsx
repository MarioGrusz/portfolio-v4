import "./style.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [index, setIndex] = useState(0);
  const words = ["Bridging", "Design", "And", "Functionality"];

  useEffect(() => {
    if (index < words.length - 1) {
      setTimeout(
        () => {
          setIndex(index + 1);
        },
        index === 0 ? 1000 : 150
      );
    }
  }, [index]);

  const transitionSettings = {
    duration: 2.2,
    delay: 0.6,
    ease: [0.76, 0, 0.24, 1],
  };

  const introOut = {
    initial: { scaleY: 1 },
    animate: { scaleY: 0 },
    exit: { scaleY: 0 },
  };

  const opacity = {
    initial: {
      opacity: 1,
    },
    enter: {
      opacity: index === words.length - 1 ? 0 : 0.55,
      transition: { duration: index === words.length - 1 ? 0.5 : 0.5 },
    },
    exit: { scaleY: 0 },
  };

  return (
    <>
      <motion.p
        className="text-intro"
        variants={opacity}
        initial="initial"
        animate="enter"
      >
        <span></span>
        {words[index]}
      </motion.p>

      <motion.div
        className="intro-out"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={introOut}
        transition={transitionSettings}
      />
    </>
  );
};

export default Preloader;
