const BrandStipe = () => {
  const brands = [
    {
      label: "versace",
      imgUrl: "/assets/images/brands/versace.png",
    },

    {
      label: "diesel",
      imgUrl: "/assets/images/brands/diesel.png",
    },
    {
      label: "chanel",
      imgUrl: "/assets/images/brands/chanel.png",
    },
    {
      label: "levis",
      imgUrl: "/assets/images/brands/levis.png",
    },
    {
      label: "fila",
      imgUrl: "/assets/images/brands/fila.png",
    },
    {
      label: "lee",
      imgUrl: "/assets/images/brands/lee.png",
    },
  ];

  return (
    <section
      className="bg-yellow-300 shadow-yellow-300 shadow-[0_0_0_100vmax]"
      style={{ clipPath: "inset(0 -100vmax)" }}
      aria-describe="Brands"
    >
      <ul className="flex items-center justify-between gap-10 px-4 py-8 overflow-x-auto disable-scrollbars">
        {brands.map((brand) => (
          <li className="w-28 shrink-0" key={brand.label}>
            <img className="block" src={brand.imgUrl} alt={brand.label} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BrandStipe;
