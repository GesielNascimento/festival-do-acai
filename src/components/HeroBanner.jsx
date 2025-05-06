function HeroBanner() {
  return (
    <section className="w-full overflow-hidden relative pt-[80px]">

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
          className="absolute bottom-2 left-10 w-56 z-20 animate-float"
        />
        <img
          src="/logo.png"
          alt="Logo Festival"
          className="absolute top-[30%] -translate-y-1/2 right-16 w-48 z-20 animate-float"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white px-4 z-20">
          <h1 className="text-5xl font-extrabold shadow-md leading-tight max-w-[90%] mb-4">
            O Festival mais esperado de Afuá!
          </h1>
          <p className="text-xl max-w-2xl leading-snug">
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
<div className="block md:hidden relative">
  {/* FUNDO COM ZOOM */}
  <img
    src="/bg-hero.jpg"
    alt="Fundo Festival do Açaí"
    className="w-full h-[400px] object-cover scale-110 block"
  />
  <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

  {/* CONTEÚDO CENTRALIZADO */}
  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
    
    {/* MASCOTE E LOGO LADO A LADO */}
    <div className="flex items-center justify-center gap-4 mb-2">
      <img
        src="/mascote.png"
        alt="Mascote"
        className="w-16 animate-float"
      />
      <img
        src="/logo.png"
        alt="Logo Festival"
        className="w-16 animate-float"
      />
    </div>

    {/* TEXTO */}
    <h1 className="text-sm font-bold leading-snug mb-1">
      Festival de Afuá!
    </h1>
    <p className="text-xs leading-tight max-w-xs">
      Vem viver essa experiência incrível de fé, <br />cultura e sabor na nossa linda cidade de Afuá! 🍇✨
    </p>

    {/* BOTÃO */}
    <a
      href="#programacao"
      className="mt-3 bg-white text-purple-700 font-medium px-4 py-1.5 rounded-full shadow-md hover:bg-purple-700 hover:text-white transform hover:scale-105 transition-all duration-300 text-xs"
    >
      Ver Programação
    </a>
  </div>
</div>

    </section>
  );
}

export default HeroBanner;
