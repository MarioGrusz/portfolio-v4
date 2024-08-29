import "./style.scss";
import { ReactNode, RefObject, useRef, forwardRef } from "react";
import { projectsData } from "./projectsData";
import Counter from "../Counter";
import useInViewPort from "../../hooks/useInViewPort";
import Button from "../Button";
import { Link } from "react-router-dom";

interface ProjectsProps {
  imageRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  projectsSectionRef?: RefObject<HTMLDivElement>;
}

const Projects = forwardRef<HTMLDivElement, ProjectsProps>(
  ({ imageRefs, projectsSectionRef }, ref) => {
    const firstRef = useRef<HTMLDivElement>(null);
    const secondRef = useRef<HTMLDivElement>(null);
    const thirdRef = useRef<HTMLDivElement>(null);
    const targetRefs = [firstRef, secondRef, thirdRef];
    const inViewport = useInViewPort(targetRefs, { threshold: 0.5 });

    const projects: ReactNode = projectsData.map((project, index) => (
      <article
        ref={ref}
        key={index}
        className="projects__container"
        style={{ backgroundColor: project.backgroundColor }}
      >
        <section className="projects__project-details">
          <header className="projects__header" ref={targetRefs[index]}>
            <Counter dataNumber={index + 1} inViewport={inViewport} />
            <div className="projects__text-wrapper">
              <h2 className="title">{project.title}</h2>
              <p className="description">{project.description}</p>
            </div>
          </header>
        </section>

        <div className="projects__image-wrapper">
          <div
            className="projects__image"
            style={{ backgroundImage: `url(${project.homeImage})` }}
            ref={(el) => (imageRefs.current[index] = el)}
          />
        </div>

        <div className="projects__element">
          <Link to={project.projectDetails} className="button">
            <Button text="see more" content="see more" />
          </Link>
        </div>
        <div className="projects__lower-element">
          <div className="tech-info">
            {project.areas.map((item, index) => (
              <h2 key={index}>{item}</h2>
            ))}
          </div>
        </div>
      </article>
    ));

    return (
      <>
        <section id="projects" ref={projectsSectionRef} className="projects">
          {projects}
        </section>
      </>
    );
  }
);

export default Projects;
