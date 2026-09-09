export interface ISkillValues {
  key: string;
  name: string;
  level: string;
  section: string;
  imageUrl: string;
}

export enum DevelopmentType {
  FRONTEND = "Frontend",
  LANGUAGES = "Languages",
  TOOLS_TESTING = "DevOps & Tools",
}

export enum Levels {
  ADVANCED = "Advanced",
  INTERMEDIATE = "Intermediate",
  BASIC = "Basic",
}

export const myCurrentSkills: ISkillValues[] = [
  // --- Frontend ---
  {
    key: "react",
    name: "React",
    level: Levels.ADVANCED,
    section: DevelopmentType.FRONTEND,
    imageUrl: "/assets/react.png",
  },
  {
    key: "redux",
    name: "Redux (Toolkit, RTK Query, Saga)",
    level: Levels.INTERMEDIATE,
    section: DevelopmentType.FRONTEND,
    imageUrl: "/assets/redux.png",
  },
  {
    key: "material",
    name: "Material-UI",
    level: Levels.INTERMEDIATE,
    section: DevelopmentType.FRONTEND,
    imageUrl: "/assets/material.png",
  },
  {
    key: "tailwind",
    name: "Tailwind CSS",
    level: Levels.INTERMEDIATE,
    section: DevelopmentType.FRONTEND,
    imageUrl: "/assets/tailwind.png",
  },

  // --- Languages ---
  {
    key: "ts",
    name: "TypeScript",
    level: Levels.ADVANCED,
    section: DevelopmentType.LANGUAGES,
    imageUrl: "/assets/typescript.png",
  },
  {
    key: "js",
    name: "JavaScript",
    level: Levels.ADVANCED,
    section: DevelopmentType.LANGUAGES,
    imageUrl: "/assets/javascript.png",
  },
  {
    key: "html",
    name: "HTML",
    level: Levels.INTERMEDIATE,
    section: DevelopmentType.LANGUAGES,
    imageUrl: "/assets/html.png",
  },
  {
    key: "css",
    name: "CSS",
    level: Levels.INTERMEDIATE,
    section: DevelopmentType.LANGUAGES,
    imageUrl: "/assets/css.png",
  },

  // --- DevOps & Tools ---
  {
    key: "git",
    name: "Git/GitHub",
    level: Levels.INTERMEDIATE,
    section: DevelopmentType.TOOLS_TESTING,
    imageUrl: "/assets/github.png",
  },
];
