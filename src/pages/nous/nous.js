import React from 'react';
import  './style.css';
const sommes = () => {
    return (
        <div>
            <h1>Notre Histoire</h1>
        <div className="container">
          <div className="image-container">
            <img src="/./img/main.png" alt="servise" />
          </div>
          <div className="text-container">
            <p>Bienvenue dans notre restaurant africain, une véritable invitation à découvrir les délices culinaires d'un continent riche en saveurs et en traditions. Laissez-nous vous emmener dans un voyage gastronomique à travers l'Afrique, où chaque plat raconte une histoire et éveille vos sens
            Chaque recette est soigneusement préparée avec des ingrédients frais et authentiques, sélectionnés avec amour pour vous offrir une expérience gustative exceptionnelle. Des épices exotiques aux légumes colorés, des viandes tendres aux sauces délicieusement relevées, notre menu est une véritable ode à la diversité et à la richesse des cuisines africaines
            </p>
          </div>
        </div>
            <h2>Notre chef</h2>
        <div className="container">
          <div className="image-container">
            <img src="/./img/main.png" alt="equipe" />
          </div>
          <div className="text-container">
            <p>Laissez-moi vous présenter notre talentueux chef, maître de la cuisine africaine et artisan passionné des saveurs authentiques. Avec une expérience culinaire riche et diversifiée, notre chef est le cœur battant de notre restaurant
            Natif d'une région africaine, notre chef a grandi au milieu des arômes enivrants et des traditions culinaires ancestrales. Depuis son plus jeune âge, il a été captivé par les épices exotiques, les combinaisons audacieuses de saveurs et les techniques de cuisson uniques qui caractérisent la cuisine africaine
            </p>
          </div>
        </div>

        </div>
    );
};

export default sommes;