import FifthSection from "./Components/FifthSection";
import FourthSection from "./Components/FourthSection";
import Hero from "./Components/Hero";
import MainSection from "./Components/MainSection";
import MobileNav from "./Components/MobileNav";
import Navbar from "./Components/Navbar";
import SecondSection from "./Components/SecondSection";
import ThirdSection from "./Components/ThirdSection";

function App() {
  return (
    <div className="max-w-full bg-#4C4C4C] mx-a-uto md:bg-[#212121] min-h-screen overflow-x-hidden relative">
      <Navbar />
      <MobileNav />
      <Hero />
      <MainSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
    </div>
  );
}

export default App;
