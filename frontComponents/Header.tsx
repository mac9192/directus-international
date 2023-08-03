import React from 'react'

import Image from 'next/image'
import iconPlay from '../public/assets/icon-play.svg'

const Header = ({dictionary}:{dictionary:any}) => {
  return (

     
          
    <div className="text-gray-600 body-font bg-group  md:min-h-[850px]  md:py-24 lg:py[100px] flex flex-row ">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 py-20 items-center text-center max-w-2xl">
        <h1 className="title-font sm:text-[50px]  md:text-[72px] text-1xl  font-medium text-white ">{dictionary.frontHeader.topLine}
        </h1>
  <p className=" leading-relaxed text-white text-large md:text-[22px]">{dictionary.frontHeader.description}</p>
        <div className="flex justify-center gap-3 py-3 ">
        <button className="flex mx-auto text-white bg-logoBlue  border-0 py-2 px-8 focus:outline-none hover:bg-gray rounded text-lg">{dictionary.frontHeader.button1}</button>
        <button className="flex mx-auto text-white bg-logoBlue border-0 py-2 px-8 focus:outline-none hover:bg-gray rounded text-lg">
        <Image className=" "src = {iconPlay} alt="/" width="25" height="50" priority={true} />
         <p className="px-3">{dictionary.frontHeader.button2}</p> </button>
        </div>
      </div>
      
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6  ">
 
      </div>
      
      </div>
      
   
  </div>

  
  )///Users/miguelcolmenares/Desktop/test/directus-international/public/assets/court.jpg
}

export default Header
 
 
     