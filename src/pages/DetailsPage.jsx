import React from 'react'
import {ChevronLeft, Droplets, Toilet, Trash2, Utensils} from 'lucide-react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { points, PointType } from '../js/data'



function DetailsPage() {
  
  const {id} = useParams();
  const location = useLocation()
  const navigate = useNavigate()
  
  let current = points.find(r => r.id == id);
  let dist = location.state?.distance

  const getIconByType = (type) => {
    switch(type) {
      case PointType.WATER:
        return <Droplets color='White' size={100} />;
      case PointType.TOILET:
        return <Toilet color='White' size={100} />;
      case PointType.FOOD:
        return <Utensils color='White' size={100} />;
      case PointType.TRASH:
        return <Trash2 color='White' size={100} />;
      default:
        null;
    }
  }
            
  return ( current && 
    <div className='w-full h-full'>
      <div  className='w-full text-black  mt-5 font-bold text-2xl cursor-pointer' onClick={() => navigate(-1)}>
        <ChevronLeft size={25} />
      </div>
      <div className='flex flex-col gap-2 w-full h-full  items-center p-[5%] '>
        <div className='flex flex-col justify-center items-center gap-y-6 px-2 w-full h-[30%] bg-linear-to-b from-[#363635] to-[#4568DC] rounded-md shadow-lg shadow-black/25'>
          <h3 className=' w-full font-extrabold text-2xl text-center text-white'>
            {
              // Display resource type or "Unknown Resource" if not found
              current.name ?? "Uknown Ressource"
            }
          </h3>
          {
            getIconByType(current.type)
          }
        </div>
        <div className='flex flex-col justify-center gap-4 items-center px-2 w-full h-[25%] bg-linear-to-b from-[#4568DC] to-[#B06AB3] rounded-md shadow-lg shadow-black/25'>
          <h2 className='text-white text-5xl font-bold'>
            {
              // Display distance or "0" if not found
              parseInt(dist)+'m'
            }
          </h2>
          <h3 className='text-white text-lg font-extrabold opacity-80'>
            {
              // Display the current of occupation of the resource , or Unkown if not found
              current.occupation ?? "Unknown"
            }
          </h3>
          <h3 className='text-white text-lg font-extrabold opacity-80 text-center line-clamp-2 w-full'>
            {
              // Display the description of the resource , or Unkown if not found
              current.desc ?? "Unknown description"
            }
          </h3>
        </div>
        <div className='flex flex-col gap-4 w-full h-[25%] justify-center items-center mt-10 p-[5%]'>
          <button 
          className='bg-white w-full font-bold text-lg p-2 m-2 rounded-lg border border-gray-300 shadow-lg shadow-black/25 cursor-pointer'
          onClick={() => {
              navigate("/phonera/" + id, { state: { distance: dist}});
          }}
          >
          
            Y Aller
          </button>
          <button className='bg-[#3B27F3] w-full font-bold text-lg m-2 text-white p-4 rounded-lg shadow-xl shadow-black/25'>
            Commencer sur les lunettes RA
          </button>
        </div>

      </div>
    </div>
  )
}

export default DetailsPage
