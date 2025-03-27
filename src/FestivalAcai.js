import React from "react";
import "./styles.css"; // Importando o CSS personalizado

const FestivalAcai = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
        <img src={`${process.env.PUBLIC_URL}/logofest.png`} alt="Logo do Festival do Açaí" className="logofest" /><h1 className="nomeigreja">Assembleia de Deus em Afuá</h1>

          <button className="navbar-toggler">
            
          </button>
          <div className="navbar-links">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="#programacao">Programação</a></li>
              <li className="nav-item"><a className="nav-link" href="#localizacao">Localização</a></li>
              <li className="nav-item"><a className="nav-link" href="#contato">Contato</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <h1 className="vemai">Vem aí o 6º Festival do Açaí!</h1>
        <p>Uma celebração da Gastronomia, Música e Cultura!</p>
      </header>

      {/* Programação */}
        <section id="programacao" className="programacao">
        <h2 className="prog">Programação</h2>
        <div className="cards-container">
            <div className="card">
            <img src={process.env.PUBLIC_URL + "/acai.jpeg"} alt="Gastronomia" />
            <h3>Gastronomia</h3>
            <p>Sabores únicos com pratos especiais à base de açaí e culinária local.</p>
            </div>
            <div className="card">
            <img src={`${process.env.PUBLIC_URL}/musica.jpg`} alt="Música" />
            <h3>Música</h3>
            <p>Música ao vivo com artistas da terra e convidados especiais.</p>
            </div>
            <div className="card">
            <img src={`${process.env.PUBLIC_URL}/afua.jpeg`} alt="Cultura" />
            <h3>Cultura</h3>
            <p>A Cultura Afuaense presente no Festival do Açaí.</p>
            </div>
        </div>
        </section>


      {/* Localização */}
      <section id="localizacao" className="localizacao">
        <h2>Localização</h2>
        <p>Praça da Bíblia, Afuá - PA</p>
        {/* Google Map Embed */}
         <div className="map-container">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1220.9335244659285!2d-50.39218529433499!3d-0.1556834300836688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1743009436185!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização do Festival"
            ></iframe>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="contato">
        <h2>Fique por dentro!</h2>
        <p>Acompanhe nossas redes sociais para mais novidades.</p>
            <div className="social-links">
                <a href="https://www.instagram.com/adafua_oficial/" className="social-btn instagram"><i className="fab fa-instagram"></i></a>
                <a href="https://www.facebook.com/ad.afua.940" className="social-btn facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-btn whatsapp"><i className="fab fa-whatsapp"></i></a>
                <a href="https://www.youtube.com/watch?v=zXCtvypnIB4npm" className="social-btn youtube"><i className="fab fa-youtube"></i></a>
            </div>
        </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Festival do Açaí. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default FestivalAcai;
