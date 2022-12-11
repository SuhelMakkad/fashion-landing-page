import { ButtonHTMLAttributes } from "react";

import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

const button = cva(
  [
    "block w-5 h-0.5 bg-gray-900 relative transition-transform",
    "after:absolute after:block after:w-5 after:h-0.5 after:bg-gray-900 after:top-1.5",
    "before:absolute before:block before:w-5 before:h-0.5 before:bg-gray-900 before:-top-1.5",
  ],
  {
    variants: {
      active: {
        true: [
          "rotate-45",
          "after:opacity-1 after:-translate-y-1.5 after:rotate-90",
          "before:opacity-1 before:translate-y-1.5 before:-rotate-90",
        ],
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const MenuSwitch = ({ active, className, ...props }: ButtonProps) => {
  return (
    <button {...props} className={`${className}py-2`}>
      <span className="sr-only">Menu</span>
      <span className={button({ active })}></span>
    </button>
  );
};

export default MenuSwitch;
