import { useState } from "react";

import Logo from "../Logo";
import Button from "../Button";
import MenuSwitch from "../MenuSwitch";
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

  const handleMenuClick = () => {
    setIsMenuActive((prev) => !prev);
  };

  return (
    <nav className="flex items-center justify-between py-3 px-5 relative">
      <Logo />

      <div className="flex items-center gap-4 justify-between max-lg:flex-row-reverse">
        <MenuSwitch
          className="hidden max-lg:block "
          active={isMenuActive}
          onClick={handleMenuClick}
        />

        <NavList items={navItems} active={isMenuActive} />

        <Button className="ml-auto" intent={"monochrome"} uppercase elevated>
          sign up
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
