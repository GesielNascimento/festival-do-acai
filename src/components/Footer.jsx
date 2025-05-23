import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-purple-800 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">

        {/* Nome do Festival e Frase */}
        <div>
          <h2 className="text-2xl font-bold">Festival do Açaí</h2>
          <p className="text-sm mt-1">Celebrando a fé e a cultura em Afuá.</p>
        </div>

        {/* Links rápidos - em coluna no mobile */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-sm">
          <a href="#home" className="hover:text-purple-300 transition">Home</a>
          <a href="#programacao" className="hover:text-purple-300 transition">Programação</a>
          <a href="#loja" className="hover:text-purple-300 transition">Loja</a>
          <a href="#patrocinador" className="hover:text-purple-300 transition">Seja um Patrocinador</a>
          <a href="#contato" className="hover:text-purple-300 transition">Contato</a>
        </div>

        {/* Redes sociais */}
        <div className="flex gap-4 justify-center">
          <a href="https://www.facebook.com/ad.afua.940" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition">
            <FaFacebookF className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com/adafua_oficial/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="https://www.youtube.com/watch?v=zXCtvypnIB4" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition">
            <FaYoutube className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Linha separadora */}
      <div className="border-t border-purple-700 mt-6 pt-4 text-center text-sm">
        © 2025 Festival do Açaí. Todos os direitos reservados.
      </div>
    </footer>
  );
}

export default Footer;
