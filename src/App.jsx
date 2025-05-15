import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import AboutSection from "./components/AboutSection";
import Highlights from "./components/Highlights";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

function App() {
  const [showRegulamento, setShowRegulamento] = useState(false);

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

                  <p className="text-lg text-gray-700 mb-4">
                    A corrida acontece no sábado do Festival! Preencha o formulário abaixo e pague <strong>R$ 50,00</strong> para garantir sua participação.
                  </p>

                  {/* Botão de Ler Regulamento */}
                  <div className="mb-6">
                    <button
                      onClick={() => setShowRegulamento(true)}
                      className="inline-flex items-center gap-2 text-purple-700 border border-purple-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 hover:text-white transition"
                    >
                      📖 Ler Regulamento
                    </button>
                  </div>

                  {/* Banner ilustrativo da corrida */}
                  <img
                    src="/images/banner-corrida.png"
                    alt="Banner da Corrida"
                    className="mx-auto mb-6 rounded-xl shadow-md"
                  />

                  {/* Formulário Google Forms */}
                  <div className="mb-10 border-2 border-purple-200 rounded-lg overflow-hidden shadow-md">
                    <iframe
                      src="https://docs.google.com/forms/d/e/1FAIpQLSeAerjHS07rPGczkl0HIU5dQ-AtKjJmHdLCZCcEHmPAm5tu6Q/viewform?embedded=true"
                      width="100%"
                      height="1450"
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

              {/* Conteúdo adicional do site */}
              <Sponsors />
              <AboutSection />
              <Highlights />
              <Footer />

              {/* ✅ MODAL DO REGULAMENTO */}
              {showRegulamento && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
                  <div className="bg-white p-6 rounded-lg max-w-2xl w-full relative shadow-xl overflow-y-auto max-h-[90vh]">
                    <h3 className="text-xl font-bold mb-4 text-purple-800">
                      📍 Regulamento Oficial – 1ª Corrida do Festival do Açaí
                    </h3>
                    <ol className="text-sm text-gray-800 space-y-2 list-decimal list-inside text-left">
                      <li>A corrida será realizada no sábado, com largada e chegada na Praça da Bíblia.</li>
                      <li>A inscrição custa R$ 50,00, feita pelo site e pago via Mercado Pago.</li>
                      <li>Participantes a partir de 14 anos. Menores precisam de autorização dos responsáveis.</li>
                      <li>Duas categorias: Masculino e Feminino. Todos receberão número de peito.</li>
                      <li>Premiação simbólica para os 3 primeiros colocados de cada categoria.</li>
                      <li>É obrigatório o uso de vestimenta adequada e seguir as normas de segurança.</li>
                      <li>A organização pode adiar ou cancelar por motivos de força maior.</li>
                      <li>A inscrição só é válida após o preenchimento do formulário e confirmação do pagamento.</li>
                      <li>O participante declara estar apto fisicamente e assume responsabilidade.</li>
                      <li>Casos omissos serão resolvidos pela equipe organizadora do Festival do Açaí.</li>
                    </ol>
                    <p className="mt-4 text-xs text-gray-500 text-right">
                      Organização: Assembleia de Deus – Festival do Açaí – Afuá/PA
                    </p>

                    {/* Botão de fechar */}
                    <button
                      onClick={() => setShowRegulamento(false)}
                      className="absolute top-2 right-3 text-purple-600 hover:text-red-500 text-lg"
                      title="Fechar"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              )}
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
