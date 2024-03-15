import { myCurrentSkills } from "./const";

const Skills = () => {

  return (
    <div
      id="Skills"
      className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full pt-28"
    >
      <h1 className="text-4xl font-bold inline">
        <text className="border-b-4 border-gray-500">Skills</text>
      </h1>
      <p className="pt-2 pb-6">Technologies I've worked with:</p>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 sm:grid-cols-4 text-center gap-8">
        {myCurrentSkills?.map((skill) => (
          <section className="p-2" key={skill.key}>
            <div className="flex flex-col items-start p-2 justify-between gap-4">
              <img
                src={skill.imageUrl}
                loading="lazy"
                alt={skill.key}
                className="w-auto h-auto bg-blend-screen grayscale hover:grayscale-0 dark:grayscale-0"
                title={skill.name}
              />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Skills;
