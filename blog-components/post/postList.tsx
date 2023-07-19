import React from 'react'
import { Post } from "../../DUMMY_DATA"
import PostContent from "../post/postContent"
import PostCard from "../post/postCard"

interface PostListProps {
    posts: Post[];
    layout?: "vertical" | "horizontal";
    locale:string
}

const postList = ({posts, layout = "horizontal", locale} : PostListProps) => {
  return (
    <div className="flex flex-wrap grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-flow-col-2 lg:auto-cols-fr">
        {posts.map((post) => (
         <PostCard locale={locale} layout={layout} post={post} key={post.id} />
        ))}
    </div>
  ) 
}

export default postList
  