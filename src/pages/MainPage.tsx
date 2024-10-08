import "./style.scss";
import { useRef } from "react";
import { useSmoothScrolling } from "../hooks/useSmoothScroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "../components/Hero";
import SlideTabs from "../components/SlideTabs";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Marquee from "../components/Marquee";

gsap.registerPlugin(ScrollTrigger);

// // Lazy load components
// const Hero = lazy(() => import("../components/Hero"));
// const SlideTabs = lazy(() => import("../components/SlideTabs"));
// const AboutMe = lazy(() => import("../components/AboutMe"));
// const Projects = lazy(() => import("../components/Projects"));
// const Footer = lazy(() => import("../components/Footer"));
// const Marquee = lazy(() => import("../components/Marquee"));

const MainPage: React.FC = () => {
  const scrollableRef = useRef<HTMLDivElement>(null);
  const topSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  useSmoothScrolling();

  const content = (
    <>
      <span className="text-block">Selected</span>
      &nbsp;
      <span className="text-block">Works</span>
      &nbsp;
      <span className="text-block">Selected</span>
      &nbsp;
      <span className="text-block">Works</span>
    </>
  );

  return (
    <main className="main-container">
      <div className="scrollable" ref={scrollableRef}>
        <SlideTabs
          contactSectionRef={contactSectionRef}
          aboutSectionRef={aboutSectionRef}
          projectsSectionRef={projectsSectionRef}
          topSectionRef={topSectionRef}
        />
        <Hero />
        <AboutMe aboutSectionRef={aboutSectionRef} />
        <Marquee content={content} />
        <Marquee content={content} isReverse={true} />
        <Projects projectsSectionRef={projectsSectionRef} />
        <Footer
          contactSectionRef={contactSectionRef}
          topSectionRef={topSectionRef}
        />
      </div>
    </main>
  );
};

export default MainPage;
