import "./style.scss";
import { useRef, Suspense, lazy } from "react";
import { useSmoothScrolling } from "../hooks/useSmoothScroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Lazy load components
const Hero = lazy(() => import("../components/Hero"));
const SlideTabs = lazy(() => import("../components/SlideTabs"));
const AboutMe = lazy(() => import("../components/AboutMe"));
const Projects = lazy(() => import("../components/Projects"));
const Footer = lazy(() => import("../components/Footer"));
const Marquee = lazy(() => import("../components/Marquee"));

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
        <Suspense>
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
        </Suspense>
      </div>
    </main>
  );
};

export default MainPage;
