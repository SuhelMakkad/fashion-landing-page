import versace from "@/images/brands/versace.png";
import diesel from "@/images/brands/diesel.png";
import chanel from "@/images/brands/chanel.png";
import levis from "@/images/brands/levis.png";
import fila from "@/images/brands/fila.png";
import lee from "@/images/brands/lee.png";

const BrandStipe = () => {
  const brands = [
    {
      label: "versace",
      imgUrl: versace,
    },

    {
      label: "diesel",
      imgUrl: diesel,
    },
    {
      label: "chanel",
      imgUrl: chanel,
    },
    {
      label: "levis",
      imgUrl: levis,
    },
    {
      label: "fila",
      imgUrl: fila,
    },
    {
      label: "lee",
      imgUrl: lee,
    },
  ];

  return (
    <section className="full-bleed bg-yellow-400 shadow-yellow-400 shadow-[0_0_0_100vmax]">
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
