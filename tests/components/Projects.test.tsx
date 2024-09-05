import React from "react";
import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Projects from "../../src/components/Projects";
import { BrowserRouter as Router } from "react-router-dom";

afterEach(cleanup);

vi.mock("../../src/components/Projects/projectsData", () => {
  const mockProjectsData = [
    {
      title: "Project 1",
      description: "Description for Project 1",
      backgroundColor: "#ffffff",
      homeImage: "image1.jpg",
      projectDetails: "/project-1",
      areas: ["React", "JavaScript"],
    },
    {
      title: "Project 2",
      description: "Description for Project 2",
      backgroundColor: "#eeeeee",
      homeImage: "image2.jpg",
      projectDetails: "/project-2",
      areas: ["TypeScript", "CSS"],
    },
  ];
  return {
    projectsData: mockProjectsData,
  };
});

vi.mock("../../src/hooks/useInViewPort", () => ({
  default: vi.fn(() => [false, false, false]),
}));

describe("Projects Component", () => {
  it("renders project titles and descriptions", () => {
    render(
      <Router>
        <Projects />
      </Router>
    );
    expect(screen.getByText("Project 1")).toBeInTheDocument();
    expect(screen.getByText("Project 2")).toBeInTheDocument();

    expect(screen.getByText("Description for Project 1")).toBeInTheDocument();
    expect(screen.getByText("Description for Project 2")).toBeInTheDocument();
  });
  it("renders project areas", () => {
    render(
      <Router>
        <Projects />
      </Router>
    );
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("JavaScript")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("CSS")).toBeInTheDocument();
  });

  it("navigates to project details when 'See More' button is clicked", () => {
    render(
      <Router>
        <Projects />
      </Router>
    );

    const seeMoreButtons = screen.getAllByText("see more");
    const firstSeeMoreButton = seeMoreButtons[0];

    fireEvent.click(firstSeeMoreButton);

    expect(window.location.pathname).toBe("/project-1");
  });
});
