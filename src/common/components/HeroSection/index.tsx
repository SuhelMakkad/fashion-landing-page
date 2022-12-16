import Button from "@/components/Button";
import BgStar from "@/components/BgStar";
import heroImage from "@/images/hero/1.png";

const HeroSection = () => {
  return (
    <section
      className={`
        flex gap-2 max-lg:block
        px-12 pt-12
        bg-slate-100 rounded-xl
        dark:bg-slate-700
    `}
    >
      <div className="flex gap-4 flex-col flex-1 max-lg:text-center">
        <h1
          className={`
            text-6xl max-lg:text-5xl max-md:text-4xl font-bold 
            w-min max-lg:w-auto 
            leading-tight isolate
          `}
        >
          <span> LET'S EXPLORE </span>  
          <span className={`
            relative after:absolute after:top-0 after:bottom-0 after:-left-4 after:-right-12 max-lg:after:-right-6
            after:bg-white dark:after:bg-gray-400 after:skew-x-3 after:-skew-y-2 after:-z-10
          `}> 
            UNIQUE 
          </span>
          <span> CLOTHES. </span>  
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

        <BgStar className="top-0 left-1/2" />
        <BgStar className="bottom-20 right-0" />
        <BgStar className="bottom-6" />
      </div>
    </section>
  );
};

export default HeroSection;
