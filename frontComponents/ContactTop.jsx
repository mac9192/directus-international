import React from 'react'

const ContactTop = () => {
  return (
    <section class="text-white body-font bg-logoBlue">
  <div class=" px-5   mx-auto flex flex-wrap py-3  ">
    <div class="lg:w-2/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 px-12">
      <h2 class="title-font font-medium text-3xl text-gray-900 md:text-[32px]">Contact Us Today</h2>
      <p class="leading-relaxed mt-2 md:text-[22px]">If you are facing immigration challenges or grappling with the aftermath of a personal injury?</p>
      <br/>
      <p class="leading-relaxed md:text-[22px]">Call us today.</p>
    </div> 

    
    
    <div class="lg:w-3/6 md:w-1/2 bg-gray-100  p-0 flex flex-col md:ml-auto w-full mt-10 pb-5 md:mt-0 bg-gray">
    <div className="flex flex-row w-full gap-1 pb-5  pb-5">
            <p className="text-white bg-black -mt-[50px] w-1/2">IMMIGRATION</p>
            <p className="text-white bg-black -mt-[10px] w-1/2">PERSONAL INJURY</p>
    </div>

 
      <div class="relative mb-4 flex flex-row gap-2 ">
        
        <input type="text" id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700   px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        <input type="text" id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700   px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        <input type="text" id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700   px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4 ">
    <div className="flex flex-row gap-3">
        <input type="email" id="email" name="email" class="w-full  md:w-1/3 xbg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700   px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        <input type="email" id="email" name="email" class="w-full  md:w-2/3 xbg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700   px-3 leading-8 transition-colors duration-200 ease-in-out"/>
    </div>
      
      </div>
      <button class="text-white bg-red-500 border-0 py-2 px-8  md:w-1/6 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button>
 
    </div>
  </div>
</section>
  )
}

export default ContactTop
