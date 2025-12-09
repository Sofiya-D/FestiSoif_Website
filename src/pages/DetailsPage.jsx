import React from 'react'
import {BadgeQuestionMark, ChevronLeft, Droplets, Toilet, Trash2, Utensils} from 'lucide-react'
import { useParams } from 'react-router-dom'
// Default resource in case of invalid id
let defaultResource = {
  type: "Unknown",
  icon:"Unkown",
}


function DetailsPage() {
  // Get the id from the URL parameters
  const {id} = useParams();
  console.log(id)
  //current resource based on id
  let current = null
  // Parse id to integer
  const parseId = parseInt(id, 10);
  // If no id is provided or id is invalid, use default resource, else find resource by id or use default if not found
  current = isNaN(parseId) ? defaultResource : resources.find(r => r.id === parseId) ?? defaultResource;
  return (
    <div className='w-full h-full'>
      <div  className='w-full text-black  mt-5  font-bold text-2xl'>
        <ChevronLeft size={25} />
      </div>
      <div className='flex flex-col gap-2 w-full h-full  items-center p-[5%] '>
        <div className='flex flex-col justify-center items-center gap-y-6 px-2 w-full h-[30%] bg-linear-to-b from-[#363635] to-[#4568DC] rounded-md shadow-lg shadow-black/25'>
          <h3 className=' w-full font-extrabold text-2xl text-center text-white'>
            {
              // Display resource type or "Unknown Resource" if not found
              current.type ?? "Uknown Ressource"
            }
          </h3>
          {
            // Check for possible icons in the menu, if the icon isn't one of those we expect show a question mark icon
            current.icon === "Droplets" ? <Droplets color='White'size={100}/> : 
            current.icon === "Toilet" ? <Toilet color='White' size={100} /> :
            current.icon === "Utensils" ? <Utensils color='White' size={100} /> :
            current.icon === "Trash2" ? <Trash2 color='White' size={100} /> :
            <BadgeQuestionMark color='White' size={100} />
          }
        </div>
        <div className='flex flex-col justify-center gap-4 items-center px-2 w-full h-[25%] bg-linear-to-b from-[#4568DC] to-[#B06AB3] rounded-md shadow-lg shadow-black/25'>
          <h2 className='text-white text-5xl font-bold'>
            {
              // Display distance or "0" if not found
              current.distance ?? "0"
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
          <button className='bg-white w-full font-bold text-xl h-12 rounded-lg border border-gray-300 shadow-lg shadow-black/25'>
            Y Aller
          </button>
          <button className='bg-[#3B27F3] w-full font-bold text-xl text-white h-12 rounded-lg shadow-xl shadow-black/25'>
            Commencer sur les lunettes RA
          </button>
        </div>

      </div>
    </div>
  )
}

export default DetailsPage
