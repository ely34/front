import React from 'react';
import './style.css';


const Footer = () => {
  return (
    
    <footer>
    <div className="conteneurFooter" >
        <div className="footer1">
            <ul>
                <li className="footerTitre">
                <li> Mentions Legales
                </li>
                <li>CGU</li>
                <li>CGV</li>
                </li>
            </ul>
        </div>
       
        <div className="footer3">
            <p>Ou nous trouver ?</p> 
            <img src="/./img/maps.png" alt="Logo" />
           
        </div>
       
        <div className="footer5">
            <h5>Nos reseaux sociaux</h5>
            <div className="insta">
                
                    <img src="/./img/insta.png" alt="Instagram" class="img"/>
               
            </div>
            <div className="faceb">
                
                    <img src="/./img/fac.png" alt="Facebook" class="img"/>
              
            </div>
        </div>
        </div>
</footer>
  );
};

export default Footer;