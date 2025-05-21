import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroBanner from "./components/HeroBanner";
import AboutSection from "./components/AboutSection";
import Highlights from "./components/Highlights";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import TopNotice from "./components/TopNotice";
import Countdown from "./components/Countdown";
import RaceSponsors from "./components/RaceSponsors";
import Loja from "./components/Loja";
import Patrocinador from "./components/Patrocinador";
import AfuaTour from "./components/AfuaTour";



function App() {
  const [showRegulamento, setShowRegulamento] = useState(false);

  return (
    <Router>
      <Navbar />
      <TopNotice />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroBanner />

              {/* 🔽 FORMULÁRIO DE INSCRIÇÃO DA CORRIDA NA HOME */}
              <section className="bg-white mt-[-90px] pt-6 pb-10 px-4 text-center" id="corrida">

                <div className="max-w-3xl mx-auto">
                  <h2 className="text-4xl font-bold text-purple-800 mb-4">
                    🏃‍♀️ 1ª Corrida do Festival do Açaí
                  </h2>

                  <RaceSponsors  />

                  <Countdown  targetDate="2025-07-05T07:00:00" />

                  <p className="text-lg text-gray-700 mb-4">
                    A corrida acontece no sábado do Festival! Preencha o formulário abaixo e pague <strong>R$ 50,00</strong> para garantir sua participação.
                  </p>

                  {/* Botões: Ler Regulamento e Baixar PDF */}
                  <div className="flex flex-col md:flex-row justify-center gap-4 mb-6">
                    <button
                      onClick={() => setShowRegulamento(true)}
                      className="inline-flex items-center gap-2 text-white bg-purple-700 px-6 py-3 rounded-full text-sm font-semibold hover:bg-purple-800 transition shadow-md"
                    >
                      📖 Ler Regulamento
                    </button>

                    <a
                      href="/Regulamento_Corrida_Festival_Acai_2025.pdf"
                      download
                      className="inline-flex items-center gap-2 text-purple-700 border border-purple-700 px-6 py-3 rounded-full text-sm font-semibold hover:bg-purple-700 hover:text-white transition shadow-md"
                    >
                      ⬇️ Baixar Regulamento (PDF)
                    </a>
                  </div>

                  <img
                    src="/images/banner-corrida.png"
                    alt="Banner da Corrida"
                    className="mx-auto mb-6 rounded-xl shadow-md"
                  />

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

                  <a
                    href="https://mpago.la/1YZj5Br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-purple-800 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-purple-900 transition"
                  >
                    💳 Pagar Inscrição (R$ 50,00)
                  </a>

                  <p className="text-sm text-gray-600 mt-6 max-w-md mx-auto">
                    ⚠️ <strong>Atenção:</strong> sua inscrição só será <strong>confirmada após o pagamento</strong>. Preencher o formulário <strong>não garante a vaga</strong>. Conclua o pagamento clicando no botão acima.
                  </p>
                </div>
              </section>

              
              <Loja />
              <Patrocinador />
              {/*<AfuaTour />*/}


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
                      <li>O evento será realizado no sábado, durante o Festival do Açaí, com largada na Praça da Bíblia, pontualmente às 07h00.</li>
                      <li>O percurso total será de aproximadamente 5 km em vias urbanas da cidade, previamente sinalizadas e com pontos de apoio.</li>
                      <li>As categorias serão divididas em: Masculino (a partir de 14 anos) e Feminino (a partir de 14 anos). Menores devem apresentar autorização assinada pelos pais/responsáveis.</li>
                      <li>O valor da inscrição é de R$ 50,00, a ser pago via link Mercado Pago após preenchimento do formulário online.</li>
                      <li>O kit do atleta será composto por número de peito e medalha de participação para todos os concluintes.</li>
                      <li>Premiação: troféus para os 3 primeiros colocados de cada categoria. Os resultados serão divulgados imediatamente após a conclusão da prova.</li>
                      <li>É de responsabilidade do participante estar em boas condições de saúde. A organização não se responsabiliza por acidentes causados por imprudência do atleta.</li>
                      <li>É obrigatório o uso do número de peito visível durante todo o percurso. Atletas sem identificação poderão ser desclassificados.</li>
                      <li>Será disponibilizado ponto de hidratação no percurso e assistência de primeiros socorros na largada e chegada.</li>
                      <li>Casos de emergência serão encaminhados ao hospital municipal. Um termo de responsabilidade deverá ser aceito no ato da inscrição.</li>
                      <li>Não será permitido o acompanhamento de ciclistas ou veículos particulares junto aos corredores durante a prova.</li>
                      <li>Não haverá devolução da taxa de inscrição em caso de desistência ou ausência do atleta no dia da corrida.</li>
                      <li>A organização poderá alterar o percurso ou a data da corrida por motivos climáticos, de segurança pública ou força maior.</li>
                      <li>O evento visa promover a saúde, o esporte e a integração entre os participantes e o público do Festival do Açaí.</li>
                      <li>Ao se inscrever, o atleta concorda com todas as cláusulas deste regulamento, que poderá sofrer ajustes até a data do evento.</li>
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
