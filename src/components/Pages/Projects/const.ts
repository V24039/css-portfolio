export interface IProjectValues {
  label: string;
  descp: string;
  gitHub: string;
  projectLink?: string;
  techUsed: string[];
}

export const projects: IProjectValues[] = [
  // --- Projects from Resume ---
  {
    label: "Weather application",
    descp:
      "Developed a real-time weather app with React, TypeScript, and Material-UI. Implemented global state management with React Context API. Designed a responsive, visually appealing UI with custom Material-UI components.",
    gitHub: "https://github.com/V24039/Weather",
    projectLink: "https://venuweather.netlify.app/",
    techUsed: ["ReactJs", "TypeScript", "MaterialUI", "Context API"],
  },
  {
    label: "Countries Details",
    descp:
      "Developed a country info website using React, TypeScript, and CSS. Implemented a search and filtering system. Enhanced UX with a theme toggle.",
    gitHub: "https://github.com/V24039/Countries-Details",
    projectLink: "https://venu-countries-details.netlify.app/",
    techUsed: ["ReactJs", "TypeScript", "CSS", "Rest API"],
  },
  // --- Open Source Contributions from Resume ---
  {
    label: "One Army (Open Source Contribution)",
    descp:
      "Contributed to the One Army platform by fixing UI bugs (e.g., preventing empty comments via validation) and enhancing features (e.g., preventing map pin additions for incomplete profiles). Wrote unit and end-to-end tests using Jest and Cypress to ensure code quality.",
    gitHub: "https://github.com/ONEARMY",
    techUsed: ["ReactJs", "TypeScript", "Jest", "Cypress"],
  },

  /*
  {
    label: "Task Manager",
    descp:
      "A React application to create, manage, and track tasks through different stages ('Added', 'Started', 'Completed'). Implemented form handling and validation using Formik and Yup.",
    gitHub: "https://github.com/V24039/task-manager",
    techUsed: ["ReactJs", "HTML", "CSS", "Formik", "Yup"],
  },
  {
    label: "Teacher-Student Management System",
    descp:
      "A Spring Boot application to manage teacher and student profiles. Allows teachers to manage student details and marks, while students can view their profiles and results. Built using RESTful APIs.",
    gitHub: "https://github.com/V24039/Student",
    techUsed: ["Java", "SpringBoot", "Rest API"],
  },
  */
];