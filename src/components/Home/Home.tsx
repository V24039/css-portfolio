import MyImage from "../../assets/heroImage.png";
import { LuArrowRightFromLine } from "react-icons/lu";

export const Home = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-tr from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Fullstack developer
          </h2>
          <p className="text-gray-400 py-4 max-w-md">
            Experienced Software Developer with 2 years of expertise in React
            and Typescript. Demonstrated exceptional time-management skills by
            efficiently delivering high-quality projects within tight deadlines.
          </p>
          <button className="group text-white w-fit px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-tr from-cyan-950 to-blue-400 cursor-pointer">
            Portfolio
            <span className="group-hover:rotate-90 duration-150">
              <LuArrowRightFromLine />
            </span>
          </button>
        </div>
        <div>
          <img src={MyImage} alt="my-face" className="rounded-lg " />
        </div>
      </div>
    </div>
  );
};
