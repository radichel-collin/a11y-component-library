import { forwardRef } from "react";

interface InputProps {
  id: string;
  label: string;
  type?: "text" | "email" | "password" | "number";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  successMessage?: string;
  disabled?: boolean;
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  helperText,
  errorMessage,
  successMessage,
  disabled = false,
  required = false,
}, ref) => {
  let borderClass;
  if (errorMessage) {
    borderClass = "border-red-600";
  } else if (successMessage) {
    borderClass = "border-green-600";
  } else {
    borderClass = "border-gray-300";
  }

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
        ref={ref}
        aria-invalid={Boolean(errorMessage)}
        aria-describedby={`${id}-helper ${id}-error ${id}-success`}
        className={`
  w-full px-3 py-2 rounded-md text-sm
  border
  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
  disabled:opacity-50 disabled:cursor-not-allowed
  ${borderClass}
`}
      />
      <p id={`${id}-helper`} className="text-sm text-gray-500">
        {helperText}
      </p>
      <p id={`${id}-error`} className="text-sm text-red-600" role="alert">
        {errorMessage}
      </p>
      <p id={`${id}-success`} className="text-sm text-green-700" role="status">
        {successMessage}
      </p>
    </div>
  );
});

export default Input;
