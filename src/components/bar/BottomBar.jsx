import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function BottomBar() {
  const navigate = useNavigate();
  return (
    <div className="absolute bottom-0 left-0 w-full h-[10%] bg-white py-3 flex justify-around shadow-xl z-10">
      <Link to="/">
        <div className="flex flex-col items-center text-black">
          <span className="text-xl">🏠</span>
          <p className="text-xs">Home</p>
        </div>
      </Link>
      <Link to="/phonera">
        <div className="flex flex-col items-center text-black">
          <span className="text-xl">🥽</span>
          <p className="text-xs">Mode RA</p>
        </div>
      </Link>
      <Link to="/details/7">
        <div className="flex flex-col items-center text-black">
          <span className="text-xl">👤</span>
          <p className="text-xs">Profil</p>
        </div>
      </Link>
    </div>
  );
}