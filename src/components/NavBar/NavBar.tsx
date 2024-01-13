import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "./const";
import { useState } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [showMenu, setshowMenu] = useState<boolean>(false);

  const handleMenuClick = () => {
    setshowMenu((prev) => !prev);
  };

  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4">
      <div>
        <h1 className="text-5xl font-signature ml-2">Venu G Soganadgi</h1>
      </div>

      <ul className="hidden md:flex">
        {navLinks.map(({ id, label }) => (
          <li
            key={`navId-${id}`}
            className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-150 duration-75"
          >
            <Link to={label} smooth duration={500}>{label}</Link>
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
              <Link onClick={handleMenuClick} to={label} smooth duration={500}>{label}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
