import Button from "@/components/Button";
import { Star } from "@/components/Icons";
import heroImage from "@/images/hero-img.png";

const HeroSection = () => {
  return (
    <section
      className={`
        flex gap-2 max-lg:block
        px-12 pt-12
        bg-slate-100 rounded-xl
    `}
    >
      <div className="flex gap-4 flex-col flex-1 max-lg:text-center">
        <h1
          className={`
            text-6xl max-lg:text-5xl max-md:text-4xl font-bold 
            w-min max-lg:w-auto 
            leading-tight
          `}
        >
          LET'S EXPLORE UNIQUE CLOTHES.
        </h1>

        <h2 className="text-lg">Live for Influential and Innovative fashion!</h2>

        <div className="mb-5">
          <Button intent={"monochrome"} size={"large"} elevated>
            Show Now
          </Button>
        </div>
      </div>

      <div className="flex-1 flex relative isolate">
        <img className="block mx-auto mt-auto max-h-[32rem]" src={heroImage} alt="Hero Image" />

        <Star className="fill-slate-200 -z-10 absolute top-0 left-1/2" />
        <Star className="fill-slate-200 -z-10 absolute bottom-20 right-0" />
        <Star className="fill-slate-200 -z-10 absolute bottom-6" />
      </div>
    </section>
  );
};

export default HeroSection;
