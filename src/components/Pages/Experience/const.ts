export interface IExperience {
  id: number;
  company: string;
  title: string;
  dates: string;
  responsibilities: string[];
}

export const experiences: IExperience[] = [
  {
    id: 1,
    company: "Infosys",
    title: "Technology Analyst",
    dates: "2024/10 – Present",
    responsibilities: [
      "Contributed to the development and maintenance of customer-facing web applications using React, TypeScript, and Azure, ensuring high performance and user satisfaction.",
      "Reduced medium and high-severity SonarQube issues by 71% (from 700 to 200) by implementing code quality best practices.",
      "Collaborated with design and backend teams to ensure seamless UI integration and efficient feature delivery.",
      "Proactively resolved bugs and implemented performance enhancements, contributing to improved application stability.",
      "Utilized Azure Pipelines to deploy changes to various environments, ensuring smooth deployment processes and environment-specific configurations.",
    ],
  },
  {
    id: 2,
    company: "Infosys",
    title: "Senior System Engineer",
    dates: "2021/10 – 2024/10",
    responsibilities: [
      "Developed new user interfaces using React, and TypeScript, improving application functionality and user experience.",
      "Facilitated effective project planning and development by collaborating with cross-functional teams to gather, analyze, and document comprehensive system requirements.",
      "Developed and implemented responsive forms using Formik and Yup for accurate data validation.",
      "Designed reusable React hooks to encapsulate component logic, enhancing code maintainability and reusability.",
      "Integrated Redux for global state management and optimized asynchronous operations using Redux-Saga.",
      "Enhanced usability by troubleshooting UI issues, delivering seamless user experiences, and creating common reusable components for consistent design and functionality.",
    ],
  },
];
