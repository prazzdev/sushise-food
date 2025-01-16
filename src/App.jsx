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
        {alert("Still under development, and currently, it’s only responsive at a screen size of 1920 x 1080.")}
      </div>
    </>
  );
}

export default App;
