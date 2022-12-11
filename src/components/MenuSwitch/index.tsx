const MenuSwitch = () => {
  return (
    <button className="hidden max-lg:block py-2 group/item">
      <span className="sr-only">Menu</span>
      <span
        className={`
        block w-5 h-0.5 bg-gray-900 relative
        after:absolute after:block after:w-5 after:h-0.5 after:bg-gray-900 after:top-1.5
        before:absolute before:block before:w-5 before:h-0.5 before:bg-gray-900 before:-top-1.5
        group-after/item:bg-red-500
    `}
      ></span>
    </button>
  );
};

export default MenuSwitch;
