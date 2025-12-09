import { useState } from "react";
import { Search, ChevronLeft, ChevronDown, CircleChevronUp } from "lucide-react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import MapPointer from "../components/HomePage/MapPointer";
import "leaflet/dist/leaflet.css";
import { points, maps } from "../js/data"
import { useMapEvents } from "react-leaflet";
import { PointType } from "../js/data";

export function MapClick({ onClick }) {
  useMapEvents({
    click(e) {
      onClick([e.latlng.lat, e.latlng.lng]);
    }
  });

  return null;
}

export default function HomePage() {
  const [legendOpen, setLegendOpen] = useState(true);
  const [mapType, setMapType] = useState(0);
  const center = [48.39, -4.48];
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState(null);

  const filteredPoints = points.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter ? p.type === activeFilter : true;
    return matchesSearch && matchesFilter;
  });


  return (
    <div className="w-screen h-screen overflow-hidden relative">
      {/* Carte */}
      <div className="absolute inset-0 z-0">
        <MapContainer
          center={center}
          zoom={16}
          className="w-full h-full"
        >
          <TileLayer url={maps[mapType]} />
          <Marker position={center} />
          <MapPointer points={filteredPoints} />
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
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search size={20} className="text-gray-500" />
        </div>
      </div>

      {/* Filtres */}
      <div className="absolute top-32 left-0 w-full px-4 flex gap-3 overflow-x-auto no-scrollbar z-10">
        <button
          className={`px-4 py-2 rounded-xl text-sm whitespace-nowrap ${
            activeFilter === PointType.WATER ? "bg-orange-500 text-white" : "bg-white text-black"
          }`}
          onClick={() => setActiveFilter((filter) => filter == PointType.WATER ? null : PointType.WATER)}
        >
          Point d’eau
        </button>

        <button
          className={`px-4 py-2 rounded-xl text-sm whitespace-nowrap ${
            activeFilter === PointType.TOILET ? "bg-orange-500 text-white" : "bg-white text-black"
          }`}
          onClick={() => setActiveFilter((filter) => filter == PointType.TOILET ? null : PointType.TOILET)}
        >
          Toilettes
        </button>

        <button
          className={`px-4 py-2 rounded-xl text-sm whitespace-nowrap ${
            activeFilter === PointType.FOOD ? "bg-orange-500 text-white" : "bg-white text-black"
          }`}
          onClick={() => setActiveFilter((filter) => filter == PointType.FOOD ? null : PointType.FOOD)}
        >
          Resto
        </button>

        <button
          className={`px-4 py-2 rounded-xl text-sm whitespace-nowrap ${
            activeFilter === PointType.TRASH ? "bg-orange-500 text-white" : "bg-white text-black"
          }`}
          onClick={() => setActiveFilter((filter) => filter == PointType.TRASH ? null : PointType.TRASH)}
        >
          Poubelle
        </button>
      </div>


      {/* Légende */}
      <div className="absolute bottom-24 right-4 bg-white p-3 rounded-2xl shadow-xl text-sm w-40 z-10">
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
              <span className="w-3 h-3 rounded-full bg-blue-800" /> point d'eau
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

      {/* change view button */}
      <button className="fixed bottom-24 left-4 bg-white p-3 rounded-full shadow-xl z-100"
        onClick={() => setMapType((mapType + 1) % maps.length)}>
        <CircleChevronUp />
      </button>
    </div>
  );
}
