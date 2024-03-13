export interface ISkillValues {
  key: string;
  name: string;
  level: string;
  section: string;
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
  },
  {
    key: "ts",
    name: "TypeScript",
    level: Levels.INTERMEDIATE,
    section: DevelopmentType.FRONTEND,
  },
  {
    key: "js",
    name: "JavaScript",
    level: Levels.INTERMEDIATE,
    section: DevelopmentType.FRONTEND,
  },
  {
    key: "html",
    name: "HTML",
    level: Levels.INTERMEDIATE,
    section: DevelopmentType.FRONTEND,
  },
  {
    key: "java",
    name: "Java",
    level: Levels.INTERMEDIATE,
    section: DevelopmentType.BACKEND,
  },
  {
    key: "css",
    name: "CSS",
    level: Levels.BASIC,
    section: DevelopmentType.FRONTEND,
  },
  {
    key: "spring",
    name: "SpringBoot",
    level: Levels.BASIC,
    section: DevelopmentType.BACKEND,
  },
  {
    key: "node",
    name: "NodeJS",
    level: Levels.BASIC,
    section: DevelopmentType.BACKEND,
  },
  {
    key: "express",
    name: "ExpressJS",
    level: Levels.BASIC,
    section: DevelopmentType.BACKEND,
  },
  {
    key: "mongo",
    name: "MongoDB",
    level: Levels.BASIC,
    section: DevelopmentType.BACKEND,
  },
  {
    key: "git",
    name: "GIT",
    level: Levels.BASIC,
    section: DevelopmentType.BACKEND,
  },
  {
    key: "material",
    name: "MateriUI",
    level: Levels.BASIC,
    section: DevelopmentType.BACKEND,
  },
];
