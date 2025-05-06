function HeroBanner() {
  return (
    <section className="w-full overflow-hidden relative pt-[80px]">
  <div className="relative w-full">
    <img
      src="/bg-hero.jpg"
      alt="Festival do Açaí"
      className="w-full h-auto block"
    />

    <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center text-white p-4 z-10 animate-float">
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
  </div>
</section>

  )
}

export default HeroBanner;
