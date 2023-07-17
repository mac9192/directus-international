import React from 'react'
import siteConfig from "../../constants/site"
import { getDictionary } from '../../lib/getDictionary'
import SocialLink from '../elements/socialLink'

const footer = async ({locale}: {locale:string}) => {

  const dictionary = await getDictionary(locale)

  return (
    <div className="border-t bg-slate-700 text-white">
        <div className="container mx-auto py-6 mt-10 " >
            <div>
                <h2 className="text-3xl font-bold">{siteConfig.siteName}</h2>
                <p className="max-w-md mt-2 text-lg text-neutral-700">
                {dictionary.footer.description}
                </p>
            </div>
            <div className="flex justify-between mt-6">
               
                <div>
                    <div className="font-medium flex items-center">#exploretheworld</div>
                    <div className="flex items-center gap-3 text-white">
                    <SocialLink platform="twitter" link={siteConfig.socialLinks.twitter}/>
                    <SocialLink platform="facebook" link={siteConfig.socialLinks.facebook}/>
                    <SocialLink platform="instagram" link={siteConfig.socialLinks.instagram}/>
                    <SocialLink platform="github" link={siteConfig.socialLinks.github}/>
                    <SocialLink platform="youtube" link={siteConfig.socialLinks.twitter}/>
                    <SocialLink platform="linkedin" link={siteConfig.socialLinks.linkedin}/>
                    </div>
                    
                </div>
                <div>
                    <div className="text-sm text-neutral-400">{dictionary.footer.currentlyAtText}</div>
                    <div className="px-3 py-2 bg-gray-400 rounded-md shadow-md">
                    <div className="w-2 h-2 rouned-full bg-emerald-400">
                            {siteConfig.currentlyAt}
                        </div>

                    </div>
                </div>

            </div>
            <div className="flex flex-wrap justify-between gap-4 mt-6">
                <div className="py-3 border-t text-white">
                    <div className="text-sm ">
                    {dictionary.footer.rightsText} {new Date().getFullYear()}
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default footer
