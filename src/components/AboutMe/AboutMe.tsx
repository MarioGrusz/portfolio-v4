import "./style.scss";
import { forwardRef, RefObject, useMemo, useRef } from "react";
import useInViewPort from "../../hooks/useInViewPort";
import monsterImage from "../../assets/monster.png";
import aboutMeImage from "../../assets/about.png";

interface AboutProps {
  aboutSectionRef?: RefObject<HTMLDivElement>;
}

const AboutMe = forwardRef<HTMLDivElement, AboutProps>((props) => {
  const firstPhrase = useMemo(
    () =>
      `I am passionate developer, who creates modern software solutions, websites, apps. I design, build and test scalable products. In my work I connect modern design and functionality.`,
    []
  );
  const secondPhrase = useMemo(
    () =>
      `I use Typescript and React to build interfaces, and Node for backend stuff. To see if everything works as supposed to I test it with Vitest and Playwright. I like use Postgres for data and services like Netlify, Railway or AWS when it's time to get everything live.`,
    []
  );

  const description = useRef<HTMLDivElement>(null);

  const isInView = useInViewPort([description], { threshold: 0.1 });

  return (
    <section id="about-me" className="about-me" ref={props.aboutSectionRef}>
      <main className="about-me__container">
        <header className="about-me__header">
          <div className="about-me__svg">
            <img
              src={monsterImage}
              className="monster-image"
              alt="Monster illustration"
              aria-label="Monster illustration"
              loading="lazy"
            ></img>
            <img
              src={aboutMeImage}
              className="about-me-image"
              alt="Monster illustration"
              aria-label="Monster illustration"
              loading="lazy"
            ></img>
          </div>
        </header>
        <article className="about-me__description">
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
        </article>
      </main>
    </section>
  );
});

export default AboutMe;
