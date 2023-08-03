import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import { getDictionary } from '../lib/getDictionary'
import LangSwithcer from '../blog-components/navigation/langSwithcer'
import logo from '../public/assets/logo.svg'
const navigation = async ({locale}: {locale:string}) => {

  const dictionary = await getDictionary(locale)


  return (
    <div className=" mx-auto-100 sticky top-0 z-[999] left-0 right-0   bg-white  bg-opacity-75 backdrop-blur-md">
      <div className=" container mx-auto flex items-center justify-between py-3">
          <Link className="text-lg font-bold text-white" href="/">
           <Image src = {logo} alt="/" width="250" height="50" priority={true} /> 
            
          </Link>
          <nav>
              <ul className="flex items-center gap-4 text-neutral-600 text-black">
                
              <li>
                      <Link href={`/`}>PERSONAL INJURY</Link>
                  </li>
                <li>
                      <Link href={`/`}>IMMIGRATION LAW</Link>
                  </li>
                  <li>
                      <Link href={`/`}>ABOUT US</Link>
                  </li>
                  <li>
                      <Link href={`/${locale}/blog`}>BLOG</Link>
                  </li>
                  <li>
                      <Link href={`/`}>CONTACT</Link>
                  </li>
              </ul>
          </nav>
          <nav>
              <ul className="flex items-center gap-4 text-neutral-600 text-white">
                
                <li>
                  <LangSwithcer locale={locale} />
                </li>
                <li>
                <button className="flex  mx-auto text-white bg-logoBlue border-0 py-2 px-8 focus:outline-none hover:bg-gray rounded text-lg">Schedule Consultation</button>
                </li>
            {/*   <li>
                      <Link href={`/${locale}`}>Home</Link>
                  </li>*/}
               {/*  <li>
                      <Link href={`/${locale}/blog`}>Blog</Link>
                  </li>*/}
                {/*  <li>
                      <Link href={`/${locale}/cities`}>{dictionary.navigation.links.cities}</Link>
                  </li>
                  <li>
                      <Link href={`/${locale}/experiences`}>{dictionary.navigation.links.experience}</Link>
                </li> */}
              </ul>
          </nav>
     </div>
    </div>
  )
}


export default navigation
