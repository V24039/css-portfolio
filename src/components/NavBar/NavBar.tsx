import { FaBars, FaTimes } from "react-icons/fa";
import { GrSystem } from "react-icons/gr";
import { CiDark, CiLight } from "react-icons/ci";
import { navLinks } from "./const";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const toggleClasses =
  "flex items-center cursor-pointer font-medium p-2 rounded-lg text-gray-500 hover:bg-cyan-100 hover:dark:bg-emerald-50";

const NavBar = () => {
  const [showMenu, setshowMenu] = useState<boolean>(false);
  const [showToggleMenu, setShowToggleMenu] = useState<boolean>(false);
  const [currentTheme, setCurrentTheme] = useState<string>("light");

  const handleMenuClick = () => {
    setshowMenu((prev) => !prev);
  };

  useEffect(()=>{
    handleThemeChange("window")
  },[])

  useEffect(() => {
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [currentTheme]);

  const handleToggleClick = () => {
    setShowToggleMenu((prev) => !prev);
  };

  const handleThemeChange = (theme: string) => {
    if (theme === "window") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setCurrentTheme("dark");
      } else {
        setCurrentTheme("light");
      }
    } else {
      setCurrentTheme(theme);
    }
  };

  return (
    <nav id="Navbar" className="sticky top-0 z-50 transition-colors duration-300 backdrop-blur-sm bg-slate-200/80 dark:bg-black/80">
      <div className="flex justify-between items-center w-full h-20 text-black dark:text-white px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl sm font-signature ml-2 text-black dark:text-white">
          Venu G Soganadgi
        </h1>
        <div className="flex justify-between items-center gap-4">
          <div className="hover:cursor-pointer" onClick={handleToggleClick}>
            {currentTheme === "dark" ? (
              <CiDark size={30} />
            ) : (
              <CiLight size={30} />
            )}
            {showToggleMenu && (
              <div className="fixed right-4 md:right-auto top-16 bg-white/90 backdrop-blur-md rounded-lg p-4 text-base font-semibold text-slate-900 dark:bg-slate-800/90 dark:text-slate-400 shadow-lg border border-gray-200 dark:border-slate-700">
                <ul className="space-y-4">
                  <li
                    key="toggle-dark"
                    className={toggleClasses}
                    onClick={() => handleThemeChange("dark")}
                  >
                    <CiDark size={20} />
                    <span className="px-2">Dark</span>
                  </li>
                  <li
                    key="toggle-light"
                    className={toggleClasses}
                    onClick={() => handleThemeChange("light")}
                  >
                    <CiLight size={20} />
                    <span className="px-2">Light</span>
                  </li>
                  <li
                    key="toggle-system"
                    className={toggleClasses}
                    onClick={() => handleThemeChange("window")}
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
                className="p-2 cursor-pointer rounded-md font-medium text-gray-500 hover:bg-cyan-100 hover:dark:bg-emerald-50 duration-75"
              >
                <Link to={label} smooth duration={500}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div
            onClick={handleMenuClick}
            className="cursor-pointer right-10 z-10 text-gray-500 md:hidden"
          >
            {showMenu ? <FaTimes size={20} /> : <FaBars size={20} />}
          </div>
          {showMenu && (
            <ul className="md:hidden fixed top-6 right-3 bg-white rounded-lg p-4 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400">
              {navLinks.map(({ id, label }) => (
                <li
                  key={`navId-mobile-${id}`}
                  className="px-4 cursor-pointer font-medium text-gray-500 hover:bg-emerald-50 duration-75"
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
