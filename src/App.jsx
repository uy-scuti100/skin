import Hero from "./Components/Hero";
import MainSection from "./Components/MainSection";
import MobileNav from "./Components/MobileNav";
import Navbar from "./Components/Navbar";
import SecondSection from "./Components/SecondSection";
import ThirdSection from "./Components/ThirdSection";
import FourthSection from "./Components/FourthSection";
import FifthSection from "./Components/FifthSection";

function App() {
  return (
    <div className="w-full bg-#4C4C4C] mx-auto md:bg-[#212121] h-screen overflow-x-hidden relative">
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
