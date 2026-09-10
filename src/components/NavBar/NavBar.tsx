import { FaBars, FaTimes } from "react-icons/fa";
import { GrSystem } from "react-icons/gr";
import { CiDark, CiLight } from "react-icons/ci";
import { navLinks } from "./const";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const menuItem =
  "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-violet-50 hover:text-violet-700 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white";
const navItem =
  "cursor-pointer rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white";

const navItemActive = "text-slate-900 dark:text-white";

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

  const themeOptions: { mode: ThemeMode; label: string; icon: JSX.Element }[] =
    [
      { mode: "dark", label: "Dark", icon: <CiDark size={18} /> },
      { mode: "light", label: "Light", icon: <CiLight size={18} /> },
      { mode: "system", label: "System", icon: <GrSystem size={16} /> },
    ];

  return (
    <nav id="Navbar" className="sticky top-0 z-50 px-4 pt-4 md:px-6 lg:px-8">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-2xl border border-slate-200/80 bg-white/70 px-4 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]">
        <Link
          to="Home"
          smooth
          duration={500}
          className="group flex cursor-pointer items-center gap-3"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 font-display text-sm font-bold text-white">
            VS
          </span>
          <span className="hidden font-display text-base font-semibold tracking-tight sm:block">
            Venu G Soganadgi
          </span>
        </Link>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center md:flex">
            {navLinks.map(({ id, label }) => (
              <li key={`navId-${id}`}>
                <Link
                  to={label}
                  smooth
                  spy
                  offset={-96}
                  duration={500}
                  className={navItem}
                  activeClass={navItemActive}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="relative ml-1">
            <button
              type="button"
              onClick={handleToggleClick}
              aria-label="Change color theme"
              aria-haspopup="menu"
              aria-expanded={showToggleMenu}
              className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-600 transition-colors duration-200 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5"
            >
              {isDark ? <CiDark size={20} /> : <CiLight size={20} />}
            </button>
            {showToggleMenu && (
              <div
                role="menu"
                className="absolute right-0 top-12 w-40 rounded-xl border border-slate-200 bg-white/90 p-1.5 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-ink-900/95"
              >
                <ul className="space-y-0.5">
                  {themeOptions.map(({ mode, label, icon }) => (
                    <li key={`toggle-${mode}`}>
                      <button
                        type="button"
                        role="menuitemradio"
                        aria-checked={themeMode === mode}
                        className={menuItem}
                        onClick={() => handleThemeChange(mode)}
                      >
                        {icon}
                        <span>{label}</span>
                        {themeMode === mode && (
                          <span className="ml-auto h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={handleMenuClick}
            aria-label={
              showMenu ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={showMenu}
            aria-controls="mobile-nav-menu"
            className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-600 transition-colors duration-200 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5 md:hidden"
          >
            {showMenu ? <FaTimes size={16} /> : <FaBars size={16} />}
          </button>
        </div>
      </div>

      {showMenu && (
        <ul
          id="mobile-nav-menu"
          className="mx-auto mt-2 max-w-7xl rounded-2xl border border-slate-200/80 bg-white/90 p-2 backdrop-blur-xl dark:border-white/10 dark:bg-ink-900/95 md:hidden"
        >
          {navLinks.map(({ id, label }) => (
            <li key={`navId-mobile-${id}`}>
              <Link
                onClick={handleMenuClick}
                to={label}
                smooth
                offset={-96}
                duration={500}
                className={menuItem}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
