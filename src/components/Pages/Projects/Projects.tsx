import { IProjectValues, projects } from "./const";

const Projects = () => {
  const getProjects = (project: IProjectValues, index: number) => (
    <div
      key={`project-${index}`}
      className="flex flex-col flex-wrap gap-3 p-2"
    >
      <span className="font-bold flex-wrap space-x-2">
        <span className="text-2xl underline hover:text-violet-400">
          <a href={project.projectLink}>{project.label}</a>
        </span>
        {project.projectLink && (
          <span className="text-xl hover:text-violet-400">
            <a href={project.gitHub}>[Github]</a>
          </span>
        )}
      </span>
      <section>{project.descp}</section>
      <section className="flex flex-row flex-wrap">
        {project.techUsed.map((value) => (
          <span className="font-bold m-2 p-2 px-3 border-4 border-sky-700 text-sky-200 rounded-lg">
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
      <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
        {projects.map((project, index) => getProjects(project, index))}
      </div>
    </div>
  );
};

export default Projects;
