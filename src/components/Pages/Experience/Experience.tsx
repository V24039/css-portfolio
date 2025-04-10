import { FadeInSection } from "../../Elements/FadeInSection";
import { experiences, IExperience } from "./const";

const Experience = () => {
  return (
    <div
      id="Experience"
      className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full pt-24 pb-16 px-4 dark:text-white" // Standard section styling
    >
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Professional Experience
        </p>
      </div>

      <div className="space-y-12">
        {experiences.map((exp: IExperience, index: number) => (
          <FadeInSection key={exp.id} direction="up" delay={index * 100}>
            <div className="flex flex-col md:flex-row md:gap-6">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <h3 className="text-2xl font-semibold">{exp.title}</h3>
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {exp.dates}
                </p>
              </div>

              <div className="md:w-3/4">
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  );
};

export default Experience;
