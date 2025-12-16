import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();

  const [offline, setOffline] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("profile_offline")) ?? false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem("profile_offline", JSON.stringify(offline));
  }, [offline]);

  const sections = [
    { id: "favorites", label: "Favoris" },
    { id: "language", label: "Langue" },
    { id: "theme", label: "Thème" },
    { id: "accessibility", label: "Accessibilité" },
    { id: "about", label: "À propos" },
    { id: "help", label: "Aide" },
    { id: "logout", label: "Déconnexion" },
  ];

  function handleSectionClick(id) {
    if (id === "logout") {
      localStorage.removeItem("authToken");
      navigate("/");
    } else {
      navigate("/oups");
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">

      {/* Header */}
      <div className="w-full max-w-md px-6 pt-8 pb-6 flex flex-row gap-4 justify_center items-center">
        <img
          src={`/avatars/${user.icon}`}
          alt="avatar"
          className="w-16 h-16 rounded-full object-cover mb-4"
        />
        <h1 className="text-xl font-extrabold tracking-wide">
          {user.name.toUpperCase()}
        </h1>
      </div>

      {/* Dark panel */}
      <div className="w-full flex-1 bg-black rounded-tl-[40px] px-6 pt-8 text-white flex flex-col">

        {/* Offline toggle */}
        <div className="flex items-center justify-between pb-6 border-b border-white/20">
          <span className="text-lg font-medium">Mode Offline</span>

          <button
            aria-pressed={offline}
            onClick={() => setOffline(!offline)}
            className={`relative w-14 h-8 rounded-full transition-colors ${
              offline ? "bg-orange-500" : "bg-gray-600"
            }`}
          >
            <span
              className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                offline ? "translate-x-6" : ""
              }`}
            />
          </button>
        </div>

        {/* Menu */}
        <ul className="flex-1 pt-4">
          {sections.map((s) => (
            <li
              key={s.id}
              className="border-b border-white/10 last:border-none"
            >
              <button
                onClick={() => handleSectionClick(s.id)}
                className="w-full flex items-center justify-between py-4 text-lg"
              >
                <span>{s.label}</span>
                <span className="text-white/50 text-2xl">›</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Bottom button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 mt-4 w-full py-4 rounded-full bg-white text-black text-xl font-semibold"
        >
          Retour
        </button>
      </div>
    </div>
  );
}
