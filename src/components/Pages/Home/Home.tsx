import { Button } from "../../Elements";
import MyImage from "../../../assets/myImage.png";
import { LinkElements, links } from "./const";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";

export const Home = () => {
  const handleResumeDownload = () => {
    const pdfUrl = "/VenuResume.pdf";
    window.open(pdfUrl)
  };

  const getElement = (element: string) => {
    switch (element) {
      case LinkElements.LINKEDIN:
        return <IoLogoLinkedin size={50} />;
      case LinkElements.GITHUB:
        return <IoLogoGithub size={50} />;
      default:
        return <></>;
    }
  };

  return (
    <div
      id="Home"
      className="flex flex-col max-w-screen-lg mx-auto my-20 h-full py-20 md:flex-row gap-20"
    >
      <img src={MyImage} alt="my-face" className="rounded-3xl size-96 m-auto" />

      <div className="flex flex-col items-center justify-center h-full w-full m-auto gap-8">
        <section>
          <h2 className="font-bold">Hello, I am Venu</h2>
          <h2 className="text-4xl sm:text-6xl font-bold">
            Frontend developer
          </h2>
        </section>
        <section>
          <div className="flex flex-row gap-8">
            <Button label="Resume" handleClick={handleResumeDownload} />
            <Button label="Contact" linkTo="Contact" />
          </div>
          <div className="flex flex-row  justify-center gap-8">
            {links.map(({ id, element, href }) => (
              <a
                key={`left-link-${id}`}
                href={href}
                target="_blank"
                rel="noreferrer"
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
