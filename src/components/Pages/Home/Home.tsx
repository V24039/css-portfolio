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
    <section
      id="Home"
      className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-screen-lg flex-col-reverse items-center justify-center gap-12 py-20 md:flex-row md:gap-16"
    >
      <div className="flex w-full animate-fade-up flex-col items-center text-center md:items-start md:text-left">
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1 font-mono text-xs text-slate-600 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Product Engineer II at MathCo
        </span>

        <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Senior Frontend
          <br />
          <span className="accent-text">Engineer</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          Four years architecting high-performance web applications and
          enterprise platforms. Senior React developer for complex UI systems
          built on{" "}
          <span className="font-medium text-slate-900 dark:text-slate-200">
            Palantir React OSDK
          </span>
          , with AIP integrated for AI-driven workflows.
        </p>

        <div className="mt-9 flex flex-row items-center gap-3">
          <Button label="View résumé" handleClick={handleResumeDownload} />
          <Button label="Get in touch" linkTo="Contact" variant="secondary" />
        </div>

        <div className="mt-8 flex flex-row items-center gap-2">
          {links.map(({ id, element, href }) => (
            <a
              key={`social-link-${id}`}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={element}
              className="rounded-full border border-slate-200 p-2.5 text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400 hover:text-violet-600 dark:border-white/10 dark:text-slate-400 dark:hover:border-violet-400/60 dark:hover:text-white"
            >
              {getElement(element)}
            </a>
          ))}
        </div>
      </div>

      <div className="relative shrink-0">
        <div
          aria-hidden="true"
          className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-500/30 to-cyan-400/30 blur-2xl"
        />
        <img
          src={MyImage}
          alt="Venu - Senior Frontend Engineer"
          width={320}
          height={320}
          className="relative h-56 w-56 rounded-[1.75rem] border border-white/20 object-cover shadow-2xl md:h-80 md:w-80"
        />
      </div>
    </section>
  );
};
