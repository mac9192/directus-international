import React from 'react'
import Image from 'next/image'
import telephone from '../public/assets/icon-telephone.svg'
import location from '../public/assets/icon-location.svg'
import mail from '../public/assets/icon-mail.svg'
import instagram from '../public/assets/icon-instagram.svg'
import youtube from '../public/assets/icon-youtube.svg'


const topNavigation = () => {
  return (
    <div>
     <header class="sm:hidden md:block text-white bg-logoBlue body-font">
  <div class="md:container md:mx-auto mx-auto flex flex-wrap  flex-col md:flex-row items-center">

    <nav class="flex lg:w-4/5 flex-wrap md:flex-row sm:flex-col items-center text-base md:ml-auto">
     <a href="https://directus-proto.vercel.app/en"> <Image  src = {telephone} alt="/" width="30" height="50" priority={true} /> </a>
      <a href="https://directus-proto.vercel.app/en" class="mr-5 hover:text-gray-900 px-3">(855) 274-2366</a>
      <a href="https://directus-proto.vercel.app/en"> <Image src = {location} alt="/" width="30" height="50" priority={true} /> </a>
      <a href="https://directus-proto.vercel.app/en" class="mr-5 hover:text-gray-900 px-3">3295 River Exchange Dr. Suite 420 Peachtreee Corners, GA</a>
    
    </nav>
    <div class="flex  lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 px-3 lg:items-center lg:justify-center mb-4 md:mb-0">
  
    <a href="https://directus-proto.vercel.app/en" className="px-2"> <Image src = {mail} alt="/" width="30" height="50" priority={true} /> </a>
    <a href="https://directus-proto.vercel.app/en" className="px-2"> <Image src = {youtube} alt="/" width="30" height="50" priority={true} /> </a>
    <a href="https://directus-proto.vercel.app/en" className="px-2"> <Image src = {instagram} alt="/" width="25" height="50" priority={true} /> </a>
    </div>
   
  </div>
</header>
    </div>
  )
}

export default topNavigation
 