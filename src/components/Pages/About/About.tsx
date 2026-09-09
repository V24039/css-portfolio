const About = () => {
  return (
    <div
      id="About"
      className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full pt-24 pb-16 px-4"
    >
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500 dark:text-white">
          About Me
        </p>
      </div>

      <p className="text-xl mt-5 text-gray-700 dark:text-gray-300 leading-relaxed">
        I'm a Senior Frontend Engineer with over 4 years of experience
        architecting high-performance web applications and enterprise platforms.
        Most recently I've been the sole frontend developer on a content
        generation platform built with Palantir React OSDK, designing the UI
        systems and the client-side orchestration that sit on top of it.
      </p>

      <p className="text-xl mt-5 text-gray-700 dark:text-gray-300 leading-relaxed">
        A lot of my work lives at the boundary between the interface and the
        model: parallel API execution to cut generation time and token spend,
        schema validators that catch malformed LLM payloads and retry them, and
        AIP filter logic that queries Ontology objects from user input. Before
        that I spent four years at Infosys building greenfield React/TypeScript
        products, cutting technical debt, and designing reusable component
        libraries and global state architecture.
      </p>

      <p className="text-xl mt-5 text-gray-700 dark:text-gray-300 leading-relaxed">
        I also contribute to the One Army community platform, where I've focused
        on accessible, reusable components and on breaking large screens into
        maintainable, mobile-friendly pieces.
      </p>
    </div>
  );
};

export default About;
