interface InputProps {
  id: string;
  label: string;
  type?: "text" | "email" | "password" | "number";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  required?: boolean;
}

function Input({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  required = false,
}: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
        {required && (
          <span className="text-red-500 ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        aria-describedby={`${id}-helper ${id}-error`}
        className={`
  w-full px-3 py-2 rounded-md text-sm
  border
  focus:outline-none focus:ring-2 focus:ring-offset-2
  disabled:opacity-50 disabled:cursor-not-allowed
  ${errorMessage ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"}
`}
      />
      {helperText && (
        <p id={`${id}-helper`} className="text-sm text-gray-500">
          {helperText}
        </p>
      )}
      {errorMessage && (
        <p id={`${id}-error`} className="text-sm text-red-500" role="alert">
            {errorMessage}
        </p>
    )}
    </div>
  );
}

export default Input;
