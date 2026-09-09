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
      "A storefront built on the Next.js App Router with end-to-end type safety: tRPC routers on the server, Zod schema validation, and TanStack Query for data fetching. Implements a multi-step account creation flow with email verification, route protection behind an auth provider, and a reusable set of form inputs and a custom pagination hook.",
    gitHub: "https://github.com/V24039/next-ecommerce",
    techUsed: ["NextJs", "TypeScript", "tRPC", "Zod", "TanStack Query", "Tailwind CSS"],
  },
  {
    label: "Frontend Fundamentals Reference",
    descp:
      "A self-built interactive reference covering JavaScript fundamentals — closures, prototypes, this-binding, scope, promises and async patterns, and collection methods — alongside CSS layout demos, each with runnable examples. Built around a reusable component set (accordion, syntax-highlighted code display, in-page index) with nested routing and Redux Toolkit for state.",
    gitHub: "https://github.com/V24039/learn_web",
    techUsed: ["ReactJs", "TypeScript", "Vite", "Redux Toolkit", "React Router"],
  },
  {
    label: "Event Platform",
    descp:
      "A multi-page events site built as a frontend engineering assignment, using the Next.js App Router and Tailwind. Structured around components designed for reuse across every page — image carousel, tab navigation, and text/image content blocks — with scroll-triggered animations throughout.",
    gitHub: "https://github.com/V24039/css-FrontendTask",
    techUsed: ["NextJs", "JavaScript", "Tailwind CSS", "React Icons"],
  },
];
