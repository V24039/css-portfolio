import { Button as Scroll } from "react-scroll";

interface IButtonProps {
  label: string;
  linkTo?: string;
  handleClick?: VoidFunction;
}

export const Button = ({ label, linkTo, handleClick }: IButtonProps) => {
  const classNames =
    "group w-fit px-6 py-3 my-3 flex items-center rounded-md bg-gradient-to-tr from-cyan-950 to-blue-400 cursor-pointer";

  const handleButtonClick=()=>{
    if(handleClick){
      handleClick()
    }
  }

  if (linkTo) {
    return (
      <Scroll className={classNames} to={linkTo} smooth duration={500} >
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
