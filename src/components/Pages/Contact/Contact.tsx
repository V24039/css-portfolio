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
      <div className="flex flex-col md:flex-row w-2/4 justify-around items-center m-auto gap-4">
        <section className="flex flex-row items-center border-4 rounded-lg border-gray-500 p-2 gap-2">
          <CgMail size={30} title="soganadgiVenu@gmail.com" />
          <span><a href="mailto:soganadgivenu@gmail.com" className="hover:underline">soganadgivenu@gmail.com</a></span>
        </section>
        <section className="flex flex-row items-center border-4 rounded-lg border-gray-500 p-2 gap-2">
          <IoLogoLinkedin size={30} title="Venu Soganadgi" />
          <span><a href="https://www.linkedin.com/in/venu-soganadgi-b98483150" className="hover:underline">Venu Soganadgi</a></span>
        </section>
      </div>
    </div>
  );
};

export default Contact;
