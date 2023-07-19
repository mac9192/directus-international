import React from 'react'
import { Post } from '../../DUMMY_DATA'
import PostContent from '../post/postContent'
import Image from "next/image"

interface PostHeroProps {
    post: Post;
    locale: string;
}


const postHero = ({post,locale}: PostHeroProps) => {
  return (
    <div>
 
     <PostContent locale={locale} isPostPage={true} post={post} /> {/* isPostPage then it will have Big H1 Title, etc. */}
     <Image priority className="rounded-md w-full object-cover object-center h-[300px] md:h-[500px] mt-6"  src={`${process.env.NEXT_PUBLIC_ASSETS_URL}${post.image}?key=optimized`} alt={post.title} width={1280} height={500} />
    </div>
  )
}

export default postHero
