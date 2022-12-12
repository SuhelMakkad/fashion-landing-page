import { cva, VariantProps } from "class-variance-authority";

const ring = cva(
  [
    "absolute",
    "top-1/2",
    "left-1/2",
    "-translate-x-1/2",
    "-translate-y-1/2",
    "-z-10",
    "border-2",
    "rounded-full",
  ],
  {
    variants: {
      size: {
        small: ["h-80", "w-80"],
        medium: ["h-[25rem]", "w-[25rem]"],
        large: ["h-[30rem]", "w-[30rem]"],
      },
    },
    defaultVariants: {
      size: "medium",
    },
  }
);

export interface BgRingProps extends VariantProps<typeof ring> {}

const BgRing = ({ size }: BgRingProps) => {
  return <span className={ring({ size })} />;
};

export default BgRing;
