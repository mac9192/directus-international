import React from 'react'
import Image from 'next/image'
import crash from '../public/assets/img-crash.webp'
import immigration from '../public/assets/img-immigration2.webp'

const services = ({dictionary}:{dictionary:any}) => {
  return (
<div className="flex flex-col container mx-auto md:flex-row">
 
  <div className="w-full">

  <div className="flef flex-col  flex-wrap ">



 

        <div className="text-center py-10 text-[36px] text-logoBlue  ">
          {dictionary.services.header}
        </div>

      <div className="flex flex-col md:flex-row justify-center gap-x-20 items-stretch">

          <div>
            <Image className="items-center rounded"src = {crash} alt="/" width="700" height="50" priority={true} />
  <h2 className="p-5 mx-auto text-center text-[32px]">{dictionary.services.personalInjury}</h2>
            <p className="md:max-w-2xl py-5 text-[20px] mx-auto"> {dictionary.services.personalInjurydesc}</p>
          </div>
          
    
        <div className="flex flex-col max-h-[15px]">
        <div className="max-h-[30px]">
            <Image className="items-center rounded"src = {immigration} alt="/" width="678" height="40" priority={true} />
            <h2 className="p-5 mx-auto text-center text-[32px]">{dictionary.services.immigration}</h2>
            <p className="max-w-2xl py-5 text-[20px] mx-auto"> {dictionary.services.immigrationdesc}</p>
          </div>
        </div>

      </div>

      
        
 
                   
    </div>
      
  </div>
</div>
  )
}

export default services

/* 

  <div class="flef flex-col  ">
        <div className="text-center py-10 text-[36px] text-logoBlue font-semibold">
          OUR PRACTICE AREAS
        </div>
       <div className="flex flex-col md:flex-row gap-x-12 text-center mx-auto p-10 w-full align-middle	items-center">
          <div class=" flex w-full  justify-center items-center">
            <div className="flex flex-col items-center">
                <Image className="items-center "src = {crash} alt="/" width="500" height="50" priority={true} />
             <p className="max-w-lg py-5 text-[20px]">At the personal injury firm of Cheves Briceno, we provide aggressive legal advocacy for people in Georgia, Alabama, Florida, and Washington state who have suffered injuries due to someone else’s negligence. We will not hesitate to take on powerful insurance companies and other corporate interests if it means helping you recoup compensation for your damages.</p>
            </div>
           
          </div>      
          <div class="flex w-full  justify-center items-center ">
            <div className="flex flex-col">
              <Image className="items-center "src = {immigration} alt="/" width="473" height="50" priority={true} />
              <p className="max-w-lg py-5 text-[20px]">Our attorneys have handled the most complex cases. Specifically, family-based immigration is where we have the most experience. We can help you through all stages of the process. From getting your green card to establishing residency, we are here to answer all of your questions. We also help those who are facing deportation. Our firm understands the importance of being with family.</p>
            </div>
             
          </div>   

       </div>
                   
    </div>

*/


/*


        <div className="text-center py-10 text-[36px] text-logoBlue font-semibold">
          OUR PRACTICE AREAS
        </div>

      <div className="flex flex-col md:flex-row justify-center gap-x-20 items-stretch">

          <div>
            <Image className="items-center "src = {crash} alt="/" width="700" height="50" priority={true} />
            <h2 className="p-5 mx-auto text-center text-[32px]">Personal Injury</h2>
            <p className="md:max-w-2xl py-5 text-[20px] mx-auto">At the personal injury firm of Cheves Briceno, we provide aggressive legal advocacy for people in Georgia, Alabama, Florida, and Washington state who have suffered injuries due to someone else’s negligence. We will not hesitate to take on powerful insurance companies and other corporate interests if it means helping you recoup compensation for your damages.</p>
          </div>
          
    
        <div className="flex flex-col max-h-[15px]">
        <div className="max-h-[30px]">
            <Image className="items-center "src = {immigration} alt="/" width="680" height="40" priority={true} />
            <h2 className="p-5 mx-auto text-center text-[32px]">Immigration</h2>
            <p className="max-w-2xl py-5 text-[20px] mx-auto">Our attorneys have handled the most complex cases. Specifically, family-based immigration is where we have the most experience. We can help you through all stages of the process. From getting your green card to establishing residency, we are here to answer all of your questions. We also help those who are facing deportation. Our firm understands the importance of being with family.</p>
          </div>
        </div>

      </div>


*/

/*

<div class="md:w-1/5 sm:w-full  rounded">
    <h2 className="text-[36px] sm:p-5 md:text-left text-center md:p-10 text-black mx-auto rounded">Exceptional Service. Unwavering Representation.</h2>
    <p className="text-[24px] md:p-10  text-black  sm:max-w-5xl text-left sm:p-2 text-center md:text-left">Welcome to law firm of Cheves Briceno. Our experienced attorneys are committed to providing you with top-notch legal service and unwavering representation. With personalized attention, transparent communication, and tireless advocacy, we are here to fight for your rights and achieve the best possible outcomes for your case. Schedule a consultation today and experience the difference of exceptional service and representation</p>
  </div>
*/