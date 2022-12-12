import Heading from "@/components/Heading";
import ProductList from "@/components/ProductList";

import productImg1 from "@/images/products/1.png";
import productImg2 from "@/images/products/2.png";
import productImg3 from "@/images/products/3.png";

const NewArrivals = () => {
  const products = [
    {
      imgUrl: productImg1,
      title: "Hoodies & Sweatshirt",
    },
    {
      imgUrl: productImg2,
      title: "Coats & Parkas",
    },
    {
      imgUrl: productImg3,
      title: "Tees & T-Shirt",
    },
  ];

  return (
    <section>
      <Heading className="uppercase">New Arrivals</Heading>

      <div className="mt-12">
        <ProductList products={products} size={"small"} />
      </div>
    </section>
  );
};

export default NewArrivals;
