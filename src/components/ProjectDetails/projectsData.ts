import introImageHableMas from "../../assets/hable_mas/ai_rock_tablet.jpg";
import desktopImageHableMas from "../../assets/hable_mas/laptop_rock_hable.jpg";
import mobileImageHableMas from "../../assets/hable_mas/3mobiles_hable.png";

import introImageBeanBazaar from "../../assets/bean_bazaar/bean_laptop.jpg";
import desktopImageBeanBazaar from "../../assets/bean_bazaar/laptop_rock_bean.jpg";
import mobileImageBeanBazaar from "../../assets/bean_bazaar/3mobiles_bean.png";

import introImageTaskEase from "../../assets/task_ease/task_mobile.jpg";
import desktopImageTaskEase from "../../assets/task_ease/laptop_rock_task.jpg";
import mobileImageTaskEase from "../../assets/task_ease/task_mobiles.png";

export const projectsDetailsData = [
  {
    id: 1,
    link: "/hable-mas",
    title: "Hable Más",
    oneLineDescription:
      "AI language assistant which helps you to improve spoken Spanish",
    liveSite: "https://hable.netlify.app/",
    githubRepo: "https://github.com/MarioGrusz/HableMas",
    introImage: introImageHableMas,
    desktopImage: desktopImageHableMas,
    mobileImage: mobileImageHableMas,
    nextProjectLink: "/bean-bazaar",

    accordionData: {
      problemId: 1,
      problemHeader: "Problem",
      problemText: `Language learners often struggle to find conversation partners, hindering their progress.`,
      solutionId: 2,
      solutionHeader: "Solution",
      solutionText: `AI language partner offers an innovative solution, allowing users to practice Spanish anytime, anywhere.
                            Engage in realistic conversations with Alejandro, receive feedback to enhance skills,
                            and automatically generate flashcards to reinforce new vocabulary.`,
      architectureId: 3,
      architectureHeader: "Architecture",
      architectureArray: [
        "Typescript",
        "React",
        "Node",
        "Fastify",
        "PostgreSQL",
      ],
    },
  },
  {
    id: 2,
    link: "/bean-bazaar",
    title: "Bean Bazaar",
    oneLineDescription: "Web scraping app for coffee lovers.",
    liveSite: "https://beanbazaar.netlify.app/",
    githubRepo: "https://github.com/MarioGrusz/bean-bazaar",
    introImage: introImageBeanBazaar,
    desktopImage: desktopImageBeanBazaar,
    mobileImage: mobileImageBeanBazaar,
    nextProjectLink: "/task-ease",

    accordionData: {
      problemId: 1,
      problemHeader: "Problem",
      problemText: `Coffee lovers often face challenges in exploring and comparing coffee beans 
            because of absence of a centralized platform.`,
      solutionId: 2,
      solutionHeader: "Solution",
      solutionText: `We created a centralized platform, application which scrapes data, allowing users to view, compare, 
      filter by origin or store, create accounts, and add items to their wishlist.`,
      architectureId: 3,
      architectureHeader: "Architecture",
      architectureArray: [
        "Typescript",
        "React",
        "Node",
        "Fastify",
        "PostgreSQL",
      ],
    },
  },
  {
    id: 3,
    link: "/task-ease",
    title: "Task Ease",
    oneLineDescription: "Web scraping app for coffee lovers.",
    liveSite: "https://taskease-app.netlify.app/",
    githubRepo: "https://github.com/MarioGrusz/task-ease-v2",
    introImage: introImageTaskEase,
    desktopImage: desktopImageTaskEase,
    mobileImage: mobileImageTaskEase,
    nextProjectLink: "/hable-mas",
    accordionData: {
      problemId: 1,
      problemHeader: "Problem",
      problemText: `Many learners struggle to organize their daily learning tasks effectively.`,
      solutionId: 2,
      solutionHeader: "Solution",
      solutionText: `Built with vanilla JavaScript and leveraging local storage, Learning Planner offers a minimalist approach 
                to help users organize their learning routine. Easily plan and track your daily learning activities 
                in a user-friendly interface tailored for those starting their journey into effective planning.`,
      architectureId: 3,
      architectureHeader: "Architecture",
      architectureArray: ["Typescript", "Javascript", "SCSS"],
    },
  },
];
