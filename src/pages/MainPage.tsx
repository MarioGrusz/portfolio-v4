import "./style.scss";
import { useRef, useEffect } from "react";
import Hero from "../components/Hero";
import SlideTabs from "../components/SlideTabs";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Marquee from "../components/Marquee";

import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const MainPage: React.FC = () => {
  const scrollableRef = useRef<HTMLDivElement>(null);

  const topSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  let lenis: any;

  const initSmoothScrolling = () => {
    if (lenis) lenis.destroy();
    lenis = new Lenis({
      lerp: 0.2,
      smoothWheel: true,
    });
    lenis.on("scroll", () => ScrollTrigger.update());
    const scrollFn = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(scrollFn);
    };
    requestAnimationFrame(scrollFn);
  };

  const init = () => {
    initSmoothScrolling();
    scroll();
    ScrollTrigger.refresh();
  };

  useEffect(() => {
    const triggerResize = () => {
      window.dispatchEvent(new Event("resize"));
    };
    const initAll = () => {
      init();
      ScrollTrigger.refresh();
      triggerResize();
    };
    initAll();
    return () => {
      if (lenis) {
        lenis.destroy();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

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
