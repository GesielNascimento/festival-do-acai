function Loja() {
    const produtos = [
      { nome: "Camisa Oficial", imagem: "/produtos/camisa.png" },
      { nome: "Abadá", imagem: "/produtos/abada.png" },
      { nome: "Caneca", imagem: "/produtos/caneca.png" },
      { nome: "Garrafa", imagem: "/produtos/garrafa.png" },
      { nome: "Boné", imagem: "/produtos/bone.png" },
      { nome: "Chaveiro", imagem: "/produtos/chaveiro.png" },
    ];
  
    return (
      <section id="loja" className="bg-white py-12 px-4 text-center">
        <h2 className="text-3xl font-bold text-purple-800 mb-6">🛍️ Loja do Festival</h2>
        <p className="text-gray-700 mb-8">Confira nossos produtos e fale com a equipe para garantir o seu!</p>
  
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {produtos.map((item, i) => (
            <div key={i} className="bg-purple-50 p-4 rounded-lg shadow hover:shadow-lg transition">
              <img src={item.imagem} alt={item.nome} className="w-full h-40 object-contain mb-3" />
              <h3 className="font-semibold text-purple-900">{item.nome}</h3>
              <a
                href="https://wa.me/5591992247744?text=Olá!%20Gostaria%20de%20comprar%20o%20produto%20do%20Festival%20do%20Açaí:%20"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-sm bg-purple-700 text-white px-4 py-2 rounded-full hover:bg-purple-800 transition"
              >
                Quero Comprar
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Loja;
  