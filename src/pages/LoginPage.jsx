import React from "react";
import "../style/loginPage.css";
import logoEcho from "../assets/echo_logo.png";

export default function LoginPage() {
  return (
    <div className="login-container">

      {/* Logo Festival */}
      <img src={logoEcho} alt="Echo Festival" className="logo-echo" />

      {/* Boutons Google + Facebook */}
      <div className="social-buttons">
        <button className="social-btn">
          <img
            src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
            className="icon"
            alt="Google"
          />
          <span>Google zakaria</span>
        </button>

        <button className="social-btn">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
            className="icon"
            alt="Facebook"
          />
          <span>Facebook</span>
        </button>
      </div>

      {/* Boutons principaux */}
      <button className="main-btn login-btn">Se Connecter</button>
      <button className="main-btn register-btn">Créer un compte</button>

      {/* Carte QR */}
      <div className="qr-card">
        <p>
          Scanner mon QR <br /> code de billet
        </p>
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=example"
          alt="QR"
          className="qr-img"
        />
      </div>

      {/* Bouton invité */}
      <button className="guest-btn">Continuer en invité</button>
    </div>
  );
}
