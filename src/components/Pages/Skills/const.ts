export interface ISkillValues {
  key: string;
  name: string;
  level: string;
  section: string;
  imageUrl: string;
}

export enum DevelopmentType {
  FRONTEND = "Frontend",
  BACKEND = "Backend",
}

export enum Levels {
  INTERMEDIATE = "Intermediate",
  BASIC = "Basic",
}

export const myCurrentSkills: ISkillValues[] = [
  {
    key: "react",
    name: "ReactJs",
    level: Levels.INTERMEDIATE,
    section: DevelopmentType.FRONTEND,
    imageUrl: '/assests/react.png'
  },
  {
    key: "ts",
    name: "TypeScript",
    level: Levels.INTERMEDIATE,
    section: DevelopmentType.FRONTEND,
    imageUrl: '/assests/typescript.png'
  },
  {
    key: "js",
    name: "JavaScript",
    level: Levels.INTERMEDIATE,
    section: DevelopmentType.FRONTEND,
    imageUrl: '/assests/javascript.png'
  },
  {
    key: "html",
    name: "HTML",
    level: Levels.INTERMEDIATE,
    section: DevelopmentType.FRONTEND,
    imageUrl: '/assests/html.png'
  },
  {
    key: "java",
    name: "Java",
    level: Levels.INTERMEDIATE,
    section: DevelopmentType.BACKEND,
    imageUrl: '/assests/java.png'
  },
  {
    key: "css",
    name: "CSS",
    level: Levels.BASIC,
    section: DevelopmentType.FRONTEND,
    imageUrl: '/assests/css.png'
  },
  {
    key: "spring",
    name: "SpringBoot",
    level: Levels.BASIC,
    section: DevelopmentType.BACKEND,
    imageUrl: '/assests/spring.png'
  },
  {
    key: "node",
    name: "NodeJS",
    level: Levels.BASIC,
    section: DevelopmentType.BACKEND,
    imageUrl: '/assests/node.png'
  },
  {
    key: "express",
    name: "ExpressJS",
    level: Levels.BASIC,
    section: DevelopmentType.BACKEND,
    imageUrl: '/assests/express.png'
  },
  {
    key: "mongo",
    name: "MongoDB",
    level: Levels.BASIC,
    section: DevelopmentType.BACKEND,
    imageUrl: '/assests/mongo.png'
  },
  {
    key: "git",
    name: "GIT",
    level: Levels.BASIC,
    section: DevelopmentType.BACKEND,
    imageUrl: '/assests/github.png'
  },
  {
    key: "material",
    name: "MateriUI",
    level: Levels.BASIC,
    section: DevelopmentType.BACKEND,
    imageUrl: '/assests/material.png'
  },
];
