import React from 'react'
import Navbar from '../../frontComponents/Navbar'
import Header from '../../frontComponents/Header'
import Badges from '../../frontComponents/Badges'
import About from '../../frontComponents/About'
import Services from '../../frontComponents/Services'
import CTA from '../../frontComponents/CTA'
import Team from '../../frontComponents/Team'
import Testimonials from '../../frontComponents/Testimonials'
import Faq from '../../frontComponents/Faq'
import Faq2 from '../../frontComponents/Faq2'
import Footer from '../../frontComponents/Footer'
import ContactTop from '../../frontComponents/ContactTop'
import ContactTop2 from '../../frontComponents/ContactTop2'
import Header2 from '../../frontComponents/HeaderTwo'
import Header3 from '../../frontComponents/HeaderThree'
import Events from '../../frontComponents/Events'
import ContactInfo from '../../frontComponents/ContactInfo'
import H2 from '../../frontComponents/Header2'
import Mobile from '../../frontComponents/Navigation'


import {getDictionary} from '../../lib/getDictionary'



const page = async ({
  params,
}: {
  params: {
    lang: string;
    };
}) => {
  const locale = params.lang
  console.log(locale)
  const dictionary = await getDictionary(locale)
  return (
    <div>
    
    <H2 dictionary={dictionary}/>
  
    <ContactTop2 dictionary={dictionary} />
    <Badges dictionary={dictionary} />
    <Testimonials  dictionary={dictionary}/>
     
  
<Services dictionary={dictionary}/> 
    
    <CTA dictionary={dictionary}/>
     
    <Faq dictionary={dictionary}/>
    <Header3 dictionary={dictionary}/>
    <Faq2 dictionary={dictionary}/>
    <Events dictionary={dictionary} />
    <ContactInfo dictionary={dictionary} />
 
    </div>
  )
}

export default page
