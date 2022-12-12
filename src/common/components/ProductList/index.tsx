import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

import Arrow from "@/components/Arrow";

export type Product = {
  imgUrl: string;
  title: string;
};

const productList = cva(["grid", "gap-12", "group", "disable-scrollbars", "overflow-auto"], {
  variants: {
    size: {
      small: ["grid-flow-col", "grid-flow-row", "auto-cols-[minmax(15rem,_1fr)]", "small"],
      medium: ["grid-cols-2", "max-lg:grid-cols-1", "medium"],
    },
  },
  defaultVariants: {
    size: "small",
  },
});

export interface ProductProps extends VariantProps<typeof productList> {
  products: Product[];
}

const ProductList = ({ products, ...variants }: ProductProps) => {
  return (
    <ul className={productList(variants)}>
      {products.map((product) => (
        <li className="flex flex-col gap-4 cursor-pointer">
          <img
            className="object-cover object-top hover:shadow-2xl transition-shadow rounded-xl group-[.medium]:h-80"
            src={product.imgUrl}
            alt={product.title}
          />
          <div className="flex items-center justify-between p-2">
            <div className="flex flex-col">
              <span className="text-xl">{product.title}</span>
              <span className="text-md">Explore Now!</span>
            </div>
            <Arrow />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
