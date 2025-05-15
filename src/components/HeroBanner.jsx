function HeroBanner() {
  return (
    <section className="w-full overflow-hidden relative">

      {/* VERSÃO PARA PC */}
      <div className="hidden md:block relative">
        <img
          src="/bg-hero.jpg"
          alt="Fundo Festival do Açaí"
          className="w-full h-auto block animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        <img
          src="/mascote.png"
          alt="Mascote"
          className="absolute bottom-4 left-10 w-56 z-20 animate-float drop-shadow-lg"
        />
        <img
          src="/logo.png"
          alt="Logo Festival"
          className="absolute top-[30%] -translate-y-1/2 right-16 w-48 z-20 animate-float drop-shadow-lg"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white px-4 z-20">
          <h1 className="text-5xl font-extrabold leading-tight max-w-[90%] mb-4 shadow-black drop-shadow-lg">
            O Festival mais esperado de Afuá!
          </h1>
          <p className="text-xl max-w-2xl leading-snug drop-shadow-sm">
            Vem viver essa experiência incrível de fé, cultura e sabor na nossa linda cidade de Afuá! 🍇✨
          </p>
          <a
            href="#programacao"
            className="mt-3 bg-white text-purple-700 font-semibold px-5 py-2 rounded-full shadow-lg hover:bg-purple-700 hover:text-white transform hover:scale-110 transition-all duration-300"
          >
            Ver Programação
          </a>
        </div>
      </div>

      {/* VERSÃO PARA MOBILE */}
      <div className="block md:hidden relative h-[480px]">
        <img
          src="/bg-hero.jpg"
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
