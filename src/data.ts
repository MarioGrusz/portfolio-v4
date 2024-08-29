import homePageHableMasImage from "./assets/aeizei.7edf201c.png";
import homePageBeanBazaarImage from "./assets/20240717_mockup__mobile-on-white-table_HORIZ.jpg";
import homePageTaskEaseImage from "./assets/task_mobile.jpg";

interface projectData {
  title: string;
  description: string;
  homeImage: string;
  grid: "1 / 7" | "7 / 13";
  align: "left" | "right" | "center" | "justify" | "start" | "end";
  link: string;
}

export const projectsData: projectData[] = [
  {
    title: "Hable Mas",
    description: "AI language assistant. Improve your spoken spanish.",
    homeImage: homePageHableMasImage,
    grid: "7 / 13",
    align: "right",
    link: "/hable-mas",
  },

  {
    title: "Bean Bazaar",
    description:
      "Application for exploring, comparing, and finding coffee beans.",
    homeImage: homePageBeanBazaarImage,
    grid: "1 / 7",
    align: "left",
    link: "/bean-bazaar",
  },

  {
    title: "Task Ease",
    description: "It helps to plan and keep daily learning habits.",
    homeImage: homePageTaskEaseImage,
    grid: "7 / 13",
    align: "right",
    link: "/task-ease",
  },
];
