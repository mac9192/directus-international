import React from 'react'
import Image from 'next/image'
import stars from '../public/assets/icon-stars.png'
 


const HeaderTwo = ({dictionary}:{dictionary:any}) => {
  return (
    <div>
       <section className="bg-white dark:bg-gray-900 bg-city py-12">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
       
  <h2 className="mb-4 text-4xl   tracking-tight leading-none text-white md:text-5xl lg:text-6xl  m-10 ">{dictionary.header2.header}</h2>
  
      
     <div className="flex items-center justify-center text-white">
       
    </div>
 
      
    </div>

    <div className="flex items-center justify-center text-white sm:m-10 text-center">
        <p className="md:text-[28px] p-[80px] max-w-7xl text-2xl ">{dictionary.header2.testimonials}</p>
    </div>
    <div className="flex items-center justify-center text-white">
            <Image className="text-white "src = {stars} alt="/" width="200" height="50" priority={true} />
    </div>

    <div className="flex flex-col py-12">
        <button className="flex mx-auto text-white bg-logoBlue  border-0 py-2 px-8 focus:outline-none hover:bg-gray rounded text-lg">{dictionary.header2.btn}</button>
      
    
    </div>
    
        


   
</section>
    </div>
  )
}

export default HeaderTwo