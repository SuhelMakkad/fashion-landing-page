import { HTMLAttributes } from "react";

import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

const ulList = cva(
  [
    "flex gap-6 items-center max-lg:items-start max-lg:flex-col max-lg:gap-0",
    "max-lg:absolute top-16 left-0 right-0",
    "max-lg:mx-4 max-lg:p-2 max-lg:bg-white max-lg:text-gray-800",
    "rounded uppercase max-lg:shadow-xl origin-top animate-slide-in",
  ],
  {
    variants: {
      active: {
        true: ["max-lg:block"],
        false: ["max-lg:hidden"],
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

export type List = {
  label: string;
  href: string;
}[];

interface NavListProps extends HTMLAttributes<HTMLUListElement>, VariantProps<typeof ulList> {
  items: List;
}

const NavList = ({ items, active, ...props }: NavListProps) => {
  return (
    <ul {...props} className={ulList({ active })}>
      {items.map((item, index) => (
        <li key={index} className={`w-full`}>
          <a
            className={`max-lg:hover:bg-gray-200 w-full max-lg:px-4 max-lg:py-2 rounded block transition-colors`}
            href={item.href}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
