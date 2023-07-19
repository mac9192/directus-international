import React from 'react'
import {Post} from '../../DUMMY_DATA'
import Link from "next/link"
import Image from "next/image"
import PostContent from "../post/postContent"

interface PostProps {
  post:Post;
  layout?: "vertical" | "horizontal"
  reverse?:boolean
  locale: string;
}
//Brings in Post from page.tsx.
//Vertical (small block) is default
const postCard = ({post, layout = "vertical", reverse = false, locale }:PostProps) => {

  

  return (

    <Link 
    className={`  ${
      layout === 'vertical'
      ? "grid grid-cols-1 md:grid-cols-2 gap-10 items-center  " 
      : "space-y-10 "} `}
    href={`/${locale}/post/${post.slug}`}
    >
     <Image //FIX MD BREAKPOINT
        className={` rounded-md w-full object-cover object-center lg:max-h-[300px] sm:max-h-[230px] ${
            reverse ? "md:order-last":""
        }`} 
        alt={post.title} 
        src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${post.image}?key=optimized`} 
        width={1000} 
        height={1000} />
  
     <PostContent locale={locale} post={post}/>
  </Link>
  

  )
}

export default postCard;
