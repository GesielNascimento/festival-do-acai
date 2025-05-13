import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import AboutSection from "./components/AboutSection";
import Highlights from "./components/Highlights";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import Corrida from "./pages/Corrida"; // ✅ novo

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroBanner />
              {/* 🔽 Seção de Destaque da Corrida */}
              <section className="bg-purple-800 text-white mt-10 py-10 px-4 text-center rounded-lg shadow-md mx-4">
                <h2 className="text-4xl font-bold mb-3">🏃‍♀️ 1ª Corrida do Festival do Açaí</h2>
                <p className="mb-6 text-lg">
                  Acontece no sábado do Festival. Inscreva-se agora e garanta sua vaga!
                </p>
                <a
                  href="/corrida"
                  className="inline-block bg-white text-purple-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-100 transition"
                >
                  👉 Ir para inscrição
                </a>
              </section>

              <Sponsors />
              <AboutSection />
              <Highlights />
              <Footer />
            </>
          }
        />
        <Route path="/corrida" element={<Corrida />} />
      </Routes>
    </Router>
  );
}

export default App;
