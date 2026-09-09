import { skillGroups } from "./const";

const Skills = () => {
  return (
    <div
      id="Skills"
      className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full pt-24 pb-16 px-4"
    >
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Technical Skills
        </p>
      </div>

      <div className="space-y-8">
        {skillGroups.map((group) => (
          <section key={group.key}>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 pb-3">
              {group.title}
            </h3>
            <ul className="flex flex-row flex-wrap gap-3">
              {group.skills.map((skill) => (
                <li
                  key={`${group.key}-${skill}`}
                  className="font-medium px-4 py-2 border border-gray-300 dark:border-slate-700 text-sm backdrop-blur-sm bg-white/50 dark:bg-slate-800/50 text-gray-800 dark:text-gray-200 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-cyan-300 dark:hover:border-cyan-700"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Skills;
