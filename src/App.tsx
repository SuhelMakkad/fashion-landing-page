import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandStipe from "@/components/BrandStipe";

const App = () => {
  return (
    <div className="font-poppins max-w-7xl mx-auto px-5">
      <Navbar />

      <main className="flex flex-col gap-10">
        <HeroSection />

        <BrandStipe />
      </main>
    </div>
  );
};

export default App;
