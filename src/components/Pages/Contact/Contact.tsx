import { CgMail } from "react-icons/cg";
import { IoLogoLinkedin} from "react-icons/io";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="flex flex-col justify-center max-w-screen-lg mx-auto h-full py-28"
    >
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          Contact Me
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-full md:w-3/4 lg:w-2/3 justify-around items-center m-auto gap-6">
        <section className="flex flex-row items-center border-2 rounded-xl border-gray-300 dark:border-gray-600 p-4 gap-4 backdrop-blur-sm bg-white/50 dark:bg-slate-800/50 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-cyan-300 dark:hover:border-cyan-700 group">
          <CgMail size={30} className="text-gray-600 dark:text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300" />
          <span><a href="mailto:soganadgivenu@gmail.com" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300">soganadgivenu@gmail.com</a></span>
        </section>
        <section className="flex flex-row items-center border-2 rounded-xl border-gray-300 dark:border-gray-600 p-4 gap-4 backdrop-blur-sm bg-white/50 dark:bg-slate-800/50 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-cyan-300 dark:hover:border-cyan-700 group">
          <IoLogoLinkedin size={30} className="text-gray-600 dark:text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300" />
          <span><a href="https://www.linkedin.com/in/venu-soganadgi-b98483150" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300">Venu Soganadgi</a></span>
        </section>
      </div>
    </div>
  );
};

export default Contact;
