import { ButtonHTMLAttributes } from "react";

import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

const button = cva(["font-medium", "border", "transition"], {
  variants: {
    intent: {
      primary: ["bg-blue-500", "text-white", "border-transparent", "hover:bg-blue-600"],
      secondary: ["bg-white", "text-gray-800", "border-gray-400", "hover:bg-gray-100"],
      monochrome: ["bg-gray-800", "hover:bg-gray-900", "text-white"],
    },
    size: {
      small: ["text-sm", "py-1", "px-2", "rounded"],
      medium: ["text-base", "py-1.5", "px-4", "rounded-md"],
      large: ["text-lg", "py-2.5", "px-6", "rounded-lg"],
    },
    uppercase: {
      true: "uppercase",
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
  compoundVariants: [
    {
      intent: "primary",
      size: "medium",
      class: "uppercase",
    },
  ],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  children: React.ReactNode;
}

const Button = ({ children, intent, size, uppercase, elevated, ...props }: ButtonProps) => {
  return (
    <button {...props} className={button({ intent, size, uppercase, elevated })}>
      {children}
    </button>
  );
};

export default Button;
