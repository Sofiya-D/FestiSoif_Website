import React from 'react'
import {Droplets} from 'lucide-react'

function DetailsPage() {
  return (
    <div className='w-full h-full'>
      <div  className='w-full bg-yellow-200 text-black font-bold text-2xl'>
        {"<"}
      </div>
      <div className='flex flex-col gap-2 bg-red-500 w-full h-full  items-center p-[5%] mt-10'>
        <div className='flex flex-col justify-center items-center gap-y-6 px-2 w-full h-[30%] bg-linear-to-b from-[#363635] to-[#4568DC] rounded-md'>
          <h3 className=' w-full font-extrabold text-2xl text-center text-white'>Point d'eau Zone B</h3>
          <Droplets color='White'size={100}/>
        </div>
        <div className='flex flex-col justify-center gap-4 items-center px-2 w-full h-[25%] bg-linear-to-b from-[#4568DC] to-[#B06AB3] rounded-md'>
          <h2 className='text-white text-2xl font-extrabold'>120m</h2>
          <h3 className='text-white text-xl font-bold'>Faible</h3>
          <h3 className='text-white text-md font-extrabold opacity-80'>Proche de la scène principale</h3>
        </div>
        <div className='flex flex-col w-full h-[25%] justify-center items-center bg-yellow-200 mt-10 p-[5%]'>
          <button className='bg-white w-full'>
            Y Aller
          </button>
        </div>

      </div>
    </div>
  )
}

export default DetailsPage
