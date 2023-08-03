import React from 'react'
import Image from 'next/image'
import grouppic from '../public/assets/image-group.webp'
 

const CTA = ({dictionary}:{dictionary:any}) => {
  return (
    <div className="w-full">
      <h2 className="mx-auto text-center md:p-7 md:m-5 text-[36px] text-logoBlue   p-5">{dictionary.cta.header}</h2>
      <div className="flex items-center justify-center text-white">
            
    </div>
           <Image className="w-full "src = {grouppic} alt="/" width="2500" height="50" priority={true} />
    </div>
  )
}

export default CTA

 