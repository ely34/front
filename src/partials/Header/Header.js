import React from 'react';
import   './style.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="logo">
        <img src="/./img/logo.png" alt="Logo" />
        <nav>
          {/* jai fais le link to pour faire le liens entre les pages pas bessoin de telechargement */}
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="carte">la carte</Link></li>
          <li><Link to="nous">Qui sommes-nous</Link></li>
          <li><Link to="contact">Contact</Link></li>
        </ul>
      </nav>
      </div>
      
       <header style={{ backgroundImage: `url(/./img/plats.png)` }}>
      
      
    </header>
    </div>
  );
};

export default Header;