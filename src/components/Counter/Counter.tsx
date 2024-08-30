import "./style.scss";
import { useEffect, useRef } from "react";
import { projectCounterAnimation } from "./animation";

interface CounterProps {
  dataNumber: number;
  inViewport: boolean[];
}

const Counter: React.FC<CounterProps> = ({ dataNumber, inViewport }) => {
  const numberContainerRef = useRef<HTMLDivElement>(null);
  const numberRightRowRef = useRef<HTMLUListElement>(null);
  const liRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    inViewport.forEach((isInView, index) => {
      if (isInView) {
        projectCounterAnimation(numberRightRowRef, liRefs, index);
      }
    });
  }, [inViewport]);
  return (
    <section className="projects-counter">
      <div className="projects-counter__number-row" ref={numberContainerRef}>
        <div className="projects-counter__number-outer">
          <div
            className="projects-counter__number-box"
            data-number={dataNumber}
          >
            <div className="projects-counter__number">
              <ul className="projects-counter__first-list">
                <li>0</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
              </ul>
              <ul
                className="projects-counter__second-list"
                ref={numberRightRowRef}
                data-number={dataNumber}
              >
                <li ref={(el) => (liRefs.current[0] = el)}>0</li>
                <li ref={(el) => (liRefs.current[1] = el)}>1</li>
                <li ref={(el) => (liRefs.current[2] = el)}>2</li>
                <li ref={(el) => (liRefs.current[2] = el)}>3</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
