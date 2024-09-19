import "./style.scss";
import {
  useState,
  useEffect,
  useRef,
  useCallback,
  forwardRef,
  useMemo,
} from "react";
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
    const [activeTab, setActiveTab] = useState<HTMLAnchorElement | null>(null);

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

    const tabsRef = useRef<HTMLDivElement>(null);

    const getTabPosition = useCallback((el: HTMLAnchorElement | null) => {
      if (el) {
        const { width } = el.getBoundingClientRect();
        setPosition({ left: el.offsetLeft, width, opacity: 1 });
      }
    }, []);

    useEffect(() => {
      if (firstChildRef.current) {
        setActiveTab(firstChildRef.current);
        getTabPosition(firstChildRef.current);
        firstChildRef.current.classList.add("active");
      }
    }, [getTabPosition]);

    const handleResize = useMemo(
      () =>
        debounce(() => {
          const activeTab = document.querySelector(".tab.active");
          if (activeTab) {
            getTabPosition(activeTab as HTMLAnchorElement);
          }
        }, 50),
      [getTabPosition]
    );

    const handleScrollToSection = useCallback(
      (ref: React.RefObject<HTMLDivElement> | undefined) => {
        if (ref?.current) {
          const rect = ref.current.getBoundingClientRect();
          const scrollTop = rect.top + window.scrollY;
          window.scrollTo({ top: scrollTop, behavior: "smooth" });
        }
      },
      []
    );

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
      <menu className={`menu ${animate ? "open" : ""}`} ref={topSectionRef}>
        <nav className="menu__container" ref={tabsRef}>
          <ul
            className="menu__list"
            role="tablist"
            aria-label="Main Navigation"
          >
            <li
              role="tab"
              aria-selected={
                activeTab === firstChildRef.current ? "true" : "false"
              }
              aria-controls="about-me-section"
            >
              <Link
                ref={firstChildRef}
                to="#about-me"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleScrollToSection(aboutSectionRef)}
                className="tab"
              >
                <p>about</p>
              </Link>
            </li>
            <li
              role="tab"
              aria-selected={
                activeTab?.dataset.tab === "projects" ? "true" : "false"
              }
              aria-controls="projects-section"
            >
              <Link
                to="#projects"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="tab"
                onClick={() => handleScrollToSection(projectsSectionRef)}
              >
                <p>projects</p>
              </Link>
            </li>
            <li
              role="tab"
              aria-selected={
                activeTab?.dataset.tab === "contact" ? "true" : "false"
              }
              aria-controls="contact-section"
            >
              <Link
                to="#contact"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleScrollToSection(contactSectionRef)}
                className="tab"
              >
                <p>contact</p>
              </Link>
            </li>
            <li role="tab">
              <Cursor position={position} />
            </li>
          </ul>
        </nav>
      </menu>
    );
  }
);

const Cursor = ({ position }: { position: Position }) => {
  const cursorStyle = useMemo(
    () => ({
      left: position.left,
      width: position.width,
      opacity: position.opacity,
    }),
    [position]
  );

  return <div className="cursor" style={cursorStyle}></div>;
};

export default SlideTabs;
