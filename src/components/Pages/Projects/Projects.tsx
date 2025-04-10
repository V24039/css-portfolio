import { IProjectValues, projects } from "./const";

const Projects = () => {
  const getProjects = (project: IProjectValues, index: number) => (
    <div
      key={`project-${index}`}
      className="flex flex-col flex-wrap gap-3 p-6 rounded-xl backdrop-blur-sm bg-white/50 dark:bg-slate-800/50 shadow-lg border border-gray-200 dark:border-slate-700 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] hover:border-cyan-300 dark:hover:border-cyan-700"
    >
      <span className="font-bold flex-wrap space-x-2">
        <span className="text-2xl hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300">
          <a href={project.projectLink || project.gitHub}>{project.label}</a>
        </span>
        {project.projectLink && (
          <span className="text-xl hover:text-violet-400 hover:cursor-pointer">
            <a href={project.gitHub}>[Github]</a>
          </span>
        )}
      </span>
      <section>{project.descp}</section>
      <section className="flex flex-row flex-wrap">
        {project.techUsed.map((value) => (
          <span className="inline-block font-medium m-2 p-2 px-3 border text-sm bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-gray-200 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-md">
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
        <span className="border-b-4 border-gray-500">Projects</span>
      </h1>
      <p className="pt-2 pb-6">Checkout some of my projects</p>
      <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-3">
        {projects.map((project, index) => getProjects(project, index))}
      </div>
    </div>
  );
};

export default Projects;
