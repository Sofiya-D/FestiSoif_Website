import React from 'react'
import {Droplets} from 'lucide-react'

function DetailsPage() {
  return (
    <div className='w-full h-full'>
      <div  className='w-full bg-yellow-200 text-black font-bold text-2xl'>
        {"<"}
      </div>
      <div className='flex flex-col gap-2 bg-red-500 w-full h-full  items-center p-[5%] mt-10'>
        <div className='flex flex-col justify-center items-center gap-y-6 px-2 w-full h-[30%] bg-yellow-200 rounded-md'>
          <h3 className='bg-green-600 w-full font-extrabold text-2xl text-center text-white'>Point d'eau Zone B</h3>
          <Droplets size={100}/>
        </div>
        <div className='flex flex-col justify-center items-center px-2 w-full h-[25%] bg-yellow-200 rounded-md'>
          <h2 className='bg-white'>120m</h2>
          <h3>Faible</h3>
          <h3>Proche de la scène principale</h3>
        </div>
        <div className='w-full h-[25%] bg-yellow-200 mt-10'>
          Hello
        </div>

      </div>
    </div>
  )
}

export default DetailsPage
