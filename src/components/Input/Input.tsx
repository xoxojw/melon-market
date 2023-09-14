import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  kind?: "text" | "email" | "phone" | "price";
  register: UseFormRegisterReturn;
  type: string;
}

const Input = ({ label, name, kind = "text", register, type }: InputProps) => {
  return (
    <>
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
    </>
  );
};

export default Input;