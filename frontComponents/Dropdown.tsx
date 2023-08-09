import React from 'react'
import Link from "next/link"
import LangSwithcer from '../blog-components/navigation/langSwithcer'

const Dropdown = ({locale}: {locale:string}) => {
  return (
    <div>
        <div className="md:hidden">
     
     <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 ">
        
         <div id="mega-menu-full-image-dropdown" className="mt-1 bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600">
             <div className="grid max-w-screen-xl px-4 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400 md:grid-cols-3 md:px-6">
               
                 <ul className="mb-4 space-y-4 md:mb-0">
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
                        <Link href={`/`}>CONTACT</Link>
                    </li>
                    <li>
                      <Link href={`/${locale}/blog`}>BLOG</Link>
                  </li>
                  <li>
                    <LangSwithcer locale={locale} />
                    </li>
                    <li>
                 
                </li>
                 </ul>
                 <a href="#" className="p-8 text-left bg-local bg-logoBlue bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken" >
                     <p className="max-w-xl mb-5   leading-tight   text-white">Get started with a consultation today!</p>
                     <button type="button" className="inline-flex items-center px-2.5 py-1.5  font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700">
                         Get started
                         <svg className="w-4 h-4 ml-1 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                     </button>
                 </a>
             </div>
         </div>
     </nav>
     
         </div>
    </div>
  )
}

export default Dropdown
