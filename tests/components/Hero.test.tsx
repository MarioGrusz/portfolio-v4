import { it, expect, describe, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Hero from "../../src/components/Hero";
import React from "react";

afterEach(cleanup);

describe("Hero", () => {
  it("should render the upper description correctly", () => {
    render(<Hero />);
    expect(screen.getByText("Who I am")).toBeInTheDocument();
    expect(screen.getByText("Hi there, I am Mariusz")).toBeInTheDocument();
  });

  it("should render the title correctly", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { name: /software/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /developer/i })
    ).toBeInTheDocument();
  });

  // it("should render the title correctly", () => {
  //   render(<Hero />);
  //   const softwareHeadings = screen.getAllByRole("heading", { name: /software/i });
  //   const developerHeadings = screen.getAllByRole("heading", { name: /developer/i });

  //   expect(softwareHeadings).toHaveLength(2);
  //   expect(developerHeadings).toHaveLength(2);
  // });

  it("should render the lower description correctly", () => {
    render(<Hero />);
    expect(screen.getByText("What I do")).toBeInTheDocument();
    expect(
      screen.getByText(
        "I develop personalized solutions to make ideas come alive. I create websites, apps and modern software"
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Based in Madrid")).toBeInTheDocument();
  });

  it("should render the contact me section", () => {
    render(<Hero />);
    expect(screen.getByText("Get in Touch")).toBeInTheDocument();
  });

  it("should render the local time component", () => {
    render(<Hero />);
    expect(screen.getByText(/Local Time/i)).toBeInTheDocument();
  });
});
