export interface IProjectValues {
  label: string;
  descp: string;
  gitHub: string;
  projectLink?: string;
  techUsed: string[];
}

export const projects: IProjectValues[] = [
  {
    label: "Teacher-Student Management System",
    descp:
      "This is a simple Spring Boot project to manage the profiles of Teachers and Students. It provides a platform for teachers to create and manage student profiles, including the ability to record and update student marks. On the other hand, students have the autonomy to manage their own profiles and access their academic results.",
    gitHub: "https://github.com/V24039/Student",
    techUsed: ["Java", "SpringBoot", "Rest API"],
  },
  {
    label: "Weather application",
    descp:
      "Developed a Real-Time Weather Application using React and TypeScript. This application is designed to provide users with dynamic and interactive weather. To ensure a seamless flow of data across all components, I utilized the React Context API for global state management without compromising performance. For crafting a user-friendly interface, I used Material-UI with a focus on responsive design.",
    gitHub: "https://github.com/V24039/Weather",
    projectLink: "https://venuweather.netlify.app/",
    techUsed: ["ReactJs", "TypeScript", "MaterialUI"],
  },
  {
    label: "Task Manager",
    descp:
      "A React application to create a task and asign the task to 'Added', 'Started', 'Completed'.",
    gitHub: "https://github.com/V24039/task-manager",
    techUsed: ["ReactJs", "HTML", "CSS", "Formik", "yup"],
  },
];
