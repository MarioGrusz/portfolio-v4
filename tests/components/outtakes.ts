// import { render } from "@testing-library/react";
// import Projects from "../../src/components/Projects";
// import { projectsData } from "../../src/components/Projects/projectsData";
// import { MemoryRouter } from "react-router-dom";
// import { vi } from "vitest";
// import { describe, beforeEach, it, expect } from "vitest";

// import React from "react";

// // Mock the Counter component
// vi.mock("../../src/components/Counter", () => ({
//   default: ({
//     dataNumber,
//     inViewport,
//   }: {
//     dataNumber: number;
//     inViewport: boolean;
//   }) => (
//     <div
//       data-testid="counter"
//       data-number={dataNumber}
//       data-viewport={inViewport}
//     >
//       {`Counter: ${dataNumber} - ${inViewport}`}
//     </div>
//   ),
// }));

// //Mock the useInViewPort hook
// vi.mock("../../hooks/useInViewPort", () => ({
//   default: vi.fn(() => true),
// }));

// describe("Projects Component", () => {
//   let imageRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;

//   beforeEach(() => {
//     imageRefs = { current: [] };
//   });

//   it("should render the correct number of projects", () => {
//     render(
//       <MemoryRouter>
//         <Projects imageRefs={imageRefs} />
//       </MemoryRouter>
//     );

//     const projectContainers = screen.getAllByRole("article");
//     expect(projectContainers).toHaveLength(projectsData.length);
//   });

//   // it("should render each project's title and description", () => {
//   //   render(
//   //     <MemoryRouter>
//   //       <Projects imageRefs={imageRefs} />
//   //     </MemoryRouter>
//   //   );

//   //   projectsData.forEach((project) => {
//   //     expect(screen.getByText(project.title)).toBeInTheDocument();
//   //     expect(screen.getByText(project.description)).toBeInTheDocument();
//   //   });
//   // });

//   // it("should render the Counter component for each project", () => {
//   //   render(
//   //     <MemoryRouter>
//   //       <Projects imageRefs={imageRefs} />
//   //     </MemoryRouter>
//   //   );

//   //   projectsData.forEach((_, index) => {
//   //     const counter = screen.getByTestId("counter");
//   //     expect(counter).toHaveAttribute("data-number", `${index + 1}`);
//   //     expect(counter).toHaveAttribute("data-viewport", "true");
//   //   });
//   // });

//   // it("should render the 'see more' button with the correct link", () => {
//   //   render(
//   //     <MemoryRouter>
//   //       <Projects imageRefs={imageRefs} />
//   //     </MemoryRouter>
//   //   );

//   //   const links = screen.getAllByRole("link", { name: /see more/i });
//   //   expect(links).toHaveLength(projectsData.length);

//   //   links.forEach((link) => {
//   //     expect(link).toHaveAttribute("href", "/hable-mas");
//   //     expect(screen.getByText("see more")).toBeInTheDocument();
//   //   });
//   // });

//   // it("should render the correct technology information for each project", () => {
//   //   render(
//   //     <MemoryRouter>
//   //       <Projects imageRefs={imageRefs} />
//   //     </MemoryRouter>
//   //   );

//   //   projectsData.forEach((project) => {
//   //     project.areas.forEach((area) => {
//   //       expect(screen.getByText(area)).toBeInTheDocument();
//   //     });
//   //   });
//   // });
// });
