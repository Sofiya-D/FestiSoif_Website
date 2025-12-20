import React, { useEffect, useRef } from "react";
import background from "../assets/img/background.jpg";
import avatar from "../assets/img/avatar.jpg";
import { ArrowLeft } from "lucide-react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { points } from "../js/data";

export default function PhoneRA() {

  const videoRef = useRef(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoRef.current.srcObject = stream;
      })
      .catch(err => {
        console.error("Camera error:", err);
      });
  }, []);

  const {id} = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const distance = location.state?.distance || 0;
  let curr = points.find(r => r.id == id);

  return (
    <div className="relative w-full h-screen overflow-hidden text-white">
      {/* Background image */}
      <img
        src={background}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Black transparent overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Back button */}
      <button onClick={() => navigate(-1)} className="absolute top-6 left-4 w-10 h-10 bg-gray-200/80 backdrop-blur rounded-full flex items-center justify-center text-black text-2xl shadow">
        <ArrowLeft />
      </button>

      {/* User avatar + label */}
      <div className="absolute top-20 left-4 flex items-center gap-2"
        onClick={() => navigate("/profile")} >
        <img
          src={avatar}
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <div className="bg-black/80 px-3 py-1 rounded-full text-white text-sm">
          {curr ? curr.name : "Point inconnu"}
        </div>
      </div>

      {/* Distance badge */}
      <div className="absolute top-26 right-4 bg-gray-200/80 p-2 rounded-lg text-black text-center shadow text-sm">
        <span className="text-lg font-bold">{parseInt(distance)}m</span>
        <br /> restants
      </div>

      {/* Center distance label */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 px-4 py-2 rounded-full text-white text-sm">
        {parseInt(distance)} m restants
      </div>

      {/* Bottom buttons */}
      <div className="absolute bottom-25 w-full flex flex-col items-center gap-4 px-6">
        <button className="bg-blue-600 text-white w-full py-4 rounded-2xl text-lg font-semibold shadow" onClick={()=>navigate("/oups")}>
          Utiliser mes lunettes RA
        </button>
        <button className="bg-white text-black w-full py-4 rounded-2xl text-lg font-semibold shadow border" onClick={() => navigate(-1)}>
          Quitter la RA
        </button>
      </div>
    </div>
  );
}
