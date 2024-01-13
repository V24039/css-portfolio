import html from "../../assets/html.png";
import css from "../../assets/css.png";
import javascript from "../../assets/javascript.png";
import reactImage from "../../assets/react.png";
import java from "../../assets/html.png";
import springBoot from "../../assets/html.png";

const Skills = () => {
  return (
    <div id="Skills" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <h1 className="text-4xl font-bold inline">
          <text className="border-b-4 border-gray-500">Skills</text>
        </h1>
        <p className="py-8">The technologies I have worked with</p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img className="w-20 mx-auto" src={html} alt="" />
            <p className="mt-4">HTML</p>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img className="w-20 mx-auto" src={css} alt="" />
            <p className="mt-4">CSS</p>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img className="w-20 mx-auto" src={javascript} alt="" />
            <p className="mt-4">Javascript</p>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img className="w-20 mx-auto" src={reactImage} alt="" />
            <p className="mt-4">React</p>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img className="w-20 mx-auto" src={java} alt="" />
            <p className="mt-4">Java</p>
          </div>
          <div className="shadow-md shadow-gray-600 rounded-lg">
            <img className="w-20 mx-auto" src={springBoot} alt="" />
            <p className="mt-4">Spring Boot</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
