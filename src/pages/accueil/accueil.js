import React from 'react';
import './style.css'

export default function Accueil() {
    return (
        <main>
        <h2>Notre Histoire</h2>
        <div className="container">
          <div className="image-container">
            <img src="/./img/main.png" alt="" />
          </div>
          <div className="text-container">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolores nemo beatae id, enim iusto sunt cupiditate optio, non aliquam repudiandae explicabo asperiores laudantium officia inventore soluta accusantium. Ratione, corporis?</p>
          </div>
        </div>
        <h3>Notre carte</h3>
        <div className='carte'>
            <div className='image-carte'>
            <img src="/./img/mafe.png" alt="" />
             <img src="/./img/poulet.png" alt="" />
             <img src="/./img/mafe.png" alt="" />
            </div>
        </div>
      </main>
    );
};
