import heroImage from "@/images/hero/2.png";
import BgStar from "../BgStar";
import Button from "../Button";

const SaleSection = () => {
  return (
    <section
      className={`
				flex items-center gap-8 max-lg:flex-col-reverse max-lg:mx-auto max-w-full
				full-bleed bg-yellow-400 shadow-yellow-400  shadow-[0_0_0_100vmax]
      `}
    >
      <div className="relative">
        <img
          className="max-lg:max-h-96 max-w-full drop-shadow-[4rem_3rem_1.5rem_rgba(0,0,0,0.5)]"
          src={heroImage}
        />

        <BgStar className="opacity-80 left-12 top-24 rotate-45" />
        <BgStar className="opacity-80 right-12 top-12 -rotate-45" />
        <BgStar className="opacity-80 right-12 bottom-16 rotate-90" />
        <BgStar className="opacity-80 left-20 bottom-32 -rotate-90" />
      </div>

      <div className="flex flex-col gap-4 mb-8 max-lg:mt-14 mx-auto max-lg:text-center">
        <h3
          className={`
            text-6xl max-lg:text-5xl max-md:text-4xl font-bold leading-tight uppercase isolate
        `}
        >
          <span className={`
            relative after:absolute after:top-0 after:bottom-0 after:-left-4 after:-right-12 max-lg:after:-right-6
            after:bg-white after:skew-x-3 after:-skew-y-1 after:-z-10
          `}>
            Payday
          </span>
          <br /> Sale Now
        </h3>

        <p className="leading-tight w-80">
          Spend minimal $100 get 30% off voucher code for your next purchase
        </p>

        <p>
          <span className="font-bold">1 June - 10 June 2021</span>
          <br />
          <span>*Terms & Conditions apply</span>
        </p>

        <div>
          <Button intent={"monochrome"} size={"large"} elevated>
            Shope Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SaleSection;
