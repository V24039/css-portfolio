export interface ISkillGroup {
  key: string;
  title: string;
  skills: string[];
}

export const skillGroups: ISkillGroup[] = [
  {
    key: "frontend",
    title: "Frontend Frameworks",
    skills: [
      "React",
      "Redux",
      "Redux Toolkit",
      "RTK Query",
      "Redux-Saga",
      "Formik",
      "Yup",
      "Material-UI",
      "Tailwind CSS",
    ],
  },
  {
    key: "palantir",
    title: "Palantir Platform",
    skills: [
      "React OSDK",
      "AIP (Ontology objects)",
      "AIP (LLM blocks)",
      "Foundry-backed APIs",
    ],
  },
  {
    key: "languages",
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    key: "devops",
    title: "DevOps & Tools",
    skills: [
      "Git",
      "GitHub",
      "Azure Pipelines",
      "CI/CD",
      "Chrome DevTools",
      "React DevTools",
    ],
  },
  {
    key: "engineering",
    title: "Engineering",
    skills: [
      "REST API integration",
      "JSON schema validation",
      "Localization (i18n)",
      "Offline data storage",
    ],
  },
];
