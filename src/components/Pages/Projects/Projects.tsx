import { IProjectValues, projects } from "./const";

const Projects = () => {
  
  const getProjects = (project: IProjectValues, index: number) => (
    <div key={`project-${index}`} className="flex flex-col gap-3 border-l-4 border-b-4 p-2 border-gray-500">
      <p className="text-2xl font-bold inline underline hover:text-violet-400">
        <a href={project.gitHub}>{project.label}</a>
      </p>
      <section>{project.descp}</section>
      <section>
        {project.techUsed.map((value) => (
          <span className="font-bold m-2 p-1 border-4 border-sky-700 text-sky-200 rounded-lg">
            {value}
          </span>
        ))}
      </section>
    </div>
  );

  return (
    <div
      id="Projects"
      className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full pt-24 md:h-screen"
    >
      <h1 className="text-4xl font-bold inline">
        <text className="border-b-4 border-gray-500">Projects</text>
      </h1>
      <p className="pt-2 pb-6">Checkout some of my projects</p>
      <div className="flex flex-col gap-6">
        {projects.map((project, index) => getProjects(project, index))}
      </div>
    </div>
  );
};

export default Projects;
