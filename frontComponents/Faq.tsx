import React from 'react'
import Image from 'next/image'
import gerardo from '../public/assets/profile-gerardo.png'

const Faq = ({dictionary}:{dictionary:any}) => {
  return (
    <div>
        <section className="text-black-600 body-font   mb-5   ">
        <div className="md:p-10 md:text-[36px] sm:text-[25px] sm:py-8  mx-auto text-center max-w-screen-2xl text-logoBlue">
               {dictionary.faq.header}
              </div>
  <div className=" lg:container md:mx-auto px-5   flex flex-wrap">
    
    
  <div className="flex md:flex-row flex-col mx-auto sm:mx-auto md:text-left text-center">
          
         
        </div>
    <div className="flex  flex-col lg:flex-row w-full">
      <div className="lg:w-3/5 md:w-full md:pr-10  ">

<div id="accordion-collapse" data-accordion="open">
  <h2 id="accordion-collapse-heading-10">
    <button type="button" className="flex mx-auto items-center bg-logoBlue justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200  focus:ring-4 focus:ring-gray-200  " data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-logoBlue inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
      <span className="text-2xl text-white"> {dictionary.faq.firm}</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-11" className="open" aria-labelledby="accordion-collapse-heading-1">
    <div className="p-5 border border-b-0 border-gray-200  ">
      <p className="mb-2 text-gray-500  "> 
      {dictionary.faq.firmDesc}
    </p>
       
    </div>
  </div>
  <h2 id="accordion-collapse-heading-2">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left  text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200  " data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-logoBlue inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
      <span className="text-2xl text-logoBlue">Cheves Briceno</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  
  <h2 id="accordion-collapse-heading-4">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200  focus:ring-4 focus:ring-gray-200  " data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-logoBlue inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
      <span className="text-2xl text-logoBlue  "> {dictionary.faq.different}</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-5">
    <div className="p-5 border border-t-0 border-gray-200  ">
      
      <ul className="pl-5 text-gray-500 list-disc  ">
        <li><a href="https://flowbite.com/pro/" className="text-blue-600   hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600   hover:underline">Tailwind UI</a></li>
      </ul>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-6">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200     " data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-logoBlue inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div> 
      <span className="text-2xl text-logoBlue  "> {dictionary.faq.youFirst}</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
 


</div>

         
     
   
        
      </div>
      <div className="flex flex-col">
                <Image className="rounded mx-auto py-3" src = {gerardo} alt="/" width="600" height="50" priority={true} />
                <p className="text-center text-[24px] p-3">Attorney Gerardo Briceno</p>
          </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Faq

/*

  <div class="flex md:flex-row flex-col sm:mx-auto md:text-left text-center">
            <div class="w-3/4 ...">
              <div className="md:p-10 md:text-[24px] md:w-2/3     flex-col-reverse ">
              Cheves Briceno is not a typical law firm. We break out of the conventional mold by providing service that is aggressive in the courtroom but compassionate with our clients.
              </div>
            </div>
            <div class="w-1/4 ...">w-1/4</div>
        </div>


*/