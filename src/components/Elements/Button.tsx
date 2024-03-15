import { Button as Scroll } from "react-scroll";

interface IButtonProps {
  label: string;
  linkTo?: string;
  handleClick?: VoidFunction;
}

export const Button = ({ label, linkTo, handleClick }: IButtonProps) => {
  const classNames =
    "group w-fit px-6 py-3 my-3 flex items-center rounded-md dark:bg-gradient-to-tr dark:from-cyan-950 dark:to-blue-400 dark:border-0 cursor-pointer border-2 border-gray-700 shadow-black shadow-sm hover:shadow-inner";

  const handleButtonClick = () => {
    if (handleClick) {
      handleClick();
    }
  };

  if (linkTo) {
    return (
      <Scroll className={classNames} to={linkTo} smooth duration={500}>
        {label}
      </Scroll>
    );
  }
  return (
    <button onClick={handleButtonClick} className={classNames}>
      {label}
    </button>
  );
};
