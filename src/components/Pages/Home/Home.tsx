import { Button } from "../../Elements";
import MyImage from "../../../assets/myImage.png";
import { LinkElements, links } from "./const";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";

export const Home = () => {
  const handleResumeDownload = () => {
    const pdfUrl = "/VenuResume.pdf";
    window.open(pdfUrl);
  };

  const getElement = (element: string) => {
    switch (element) {
      case LinkElements.LINKEDIN:
        return <IoLogoLinkedin size={40} />;
      case LinkElements.GITHUB:
        return <IoLogoGithub size={40} />;
      default:
        return <></>;
    }
  };

  return (
    <div
      id="Home"
      className="flex flex-col min-h-screen max-w-screen-lg mx-auto justify-center items-center px-4 md:flex-row md:gap-20"
    >
      {/* Image Section */}
      <div className="flex-shrink-0 mt-20 md:mt-0">
        <img
          src={MyImage}
          alt="Venu - Frontend Developer"
          className="rounded-3xl w-64 h-64 md:w-80 md:h-80 object-cover mx-auto"
        />
      </div>
      <div className="flex flex-col items-center justify-center h-full w-full text-center md:items-start md:text-left gap-6 mt-8 md:mt-0">
        {/* Introduction Text */}
        <section>
          <h2 className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300">
            Hello, I'm Venu
          </h2>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mt-1">
            Frontend Developer
          </h1>
          <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl">
            A Technology Analyst with 3+ years of expertise in React,
            TypeScript, and JavaScript, focused on developing responsive user
            interfaces and enhancing application performance. Proven track
            record collaborating with cross-functional teams to deliver
            high-quality software solutions.
          </p>
        </section>

        {/* Buttons and Links */}
        <section className="flex flex-col items-center md:items-start gap-4 mt-4">
          <div className="flex flex-row gap-4">
            <Button label="Resume" handleClick={handleResumeDownload} />
            <Button label="Contact" linkTo="Contact" />
          </div>
          {/* Social Links */}
          <div className="flex flex-row justify-center md:justify-start gap-6 mt-2">
            {links.map(({ id, element, href }) => (
              <a
                key={`social-link-${id}`}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition duration-300"
              >
                {getElement(element)}
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
