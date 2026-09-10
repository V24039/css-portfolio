import { Button as Scroll } from "react-scroll";

interface IButtonProps {
  label: string;
  linkTo?: string;
  handleClick?: VoidFunction;
  variant?: "primary" | "secondary";
}

const base =
  "group inline-flex w-fit cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";

const variants = {
  primary:
    "bg-gradient-to-r from-violet-600 to-cyan-500 text-white shadow-[0_8px_30px_-8px_rgba(139,92,246,0.6)] hover:shadow-[0_12px_40px_-8px_rgba(139,92,246,0.8)] hover:brightness-110",
  secondary:
    "border border-slate-300 text-slate-700 hover:border-violet-400 hover:text-violet-600 dark:border-white/15 dark:text-slate-200 dark:hover:border-violet-400/60 dark:hover:text-white",
};

export const Button = ({
  label,
  linkTo,
  handleClick,
  variant = "primary",
}: IButtonProps) => {
  const classNames = `${base} ${variants[variant]}`;

  if (linkTo) {
    return (
      <Scroll className={classNames} to={linkTo} smooth duration={500} offset={-80}>
        {label}
      </Scroll>
    );
  }

  return (
    <button type="button" onClick={handleClick} className={classNames}>
      {label}
    </button>
  );
};