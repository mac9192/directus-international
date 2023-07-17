import { notFound } from "next/navigation"
import React from 'react'
import SocialLink from "../../../../blog-components/elements/socialLink"
import PostBody from "../../../../blog-components/post/postBody"
import PostHero from "../../../../blog-components/post/postHero"
import { DUMMY_CATEGORIES, DUMMY_POST } from "../../../../DUMMY_DATA"
import CTACard from "../../../../blog-components/elements/CTACard"
import directus from "../../../../lib/directus"
import { getDictionary } from "../../../../lib/getDictionary"
import { cache } from  "react"
import siteConfig from "../../../../constants/site"
import Head from 'next/head'



export const getPostData = cache(async (postSlug: string, locale:string)=> {
  try {
    const post = await directus.items("post").readByQuery({
      filter: {
        slug: {
          _eq: postSlug
        }
      },
      fields: ["*","catgeory.id","category.title","author.id","author.first_name","author.last_name","translations.*", "category.translations.*"]
    });

    const postData = post?.data?.[0]

    if(locale === 'en'){
      return postData;
    }else{
      const localisedPostData = {
        ...postData,
        title: postData?.translations?.[0]?.title,
        description: postData?.translations?.[0]?.description,
        body: postData?.translations?.[0]?.body,
        category: {
          ...postData?.category,
          title: postData?.category?.translations?.[0]?.title
        }

      }
      return localisedPostData;
    }
    

  } catch (error) {
    
  }
}
)

//Generate Metadata Function

export const generateMetadata = async ({
  params: {slug, lang},
}: {
  params: {
    slug: string,
    lang: string,
  }
}) =>{
  // Get post Data from Directus
  const post = await getPostData(slug, lang);

  return {
    title: post?.title,
    description: post?.description,
    openGraph: {
      title: post?.title,
      description: post?.description,
      url:`${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/post/${slug}`,
      siteName: post?.title,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/post/${slug}/opengraph-image.png`,
          width: 1200,
          height: 628,
        },
  
      ],
      locale: lang,
      type: 'website',
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/post/${slug}`,
      languages: {
         'en-US': `${process.env.NEXT_PUBLIC_SITE_URL}/en/post/${slug}`,
        'es-ES': `${process.env.NEXT_PUBLIC_SITE_URL}/es/post/${slug}`,
      }
    }
  }

}

 /*

Route (app)                                    Size     First Load JS
┌ ○ /                                          0 B                0 B
├ ○ /blog                                      188 B          88.2 kB
├ ● /blog/[category]                           189 B          88.2 kB
├   ├ /blog/cities
├   └ /blog/experiences
├ ● /blog/post/[slug]                          137 B          77.7 kB
├   ├ /blog/post/a-lovely-green-city-new-york
├   ├ /blog/post/a-lovely-green-city-Florida
├   ├ /blog/post/a-lovely-green-city-Colorado
├   └ [+3 more paths

 */

 /* return DUMMY_POST.map((post) => {
      return {
          slug: post.slug //We get slug param bc folder is [slug]
      }
  })*/

  //Pre-populates slugs at build time for SSR (helps SEO)
  
  export const generateStaticParams = async () => {
    /* return DUMMY_POSTS.map((post) => {
      return {
        slug: post.slug,
      };
    }); */
    try {
      const posts = await directus.items("post").readByQuery({
        filter: {
          status: {
            _eq: "published",
          },
        },
        fields: ["slug"],
      });
  
      const params = posts?.data?.map((post:any) => {
        return {
          slug: post.slug as string,
          lang: "en",
        };
      });
  
      const localisedParams = posts?.data?.map((post:any) => {
        return {
          slug: post.slug as string,
          lang: "es",
        };
      });
  
      // Concat Localised and Regular Params
      const allParams = params?.concat(localisedParams ?? []);
  
      return allParams || [];
    } catch (error) {
      console.log(error);
      throw new Error("Error fetching posts");
    }
  };
    

//We get slug param bc folder is [slug]
const page = async ({params}:{params:{slug:string; lang:string}}) => {

  //const post = DUMMY_POST.find((post) => post.slug === params.slug)


  // Structured data for Google


  const locale = params.lang;
  const postSlug = params.slug

  const post = await getPostData(postSlug, locale)


  const jsonLd = {
      "@context": "https://schema.org", 
      "@type": "Article",
      "headline": post.title,
      "image": `${process.env.NEXT_PUBLIC_SITE_URL}/${locale}/post/${postSlug}/opengraph-image.png`,
      "author": post.author.first_name + " " + post.author.last_name, 
      "genre": post.category.title,
      "publisher": siteConfig.siteName,
      "url": `${process.env.NEXT_PUBLIC_SITE_URL}/post/${postSlug}`,
      "datePublished": new Date(post.date_created).toISOString,
      "dateCreated": new Date(post.date_created).toISOString,
      "dateModified": new Date(post.date_updated).toISOString,
      "description": post.description,
      "articleBody": post.body,
}
  

  if (!post){  //If no post, show 404 Not Founf Page, Remember bc posts can be deleted
    notFound()
  }
  
  const dictionary = await getDictionary(locale)

  return (
  <div className="bg-slate-700 pt-10 ">


        {/* Add JSON-LD to your page Open Graph Social Media shareable article metadata */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    
      <div className="container mx-auto text-white text-left space-y-10">
        {/*Post Hero */}
      <PostHero locale={locale} post={post} />
         {/*Post Body and Social Share */}
      <div className="flex flex-col md:flex-row gap-10 mt-10">
        <div className="relative">
           <div className="sticky flex md:flex-col items-center gap-5 top-20">
             <div className="font-medium md:hidden">Share this content: </div>
             <SocialLink
          isShareURL={true}
          platform="facebook"
          link={`https://www.facebook.com/sharer/sharer.php?u=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
        />
             <SocialLink
          isShareURL={true}
          platform="twitter"
          link={`https://twitter.com/intent/tweet?url=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
        />
             <SocialLink
          isShareURL={true}
          platform="linkedin"
          link={`https://www.linkedin.com/shareArticle?mini=true&url=${`${process.env.NEXT_PUBLIC_SITE_URL}/post/${post.slug}`}`}
        />
            
           </div>
        </div>
      <PostBody body={post.body} />
     
     
      </div>
      {/* CTA CARD */}
      
      <CTACard dictionary={dictionary}/>
    
    
    </div> 
    </div>
  

  )
}

export default page
