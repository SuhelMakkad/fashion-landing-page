import { useState, useRef } from "react";

import useOnClickOutside from "@/hooks/useOnClickOutside";

import Logo from "@/components/Logo";
import Button from "@/components/Button";
import MenuSwitch from "@/components/MenuSwitch";
import NavList from "./NavList";

const Navbar = () => {
  const navItems = [
    {
      label: "catalogue",
      href: "#",
    },
    {
      label: "fashion",
      href: "#",
    },
    {
      label: "favorite",
      href: "#",
    },
    {
      label: "lifestyle",
      href: "#",
    },
  ];

  const [isMenuActive, setIsMenuActive] = useState(false);
  const menuRef = useRef(null);

  const handleMenuClick = () => {
    setIsMenuActive((prev) => !prev);
  };

  useOnClickOutside(menuRef, () => {
    setIsMenuActive(false);
  });

  return (
    <nav
      className={`
        full-bleed bg-white shadow-white-400  dark:bg-slate-900/75 dark:shadow-slate-900/75 shadow-[0_0_0_100vmax]
        dark:text-white flex items-center justify-between
        sticky top-0 left-0 right-0 
        z-10 py-5 backdrop-blur-md
      `}
    >
      <Logo />

      <div className="flex items-center gap-4 justify-between max-lg:flex-row-reverse">
        <div ref={menuRef}>
          <MenuSwitch
            className="hidden max-lg:block "
            active={isMenuActive}
            onClick={handleMenuClick}
          />

          <NavList items={navItems} active={isMenuActive} />
        </div>

        <Button className="ml-auto" intent={"monochrome"} size="small" uppercase elevated>
          sign up
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
