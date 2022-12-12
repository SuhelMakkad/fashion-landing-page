import Heading from "@/components/Heading";
import ProductList from "@/components/ProductList";

import productImg4 from "@/images/products/4.png";
import productImg5 from "@/images/products/5.png";

const NewArrivals = () => {
  const products = [
    {
      imgUrl: productImg5,
      title: "Trending on Instagram",
    },
    {
      imgUrl: productImg4,
      title: "All Under $40",
    },
  ];

  return (
    <section>
      <Heading className="uppercase">Young's Favorite</Heading>

      <div className="mt-12">
        <ProductList products={products} size={"medium"} />
      </div>
    </section>
  );
};

export default NewArrivals;
