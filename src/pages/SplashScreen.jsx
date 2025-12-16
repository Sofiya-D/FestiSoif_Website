import React from 'react'
import logo from '../assets/img/logo.png';
import { useNavigate } from 'react-router-dom';

function SplashScreen() {
    const navigate = useNavigate();
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <img src={"/assets/elipse.png"} alt="elipse" width={120} className="absolute z-0 top-[-3.2rem] left-[-2.2rem]"/>
      <img src={"/assets/stars.png"} alt="stars" width={130} className="absolute z-0 bottom-0 right-[-2.5rem] rotate-x-180"/>

      {/* CONTENU */}
      <main className="px-6 pt-16 flex flex-col items-center justify-center">
        <img src={logo} alt="Logo" width={658} height={560} />
        <h1 className='font-bold font-irish text-4xl text-center text-gray-800 mt-8 font-["Irish Grover"]'>
            Decouvrez Navigez Profitez
        </h1>
        <button className='w-[90%] h-20 rounded-xl text-white font-bold text-2xl bg-[#3461FD] mt-22.5' onClick={
            () => {navigate('/login')}
        }>
            Commencer
        </button>
      </main>
    </div>
  )
}

export default SplashScreen
