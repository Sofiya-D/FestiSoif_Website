import React from 'react'
import logo from '../assets/img/logo.png';
import { useNavigate } from 'react-router-dom';

function SplashScreen() {
    const navigate = useNavigate();
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* BLOB EN HAUT À GAUCHE */}
      <div className="absolute -top-24 -left-24 w-52 h-52 bg-cyan-400 rounded-br-[999px] border-b-[4px] border-r-[4px] border-slate-900">
        </div>

      {/* CONTENU */}
      <main className="px-6 pt-16 flex flex-col items-center justify-center">
        <img src={logo} alt="Logo" width={658} height={560} />
        <h1 className='font-bold font-irish text-6xl text-center text-gray-800 mt-8 font-["Irish Grover"]'>
            Decouvrez Navigez Profitez
        </h1>
        <button className='w-[90%] h-20 text-white font-bold text-2xl bg-[#3461FD] mt-22.5' onClick={
            () => {navigate('/login')}
        }>
            Commencer
        </button>
      </main>
    </div>
  )
}

export default SplashScreen
