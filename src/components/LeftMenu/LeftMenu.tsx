import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

interface ILinksValue {
  id: number;
  element: JSX.Element;
  href: string;
  style?: string;
  download?: boolean;
}

export const LeftMenu = () => {
  const links: ILinksValue[] = [
    {
      id: 0,
      element: (
        <>
          LinkedIn <FaLinkedinIn size={35} />
        </>
      ),
      href: "https://www.linkedin.com/in/venu-soganadgi-b98483150",
      style: "rounded-tr-md",
    },
    {
      id: 1,
      element: (
        <>
          GitHub <FaGithub size={35} />
        </>
      ),
      href: "https://github.com/V24039",
    },
    {
      id: 2,
      element: (
        <>
          Mail <HiOutlineMail size={35} />
        </>
      ),
      href: "mailto:soganadgivenu@gamil",
    },
    {
      id: 3,
      element: (
        <>
          Resume <BsFillPersonLinesFill size={35} />
        </>
      ),
      href: "/resume.pdf",
      download: true,
      style: "rounded-br-md",
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      
    </div>
  );
};
