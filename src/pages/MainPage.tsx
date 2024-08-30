import "./style.scss";
import { useRef, useEffect } from "react";
//import { SmoothScroll } from "./smoothScroll";
import Hero from "../components/Hero";
import SlideTabs from "../components/SlideTabs";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Marquee from "../components/Marquee";

import Lenis from "lenis";

const MainPage: React.FC = () => {
  const scrollableRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([])!;

  const topSectionRef = useRef<HTMLDivElement>(null);
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const projectsSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  let lenis: any;
  //const refs = useRef<HTMLElement[]>([]);

  const initSmoothScrolling = () => {
    if (lenis) lenis.destroy();
    lenis = new Lenis({
      lerp: 0.2,
      smoothWheel: true,
    });
    const scrollFn = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(scrollFn);
    };
    requestAnimationFrame(scrollFn);
  };

  const init = () => {
    initSmoothScrolling();
    scroll();
  };

  useEffect(() => {
    const triggerResize = () => {
      window.dispatchEvent(new Event("resize"));
    };
    const initAll = () => {
      init();
      triggerResize(); // Force a resize event after everything is initialized
    };
    initAll();
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

  // useEffect(() => {
  //   if (scrollableRef?.current) {
  //     if (scrollableRef?.current && imageRefs?.current) {
  //       const filteredImages = imageRefs?.current.filter(
  //         (img): img is HTMLImageElement => img !== null
  //       );
  //       if (filteredImages)
  //         new SmoothScroll(scrollableRef.current, filteredImages as any);
  //     }
  //   }
  // }, [scrollableRef]);

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
        <Projects
          imageRefs={imageRefs}
          projectsSectionRef={projectsSectionRef}
        />
        <Footer
          contactSectionRef={contactSectionRef}
          topSectionRef={topSectionRef}
        />
      </div>
    </main>
  );
};

export default MainPage;
