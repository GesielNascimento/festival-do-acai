function HeroBanner() {
    return (
      <section className="relative h-[70vh] overflow-hidden">
        
        {/* IMAGEM DE FUNDO COM MOVIMENTO SUAVE */}
        <div className="absolute inset-0">
          <img
            src="/bg-hero.jpg" // ajuste aqui conforme onde salvou sua imagem
            alt="Festival do Açaí"
            className="w-full h-full object-cover scale-110 animate-slow-zoom"
          />
          {/* SOBREPOSIÇÃO ESCURA */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
  
        {/* CONTEÚDO CENTRALIZADO */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-extrabold shadow-md">
            O Festival mais esperado de Afuá!
          </h1>
          <p className="mt-4 text-lg md:text-1xl max-w-2xl">
            Vem viver essa experiência incrível de fé, cultura e sabor na nossa linda cidade de Afuá! 🍇✨
          </p>
  
          {/* BOTÃO COM ANIMAÇÃO */}
          <a
            href="#programacao"
            className="mt-6 bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 hover:text-white transform hover:scale-110 transition-all duration-300 animate-bounce-slow"
          >
            Ver Programação
          </a>
        </div>
      </section>
    )
  }
  
  export default HeroBanner;
  