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

      <div className="mb-8 mx-auto max-lg:text-center max-lg:mt-12">
        <h3
          className={`
            text-6xl max-lg:text-5xl max-md:text-4xl font-bold leading-tight
        `}
        >
          Payday <br /> Sale Now
        </h3>

        <p className="leading-tight w-80">
          Spend minimal $100 get 30% off voucher code for your next purchase
        </p>

        <p className="mt-4">
          <span className="font-bold">1 June - 10 June 2021</span>
          <br />
          <span>*Terms & Conditions apply</span>
        </p>

        <div className="mt-4">
          <Button intent={"monochrome"} size={"large"} elevated>
            Shope Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SaleSection;
