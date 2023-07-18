import React from 'react';
import './style.css'

export default function Accueil() {
    return (
        <main>
        <h1>Notre Histoire</h1>
        <div className="container">
          <div className="image-container">
            <img src="/./img/main.png" alt="service" />
          </div>
          <div className="text-container">
            <p>Notre histoire commence par une passion profonde pour la cuisine africaine et le désir ardent de partager cette richesse culinaire avec le monde. Nous avons rassemblé une équipe de chefs talentueux, originaires de différentes régions d'Afrique, qui apportent leur expertise et leur savoir-faire traditionnel à chaque plat que nous servons</p>
          </div>
        </div>
        <h2>Notre carte</h2>
        <div className='carte'>
            <div className='image-carte'>
            <img src="/./img/mafe.png" alt="mafe" />
             <img src="/./img/poulet.png" alt="poulet" />
             <img src="/./img/mafe.png" alt="mafe" />
            </div>
        </div>  
      </main>
    );
};
