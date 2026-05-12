interface CheckboxProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  errorMessage?: string;
}

export default function Checkbox({
  id,
  label,
  checked,
  onChange,
  required = false,
  disabled = false,
  errorMessage,
}: CheckboxProps) {
  return (
    <>
    <div className="flex items-center gap-2">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        required={required}
        aria-describedby={`${id}-error`}
        className={`
        w-4 h-4
        border
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed
        ${errorMessage ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"}
        `}
      />
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
        {required && (
          <span className="text-red-500 ml-1" aria-hidden="true">
            *
          </span>
        )}
      </label>
    </div>
    </>
  );
}
