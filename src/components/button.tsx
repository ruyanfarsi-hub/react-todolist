import { type ReactNode } from "react";

type ButtonProps = {
children: ReactNode;
onClick?: () => void;
type?: "button" | "submit";
variant?: "primary" | "danger";
disabled?: boolean;
};

export default function Button({
children,
onClick,
type = "button",
variant= "primary",
disabled = false,
}: ButtonProps) {
 const baseStyles =
  "rounded-xl px-4 py-2.5 font-medium " +
  "transition-colors duration-200 " +
  "focus-visible:outline-none " +
  "focus-visible:ring-2 focus-visible:ring-indigo-500 " +
  "focus-visible:ring-offset-2 " +
  "active:scale-[0.98] " +
  "disabled:cursor-not-allowed disabled:opacity-50";

const variantStyles = {
primary: "bg-blue-500 text-white hover:bg-blue-500",
danger: "bg-red-50 text-red-600 hover:bg-red-100",
};

return (
<button
type={type}
onClick={onClick}
disabled={disabled}
className={`${baseStyles} ${variantStyles[variant]}`}
>
{children}
</button>
);
}