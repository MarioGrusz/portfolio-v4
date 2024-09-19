import "./style.scss";
import { useState, useEffect, useRef, useCallback, forwardRef } from "react";
import { debounce } from "../../utils/debounce";
import { Link, useLocation, useNavigate } from "react-router-dom";

type Position = {
  left: number;
  width: number;
  opacity: number;
};

interface SlideTabsProps {
  contactSectionRef?: React.RefObject<HTMLDivElement>;
  aboutSectionRef?: React.RefObject<HTMLDivElement>;
  heroSectionRef?: React.RefObject<HTMLDivElement>;
  projectsSectionRef?: React.RefObject<HTMLDivElement>;
  topSectionRef?: React.RefObject<HTMLDivElement>;
}

const SlideTabs = forwardRef<HTMLDivElement, SlideTabsProps>(
  ({
    contactSectionRef,
    aboutSectionRef,
    projectsSectionRef,
    topSectionRef,
  }) => {
    const [animate, setAnimate] = useState(false);
    const firstChildRef = useRef<HTMLAnchorElement>(null);
    const [position, setPosition] = useState<Position>({
      left: 0,
      width: 0,
      opacity: 0,
    });

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
      if (location.hash) {
        navigate("/");
      }
    }, [location.hash, navigate]);

    useEffect(() => {
      setAnimate(true);
    }, []);

    const [activeTab, setActiveTab] = useState<HTMLElement | null>(null);
    const tabsRef = useRef<HTMLDivElement>(null);

    const getTabPosition = (el: HTMLElement | null) => {
      if (el) {
        const { width } = el.getBoundingClientRect();
        setPosition({ left: el.offsetLeft, width, opacity: 1 });
      }
    };

    useEffect(() => {
      if (firstChildRef.current) {
        setActiveTab(firstChildRef.current);
        getTabPosition(firstChildRef.current);
        firstChildRef.current.classList.add("active");
      }
    }, []);

    const handleResize = useCallback(
      debounce(() => {
        const activeTab = document.querySelector(".tab.active");
        if (activeTab) {
          getTabPosition(activeTab as HTMLElement);
        }
      }, 50),
      []
    );

    const handleScrollToSection = (ref: any) => {
      const rect = ref.current.getBoundingClientRect();
      const scrollTop = rect.top + window.scrollY;
      window.scrollTo({ top: scrollTop, behavior: "smooth" });
    };

    useEffect(() => {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [handleResize]);

    const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
      const target = e.currentTarget;
      if (activeTab) {
        activeTab.classList.remove("active");
      }
      setActiveTab(target);
      getTabPosition(target);
      target.classList.add("active");
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
      const target = e.currentTarget;
      if (activeTab === target) return;
      target.classList.remove("active");
    };

    return (
      <section className={`menu ${animate ? "open" : ""}`} ref={topSectionRef}>
        <div className="menu__container" ref={tabsRef}>
          <ul
            className="menu__list"
            role="tablist"
            aria-label="Navigation Tabs"
          >
            <li>
              <Link
                ref={firstChildRef}
                to="#about-me"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleScrollToSection(aboutSectionRef)}
                className="tab"
                role="tab"
                aria-selected={activeTab === firstChildRef.current}
                aria-controls="about-me-section"
              >
                <p>about</p>
              </Link>
            </li>
            <li>
              <Link
                to="#projects"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="tab"
                onClick={() => handleScrollToSection(projectsSectionRef)}
                role="tab"
                aria-selected={activeTab === firstChildRef.current}
                aria-controls="projects-section"
              >
                <p>projects</p>
              </Link>
            </li>
            <li>
              <Link
                to="#contact"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleScrollToSection(contactSectionRef)}
                className="tab"
                role="tab"
                aria-selected={activeTab === firstChildRef.current}
                aria-controls="contact-section"
              >
                <p>contact</p>
              </Link>
            </li>
            <Cursor position={position} />
          </ul>
        </div>
      </section>
    );
  }
);

const Cursor = ({ position }: { position: Position }) => {
  const cursorStyle = {
    left: position.left,
    width: position.width,
    opacity: position.opacity,
  };

  return <li className="cursor" style={cursorStyle}></li>;
};

export default SlideTabs;
