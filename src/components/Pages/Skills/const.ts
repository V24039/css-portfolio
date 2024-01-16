export interface ISkillValues {
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
    name: "ReactJs",
    level: Levels.INTERMEDIATE,
    section: DevelopmentType.FRONTEND,
  },
  {
    name: "TypeScript",
    level: Levels.INTERMEDIATE,
    section: DevelopmentType.FRONTEND,
  },
  {
    name: "JavaScript",
    level: Levels.INTERMEDIATE,
    section: DevelopmentType.FRONTEND,
  },
  {
    name: "HTML",
    level: Levels.INTERMEDIATE,
    section: DevelopmentType.FRONTEND,
  },
  {
    name: "Java",
    level: Levels.INTERMEDIATE,
    section: DevelopmentType.BACKEND,
  },
  {
    name: "CSS",
    level: Levels.BASIC,
    section: DevelopmentType.FRONTEND,
  },
  {
    name: "SpringBoot",
    level: Levels.BASIC,
    section: DevelopmentType.BACKEND,
  },
];
