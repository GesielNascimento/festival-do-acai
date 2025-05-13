import React from "react";

export default function Corrida() {
  return (
    <section className="min-h-screen bg-white py-10 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-purple-900 mb-4">
          🏃‍♂️ 1ª Corrida do Festival do Açaí
        </h1>

        <p className="text-gray-700 mb-8">
          A corrida acontece no sábado, durante o Festival do Açaí! Para participar, preencha seus dados abaixo e efetue o pagamento da inscrição no valor de <strong>R$ 50,00</strong>.
        </p>

        {/* Banner da Corrida (opcional) */}
        <img
          src="/images/banner-corrida.jpg"
          alt="Banner da 1ª Corrida do Festival do Açaí"
          className="mx-auto mb-6 rounded-xl shadow-md"
        />

        {/* Formulário embutido */}
        <div className="mb-10 border-2 border-purple-200 rounded-lg overflow-hidden shadow-md">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeAerjHS07rPGczkl0HIU5dQ-AtKjJmHdLCZCcEHmPAm5tu6Q/viewform?embedded=true"
            width="100%"
            height="1471"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Formulário de Inscrição Corrida"
          >
            Carregando…
          </iframe>
        </div>

        {/* Botão de pagamento */}
        <a
          href="https://mpago.la/1YZj5Br"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-800 text-white px-8 py-4 rounded-xl text-xl font-semibold hover:bg-purple-900 transition shadow"
        >
          💳 Pagar Inscrição (R$ 50,00)
        </a>

        {/* Mensagem de aviso */}
        <p className="text-sm text-center text-gray-600 mt-6 max-w-xl mx-auto">
          ⚠️ Atenção: o preenchimento do formulário <strong>não garante</strong> sua participação. 
          Sua inscrição só será <strong>confirmada após o pagamento</strong> da taxa de R$ 50,00 pelo botão acima.  
          Em caso de dúvidas, entre em contato com a equipe organizadora.
        </p>
      </div>
    </section>
  );
}
