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
    company: "MathCo",
    title: "Product Engineer II (FE)",
    dates: "08/2025 – Present",
    responsibilities: [
      "Architected and developed a content generation web application as the sole frontend developer using Palantir React OSDK, streamlining Closed Loop Marketing (CLM) and Virtual Approved Email (VAE) presentation creation for pharmaceutical sales representatives.",
      "Designed client-side parallel API execution by triggering individual backend calls per slide, significantly decreasing total generation time, lowering token consumption, and eliminating cross-slide LLM hallucinations.",
      "Co-engineered Palantir AIP filter logic to query pre-analyzed Ontology slide objects based on user inputs (country, product, content type) and assisted in configuring LLM blocks to generate structured JSON outputs.",
      "Built an automated UI schema validator that parses LLM JSON payloads and automatically executes up to 3 retries on backend responses in case of validation failures.",
      "Optimized token cost and model usage by programmatically deriving structural slides (References, Definitions, Abbreviations) directly from slide JSON metadata instead of invoking extra LLM calls.",
      "Refactored e-Wizard compatible Vue.js codebases to consume dynamic JSON inputs, enabling reps to update presentation content without modifying template or index source code, and engineered dynamic template previews with multi-region localization across 5 countries and languages, including country-specific header and footer styling for VAEs.",
    ],
  },
  {
    id: 2,
    company: "Infosys",
    title: "Technology Analyst / Senior System Engineer",
    dates: "10/2021 – 08/2025",
    responsibilities: [
      "Built a greenfield React/TypeScript application end to end, delivering 4–5 complete user flows, deployed via Azure Pipelines CI/CD workflows.",
      "On a second enterprise product, shipped a new Q&A form feature and a custom left navigation with nested sub-trees, search, and deep linking into the main screen, alongside offline data storage and ongoing feature improvements.",
      "Slashed SonarQube code quality issues by 71% (from 700 to 200) by implementing strict coding standards and code reviews.",
      "Architected global state management with Redux / Redux-Saga and designed a reusable UI component library using Formik and Yup.",
      "Partnered with cross-functional teams to build POCs, accelerate feature releases, and author technical architecture documentation.",
    ],
  },
];
