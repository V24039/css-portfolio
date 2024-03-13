import { DevelopmentType, ISkillValues, myCurrentSkills } from "./const";

const Skills = () => {
  const showSkills = (skill: ISkillValues) => (
    <div className="flex flex-col items-start p-2 ">
      <h3 className="text-2xl font-bold">{skill.name}</h3>
      <p>{skill.level}</p>
    </div>
  );
  const getCurrentSkills = () => {
    const developemntBranch = [
      DevelopmentType.FRONTEND,
      DevelopmentType.BACKEND,
    ];
    const frontendSkills = myCurrentSkills.filter(
      (value) => value.section === DevelopmentType.FRONTEND
    );
    const backendSkills = myCurrentSkills.filter(
      (value) => value.section === DevelopmentType.BACKEND
    );

    return (
      <>
        {[frontendSkills, backendSkills].map((value, index) => (
          <section className="border-4 p-2 border-gray-500 rounded-lg">
            <h1 className="text-4xl font-bold underline p-2">
              {developemntBranch[index]}
            </h1>
            <div className="grid grid-cols-2 sm:grid-cols-3">
              {value.map((skill) => showSkills(skill))}
            </div>
          </section>
        ))}
      </>
    );
  };

  return (
    <div
      id="Skills"
      className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full pt-28"
    >
      <h1 className="text-4xl font-bold inline">
        <text className="border-b-4 border-gray-500">Skills</text>
      </h1>
      <p className="pt-2 pb-6">Technologies I've worked with:</p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 text-center py-8 px-12 sm:px-0">
        {getCurrentSkills()}
      </div>
    </div>
  );
};

export default Skills;
