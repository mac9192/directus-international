"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { navVariants } from '../utils/motion'
import LangSwithcer from '../blog-components/navigation/langSwithcer'
import { getDictionary } from '../lib/getDictionary'
import Link from "next/link"
import Dropdown from './Dropdown'
import logo from '../public/assets/logo.svg'



interface navBar {
    locale: string,
    dictionary: any
}


const Navigation = ({locale, dictionary}:navBar ) => {


    //Mobile -- Lang(To Do)

 
const [toggle, setToggle] = useState(false)

    return (
<motion.nav
 className="fixed top-0 w-full sticky top-0 z-[999] "
     variants={navVariants}
     initial="hidden"
     whileInView="show"
     viewport={{ once: true, amount: 0.2 }}
     > {/* 
     
      <div className=" md:block hidden ">

         <div className=" relative isolate flex   items-center gap-x-6 overflow-hidden bg-gray-50 py-2.5 px-6 sm:px-3.5 sm:before:flex-1  bg-gradient-to-r from-gray-700 via-gray-900 to-black">
          
           
            <div className="container   flex justify-between flex-wrap items-center  gap-y-2 gap-x-4">
                <p className="text-sm leading-6 text-gray-900">
                <strong className="font-semibold bg-rose-500 text-white  rounded-full  p-2">Call us at (770)-864-4063</strong> 
                </p>
              
                <div className="flex justify-center space-x-2">
  
  
                
                <Image className="w-9 h-9 object-contain" src= "/assets/icon-instagram.svg" alt="/" width="70" height="50" />
                <Image className="w-9 h-9 object-contain" src= "/assets/icon-facebook.svg" alt="/" width="70" height="50" />
                <Image className="w-9 h-9 object-contain" src= "/assets/icon-twitter.svg" alt="/" width="70" height="50" />
                <Image className="w-9 h-9 object-contain" src= "/assets/icon-youtube.svg" alt="/" width="70" height="50" />
            

 
                </div>
           
              
            </div>
            
            <div className="flex flex-1 justify-between">
                
            </div>
        </div>


         </div>
     
     
     */}
 
       
<nav className="  relative mx-auto p-5 bg-white sticky">

        <div className="flex items-center justify-between  container  mx-auto sticky   ">
        <Link className="text-lg font-bold text-white" href="/">
           <Image src = {logo} alt="/" width="250" height="50" priority={true} /> 
            
          </Link>
            <div className="hidden md:flex flex space-x-6 text-md text-black ">
            <ul className=" hidden md:flex flex items-center gap-4 text-neutral-600 text-black">
                
                <li>
                     <Link href={`/`}>{dictionary.menu.personalInjury}</Link>
                    </li>
                  <li>
                        <Link href={`/`}>{dictionary.menu.immigrationLaw}</Link>
                    </li>
                    <li>
                        <Link href={`/`}>{dictionary.menu.aboutUs}</Link>
                    </li>
                    <li>
                        <Link href={`/${locale}/blog`}>BLOG</Link>
                    </li>
                    <li>
                        <Link href={`/`}>{dictionary.menu.contact}</Link>
                    </li>
                    <li>
                  <LangSwithcer locale={locale} />
                </li>
                </ul>
              
            </div>
            {/*   <a className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block">
                    Get Started
            </a> */}
{/* Regular button CTA - link to another page - medium and up*/}   
            <button type="button" className=" hidden md:flex  rounded text-white  bg-logoBlue     font-medium     px-5 py-2.5 text-center mr-2 mb-2">
            {dictionary.frontHeader.button1}
            </button>
       
 {/*Hamburger Icon - comes up when sm screens*/}
                 <button id="menu-btn"   aria-label="search" className={`${!toggle ? '' :'open' } block hamburger md:hidden focus:outline-none`} 
                    onClick={() =>setToggle(!toggle)}>
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
                  
            </button>
        </div>
        {/*Mobile Menu*/}
        <div>{!toggle ? "": <Dropdown dictionary={dictionary}locale={locale} />}</div>
         
        </nav>
</motion.nav>

    )


}


export default Navigation;
