function HeroBanner() {
  return (
    <section className="w-full overflow-hidden relative pt-[80px]">

  {/* FUNDO COM ZOOM */}
  <img
    src="/bg-hero.jpg"
    alt="Fundo Festival do Açaí"
    className="w-full h-auto block animate-slow-zoom"
  />

  {/* SOBREPOSIÇÃO */}
  <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

{/* Logo – lado direito */}
  <img
    src="/logo.png"
    alt="Logo Festival"
    className="absolute right-16 top-[42%] -translate-y-1/2 w-48 md:w-48 z-20 animate-fade-in-right animate-float"
  />


{/* Mascote – lado esquerdo */}
  <img
    src="/mascote.png"
    alt="Mascote"
    className="absolute left-4 bottom-0 w-40 md:w-56 z-20 animate-fade-in-left animate-float"
  />

  {/* TEXTO CENTRAL */}
  <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white p-4 z-20 animate-float">
    <h1 className="text-3xl md:text-5xl font-extrabold shadow-md">
      O Festival mais esperado de Afuá!
    </h1>
    <p className="mt-2 text-lg md:text-xl max-w-2xl">
      Vem viver essa experiência incrível de fé, cultura e sabor na nossa linda cidade de Afuá! 🍇✨
    </p>

    <a
      href="#programacao"
      className="mt-4 bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 hover:text-white transform hover:scale-110 transition-all duration-300"
    >
      Ver Programação
    </a>
  </div>
</section>



  )
}

export default HeroBanner;
