import "./style.scss";
import React, { ReactNode, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

type TransitionProps = {
  children: ReactNode;
};

type Routes = {
  [key: string]: string;
};

const routes: Routes = {
  "/": "Home",
  "/hable-mas": "Hable Mas",
  "/bean-bazaar": "Bean Bazaar",
  "/task-ease": "Task Ease",
};

const PageTransition: React.FC<TransitionProps> = ({ children }) => {
  const transitionSettings = { duration: 0.9, ease: [0.76, 0, 0.24, 1] };
  const transitionSettings2 = {
    duration: 1.1,
    delay: 0.4,
    ease: [0.22, 1, 0.36, 1],
  };
  const textTransitionSettings = {
    duration: 0.8,
    delay: 0.1,
    ease: [0.76, 0, 0.24, 1],
  };
  const location = useLocation();

  const [animationComplete, setAnimationComplete] = useState(false);
  const [displayRoute, setDisplayRoute] = useState<string>("");

  const slideIn = {
    initial: { scaleY: 0 },
    animate: { scaleY: 0 },
    exit: { scaleY: 1 },
  };

  const slideOut = {
    initial: { scaleY: 1 },
    animate: { scaleY: 0 },
    exit: { scaleY: 0 },
  };

  const text = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      top: -100,
      transitionEnd: { top: "47.5%" },
    },
    exit: {
      opacity: 1,
      top: "40%",
      transition: { duration: 0.5, delay: 0.4, ease: [0.33, 1, 0.68, 1] },
    },
  };

  useEffect(() => {
    if (animationComplete) {
      window.scrollTo(0, 0);
      setDisplayRoute(routes[location.pathname]);
    }
  }, [animationComplete, location.pathname]);

  return (
    <>
      <motion.p
        key={location.pathname}
        className="route"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={text}
        transition={textTransitionSettings}
      >
        {displayRoute}
      </motion.p>
      <motion.div
        className="slide-in"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={slideIn}
        transition={transitionSettings}
        onAnimationComplete={() => setAnimationComplete(true)}
      />
      {children}
      <motion.div
        className="slide-out"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={slideOut}
        transition={transitionSettings2}
      />
    </>
  );
};

export default PageTransition;
