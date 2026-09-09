import { SkillCard } from "../../Elements";
import { myCurrentSkills } from "./const";

const Skills = () => {
  return (
    <div
      id="Skills"
      className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full pt-28"
    >
      <h1 className="text-4xl font-bold inline">
        <span className="border-b-4 border-gray-500">Skills</span>
      </h1>
      <p className="pt-2 pb-6">Technologies I've worked with:</p>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {myCurrentSkills?.map((skill) => (
          <SkillCard key={skill.key} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
