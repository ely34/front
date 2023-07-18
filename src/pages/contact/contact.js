import React, { useState } from "react";
import "./style.css";

const Contact = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/contact/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nom,
        prenom,
        email,
        message,
      }),
    });
  };

  return (
    <div>
      <h1>Formulaire de Contact</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label for="nom">Nom:</label>
        <input
          type="text"
          className="nom"
          name="nom"
          required
          onChange={(e) => setNom(e.target.value)}
        />

        <label for="prenom">Prénom:</label>
        <input
          type="text"
          className="prenom"
          name="prenom"
          required
          onChange={(e) => setPrenom(e.target.value)}
        />

        <label for="email">E-mail:</label>
        <input
          type="email"
          className="email"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <label for="message">Message:</label>
        <textarea
          className="message"
          name="message"
          required
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
