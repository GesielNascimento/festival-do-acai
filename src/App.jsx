import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import AboutSection from "./components/AboutSection";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";
import Sponsors from './components/Sponsors';


function App() {
  return (
    <>
      <Navbar />
      <HeroBanner />
      <Sponsors />
      <AboutSection />
      <Highlights />
      <Footer />
    </>
  );
}

export default App;
