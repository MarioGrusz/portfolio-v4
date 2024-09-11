import "./style.scss";
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { Helmet } from "react-helmet";

import Accordion from "../Accordion";
import Footer from "../Footer";
import { useSmoothScrolling } from "../../hooks/useSmoothScroll";

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
  const refs = useRef<HTMLElement[]>([]);
  const [animate, setAnimate] = useState(false);

  const headerPhrase = "Design / Development";
  useSmoothScrolling();
  const location = useLocation();
  console.log(location.pathname);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 500);
  }, []);

  return (
    <>
      {/* <Helmet>
        <title>{data.title}</title>
        <meta
          name="description"
          content={`Explore the details of ${data.title} by Mariusz Gruszczynski. Learn about the project's objectives, technologies used, and the impact it has made.`}
        />
        <meta
          name="keywords"
          content={`${data.title}, full-stack development, web development, React, Node.js, Typescript, Postgresql`}
        />
        <link
          rel="canonical"
          href={`https://mariuszgruszczynski.com${location.pathname}`}
        />
      </Helmet> */}
      <Helmet>
        <title>{data.title} - Project by Mariusz Gruszczynski</title>
        <meta name="description" content={data.oneLineDescription} />
        <link
          rel="canonical"
          href={`https://mariuszgruszczynski.com${data.nextProjectLink}`}
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "${data.title}",
              "description": "${data.oneLineDescription}",
              "url": "https://mariuszgruszczynski.com${data.nextProjectLink}",
              "image": "${data.introImage}",
              "author": {
                "@type": "Person",
                "name": "Mariusz Gruszczynski"
              },
              "isPartOf": {
                "@type": "WebSite",
                "url": "https://www.mariuszgruszczynski.com"
              },
              "@id": "https://mariuszgruszczynski.com${data.nextProjectLink}"
            }
          `}
        </script>
      </Helmet>

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
        <section
          className="wrap"
          role="region"
          aria-labelledby="overview-header"
        >
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
    </>
  );
};

export default ProjectDetails;
