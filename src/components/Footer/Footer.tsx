import "./style.scss";
import getYear from "./currentYear";
import LocalTime from "../LocalTime";
import myCV from "../../assets/MariuszGruszczynski_CV.pdf";
import { RefObject, forwardRef } from "react";
import { Link } from "react-router-dom";

interface FooterProps {
  contactSectionRef?: RefObject<HTMLDivElement>;
  topSectionRef?: RefObject<HTMLDivElement>;
}

const Footer = forwardRef<HTMLDivElement, FooterProps>((props, ref) => {
  const currentYear = getYear();

  const handleScrollToSection = (ref: any) => {
    const rect = ref.current.getBoundingClientRect();
    const scrollTop = rect.top + window.scrollY;
    window.scrollTo({ top: scrollTop, behavior: "smooth" });
  };

  return (
    <footer className="footer" ref={props.contactSectionRef}>
      <div className="footer__container" ref={ref}>
        <section className="footer__top-section">
          <div className="footer__header">
            <h2>Have an idea in mind?</h2>
            <h2>Let's talk</h2>
          </div>
          <div className="footer__contact">
            <a href="mailto:mario.gruszczynski@gmail.com">
              <span>mario.gruszczynski</span>
              <span>@gmail.com</span>
            </a>
          </div>
          <div className="footer__location">
            <p>Located in Madrid, Spain</p>
            <p>N 40° 25' 00'' W 3° 42' 00''</p>
            <div className="footer__local-time">
              <LocalTime timeZone="Europe/Madrid" />
            </div>
          </div>
        </section>
        <hr className="footer__line" />
        <section className="footer__bottom-section">
          <ul className="footer__social-media-links">
            <li>
              <a
                href="https://www.linkedin.com/in/mariusz-gruszczynski"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile of Mariusz Gruszczynski"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 64 64"
                >
                  <path d="M48,8H16c-4.418,0-8,3.582-8,8v32c0,4.418,3.582,8,8,8h32c4.418,0,8-3.582,8-8V16C56,11.582,52.418,8,48,8z M24,47h-5V27h5 V47z M24.029,23.009C23.382,23.669,22.538,24,21.5,24c-1.026,0-1.865-0.341-2.519-1.023S18,21.458,18,20.468 c0-1.02,0.327-1.852,0.981-2.498C19.635,17.323,20.474,17,21.5,17c1.038,0,1.882,0.323,2.529,0.969 C24.676,18.615,25,19.448,25,20.468C25,21.502,24.676,22.349,24.029,23.009z M47,47h-5V35.887C42,32.788,40.214,31,38,31 c-1.067,0-2.274,0.648-2.965,1.469S34,34.331,34,35.594V47h-5V27h5v3.164h0.078c1.472-2.435,3.613-3.644,6.426-3.652 C44.5,26.5,47,29.5,47,34.754V47z"></path>
                </svg>
              </a>
            </li>

            <li>
              <a
                href="https://github.com/MarioGrusz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile of Mariusz Gruszczynski"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 72 72"
                >
                  <path d="M36,12c13.255,0,24,10.745,24,24c0,10.656-6.948,19.685-16.559,22.818c0.003-0.009,0.007-0.022,0.007-0.022	s-1.62-0.759-1.586-2.114c0.038-1.491,0-4.971,0-6.248c0-2.193-1.388-3.747-1.388-3.747s10.884,0.122,10.884-11.491	c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-0.426-6.812c-1.856-0.2-5.18,1.774-6.6,2.697c0,0-2.25-0.922-5.991-0.922	c-3.742,0-5.991,0.922-5.991,0.922c-1.419-0.922-4.744-2.897-6.6-2.697c-1.656,2.029-0.426,6.812-0.426,6.812	s-2.342,2.332-2.342,6.812c0,11.613,10.884,11.491,10.884,11.491s-1.097,1.239-1.336,3.061c-0.76,0.258-1.877,0.576-2.78,0.576	c-2.362,0-4.159-2.296-4.817-3.358c-0.649-1.048-1.98-1.927-3.221-1.927c-0.817,0-1.216,0.409-1.216,0.876s1.146,0.793,1.902,1.659	c1.594,1.826,1.565,5.933,7.245,5.933c0.617,0,1.876-0.152,2.823-0.279c-0.006,1.293-0.007,2.657,0.013,3.454	c0.034,1.355-1.586,2.114-1.586,2.114s0.004,0.013,0.007,0.022C18.948,55.685,12,46.656,12,36C12,22.745,22.745,12,36,12z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a
                href={myCV}
                download="Mariusz-Gruszczynski-CV.pdf"
                aria-label="Download CV of Mariusz Gruszczynski"
              >
                <svg
                  className="cv"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  viewBox="0 0 72 72"
                  fill="none"
                >
                  <rect
                    x="10"
                    y="10"
                    width="52"
                    height="52"
                    rx="8"
                    ry="8"
                    strokeWidth="2"
                  />
                  <text x="50%" y="70%">
                    CV
                  </text>
                </svg>
              </a>
            </li>
          </ul>

          <div className="footer__copyright-wrapper">
            <p>©{currentYear} Designed and Coded by Mariusz Gruszczynski</p>
          </div>
        </section>
        <div className="footer__element">
          <button>
            <Link
              to="#hero"
              onClick={() => handleScrollToSection(props.topSectionRef)}
            >
              <svg
                className="arrow-bounce"
                viewBox="0 0 29 42"
                width="29"
                height="42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeWidth="2" d="M14.9 2.5V41"></path>
                <path
                  strokeWidth="2"
                  d="M0 18.6c5.2 0 14.9-7.8 14.9-18.6"
                ></path>
                <path
                  strokeWidth="2"
                  d="M28.5 18.7C23.8 18.7 14.8 10 14.8 0"
                ></path>
              </svg>
            </Link>
          </button>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
