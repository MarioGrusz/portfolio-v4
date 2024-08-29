import "./style.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
//import React from "react";

const Preloader = () => {
  const [index, setIndex] = useState(0);
  //const [introFinished, setIntroFinished] = useState(false);
  const words = [
    "Bridging",
    "Design",
    "And",
    "Functionality",
    // "Mariusz Gruszczynski",
  ];

  useEffect(() => {
    if (index < words.length - 1) {
      // Continue showing words
      setTimeout(
        () => {
          setIndex(index + 1);
        },
        index === 0 ? 1000 : 150
      );
      // } else {
      //   // Last word displayed, trigger the second animation immediately
      //   setTimeout(() => {
      //     setIntroFinished(true);
      //   }, 150); // Adjust this delay to control the timing between the last word and the second animation
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

  // const opacity = {
  //   initial: {
  //     opacity: 1,
  //   },
  //   enter: {
  //     opacity: 0.75,
  //     transition: { duration: 1 },
  //   },
  //   exit: { scaleY: 0 },
  // };

  const opacity = {
    initial: {
      opacity: 1,
    },
    enter: {
      opacity: index === words.length - 1 ? 0 : 0.55, // Fade out the last word
      transition: { duration: index === words.length - 1 ? 0.5 : 0.5 }, // Longer transition for last word
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
      {/* {introFinished && (
        <motion.div
          className="intro-out"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={introOut}
          transition={transitionSettings}
        />
      )} */}

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
