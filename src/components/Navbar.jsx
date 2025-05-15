import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Overlay no fundo */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <nav className="bg-purple-800 text-white px-6 py-4 flex items-center justify-between fixed top-0 left-0 w-full shadow-md z-50">
        {/* ✅ LOGO + NOME COM LINK PARA HOME */}
        <a href="/" className="flex items-center gap-4">
          <img
            src="/logo.png"
            alt="Logo do Festival do Açaí"
            className="w-12 h-12"
          />
          <div className="text-2xl font-bold">Festival do Açaí</div>
        </a>

        {/* Botão Hamburguer ou X */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            {isOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Links (Desktop) */}
        <ul className="hidden md:flex gap-6 text-lg">
          <li><a href="/" className="hover:text-purple-300 transition">Home</a></li>
          <li><a href="#programacao" className="hover:text-purple-300 transition">Programação</a></li>
          <li><a href="#loja" className="hover:text-purple-300 transition">Loja</a></li>
          <li><a href="#patrocinador" className="hover:text-purple-300 transition">Seja um Patrocinador</a></li>

        </ul>

        {/* Menu Mobile */}
        <div
          className={`absolute top-20 right-6 bg-purple-600 rounded-lg shadow-lg p-6 flex flex-col gap-4 w-40 transition-all duration-300 ease-in-out transform ${
            isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          } md:hidden`}
        >
          <a href="/" className="hover:text-purple-300 transition">Home</a>
          <a href="#programacao" className="hover:text-purple-300 transition">Programação</a>
          <li><a href="#loja" className="hover:text-purple-300 transition">Loja</a></li>
          <li><a href="#patrocinador" className="hover:text-purple-300 transition">Seja um Patrocinador</a></li>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
