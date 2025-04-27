import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'; // Ícones de redes sociais

function Footer() {
  return (
    <footer className="bg-purple-800 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Nome do Festival e Frase */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Festival do Açaí</h2>
          <p className="text-sm mt-1">Celebrando a fé e a cultura em Afuá.</p>
        </div>

        {/* Links rápidos */}
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#home" className="hover:text-purple-300 transition">Home</a>
          <a href="#programacao" className="hover:text-purple-300 transition">Programação</a>
          <a href="#galeria" className="hover:text-purple-300 transition">Galeria</a>
          <a href="#contato" className="hover:text-purple-300 transition">Contato</a>
        </div>
        
        {/* Redes sociais */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition">
            <FaFacebookF className="w-6 h-6" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition">
            <FaInstagram className="w-6 h-6" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300 transition">
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
