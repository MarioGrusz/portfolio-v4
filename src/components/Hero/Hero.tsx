import "./style.scss";
import LocalTime from "../LocalTime";
import { useEffect, useState } from "react";

const Hero = () => {
  const [animate, setAnimate] = useState(false);
  const firstPhrase = "Software";
  const secondPhrase = "Developer";

  useEffect(() => {
    const paths = document.querySelectorAll("#Round_move path");
    paths.forEach((path) => {
      (path as SVGElement).style.transform = "";
    });
  }, []);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section className="hero">
      <main className={`hero__container ${animate ? "open" : ""}`}>
        <header className={`hero__header ${animate ? "open" : ""}`}>
          <h1 className="hero__bold-heading">Who I am</h1>
          <h2 className="hero__normal-heading">Hi there, I am Mariusz</h2>
        </header>
        <div className="hero__title">
          <h2>
            {firstPhrase.split("").map((char, index) => (
              <span key={index} className={`mask ${animate ? "open" : ""}`}>
                <span style={{ animationDelay: `${0.05 * index}s` }}>
                  {char}
                </span>
              </span>
            ))}
          </h2>

          <h2>
            {secondPhrase.split("").map((letter, index) => (
              <span
                key={index}
                className={`mask ${animate ? "open-delayed" : ""}`}
              >
                <span style={{ animationDelay: `${0.05 * index}s` }}>
                  {letter}
                </span>
              </span>
            ))}
          </h2>
        </div>
        <div className={`hero__description ${animate ? "open" : ""}`}>
          <h3 className="hero__bold-heading">What I do</h3>
          <p className="hero__normal-heading">
            I develop personalized solutions to make ideas come alive. I create
            websites, apps and modern software <br />
          </p>
          <div className="hero__location">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 200 200"
            >
              <g>
                <path d="M100,200A100,100,0,1,1,200,100,100.11,100.11,0,0,1,100,200ZM100,7a93,93,0,1,0,93,93A93.07,93.07,0,0,0,100,7Z" />
                <line x1="2.08" y1="100" x2="195.5" y2="100" />
                <rect x="2.08" y="97.4" width="193.41" height="5.2" />
                <path d="M99.36,50.49c-27,0-52.25-4.92-71-13.85a2.6,2.6,0,0,1,2.23-4.7c18.08,8.61,42.5,13.35,68.77,13.35s51.57-5,69.44-13.67a2.61,2.61,0,0,1,2.27,4.69C152.25,45.45,126.78,50.49,99.36,50.49Z" />
                <path d="M172.39,166.27a2.61,2.61,0,0,1-1.21-.3c-18-9.47-44.23-14.91-71.9-14.91-27.13,0-53,5.26-71,14.44a2.6,2.6,0,1,1-2.36-4.64c18.68-9.53,45.42-15,73.34-15,28.49,0,55.57,5.65,74.32,15.5a2.61,2.61,0,0,1-1.21,4.91Z" />
              </g>
              <g id="Round_move">
                <path
                  className="first-path spinning"
                  d="M100,200A100,100,0,1,1,200,100,100.11,100.11,0,0,1,100,200ZM100,7a93,93,0,1,0,93,93A93.07,93.07,0,0,0,100,7Z"
                  data-svg-origin="100 100"
                  style={{ transform: "matrix(-0.648,0,0,1,164.8,0)" }}
                />
                <path
                  className="second-path spinning"
                  d="M100,200A100,100,0,1,1,200,100,100.11,100.11,0,0,1,100,200ZM100,7a93,93,0,1,0,93,93A93.07,93.07,0,0,0,100,7Z"
                  data-svg-origin="100 100"
                  style={{ transform: "matrix(0.352,0,0,1,64.8,0)" }}
                />
                <path
                  className="third-path spinning"
                  d="M100,200A100,100,0,1,1,200,100,100.11,100.11,0,0,1,100,200ZM100,7a93,93,0,1,0,93,93A93.07,93.07,0,0,0,100,7Z"
                  data-svg-origin="100 100"
                  style={{ transform: "matrix(-0.148,0,0,1,114.8,0)" }}
                />
                <path
                  className="fourth-path spinning"
                  d="M100,200A100,100,0,1,1,200,100,100.11,100.11,0,0,1,100,200ZM100,7a93,93,0,1,0,93,93A93.07,93.07,0,0,0,100,7Z"
                  data-svg-origin="100 100"
                  style={{ transform: "matrix(-0.852,0,0,1,185.2,0)" }}
                />
              </g>
              <g>
                <line x1="100" y1="5.35" x2="100" y2="197.83" />
                <rect x="97.4" y="5.35" width="5.2" height="192.47" />
                <path d="M99.28,198.65C71,198.65,48,154.42,48,100S71,1.44,99.28,1.44s51.26,44.23,51.26,98.6S127.55,198.65,99.28,198.65Zm0-192c-25.39,0-46.05,41.9-46.05,93.4s20.66,93.41,46.05,93.41,46.06-41.9,46.06-93.41S124.68,6.64,99.28,6.64Z" />
              </g>
            </svg>

            <p className="hero__normal-heading based">Based in Madrid</p>
            <div className="hero__timezone-wrapper">
              <p>Local Time: </p>
              <LocalTime timeZone="Europe/Madrid" />
            </div>
          </div>
        </div>
        <a
          href="mailto:mario.gruszczynski@gmail.com"
          className={`hero__contact-me ${animate ? "open" : ""}`}
        >
          <p>Get in Touch</p>
        </a>
      </main>
    </section>
  );
};

export default Hero;
