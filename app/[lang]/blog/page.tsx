import React from 'react'
import PostCard from "../../../blog-components/post/postCard"
import PostList from "../../../blog-components/post/postList"
import CTACard from "../../../blog-components/elements/CTACard"
import { DUMMY_POST } from "../../../DUMMY_DATA"
import { notFound } from "next/navigation"
import directus from "../../../lib/directus"
import { getDictionary } from '../../../lib/getDictionary'

import {i18n} from "../../../i18n.config"
 
export const generateStaticParams = async () =>{
  return i18n.locales.map((lang) =>{
    return {
      lang
    }
  })
}



export default async function page ({
  params,
}: {
  params: {
    lang: string;
    };
}) { 
  //console.log("heelo",params)

 const locale = params.lang
  
  const getAllPosts = async() => {
    try {
      const posts = await directus.items("post").readByQuery({
        fields: [
          "*", //Will get everything from our table
          "author.id",
          "author.first.name",// (.) period means: go up a level on tables to the relational tables
          "author.last.name",
          "category.id",
          "category.title",
          "translations.*",
          "category.translations.*"
        ],
      }) ;
      

    if(locale ==="en"){
        return posts.data;
    }else{
      //Replace original 'en' with 'es'
      const localisedPosts = posts.data?.map((post:any)=>{
        return {
          ...post,
          title: post.translations[0].title,
          description: post.translations[0].description,
          body: post.translations[0].body,
          category: {
            ...post.category,
            title:post.category.translations[0].title
          }
        }
      })
      return localisedPosts
    }
    

    } catch (error) {
      console.log(error);
    // throw new Error("Error fetching posts")
    }
  };

  const posts = await getAllPosts();

//console.log("new",posts)

 if (!posts){
   notFound(); //If no post, show 404 Not Found Page, Remember bc posts can be deleted
}
 /*To pass it to CTA CARD, for client approach, bc server actions is ina alpha*/
const dictionary = await getDictionary(locale)

  return (

    <div className="bg-slate-500 ">

      <div className="container mx-auto space-y-10 py-8 ">
        <PostCard locale={locale} post={ posts[0]} />
        <PostList locale={locale} posts={ posts.filter((_post:any,index:any) => index > 0 && index < 3)} />
        {/*Reverse direction of cards */}
      
        <CTACard  dictionary={dictionary} />
        <PostCard  locale={locale} reverse post={ posts[3]} />
        <PostList  locale={locale}posts={ posts.filter((_post:any,index:any) => index > 3 && index < 999)} />
      </div>
    </div>
 
  )
}

