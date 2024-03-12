import { FaBars, FaTimes } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { GrSystem } from "react-icons/gr";
import { CiDark } from "react-icons/ci";
import { navLinks } from "./const";
import { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [showMenu, setshowMenu] = useState<boolean>(false);
  const [showToggleMenu, setShowToggleMenu] = useState<boolean>(false);
  const [currentTheme, setCurrentTheme] = useState<string>(
    localStorage.getItem("theme") ?? "dark"
  );

  const handleMenuClick = () => {
    setshowMenu((prev) => !prev);
  };

  const handleToggleClick = () => {
    document.documentElement.classList.add('light')
    setShowToggleMenu((prev) => !prev);
  };

  return (
    <nav id="Navbar" className="sticky top-0">
      <div className="flex justify-between items-center w-full h-20 bg-black px-4">
        <h1 className="text-3xl sm:text-4xl sm font-signature ml-2 text-white">
          Venu G Soganadgi
        </h1>
        <div className="flex justify-between">
          <div className="hover:cursor-pointer" onClick={handleToggleClick}>
            {currentTheme === "dark" ? (
              <CiDark size={30} />
            ) : (
              <MdOutlineLightMode />
            )}
            {showToggleMenu && (
              <div className="fixed right-auto top-15 bg-white rounded-lg p-4 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400">
                <ul className="space-y-4">
                  <li
                    key="toggle-dark"
                    className="flex items-center cursor-pointer font-medium text-gray-500 hover:bg-red-300"
                  >
                    <CiDark size={20} />
                    <span className="px-2">Dark</span>
                  </li>
                  <li
                    key="toggle-dark"
                    className="flex items-center cursor-pointer font-medium text-gray-500 hover:bg-red-300"
                  >
                    <MdOutlineLightMode size={20} />
                    <span className="px-2">Light</span>
                  </li>
                  <li
                    key="toggle-dark"
                    className="flex items-center cursor-pointer font-medium text-gray-500 hover:bg-red-300"
                  >
                    <GrSystem size={20} />
                    <span className="px-2 text-left">System</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <ul className="hidden md:flex">
            {navLinks.map(({ id, label }) => (
              <li
                key={`navId-${id}`}
                className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-150 duration-75"
              >
                <Link to={label} smooth duration={500}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div
            onClick={handleMenuClick}
            className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
          >
            {showMenu ? <FaTimes size={20} /> : <FaBars size={20} />}
          </div>
          {showMenu && (
            <ul className="flex flex-col justify-center items-center absolute top-20 left-0 w-full h-auto bg-gradient-to-b from-black to-gray-800 text-gray-500">
              {navLinks.map(({ id, label }) => (
                <li
                  key={`navId-mobile-${id}`}
                  className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-150 duration-75"
                >
                  <Link
                    onClick={handleMenuClick}
                    to={label}
                    smooth
                    duration={500}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
