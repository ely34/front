import React from 'react';
import './style.css';



const carte = () => {
    return (
        <div>
        

            <h1>La carte </h1>
            <div className="container">
          <div className="image-container">
           <a href="plats"> <img src="/./img/main.png" alt="" /></a>
          </div>
          <div className="text-container">
           <a href="plats"> <p>plats</p></a>
          </div>
        </div>
        <div className="container">
          <div className="image-container">
           <a href="boissons"> <img src="/./img/mafe.png" alt="" /></a>
          </div>
          <div className="text-container">
            <a href="boissons"><p>boissons</p></a>
          </div>
        </div>

        <div className="container">
          <div className="image-container">
           <a href="desserts"> <img src="/./img/poulet.png" alt="" /></a>
          </div>
          <div className="text-container">
            <a href="desserts"><p>desserts</p></a>
          </div>
        </div>

        </div>
        
    );
};

export default carte;