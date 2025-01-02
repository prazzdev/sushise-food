import "./styles/globals.css";
import Navbar from "./components/compounds/Navbar";
import Hero from "./components/sections/Hero";
import Explore from "./components/sections/Explore";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Testimony from "./components/sections/Testimony";
import Footer from "./components/compounds/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Hero />
        <Explore />
        <WhyChooseUs />
        <Testimony />
        <Footer />
      </div>
    </>
  );
}

export default App;
