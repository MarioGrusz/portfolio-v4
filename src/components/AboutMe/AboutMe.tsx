import "./style.scss";
import { forwardRef, RefObject, useRef } from "react";
import useInViewPort from "../../hooks/useInViewPort";

interface AboutProps {
  aboutSectionRef?: RefObject<HTMLDivElement>;
}

const AboutMe = forwardRef<HTMLDivElement, AboutProps>((props) => {
  const secondPhrase = `I use Typescript and React to build interfaces, and Node for backend stuff. To see if everything works as supposed to I test it with Vitest and Playwright. I like use Postgres for data and services like Netlify, Railway or AWS when it's time to get everything live.`;

  const firstPhrase = `I am passionate developer, who creates
 modern software solutions, websites, apps. I design, build and test scalable products. In my work I connect modern design and functionality.`;

  const description = useRef<HTMLDivElement>(null);

  const isInView = useInViewPort([description], { threshold: 0.2 });

  return (
    <section id="about-me" className="about-me" ref={props.aboutSectionRef}>
      <main className="about-me__container">
        <div className="about-me__header">
          <div className="about-me__svg">
            <div className="monster-image"></div>
            <svg className="svg" viewBox="0 0 100 100" overflow="visible">
              <path
                id="curve-wnxkz4"
                d="M 0 50 L 0 50 A 1 1 0 0 1 100 50 L 100 50 L 100 50 A 1 1 0 0 1 0 50 L 0 50"
                strokeWidth="none"
                fill="transparent"
              ></path>
              <text>
                <textPath
                  href="#curve-wnxkz4"
                  startOffset="0"
                  dominantBaseline="Text Top"
                >
                  ABOUT ME ✤✤ SERVICES ✤✤
                </textPath>
              </text>
            </svg>
          </div>
        </div>
        <div className="about-me__description">
          <div className="about-me__body" ref={description}>
            <p>
              {firstPhrase.split(" ").map((word, index) => (
                <span
                  key={index}
                  className={`mask ${isInView[0] ? "open" : "close"}`}
                >
                  <span>{word}</span>
                </span>
              ))}
            </p>
            <p>
              {secondPhrase.split(" ").map((word, index) => (
                <span
                  key={index}
                  className={`mask description ${
                    isInView[0] ? "open-delayed" : "close"
                  }`}
                >
                  <span>{word}</span>
                </span>
              ))}
            </p>
          </div>
        </div>
      </main>
    </section>
  );
});

export default AboutMe;
