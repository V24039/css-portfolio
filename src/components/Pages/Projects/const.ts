export interface IProjectValues {
  label: string;
  descp: string;
  gitHub: string;
  projectLink?: string;
  techUsed: string[];
}

export const projects: IProjectValues[] = [
  {
    label: "One Army Community Platform (Open Source)",
    descp:
      "Open source contribution. Architected a reusable, accessible Pagination component with URL parameter state persistence to replace legacy infinite loading. Refactored the SpaceProfile architecture into modular sub-components (MemberHistory, UserStatistics) to enhance mobile responsiveness, optimized authentication redirection flows and root-level edit validation, and fixed UI bugs (e.g. preventing empty comments, blocking map pin additions for incomplete profiles). Wrote unit and end-to-end tests using Jest and Cypress to ensure code quality.",
    gitHub: "https://github.com/ONEARMY/community-platform",
    techUsed: ["ReactJs", "TypeScript", "Accessibility", "Jest", "Cypress"],
  },
  {
    label: "Countries Details Explorer",
    descp:
      "Built a REST Countries explorer with search, filtering, and a light/dark theme switcher using React, TypeScript, and the REST Countries API.",
    gitHub: "https://github.com/V24039/fm-countries-advance",
    techUsed: ["ReactJs", "TypeScript", "CSS", "Rest API"],
  },
  {
    label: "Full-Stack E-Commerce Platform",
    descp:
      "Built a full-stack e-commerce application with Next.js 14 and tRPC, using end-to-end type-safe RPC calls between client and server instead of traditional REST endpoints.",
    gitHub: "https://github.com/V24039/next-ecommerce",
    techUsed: ["NextJs", "TypeScript", "tRPC", "React"],
  },
  {
    label: "Weekday Scheduling App Clone",
    descp:
      "Recreated the Weekday calendar/scheduling interface with React, TypeScript, and Material-UI, using custom hooks and infinite scroll for efficient event list rendering.",
    gitHub: "https://github.com/V24039/weekday-clone",
    techUsed: ["ReactJs", "TypeScript", "Material-UI", "Custom Hooks"],
  },
];
