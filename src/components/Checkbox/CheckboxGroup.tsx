interface CheckboxGroupProps {
  id: string;
  legend: string;
  children: React.ReactNode;
  helperText?: string;
  errorMessage?: string;
  successMessage?: string;
}

export default function CheckboxGroup({
  id,
  legend,
  children,
  helperText,
  errorMessage,
  successMessage,
}: CheckboxGroupProps) {
  return (
    <fieldset
      aria-describedby={`${id}-helper ${id}-error ${id}-success`}
      className="flex flex-col gap-2"
    >
      <legend className="text-sm font-semibold text-gray-700 mt-6 mb-3">
        {legend}
      </legend>
      <div>{children}</div>
      <p id={`${id}-helper`} className="text-sm text-gray-600">
        {helperText}
      </p>
      <p id={`${id}-error`} className="text-sm text-red-600" role="alert">
        {errorMessage}
      </p>
      <p id={`${id}-success`} className="text-sm text-green-700" role="status">
        {successMessage}
      </p>
    </fieldset>
  );
}
