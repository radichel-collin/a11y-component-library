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

export default function Input({
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
}: InputProps) {

// only include IDs that are actually in the DOM for use with aria-describedby
  const describedBy = [
    helperText && `${id}-helper`,
    errorMessage && `${id}-error`,
    successMessage && `${id}-success`,
  ]
    .filter(Boolean)
    .join(" ");

  let borderClass
  if (errorMessage) {
      borderClass = "border-red-500 focus:ring-red-500"
    } else if (successMessage) {
      borderClass = "border-green-500 focus:ring-green-500"
    } else {
      borderClass = "border-gray-300 focus:ring-blue-500"
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
        aria-invalid={Boolean(errorMessage)}
        aria-describedby={describedBy || undefined}
        className={`
  w-full px-3 py-2 rounded-md text-sm
  border
  focus:outline-none focus:ring-2 focus:ring-offset-2
  disabled:opacity-50 disabled:cursor-not-allowed
  ${borderClass}
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
      {successMessage && (
        <p id={`${id}-success`} className="text-sm text-green-500" role="status">
          {successMessage}
        </p>
      )}
    </div>
  );
}
