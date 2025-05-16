import { useEffect, useState } from "react";

function HeroBanner() {
  const images = ["/bg-hero.png", "/bg-hero2.png", "/bg-hero3.png"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full overflow-hidden relative mt-0">
      
      {/* DESKTOP - Carrossel */}
      <div className="hidden md:block relative h-[600px] -mt-[82px]">

        <img
          src={images[index]}
          alt="Fundo Festival do Açaí"
          className="w-full h-[600px] object-contain transition-opacity duration-1000 ease-in-out mx-auto"
        />
      </div>

      {/* MOBILE - Imagem única */}
      <div className="block md:hidden relative h-[480px] mb-20">
        <img
          src="/bg-hero(2).png"
          alt="Fundo Festival do Açaí"
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-20 px-4">
          <div className="flex items-center justify-center gap-4 mb-4">
            <img src="/mascote.png" alt="Mascote" className="w-20 animate-float" />
            <img src="/logo.png" alt="Logo Festival" className="w-20 animate-float" />
          </div>

          <h1 className="text-xl font-extrabold mb-2 leading-tight drop-shadow-md">
            O Festival mais esperado de Afuá!
          </h1>
          <p className="text-sm leading-snug max-w-xs mb-4 drop-shadow-sm">
            Vem viver essa experiência incrível de fé, cultura e sabor na nossa linda cidade de Afuá! 🍇✨
          </p>

          <a
            href="#programacao"
            className="bg-white text-purple-700 font-semibold px-5 py-2 rounded-full shadow-md hover:bg-purple-700 hover:text-white transform hover:scale-105 transition-all duration-300 text-sm"
          >
            Ver Programação
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
