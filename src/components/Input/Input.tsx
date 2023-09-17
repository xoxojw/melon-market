import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  register: UseFormRegisterReturn;
  name: string;
  type: string;
  kind?: "text" | "email" | "phone" | "price";
}

const Input = ({ label, register, name, type, kind = "text" }: InputProps) => {
  return (
    <div className="space-y-1">
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      {kind === "text" ? (
        <input
          {...register}
          id={name}
          type={type}
          className="appearance-none w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-melon-300 focus:border-melon-300"
        />
      ) : null}
      {kind === "email" ? (
        <input
          {...register}
          id={name}
          type={type}
          className="appearance-none w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-melon-300 focus:border-melon-300"
          placeholder="example@email.com"
        />
      ) : null}
      {kind === "phone" ? (
        <div className="flex rounded-md shadow-sm">
          <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 select-none text-sm">
            +82
          </span>
          <input
            {...register}
            id={name}
            type={type}
            className="w-full px-3 py-2 border-gray-300 rounded-md rounded-l-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-melon-300 focus:border-melon-300"
            placeholder="010-0000-0000"
          />
        </div>
      ) : null}
      {kind === "price" ? (
        <div className="rounded-md relative flex items-center justify-center shadow-sm">
          <div className="absolute left-0 pl-3 flex items-center justify-center text-gray-500 text-sm">
            <span className="pointer-events-none">₩</span>
          </div>
          <input
            {...register}
            id={name}
            type={type}
            placeholder="0"
            className="appearance-none pl-8 w-full px-3 py-2 border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-melon-300 focus:border-melon-300"
          />
          <div className="absolute right-0 pr-3 flex items-center justify-center">
            <span className="text-gray-500 pointer-events-none">KRW</span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Input;
