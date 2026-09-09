import { education } from "./const";

const Education = () => {
  return (
    <div
      id="Education"
      className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full pt-24 pb-16 px-4"
    >
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Education
        </p>
      </div>

      <div className="space-y-6">
        {education.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 p-6 rounded-xl backdrop-blur-sm bg-white/50 dark:bg-slate-800/50 shadow-lg border border-gray-200 dark:border-slate-700"
          >
            <div>
              <h3 className="text-2xl font-semibold">{item.degree}</h3>
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                {item.institution} · {item.location}
              </p>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
              {item.graduated}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
