import React, { useState, useEffect } from "react";
import logoEcho from "../assets/echo_logo.png"; 
import { useNavigate, useLocation } from "react-router-dom";

export default function ProfilePage() {
  // TODO: Add actual user data (username, profile picture)
  // user = JSON.parse(localstorage.getuser("user"))
  const [user] = useState({ name: "Username", avatar: logoEcho });

  // Offline toggle (persist in localStorage)
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
    { id: "about", label: "A propos" },
    { id: "help", label: "Aide" },
    { id: "logout", label: "Déconnexion" },
  ];

  const navigate = useNavigate(); // Useful for a back button if wanted
  const location = useLocation();

  function handleSectionClick(id) {
    // Replace with real routing or modal logic per section
    if (id === "logout") {
      // example logout flow
      // clear auth, then navigate to home
      // localStorage.removeItem('authToken');
      navigate("/"); // or another route
    } else {
      // navigate to a settings subsection (optional)
      navigate(`/oups`);
    }
  }

  return (
    <div className="h-full w-full p-6 bg-gray-50 text-gray-800 flex flex-col">
      <header className="flex items-center gap-4 mb-6">
        {<button 
        onClick={() => navigate(-1)} 
        className="mt-4 px-3 py-2 rounded bg-white shadow hover:bg-gray-100"
        >
            Retour
        </button>}
        <img
          src={user.avatar}
          alt={`${user.name} avatar`}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="text-lg font-semibold">{user.name}</div>
        </div>
      </header>

      <section className="mb-6">
        <label className="flex items-center justify-between w-full">
          <div className="text-sm font-medium">Mode Offline</div>
          <button
            aria-pressed={offline}
            aria-label="Toggle offline mode"
            onClick={() => setOffline((s) => !s)}
            className={`relative inline-flex items-center h-6 w-12 rounded-full transition-colors duration-200 ${
              offline ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-5 w-5 bg-white rounded-full shadow transform transition-transform duration-200 ${
                offline ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </label>
      </section>

      <main className="flex-1 overflow-auto">
        <ul className="flex flex-col gap-2">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => handleSectionClick(s.id)}
                className="w-full text-left px-4 py-3 bg-white rounded-lg shadow-sm hover:bg-gray-100 flex items-center justify-between"
                aria-label={s.label}
              >
                <span className="text-base">{s.label}</span>
                <span className="text-gray-400">{"›"}</span>
              </button>
            </li>
          ))}
        </ul>
      </main>

    </div>
  );
}