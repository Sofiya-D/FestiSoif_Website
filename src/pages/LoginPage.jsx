import React from "react";
import "../style/loginPage.css";
import logoEcho from "../assets/echo_logo.png";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function LoginPage() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null); 
  const navigate = useNavigate()

  useEffect(() => {
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

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
      <button className="main-btn login-btn" onClick={() => navigate("/seconnecter")}>Se Connecter</button>
      <button className="main-btn register-btn" onClick={() => navigate("/signup")}>Créer un compte</button>

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
