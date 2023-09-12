import { cls } from "@/libs/client/utils";

interface ButtonProps {
  large?: boolean;
  text: string;
  [key: string]: any;
}

const Button = ({ large = false, onClick, text, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={cls("w-full mt-4 px-4 bg-melon-300 text-white border-transparent outline-melon-400 hover:bg-melon-400 focus:ring-2 focus:ring-melon-400 focus:border-melon-400 rounded-md shadow-sm font-medium transition ease-in-out duration-200",
        large ? "py-3 text-base" : "py-2 text-base"
      )}>
      {text}
    </button>
  );
};

export default Button;