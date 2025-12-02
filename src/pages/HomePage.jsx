import { useState } from "react";
import { Search, ChevronLeft, ChevronDown } from "lucide-react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

export default function HomePage() {
  const [legendOpen, setLegendOpen] = useState(true);
  const center = [48.39, -4.48];

  return (
    <div className="w-screen h-screen overflow-hidden relative">
      {/* Carte */}
      <div className="absolute inset-0">
        <MapContainer
          center={center}
          zoom={16}
          className="w-full h-full"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={center} />
        </MapContainer>
      </div>
      
      {/* Top bar */}
      <div className="absolute top-0 left-0 w-full p-4 flex items-center justify-between text-white z-10">
        <ChevronLeft size={28} />
        <h1 className="text-lg font-semibold">Home Page</h1>
        <div className="w-7" />
      </div>

      {/* Search */}
      <div className="absolute top-16 left-0 w-full px-4 z-10">
        <div className="bg-white rounded-2xl shadow flex items-center px-4 py-2">
          <input
            type="text"
            placeholder="Rechercher un point d'interet..."
            className="flex-1 outline-none text-sm"
          />
          <Search size={20} className="text-gray-500" />
        </div>
      </div>

      {/* Filtres */}
      <div className="absolute top-32 left-0 w-full px-4 flex gap-3 overflow-x-auto no-scrollbar z-10">
        <button className="px-4 py-2 rounded-xl bg-orange-500 text-white text-sm whitespace-nowrap">
          Point d’eau
        </button>
        <button className="px-4 py-2 rounded-xl bg-white text-black shadow text-sm whitespace-nowrap">
          Toilettes
        </button>
        <button className="px-4 py-2 rounded-xl bg-gray-300 text-black text-sm whitespace-nowrap">
          Resto
        </button>
        <button className="px-4 py-2 rounded-xl bg-gray-300 text-black text-sm whitespace-nowrap">
          Scène
        </button>
      </div>

      {/* Légende */}
      <div className="absolute bottom-20 right-4 bg-white p-3 rounded-2xl shadow-xl text-sm w-40 z-10">
        <button
          onClick={() => setLegendOpen(!legendOpen)}
          className="flex justify-between items-center w-full font-semibold"
        >
          Alluence
          <ChevronDown
            size={18}
            className={`${legendOpen ? "rotate-180" : ""} transition`}
          />
        </button>
        {legendOpen && (
          <div className="mt-2 space-y-1">
            <p className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-800" /> point d’eau
            </p>
            <p className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-300" /> toilette
            </p>
            <p className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-yellow-400" /> restauration
            </p>
            <p className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500" /> Poubelle
            </p>
          </div>
        )}
      </div>

      {/* Bottom nav */}
      <div className="absolute bottom-0 left-0 w-full bg-white py-3 flex justify-around shadow-xl z-10">
        <div className="flex flex-col items-center text-black">
          <span className="text-xl">🏠</span>
          <p className="text-xs">Home</p>
        </div>
        <div className="flex flex-col items-center text-black">
          <span className="text-xl">🥽</span>
          <p className="text-xs">Mode RA</p>
        </div>
        <div className="flex flex-col items-center text-black">
          <span className="text-xl">👤</span>
          <p className="text-xs">Profil</p>
        </div>
      </div>
    </div>
  );
}
