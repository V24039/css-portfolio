import arrayDestruct from "../../assets/portfolio/arrayDestruct.jpg";

const Portfolio = () => {
  return (
    <div
      id="Portfolio"
      className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full pt-28 md:h-screen"
    >
      <h1 className="text-4xl font-bold inline">
        <text className="border-b-4 border-gray-500">Portfolio</text>
      </h1>
      <p className="py-8">Some of my projects</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        <div className="shadow-md shadow-gray-600 rounded-lg">
          <img
            src={arrayDestruct}
            alt=""
            className="rounded-md duration-200 hover:scale-105"
          />
          <div className="flex items-center justify-center py-3">
            <button>Code</button>
          </div>
        </div>
        <div className="shadow-md shadow-gray-600 rounded-lg">
          <img
            src={arrayDestruct}
            alt=""
            className="rounded-md duration-200 hover:scale-105"
          />
          <div className="flex items-center justify-center py-3">
            <button>Code</button>
          </div>
        </div>
        <div className="shadow-md shadow-gray-600 rounded-lg">
          <img
            src={arrayDestruct}
            alt=""
            className="rounded-md duration-200 hover:scale-105"
          />
          <div className="flex items-center justify-center py-3">
            <button>Code</button>
          </div>
        </div>
        <div className="shadow-md shadow-gray-600 rounded-lg">
          <img
            src={arrayDestruct}
            alt=""
            className="rounded-md duration-200 hover:scale-105"
          />
          <div className="flex items-center justify-center py-3">
            <button>Code</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;