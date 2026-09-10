import { FaBars, FaTimes } from "react-icons/fa";
import { GrSystem } from "react-icons/gr";
import { CiDark, CiLight } from "react-icons/ci";
import { navLinks } from "./const";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const toggleClasses =
  "flex w-full items-center cursor-pointer font-medium p-2 rounded-lg text-gray-500 hover:bg-cyan-100 hover:dark:bg-emerald-50";

const focusClasses =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500";

type ThemeMode = "light" | "dark" | "system";

// Keep in sync with the pre-hydration script in public/index.html.
const THEME_STORAGE_KEY = "theme";

const getStoredTheme = (): ThemeMode => {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark" || stored === "system") {
      return stored;
    }
  } catch {
    // localStorage is unavailable in private mode / with cookies blocked.
  }
  return "system";
};

const NavBar = () => {
  const [showMenu, setshowMenu] = useState<boolean>(false);
  const [showToggleMenu, setShowToggleMenu] = useState<boolean>(false);
  const [themeMode, setThemeMode] = useState<ThemeMode>(getStoredTheme);
  const [isDark, setIsDark] = useState<boolean>(false);

  const handleMenuClick = () => {
    setshowMenu((prev) => !prev);
  };

  // Resolve the selected mode to a concrete theme, and keep following the OS
  // for as long as "system" stays selected.
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const resolve = () =>
      setIsDark(themeMode === "system" ? media.matches : themeMode === "dark");

    resolve();
    if (themeMode !== "system") {
      return;
    }
    media.addEventListener("change", resolve);
    return () => media.removeEventListener("change", resolve);
  }, [themeMode]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const handleToggleClick = () => {
    setShowToggleMenu((prev) => !prev);
  };

  const handleThemeChange = (mode: ThemeMode) => {
    setThemeMode(mode);
    setShowToggleMenu(false);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, mode);
    } catch {
      // Persisting is best effort; the theme still applies for this session.
    }
  };

  const themeOptions: { mode: ThemeMode; label: string; icon: JSX.Element }[] = [
    { mode: "dark", label: "Dark", icon: <CiDark size={20} /> },
    { mode: "light", label: "Light", icon: <CiLight size={20} /> },
    { mode: "system", label: "System", icon: <GrSystem size={20} /> },
  ];

  return (
    <nav id="Navbar" className="sticky top-0 z-50 transition-colors duration-300 backdrop-blur-sm bg-slate-200/80 dark:bg-black/80">
      <div className="flex justify-between items-center w-full h-20 text-black dark:text-white px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl sm font-signature ml-2 text-black dark:text-white">
          Venu G Soganadgi
        </h1>
        <div className="flex justify-between items-center gap-4">
          <div className="relative">
            <button
              type="button"
              onClick={handleToggleClick}
              aria-label="Change color theme"
              aria-haspopup="menu"
              aria-expanded={showToggleMenu}
              className={`flex items-center rounded-md p-1 ${focusClasses}`}
            >
              {isDark ? <CiDark size={30} /> : <CiLight size={30} />}
            </button>
            {showToggleMenu && (
              <div
                role="menu"
                className="absolute right-0 top-12 bg-white/90 backdrop-blur-md rounded-lg p-4 text-base font-semibold text-slate-900 dark:bg-slate-800/90 dark:text-slate-400 shadow-lg border border-gray-200 dark:border-slate-700"
              >
                <ul className="space-y-2">
                  {themeOptions.map(({ mode, label, icon }) => (
                    <li key={`toggle-${mode}`}>
                      <button
                        type="button"
                        role="menuitemradio"
                        aria-checked={themeMode === mode}
                        className={`${toggleClasses} ${focusClasses}`}
                        onClick={() => handleThemeChange(mode)}
                      >
                        {icon}
                        <span className="px-2">{label}</span>
                      </button>
                    </li>
                  ))}
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
          <button
            type="button"
            onClick={handleMenuClick}
            aria-label={showMenu ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={showMenu}
            aria-controls="mobile-nav-menu"
            className={`cursor-pointer right-10 z-10 rounded-md p-1 text-gray-500 md:hidden ${focusClasses}`}
          >
            {showMenu ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
          {showMenu && (
            <ul
              id="mobile-nav-menu"
              className="md:hidden fixed top-6 right-3 bg-white rounded-lg p-4 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400"
            >
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
