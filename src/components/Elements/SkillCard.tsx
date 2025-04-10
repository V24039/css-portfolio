import { ISkillValues } from "../Pages/Skills/const";

interface Props {
  skill: ISkillValues;
}

export const SkillCard = ({ skill }: Props) => {
  return (
    <div
      className="group relative p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 dark:border-slate-700 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:border-cyan-300 dark:hover:border-cyan-700 cursor-pointer"
      title={`${skill.name} - Level: ${skill.level}`}
    >
      <div className="flex flex-col items-center space-y-3">
        <img
          src={skill.imageUrl}
          alt={skill.name}
          className="w-16 h-16 object-contain transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-3"
        />
        <span className="font-medium text-sm text-gray-800 dark:text-gray-200">
          {skill.name}
        </span>
        <span
          className="absolute top-2 right-2 text-xs px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-full"
          title={`Level: ${skill.level}`}
        >
          {skill.level}
        </span>
      </div>
    </div>
  );
};
