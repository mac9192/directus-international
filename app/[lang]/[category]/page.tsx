import { notFound } from 'next/navigation'
import React from 'react'
import PostList from "../../../blog-components/post/postList"
import { DUMMY_CATEGORIES, DUMMY_POST } from "../../../DUMMY_DATA"
import directus from '../../../lib/directus'
import { getDictionary } from '../../../lib/getDictionary'
import {Post} from '../../../types/collections'
import { cache } from 'react'
import { revalidatePath } from 'next/cache'


//Takes in "categories" params from Dummy Data as a slug --
//Need params bc it isnt asking for (post) like the the main page it is asking for post.category
//catergory.title == experiences, cities => also coordinates with slug

//Since we already know what we have for our categories like in JSON objects already, like in the other blog hygraph too, we generate static params for our dynamic routing on build time, advantage of Server Side Generation (experiences, cities)


export const getCategoryData = cache(
  async (categorySlug: string, locale: string) => {
    try {
      const category = await directus.items("category").readByQuery({
        filter: {
          slug: {
            _eq: categorySlug,
          },
        },
        fields: [
          "*",
          "translations.*",
          "posts.*",
          "posts.author.id",
          "posts.author.first_name",
          "posts.author.last_name",
          "posts.category.id",
          "posts.category.title",
          "posts.translations.*",
        ], 
      }, );

      if (locale === "en") {
        return category?.data?.[0];
      } else {
        const fetchedCategory = category?.data?.[0];
        const localisedCategory = {
          ...fetchedCategory,
          title: fetchedCategory.translations[0].title,
          description: fetchedCategory.translations[0].description,
          posts: fetchedCategory.posts.map((post: any) => {
            return {
              ...post,
              title: post.translations[0].title,
              description: post.translations[0].description,
              body: post.translations[0].body,
              category: {
                ...post.category,
                title: fetchedCategory.translations[0].title,
              },
            };
          }),
        };
        return localisedCategory;
      }
    } catch (error) {
      console.log(error);
      throw new Error("Error fetching category");
    }
  }
);

//Generate Metadata Function
export const generateMetadata = async ({
  params:{ category,lang},
}:{
  params:{
    category:string,
    lang:string
  };
}) => {
  //Get Data from Directus
  const categoryData = await getCategoryData(category, lang)
  console.log(categoryData)
  return {
    title: categoryData?.title,
    description: categoryData?.description,
    openGraph: {
      title: categoryData?.title,
      description: categoryData?.description,
      url:`${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/${category}`,
      siteName: categoryData?.title,
      /*images: [
        {
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/${lang}/${category}/opengraph-image.png`,
          width: 1200,
          height: 628,
        },
  
      ],*/
      locale: lang,
      type: 'website',
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/${category}`,
      languages: {
         'en-US': `${process.env.NEXT_PUBLIC_SITE_URL}/en/${category}`,
         'es-ES': `${process.env.NEXT_PUBLIC_SITE_URL}/es/${category}`,
      }
    }
  }
}





//Generate Static Params --- Will return all category (experiences, cities) slugs on build time. 
{/* Route (app)                                Size     First Load JS
┌ ○ /                                      0 B                0 B
├ ● /[category]                            137 B          77.7 kB
├   ├ /cities
├   └ /experiences
*/}

//Pre-populates slugs at build time for SSR (helps SEO)



export const generateStaticParams = async () => {
  // This for DUMMY DATA Approach
  /* return DUMMY_CATEGORIES.map((category) => {
    return {
      category: category.slug,
    };
  }); */

  try {
    const categories = await directus.items("category").readByQuery({
      filter: {
        status: {
          _eq: "published",
        },
      },
      fields: ["slug"],
    });

    const params = categories?.data?.map((category:any) => {
      return {
        category: category.slug as string,
        lang: "en",
      };
    });

    const localisedParams = categories?.data?.map((category:any) => {
      return {
        category: category.slug as string,
        lang: "es",
      };
    });

    const allParams = params?.concat(localisedParams ?? []);
    return allParams || [];
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching categories");
  }
};
   /* return DUMMY_CATEGORIES.map((category) => {
        return {
            category: category.slug //We get category param bc folder is [category]
        }
    })*/


/***********/


//We get category param bc folder is [category]
const page = async ({ 
      params, 
    }: 
    { params: {
        category: string;
        lang: string
        };
    }) => {
     
     /*const category = DUMMY_CATEGORIES.find((category)=>category.slug === params.category)

     const posts = DUMMY_POST.filter(
         (post) => post.category.title.toLowerCase() === params.category) //If you go to /cities => get cities JSON, if you go to /experiences => get experiences JSON
    */

    const locale = params.lang

    
    const categorySlug = params.category

    const category = await getCategoryData(categorySlug, locale);

    if(!category){
        notFound()
    }

    //We need to specify category types import from collections (typescript)
    const typeCorrectedCategory = category as unknown as {
        id: string;
        title: string;
        description: string;
        slug: string;
        posts: Post[];
    }

  return (

    <div className="py-8 bg-slate-700">
        <div className= "container mx-auto">
        <div className="mb-10">
            <h1 className="text-4xl text-white font-semibold">{typeCorrectedCategory?.title}</h1>
            <p className="text-lg text-white">{typeCorrectedCategory?.description}</p>
        </div>
                 
               <PostList locale={locale} posts={typeCorrectedCategory.posts} />
        </div>
     
    </div>
    

  )
}

export default page
 