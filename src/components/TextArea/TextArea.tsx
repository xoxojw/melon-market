import { UseFormRegisterReturn } from "react-hook-form";

interface TextAreaProps {
  label: string;
  register: UseFormRegisterReturn;
  name: string;
  [key: string]: any;
}

const TextArea = ({label, name, register, ...rest}: TextAreaProps) => {
  return (
    <div className="space-y-1">
      {label ? (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700">
          {label}
        </label>
      ) : null}
      <textarea
        {...register}
        id={name}
        className="mt-1 shadow-sm w-full focus:ring-melon-500 rounded-md border-gray-300 focus:border-melon-500 resize-none"
        {...rest}
      />
    </div>
	);
}

export default TextArea