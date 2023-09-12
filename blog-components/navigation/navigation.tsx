import React from 'react'
import Link from "next/link"
import { getDictionary } from '../../lib/getDictionary'
import LangSwithcer from './langSwithcer'

const navigation = async ({locale}: {locale:string}) => {

  const dictionary = await getDictionary(locale)


  return (
    <div className=" mx-auto-100 sticky top-0 z-[999] left-0 right-0 bg-black border-b bg-opacity-60 backdrop-blur-md">
      <div className=" container mx-auto flex items-center justify-between py-5">
          <Link className="text-lg font-bold text-white" href="/">
              Explorer
          </Link>
          <nav>
              <ul className="flex items-center gap-4 text-neutral-600 text-white">
                <li>
                  <LangSwithcer locale={locale} />
                </li>
               <li>
                      <Link href={`/${locale}`}>Home</Link>
                  </li>
                <li className="line-through">
                      <Link href={`/${locale}/blog`}>Blog</Link>
                  </li>
                  <li>
                      <Link href={`/${locale}/cities`}>{dictionary.navigation.links.cities}</Link>
                  </li>
                  <li>
                      <Link href={`/${locale}/experiences`}>{dictionary.navigation.links.experience}</Link>
                  </li>
              </ul>
          </nav>
     </div>
    </div>
  )
}


export default navigation
