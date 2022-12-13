import { ButtonHTMLAttributes } from "react";

import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

const button = cva(["font-medium", "transition"], {
  variants: {
    intent: {
      monochrome: [
        "bg-gray-800",
        "dark:outline",
        "dark:outline-2",
        "dark:outline-white",
        "hover:bg-gray-900",
        "text-white",
      ],
      secondary: ["bg-white", "text-gray-800", "border-gray-400", "hover:bg-gray-100"],
    },
    size: {
      small: ["text-sm", "py-2", "px-4", "rounded"],
      medium: ["text-base", "py-2.5", "px-5", "rounded-md"],
      large: ["text-lg", "py-3", "px-8", "rounded-lg"],
    },
    uppercase: {
      true: "uppercase",
    },
    focusOutlined: {
      true: ["focus-within:outline", "outline-offset-4"],
    },
    elevated: {
      true: [
        "hover:-translate-y-0.5",
        "active:translate-y-px",
        "hover:drop-shadow-xl",
        "active:drop-shadow-md",
      ],
    },
  },
  defaultVariants: {
    intent: "monochrome",
    size: "medium",
    focusOutlined: false,
  },
});

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  children: React.ReactNode;
}

const Button = ({
  children,
  intent,
  size,
  uppercase,
  elevated,
  focusOutlined,
  ...props
}: ButtonProps) => {
  return (
    <button {...props} className={button({ intent, size, uppercase, elevated, focusOutlined })}>
      {children}
    </button>
  );
};

export default Button;
