export interface IProjectValues {
    label: string;
    descp: string;
    gitHub: string;
    techUsed: string[];
}

export const projects:IProjectValues[] = [
  {
    label: "Teacher-Student Management System",
    descp:
      "This is a simple Spring Boot project to manage the profiles of Teachers and Students. It provides a platform for teachers to create and manage student profiles, including the ability to record and update student marks. On the other hand, students have the autonomy to manage their own profiles and access their academic results.",
    gitHub: "https://github.com/V24039/Student",
    techUsed: ["Java", "SpringBoot", "Rest API"],
  },
  {
    label: "Weather Data using PostalCode",
    descp:
      "A spring application to obtain the weather of a city using the pin code for a particular date, using GeoNames and Visual Crossing weather API",
    gitHub: "https://github.com/V24039/Weather",
    techUsed: ["Java", "SpringBoot", "Rest API"],
  },
  {
    label: "Task Manager",
    descp:
      "A React application to create a task and asign the task to 'Added', 'Started', 'Completed'.",
    gitHub: "https://github.com/V24039/task-manager",
    techUsed: ["ReactJs", "HTML", "CSS", "Formik","yup"],
  },
];
