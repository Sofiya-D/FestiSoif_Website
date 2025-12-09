// src/pages/ProfileSubpage.jsx
import React from "react";
import {useNavigate} from "react-router-dom";

export default function ContentMissingPage() {
  const navigate = useNavigate();

  function handleBack() {
    // Prefer browser history back; if there is no history, fallback to home
    if (window.history.length > 1) navigate(-1);
    else navigate("/"); // deterministic fallback
  }

  return (
    <div className="h-full w-full p-6 bg-gray-50 text-gray-800 flex flex-col">
      <header className="mb-4">
        <button
          onClick={handleBack}
          aria-label="Retour"
          className="px-3 py-2 rounded bg-white shadow hover:bg-gray-100"
        >
          Retour
        </button>
      </header>

      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500">Contenu non ajouté pour l'instant.</p>
        </div>
      </main>
    </div>
  );
}