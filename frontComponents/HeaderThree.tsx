import React from 'react'
import Image from 'next/image'
import stars from '../public/assets/img-atlsky.webp'
 


const HeaderTwo = ({dictionary}:{dictionary:any}) => {
  return (
    <div>
      <div className="relative  ">
    <Image
      layout="fill"
      className="object-center object-cover pointer-events-none"
      src={stars}
      alt=""
      priority
    />
   <div className="relative z-1">
   <section className="    py-12">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
       
        <h2 className="mb-4 text-4xl w-full items-center mx-auto  tracking-tight leading-none text-white md:text-5xl lg:text-6xl  m-10 ">{dictionary.header3.headerTop}</h2>
  <h2 className="mb-4 text-4xl   tracking-tight leading-none md:text-5xl lg:text-6xl  m-10 text-logoBlue">{dictionary.header3.headerBtm}</h2>
  
      
     <div className="flex items-center justify-center text-white">
               
    </div>
 
      
    </div>

    <div className="flex items-center justify-center text-white sm:m-10 text-center">
        <p className="md:text-[28px] md:p-[80px] max-w-7xl text-2xl ">{dictionary.header3.description}</p>
    </div>
 

    <div className="flex flex-col py-12">
        <button className="flex mx-auto text-white bg-logoBlue  border-0 py-2 px-8 focus:outline-none hover:bg-gray rounded text-lg">{dictionary.header3.btn}</button>
      
    
    </div>
    
        


   
</section>
   </div>
</div>
    </div>
  )
}

export default HeaderTwo


/*

    <section className="bg-white   bg-atlpic py-12">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
       
        <h2 className="mb-4 text-4xl   tracking-tight leading-none text-white md:text-5xl lg:text-6xl  m-10 ">{dictionary.header3.headerTop}</h2>
  <h2 className="mb-4 text-4xl   tracking-tight leading-none md:text-5xl lg:text-6xl  m-10 text-logoBlue">{dictionary.header3.headerBtm}</h2>
  
      
     <div className="flex items-center justify-center text-white">
               
    </div>
 
      
    </div>

    <div className="flex items-center justify-center text-white sm:m-10 text-center">
        <p className="md:text-[28px] p-[80px] max-w-7xl text-2xl ">{dictionary.header3.description}</p>
    </div>
 

    <div className="flex flex-col py-12">
        <button className="flex mx-auto text-white bg-logoBlue  border-0 py-2 px-8 focus:outline-none hover:bg-gray rounded text-lg">{dictionary.header3.btn}</button>
      
    
    </div>
    
        


   
</section>


*/