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
    <div className="sm:flex-col grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 lg:grid-flow-col-2 sm:grid-flow-col-1 lg:auto-cols-fr">
        {posts.map((post) => (
         <PostCard locale={locale} layout={layout} post={post} key={post.id} />
        ))}
    </div>
  ) 
}

export default postList
  