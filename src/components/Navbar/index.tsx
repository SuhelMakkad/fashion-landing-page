import Button from "../Button";
import Logo from "../Logo";
import MenuSwitch from "../MenuSwitch";

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

  return (
    <nav className="flex items-center justify-between py-3 px-5 relative">
      <Logo />

      <MenuSwitch />

      <ul
        className={`
            flex gap-6 items-center max-lg:items-start max-lg:flex-col max-lg:gap-0
            max-lg:absolute top-full left-0 right-0 uppercase
            max-lg:mx-4 max-lg:p-2 max-lg:bg-gray-200
            rounded
        `}
      >
        {navItems.map((item, index) => (
          <li key={index} className={`w-full`}>
            <a
              className={`hover:bg-gray-100 w-full max-lg:px-4 max-lg:py-2 rounded block`}
              href={item.href}
            >
              {item.label}
            </a>
          </li>
        ))}

        <li
          className={`
            max-lg:px-4 max-lg:py-2
        `}
        >
          <Button intent={"monochrome"} uppercase elevated>
            sign up
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
