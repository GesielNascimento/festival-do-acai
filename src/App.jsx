import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import AboutSection from "./components/AboutSection";
import Highlights from "./components/Highlights";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

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

              {/* 🔽 FORMULÁRIO DE INSCRIÇÃO DA CORRIDA NA HOME */}
              <section className="bg-white py-12 px-4 text-center" id="corrida">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-4xl font-bold text-purple-800 mb-4">
                    🏃‍♀️ 1ª Corrida do Festival do Açaí
                  </h2>

                  <p className="text-lg text-gray-700 mb-6">
                    A corrida acontece no sábado do Festival! Preencha o formulário abaixo e pague <strong>R$ 50,00</strong> para garantir sua participação.
                  </p>

                  {/* Banner ilustrativo da corrida */}
                  <img
                    src="/images/banner-corrida.png"
                    alt="Banner da Corrida"
                    className="mx-auto mb-6 rounded-xl shadow-md"
                  />

                  {/* Formulário Google Forms */}
                  <div className="mb-8 border-2 border-purple-200 rounded-lg overflow-hidden shadow-md">
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSeAerjHS07rPGczkl0HIU5dQ-AtKjJmHdLCZCcEHmPAm5tu6Q/viewform?embedded=true"
                      width="100%"
                      height="1410"
                      frameBorder="0"
                      marginHeight="0"
                      marginWidth="0"
                      title="Formulário de Inscrição Corrida"
                    >
                      Carregando…
                    </iframe>
                  </div>

                  {/* Botão de pagamento externo */}
                  <a
                    href="https://mpago.la/1YZj5Br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-purple-800 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-purple-900 transition"
                  >
                    💳 Pagar Inscrição (R$ 50,00)
                  </a>

                  {/* Aviso importante */}
                  <p className="text-sm text-gray-600 mt-6 max-w-md mx-auto">
                    ⚠️ <strong>Atenção:</strong> sua inscrição só será <strong>confirmada após o pagamento</strong>. Preencher o formulário <strong>não garante a vaga</strong>. Conclua o pagamento clicando no botão acima.
                  </p>
                </div>
              </section>

              {/* Continua a página normalmente */}
              <Sponsors />
              <AboutSection />
              <Highlights />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
