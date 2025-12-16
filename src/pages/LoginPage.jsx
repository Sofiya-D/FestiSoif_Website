import React from "react";
import "../style/loginPage.css";
import logoEcho from "../assets/echo_logo.png";
import google from "../assets/img/google.png";
import facebook from "../assets/img/facebook.png";

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

  const setGuest = () => {
    const guestUser = {
      id: 0,
      email: "guest",
      password: "guest",
      name: "guest",
      icon: "",
      role: "user"
  }

    setIsLoggedIn(true);
    setCurrentUser(guestUser);

    localStorage.setItem("currentUser", JSON.stringify(guestUser));
    
    window.location.href = "/home";
  }


  return (
    <div className="login-container">

      <img src={logoEcho} alt="Echo Festival" className="logo-echo" />

      <div className="w-[80%] md:w-[30%] flex gap-2 items-center justify-center">
        <div className="w-full"><button className="py-2 px-4 text-stone-800 rounded-xl shadow-md shadow-stone-300 font-semibold w-full flex justify-center gap-4 items-center content-center" type="button"><img src={google} alt="google" width={20}/> <p>Google</p></button></div>
        <div className="w-full"><button className="py-2 px-4 text-stone-800 rounded-xl shadow-md shadow-stone-300 font-semibold w-full flex justify-center gap-4 items-center content-center" type="button"><img src={facebook} alt="facebook" width={20}/>Facebook</button></div>
      </div>

      <div className="w-full flex flex-col gap-6 items-center mt-2">
        <button 
        className="bg-blue-500 py-2 px-4 text-white rounded-xl font-semibold w-[80%] cursor-pointer" type="button"
        onClick={() => navigate("/seconnecter")}>
          Se connecter
        </button>
        <button 
        className="bg-orange-500 py-2 px-4 text-white rounded-xl font-semibold w-[80%] cursor-pointer" type="button"
        onClick={() => navigate("/signup")}>
          Créer un compte
        </button>
      </div>

      <div className="bg-linear-to-t from-[#4568DC] to-[#B06AB3] rounded-xl w-[80%] flex flex-col gap-2 items-center p-2 mt-10">
        <p className="text-white font-bold text-center">
          Scanner mon QR <br /> code de billet
        </p>
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=example"
          alt="QR"
          className="w-16"
        />
      </div>

      <div className="w-full flex flex-col gap-4 items-center">
        <button 
        className="bg-black py-[0.7rem] px-4 text-white rounded-lg font-semibold w-[80%] cursor-pointer" type="button"
        onClick={setGuest}>
          Continuer en invité
        </button>
      </div>
    </div>
  );
}
