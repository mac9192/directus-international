import React from 'react'
import Image from 'next/image'
import immigration from '../public/assets/img-immigrationnews.webp'
import law from '../public/assets/img-law.webp'
import passport from '../public/assets/img-passport.webp'
import lady from '../public/assets/img-lady.webp'
import justice from '../public/assets/img-justice.png'
import museum from '../public/assets/img-immigration2.webp'

const Events = ({dictionary}:{dictionary:any}) => {
  return (
    <div> 
        <div className="md:p-12 md:mt- text-[36px] sm:p-10 mx-auto text-center max-w-screen-2xl text-logoBlue bg-graydark ">
           {dictionary.events.header}
                  </div>
      <section className="text-black body-font  items-center">
     
  <div className="   px-5  p-10 mx-auto flex flex-wrap  bg-graydark  ">
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-15 mx-auto items">
      <h2 className="text-center text-[32px] py-5 text-logoBlue"> {dictionary.events.events}</h2>
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full   text-indigo-500 flex-shrink-0">
        <Image className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center   bg-indigo-100 text-indigo-500 flex-shrink-0 "src = {passport} alt="/" width="500" height="50" priority={true} />
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-xl title-font font-medium mb-2  ">  {dictionary.events.event1}</h2>
     
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
   
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
  
        
        <p className="leading-relaxed text-base  text-black text-xl">{dictionary.events.event2}</p>
        
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
     
      </div>
      <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full   text-indigo-500 flex-shrink-0">
      
      <Image className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center   bg-indigo-100 text-indigo-500 flex-shrink-0 "src = {law} alt="/" width="500" height="50" priority={true} />
      </div>
    </div> 
    <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
      <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full   text-indigo-500 flex-shrink-0">
      
      <Image className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center   bg-indigo-100 text-indigo-500 flex-shrink-0 "src = {immigration} alt="/" width="500" height="50" priority={true} />
      </div>
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
       
        
        <p className="leading-relaxed text-base text-black text-xl">{dictionary.events.event3}</p>
        
      </div>
      
    </div>
     
  </div>
  
</section>

    </div>
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-15 mx-auto items">
      <h2 className="text-center text-[32px] py-5 text-logoBlue"> {dictionary.events.posts}</h2>
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full   text-indigo-500 flex-shrink-0">
        <Image className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center   bg-indigo-100 text-indigo-500 flex-shrink-0 "src = {passport} alt="/" width="500" height="50" priority={true} />
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 className="text-gray-900 text-xl title-font font-medium mb-2  "> {dictionary.events.post1}</h2>
     
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
   
      </div>
    </div>
    <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
  
        
        <p className="leading-relaxed text-base  text-black text-xl"> {dictionary.events.post2}</p>
        
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
     
      </div>
      <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full   text-indigo-500 flex-shrink-0">
      
      <Image className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center   bg-indigo-100 text-indigo-500 flex-shrink-0 "src = {law} alt="/" width="500" height="50" priority={true} />
      </div>
    </div> 
    <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col">
      <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
      <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full   text-indigo-500 flex-shrink-0">
      
      <Image className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center   bg-indigo-100 text-indigo-500 flex-shrink-0 "src = {immigration} alt="/" width="500" height="50" priority={true} />
      </div>
      </div>
      <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
       
        
        <p className="leading-relaxed text-base text-black text-xl">{dictionary.events.post3}</p>
        
      </div>
      
    </div>
     
  </div>
  
</section>

    </div>
 
  </div>
  
</section>
    </div>
  )
}

export default Events
 