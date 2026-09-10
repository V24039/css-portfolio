export interface IProjectValues {
  label: string;
  descp: string;
  gitHub: string;
  projectLink?: string;
  techUsed: string[];
}

export const projects: IProjectValues[] = [
  {
    label: "One Army Community Platform",
    descp:
      "Open source contribution. Architected a reusable, accessible Pagination component with URL parameter state persistence to replace legacy infinite loading. Refactored the SpaceProfile architecture into modular sub-components (MemberHistory, UserStatistics) to enhance mobile responsiveness, and optimized authentication redirection flows and root-level edit validation to improve user conversion and data hygiene.",
    gitHub: "https://github.com/ONEARMY/community-platform",
    techUsed: ["ReactJs", "TypeScript", "Accessibility", "Jest", "Cypress"],
  },
  {
    label: "E-Commerce Storefront",
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
];
