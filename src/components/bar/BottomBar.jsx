import React from "react";

export default function BottomBar() {
  const center = [48.39, -4.48];

  return (
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
  );
}