interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  disabled?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
}

const variantClasses = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "border border-blue-600 text-blue-600 hover:bg-blue-50",
  ghost: "text-blue-600 hover:bg-blue-50",
  danger: "bg-red-600 text-white hover:bg-red-700",
};

export default function Button({
  children,
  variant = "primary",
  disabled = false,
  ariaLabel,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-disabled={disabled || undefined}
      className={`
        inline-flex items-center justify-center
        px-4 py-2 rounded-md
        text-sm font-medium
        transition-colors duration-200
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${variantClasses[variant]}
      `}
    >
      {children}
    </button>
  );
}
