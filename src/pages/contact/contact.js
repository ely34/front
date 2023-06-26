import React from 'react';
import './style.css';
const contact = () => {
    return (
        <div>
            <p>Formulaire de Contact</p>
  <form className="contact-form" />
    <label for="nom">Nom:</label>
    <input type="text" className="nom" name="nom" required />

    <label for="prenom">Prénom:</label>
    <input type="text" className="prenom" name="prenom" required />

    <label for="email">E-mail:</label>
    <input type="email" className="email" name="email" required />

    <label for="message">Message:</label>
    <textarea className="message" name="message" required></textarea>

    <button type="submit">Envoyer</button>
  
        </div>
    );
};

export default contact;