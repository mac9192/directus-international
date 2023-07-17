import React from 'react'
import Link from "next/link"
import { Facebook, Github, Instagram, Linkedin, Twitter, Youtube} from "lucide-react"

const socialLink = ({ platform, link, isShareURL=false} : {platform: string; link: string, isShareURL?:boolean}) => {
  const getIcon = (platform: string) => {
    switch(platform){
      case "facebook":
        return <Facebook />;
      case "twitter":
        return <Twitter />;
      case "instagram":
        return <Instagram />;
      case "youtube":
        return <Youtube />;
      case "linkedin":
        return <Linkedin />;
      case "github":
          return <Github />;
        
      
    }
  }
  return (
    <div>
      <Link href={link}>
        <div className={`${isShareURL ? "py-2 px-3 bg-neutral-200 rounded-md text-neutral-600 hover:bg-neutral-800 hover:text-neutral-100 duration-100 ease-in-out transition-colors": ""}`}>
           {getIcon(platform)}
        </div>
      </Link>
    </div>
  )
}

export default socialLink
