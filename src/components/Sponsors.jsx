import React from 'react';

function Sponsors() {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        {/* Título com fundo lilás */}
        <h2 className="text-3xl font-bold mb-8 bg-purple-900 text-white inline-block px-4 py-2 rounded">
          Nossos Patrocinadores
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {/* Patrocinador 1 */}
          <div className="flex flex-col items-center">
            <a href="https://www.babyliz.store" target="_blank" rel="noopener noreferrer">
              <img
                src="/patrocinador1.png"
                alt="Baby Liz"
                className="w-40 h-40 object-contain mx-auto"
              />
              <p className="mt-2 text-lg text-purple-700 text-xl font-bold">Baby Liz Store</p>
            </a>
          </div>

          {/* Patrocinador 2 */}
          <div className="flex flex-col items-center">
            <a href="https://www.jrinfocell.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/patrocinador2.png"
                alt="Jr Infocell"
                className="w-40 h-40 object-contain mx-auto"
              />
              <p className="mt-2 text-lg text-purple-700 text-xl font-bold">Jr Infocell</p>
            </a>
          </div>

          {/* Patrocinador 3 */}
          <div className="flex flex-col items-center">
            <a href="https://www.grupokadosh.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/patrocinador3.png"
                alt="Grupo Kadosh"
                className="w-40 h-40 object-contain mx-auto"
              />
              <p className="mt-2 text-lg text-purple-700 text-xl font-bold">Grupo Kadosh</p>
            </a>
          </div>

          {/* Patrocinador 4 */}
          <div className="flex flex-col items-center">
            <a href="https://www.escolaadorai.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/patrocinador4.png"
                alt="Escola Adorai"
                className="w-40 h-40 object-contain mx-auto"
              />
              <p className="mt-2 text-lg text-purple-700 text-xl font-bold">Escola Adorai</p>
            </a>
          </div>
        </div>

        {/* Adicionando mais patrocinadores abaixo */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {/* Patrocinador 5 */}
          <div className="flex flex-col items-center">
            <a href="https://www.patrocinador5.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/patrocinador5.png"
                alt="Patrocinador 5"
                className="w-40 h-40 object-contain mx-auto"
              />
              <p className="mt-2 text-lg text-purple-700 text-xl font-bold">Patrocinador 5</p>
            </a>
          </div>

          {/* Patrocinador 6 */}
          <div className="flex flex-col items-center">
            <a href="https://www.patrocinador6.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/patrocinador6.png"
                alt="Patrocinador 6"
                className="w-40 h-40 object-contain mx-auto"
              />
              <p className="mt-2 text-lg text-purple-700 text-xl font-bold">Patrocinador 6</p>
            </a>
          </div>

          {/* Patrocinador 7 */}
          <div className="flex flex-col items-center">
            <a href="https://www.patrocinador7.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/patrocinador7.png"
                alt="Patrocinador 7"
                className="w-40 h-40 object-contain mx-auto"
              />
              <p className="mt-2 text-lg text-purple-700 text-xl font-bold">Patrocinador 7</p>
            </a>
          </div>

          {/* Patrocinador 8 */}
          <div className="flex flex-col items-center">
            <a href="https://www.patrocinador8.com" target="_blank" rel="noopener noreferrer">
              <img
                src="/patrocinador8.png"
                alt="Patrocinador 8"
                className="w-40 h-40 object-contain mx-auto"
              />
              <p className="mt-2 text-lg text-purple-700 text-xl font-bold">Patrocinador 8</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
