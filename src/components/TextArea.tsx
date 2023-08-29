interface TextAreaProps {
  label?: string;
  name?: string;
  [key: string]: any;
}

const TextArea = ({label, name, ...rest}: TextAreaProps) => {
  return (
    <div>
      {label ? (
        <label htmlFor={name} className="mb-1 block text-sm font-medium text-gray-700">
          {label}
        </label>
      ) : null}
      <textarea
        id={name}
        className="mt-1 shadow-sm w-full focus:ring-melon-500 rounded-md border-gray-300 focus:border-melon-500 resize-none"
        rows={4}
        {...rest}
      />
    </div>
	);
}

export default TextArea