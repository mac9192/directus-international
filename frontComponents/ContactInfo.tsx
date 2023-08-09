import React from 'react'
import Image from 'next/image'
import map from '../public/assets/img-map.png'

const ContactInfo = ({dictionary}:{dictionary:any}) => {
  return (
    <div>
      <div className="  py-10 mx-auto md:px-6 bg-logoBlue">
      <div className="md:p-12 md:mt-  text-[36px] mb-10  mx-auto text-center max-w-screen-2xl text-white  ">
          {dictionary.contacts.header}
                  </div>
 
  <section className="mb-33 rounded-lg">
    <div className="relative h-[300px] overflow-hidden rounded-lg  bg-[50%] bg-no-repeat bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')]"></div>
    <div className=" md:container md:mx-auto items-center mx-auto px-6 md:px-12">
      <div
        className="block rounded-lg bg-[hsla(0,0%,100%,0.8)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]   dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
            <form>
              <div className="relative mb-6" data-te-input-wrapper-init>
              <input  placeholder="First Name" type="text" id="first-name" name="first-name" className="text-[18px] w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-black   px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
              <input placeholder="Last Name" type="text" id="last-name" name="last-name" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-black   px-3 leading-8 transition-colors duration-200 ease-in-out"/>
               
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
              <input placeholder="Phone Number" type="text" id="number" name="number" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-black  px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
              <input placeholder="Email" type="text" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-black   px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <textarea
                  className="peer block min-h-[auto] w-full rounded border-0   py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none   "
                  id="exampleFormControlTextarea1"   placeholder=""></textarea>
                <label  
                  className="pointer-events-none absolute top-0 text-[18px] left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none ">Tell us about your case</label>
              </div>
              <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
             
               
              </div>
              <button type="button" data-te-ripple-init data-te-ripple-color="light"
                className="mb-6 text-[18px] inline-block w-full rounded text-[18px]   px-6 pt-2.5 pb-2  font-medium uppercase hover:bg-logoBlue   shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]       lg:mb-0">
                {dictionary.contactTop2.submitBtn}
              </button>
            </form>
          </div>
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold text-logoBlue text-[24px]">
                    {dictionary.contacts.office}
                    </p>
                  
                    <p className="text-black text-[20px]  ">
                     (855) 274-2366
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:w-6/12">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                  <p className="mb-2 font-bold text-logoBlue text-[24px]">
                    {dictionary.contacts.location}
                    </p>
                
                    <p className="text-black text-[20px] ">
                    3295 River Exchange Dr. Suite 420
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:mb-12 lg:w-full lg:px-6 xl:w-6/12">
                <div className="align-start flex">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                        stroke="currentColor" className="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6 grow">
                  <p className="mb-2 font-bold text-logoBlue text-[24px]">
                           {dictionary.contacts.email}
                    </p>
                    <p className=" text-black text-black text-[20px]   ">
                      info@ChevesBriceno.com
                    </p>
                   
                  </div>
                </div>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:w-full lg:px-6 xl:mb-12 xl:w-6/12 mx-auto items-center">
  <button className="mt-12 sm:text-center xl:mt-5 p-5 text-white bg-logoBlue border-0 py-2 px-8 focus:outline-none hover:bg-gray rounded text-lg mx-auto items-center text-[20px] "> {dictionary.frontHeader.button1}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
 
</div>
 
    </div>
  )
}

export default  ContactInfo
 

/*
   <section class="text-gray-600 body-font relative bg-blueLogo">
  
  <div class="container  px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      
    <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10  flex items-end justify-start relative">
    <Image className="items-center w-full h-full rounded absolute"src = {map} alt="/" width="700" height="50" priority={true} />
       
      <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md-10 z-10">
        <div class="lg:w-1/2 px-6 z-10">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
          <p class="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
        </div>
        <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
          <a class="text-indigo-500 leading-relaxed">example@email.com</a>
          <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
          <p class="leading-relaxed">123-456-7890</p>
        </div>
      </div>
    </div>
    <section class="bg-white dark:bg-gray-900 rounded">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md rounded">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900  ">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>
  </div>
</section>



*/