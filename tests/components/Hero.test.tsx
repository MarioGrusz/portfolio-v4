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

  it("should render the animated title correctly", () => {
    render(<Hero />);
    const headings = screen.getAllByRole("heading");
    const softwareHeading = headings.find((heading) =>
      heading.textContent?.includes("Software")
    );
    const developerHeading = headings.find((heading) =>
      heading.textContent?.includes("Developer")
    );

    if (softwareHeading && developerHeading) {
      expect(softwareHeading).toBeInTheDocument();
      expect(developerHeading).toBeInTheDocument();
    } else {
      console.error("One or both headings were not found.");
    }
  });

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

  it("should render the contact me section correctly", () => {
    render(<Hero />);
    expect(screen.getByText("Get in Touch")).toBeInTheDocument();
    const linkElement = screen.getByRole("link", { name: "Get in Touch" });
    expect(linkElement.getAttribute("href")).toBe(
      "mailto:mario.gruszczynski@gmail.com"
    );
  });

  it("should render the local time component", () => {
    render(<Hero />);
    expect(screen.getByText(/Local Time/i)).toBeInTheDocument();
  });
});
