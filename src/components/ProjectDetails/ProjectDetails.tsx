import "./style.scss";
import React, { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Accordion from "../Accordion";
import Footer from "../Footer";

interface ProjectDetailsProps {
  data: {
    id: number;
    link: string;
    title: string;
    oneLineDescription: string;
    liveSite: string;
    githubRepo: string;
    introImage: string;
    desktopImage: string;
    mobileImage: string;
    nextProjectLink: string;
    accordionData: {
      problemId: number;
      problemHeader: string;
      problemText: string;
      solutionId: number;
      solutionHeader: string;
      solutionText: string;
      architectureId: number;
      architectureHeader: string;
      architectureArray: string[];
    };
  };
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ data }) => {
  let lenis: any;
  const refs = useRef<HTMLElement[]>([]);
  const { pathname } = useLocation();
  const [animate, setAnimate] = useState(false);

  const headerPhrase = "Design / Development";

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
  const scroll = () => {
    refs.current.forEach((el) => {
      gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "+=100%",
          scrub: true,
        },
      });
    });
  };
  const init = () => {
    initSmoothScrolling();
    scroll();
    ScrollTrigger.refresh();
  };
  useEffect(() => {
    const img = new Image();
    img.src = data.introImage;

    const triggerResize = () => {
      window.dispatchEvent(new Event("resize"));
    };
    const initAll = () => {
      init();
      ScrollTrigger.refresh();
      triggerResize(); // Force a resize event after everything is initialized
    };
    initAll();
    return () => {
      if (lenis) {
        lenis.destroy();
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname, refs]);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 500);
  }, []);
  return (
    <main className="project-details">
      <section className="project-details__header" role="banner">
        <div className="project-details__text-container">
          <h2>
            {headerPhrase.split(" ").map((word, index) => (
              <span
                key={index}
                className={`mask upper-text ${animate ? "open" : ""}`}
              >
                <span style={{ animationDelay: `${0.03 * index}s` }}>
                  {word}
                </span>
              </span>
            ))}
          </h2>

          <h1>
            {data.title.split("").map((char, index) => (
              <span
                key={index}
                className={`mask large-title ${animate ? "open" : ""}`}
              >
                <span style={{ animationDelay: `${0.03 * index}s` }}>
                  {char === " " ? "\u00A0" : char}
                </span>
              </span>
            ))}
          </h1>

          <p>
            {data.oneLineDescription.split(" ").map((word, index) => (
              <span
                key={index}
                className={`mask lower-text ${animate ? "open" : ""}`}
              >
                <span style={{ animationDelay: `${0.02 * index}s` }}>
                  {word}
                </span>
              </span>
            ))}
          </p>
        </div>
        <div className={`project-details__image-wrapper`}>
          <img
            src={data.introImage}
            alt="Introduction to the project"
            className={`${animate ? "reveal" : ""}`}
          />
          <div className="project-details__element">
            <a
              className="live-project"
              href={data.liveSite}
              target="_blank"
              rel="noopener noreferrer"
            >
              See Live Project
            </a>
          </div>
        </div>
      </section>
      <section className="wrap" role="region" aria-labelledby="overview-header">
        <article
          className="content-sticky"
          ref={(el) => {
            if (el) refs.current[0] = el;
          }}
        >
          <div className="element">
            <a
              className="github"
              href={data.githubRepo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Repo
            </a>
          </div>
          <header className="content-sticky__header">
            <h1>OVERVIEW</h1>
          </header>
          <div className="content-sticky__accordion-wrapper">
            <Accordion accordionData={data.accordionData} />
          </div>
        </article>
        <article
          className="content-sticky"
          ref={(el) => {
            if (el) {
              refs.current[1] = el;
              el.style.setProperty("--offset", "4rem");
            }
          }}
        >
          <header className="content-sticky__header">
            <h1>DESKTOP</h1>
          </header>
          <div className="content-sticky__image-wrapper">
            <img src={data.desktopImage} alt="Desktop mockup" />
          </div>
        </article>
        <article
          className="content-sticky"
          ref={(el) => {
            if (el) {
              refs.current[2] = el;
              el.style.setProperty("--offset", "8rem");
            }
          }}
        >
          <header className="content-sticky__header">
            <h1>MOBILE</h1>
          </header>
          <div className="content-sticky__image-wrapper">
            <img src={data.mobileImage} alt="Mobile mockup" />
          </div>
        </article>
      </section>
      <figure className="content-sticky__next">
        <Link
          to={data.nextProjectLink}
          className="next-link"
          data-txt="SEE NEXT PROJECT"
        >
          <span>SEE NEXT PROJECT</span>
        </Link>
      </figure>
      <figure className="content-sticky__next">
        <Link to="/" className="next-link small" data-txt="BACK TO HOME">
          <span className="small">BACK TO HOME</span>
        </Link>
      </figure>
      <Footer />
    </main>
  );
};

export default ProjectDetails;
