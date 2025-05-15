function RaceSponsors() {
    const sponsors = [
      { name: "Patrocinador 1", logo: "/images/patrocinador1.png" },
      { name: "Patrocinador 2", logo: "/images/patrocinador2.png" },
      { name: "Patrocinador 3", logo: "/images/patrocinador3.png" },
    ];
  
    return (
      <section className="bg-purple-50 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-extrabold text-purple-800 mb-8">
            Patrocinadores Exclusivos da Corrida
          </h3>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center">
            {sponsors.map((s, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-md flex items-center justify-center h-40 hover:scale-105 transition transform"
              >
                <img
                  src={s.logo}
                  alt={s.name}
                  className="max-h-40 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default RaceSponsors;
  