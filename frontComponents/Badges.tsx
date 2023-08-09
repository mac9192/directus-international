import React from 'react'
import Image from 'next/image'
import badge1 from '../public/assets/badge-top40.png'
import badge2 from '../public/assets/badge-avvo.png'
import badge3 from '../public/assets/badge-super.png'
import { Badge } from 'lucide-react'

const Badges = ({dictionary}:{dictionary:any}) => {
  return (
    <div>
     <section className="text-gray-600  body-font ">
  <div className="lg:container md:mx-auto px-5 md:py-16 sm:py-20 mx-auto">
  <div className="text-center mb-20">
      <h1 className="sm:text-1xl text-3xl  text-logoBlue font-medium title-font text-black mb-4">{dictionary.badges.header}
</h1>
      <p className="text-amber-500 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-black ">{dictionary.badges.subHeader}
</p>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-amber-500 inline-flex"></div>
      </div>
    </div>
    <div className="flex flex-wrap  sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      <div className="md:p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className=" inline-flex items-center justify-center rounded   text-indigo-500 mb-5 flex-shrink-0">
        <Image src = {badge1} alt="/" width="300" height="50" priority={true} />
        </div>
        <div className="flex-grow">
          <h2 className="text-black text-lg title-font font-medium md:mb-3 ">National Trial Lawyers Top 40 Under 40 </h2>
          <p className="leading-relaxed text-black">  {dictionary.badges.top40} </p>
        
        </div>
      </div>
      <div className="md:p-4 md:w-1/3 flex flex-col text-center items-center">
        <div className="  inline-flex items-center justify-center rounded-full   text-indigo-500 mb-5 flex-shrink-0">
        <Image className="rounded" src={badge2} alt="/" width="200" height="50" priority={true} />
        </div>
        <div className="flex-grow">
          <h2 className="text-black text-lg title-font font-medium md:mb-3  ">Avvo Clients Award</h2>
          <p className="leading-relaxed text-black"> {dictionary.badges.avvo}</p>
          
        </div>
      </div>
      <div className="md:p-4 md:w-1/3 flex flex-col text-center items-center">
      <div className=" inline-flex items-center justify-center rounded bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
        <Image className="rounded" src = {badge3} alt="/" width="180" height="50" priority={true} />
        </div>
        <div className="flex-grow">
          <h2 className="text-black text-lg title-font font-medium md:mb-3">Super Lawyers</h2>
          <p className="leading-relaxed text-black text-base"> {dictionary.badges.super}</p>
          
        </div>
      </div>
      {/*<div class="p-4 md:w-1/3 flex flex-col text-center items-center">
      <div class=" inline-flex items-center justify-center rounded bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
        <Image className="rounded" src = "/assets/avvo2.png" alt="/" width="180" height="50" priority={true} />
        </div>
        <div class="flex-grow">
          <h2 class="text-white text-lg title-font font-medium mb-3">Avvo Reviews</h2>
          <p class="leading-relaxed text-gray-400">This highly coveted honor is bestowed upon attorneys who have received 4-star reviews or higher from at least 5 past clients throughout the year.</p>
          
        </div>
  </div>*/}
    </div>
    {/*<button class="flex mx-auto mt-16 text-white bg-amber-300 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>*/}
  </div>
</section>
    </div>
  )
}

export default Badges
