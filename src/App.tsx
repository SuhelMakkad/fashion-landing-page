import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

const App = () => {
  return (
    <div className="font-poppins max-w-7xl mx-auto px-5">
      <Navbar />

      <main>
        <HeroSection />
      </main>
    </div>
  );
};

export default App;
