// src/components/AfuaTour.jsx
import React from "react";

export default function AfuaTour() {
  return (
    <section id="afua-tour" className="py-16 bg-green-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <img src="/logo-afua-tour.JPG" alt="Afuá Tour" className="mx-auto w-40 md:w-52 mb-4" />
          <h2 className="text-3xl font-bold text-green-800 mb-2">Conheça Afuá com a Afuá Tour</h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            Uma experiência completa para você curtir o Festival do Açaí com tranquilidade! A Afuá Tour cuida do seu transporte, hospedagem,
            alimentação e ainda oferece passeios inesquecíveis por nossa cidade encantadora.
          </p>
        </div>

        {/* Galeria de imagens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          <img src="/afua-1.png" alt="Turista com açaí" className="rounded-lg shadow-md w-full h-50 object-cover transform hover:scale-105 transition duration-300" />
          <img src="/afua-2.png" alt="Samaúma" className="rounded-lg shadow-md w-full h-50 object-cover transform hover:scale-105 transition duration-300" />
          <img src="/afua-3.png" alt="Bicitáxi" className="rounded-lg shadow-md w-full h-50 object-cover transform hover:scale-105 transition duration-300" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-green-800">Serviços incluídos</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Reserva e confirmação</li>
              <li>Bilhetes de Transporte Aquático</li>
              <li>Hospedagem</li>
              <li>Suporte contínuo</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-green-800">Atividades</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Festival do Açaí</li>
              <li>City Tour Afuá</li>
              <li>Trilha Ecológica da Muralha (samaúma)</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="https://wa.me/5591985140321"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Fale com a Afuá Tour pelo WhatsApp
          </a>
        </div>

        {/* Redes sociais */}
<div className="text-center mt-6">
  <p className="font-medium text-green-800 mb-2">
    Siga a Afuá Tour nas redes sociais:
  </p>
  <div className="flex justify-center items-center gap-6 mt-2">
    {/* Instagram */}
    <a
      href="https://instagram.com/afuatour"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 transition"
    >
      <svg
        className="w-7 h-7 fill-green-700 hover:fill-green-900"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.4.5.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.4-.2.6-.5 1-1 1.5s-.9.8-1.5 1c-.5.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.4-.5-.6-.2-1-.5-1.5-1s-.8-.9-1-1.5c-.2-.5-.4-1.2-.5-2.4-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.4.2-.6.5-1 1-1.5s.9-.8 1.5-1c.5-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2m0-2.2C8.7 0 8.3 0 7 .1 5.6.1 4.4.3 3.5.6 2.6.9 1.8 1.3 1.1 2 .3 2.8-.1 3.6 0 5 .1 6.3.1 6.7.1 10s0 3.6.1 5c.1 1.4.3 2.3.6 3.1.3.9.7 1.7 1.5 2.4.8.8 1.5 1.2 2.4 1.5.8.3 1.7.5 3.1.6 1.4.1 1.8.1 5 .1s3.6 0 5-.1c1.4-.1 2.3-.3 3.1-.6.9-.3 1.7-.7 2.4-1.5.8-.8 1.2-1.5 1.5-2.4.3-.8.5-1.7.6-3.1.1-1.4.1-1.8.1-5s0-3.6-.1-5c-.1-1.4-.3-2.3-.6-3.1-.3-.9-.7-1.7-1.5-2.4-.8-.8-1.5-1.2-2.4-1.5-.8-.3-1.7-.5-3.1-.6C15.6 0 15.3 0 12 0zM12 5.8c-3.4 0-6.2 2.8-6.2 6.2S8.6 18.2 12 18.2s6.2-2.8 6.2-6.2S15.4 5.8 12 5.8zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-11.8c0 .8-.6 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4c.7 0 1.4.6 1.4 1.4z" />
      </svg>
    </a>

    {/* Facebook */}
    <a
      href="https://facebook.com/afuatour"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 transition"
    >
      <svg
        className="w-7 h-7 fill-green-700 hover:fill-green-900"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692V11.01h3.127V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z" />
      </svg>
    </a>
  </div>
</div>

      </div>
    </section>
  );
}
