import { HTMLAttributes } from "react";

import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

const ulList = cva(
  [
    "flex gap-10 items-center max-lg:items-start max-lg:flex-col max-lg:gap-0",
    "max-lg:absolute top-16 left-0 right-0",
    "max-lg:mx-4 max-lg:p-2 max-lg:bg-white max-lg:text-gray-800",
    "rounded uppercase max-lg:shadow-xl origin-top max-lg:animate-slide-in",
    "max-lg:dark:bg-slate-800 max-lg:dark:text-white",
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
            className={`
              block w-full rounded transition-colors relative group
              max-lg:hover:bg-gray-200 max-lg:px-4 max-lg:py-2
              max-lg:dark:hover:bg-slate-900
              after:absolute after:-bottom-[2px] after:left-0 after:right-0
              after:h-0 hover:after:h-[2px] max-lg:hover:after:h-0 after:transition-[height]
              after:bg-gray-900 dark:after:bg-white/95
            `}
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
