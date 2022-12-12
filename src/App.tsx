import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandStipe from "@/components/BrandStipe";
import NewArrivals from "@/components/NewArrivals";
import FavoriteSection from "@/components/FavoriteSection";

const App = () => {
  return (
    <div className="font-poppins max-w-7xl mx-auto px-5">
      <Navbar />

      <main className="flex flex-col gap-10">
        <HeroSection />

        <BrandStipe />

        <NewArrivals />
        <FavoriteSection />
      </main>
    </div>
  );
};

export default App;
