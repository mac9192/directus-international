'use client'
import React, { FormEvent } from 'react'
import Image from "next/image"
import directus from '../../lib/directus'
import { revalidatePath, revalidateTag } from 'next/cache'
import { getDictionary } from '../../lib/getDictionary'
import { useState } from "react";

/* eslint-disable react/no-unescaped-entities */
const CTACard = ({dictionary}:{dictionary:any}) => {


 /*const dictionary = await getDictionary(locale);*/
 /*{SERVER ACTIONS APPROACH}*/
 //Sending formData as API using 'server actions' / Revalidating (Resetting Form)
 //*DO NOT PUT ANT CREDENTIALS BEFORE SPECIFYING 'USE SERVER' AS IT MAY LEAK SENSITIVE DATA*/
 // YOU CAN ADD CREDENTIALS HERE BC ITS IN THE SERVER, NOT ON THE CLIENT
    /*const formAction =  async (formData:FormData) => {
        "use server"

        try {
            const email = formData.get("email"); 
            await directus.items("subscribers").createOne({
                email,
            })
            revalidateTag("subscribers-count") //Call a new Fetch, revalidate
        } catch  (error) {
            console.log(error);
        }

    }*/
    //Subscriber count data -- Not using directus SDK, just Fetch + REST API
    /*const subscribersCount = await fetch(`${process.env.NEXT_PUBLIC_API_URL}items/subscribers?meta=total_count&access_token=${process.env.ADMIN_TOKEN}`,
    {
        next: {
            tags: ["subscribers-count"] //Revalidate and refetch subscibers-count whenever it is called, sent by client (formAction)
        }
    })
        .then((res) => res.json())  //First return Json response
        .then((res) => res.meta.total_count) // Return meta with total count
        .catch((error) => console.log(error))
        

        console.log(subscribersCount)*/



    //CLIENT COMPONENT APPROACH

    const [email, setEmail] = useState("");
    const [isHandling, setIsHandling] = useState(false);
  
    const submitHandler = async (e: FormEvent) => {
      try {
        e.preventDefault();
        setIsHandling(true);
        await directus.items("subscribers").createOne({
          email,
        });
        setIsHandling(false);
        setEmail("");
      } catch (error) {
        console.log(error);
        setIsHandling(false);
      }
    };



  return (
    <div className="relative px-6 py-10 overflow-hidden rounded-md bg-slate-100">
        {/*Overlay*/}
        <div className=" absolute inset-10 bg-gradient-to-br from-white/95 via-white/7">
        {/*Image*/}
        </div>
        {/*Putting an image as bg and adding a top to it cool!*/}
        <Image
              fill
              src="https://images.unsplash.com/photo-1589216532372-1c2a367900d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
              alt="CTA Card Image"
              className="object-cover object-center"
            
            />
        {/*Content Container*/}
        <div className="relative z-10 text-white">
            <div className="text-lg font-medium">Cheves | Briceno</div>
            <h3 className="mt-3 text-4xl font-semibold">
                {dictionary.ctaCard.title}
            </h3>
            <p>
                {dictionary.ctaCard.description}
            </p>

            
        {/* Form */} {/*Submit form Action, and use Key to revaildate/refetch*/}
        {/*Server Actions approach*/}
        {/*<form key={subscribersCount + "subscribers-form"} action={formAction} className="mt-6 items-center gap-2 mt-6"> */}
        <form className="mt-6 items-center gap-2 mt-6" onSubmit={submitHandler} >
            <input 
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                placeholder={dictionary.ctaCard.placeholder}
                className="z-10 px-4 py-3 text-base bg-white/80 rounded-md outline-none focus:ring-2 ring-neutral-600"
            />
            <button type='submit' className="px-3 py-3 m-3 rounded-md bg-neutral-900 text-neutral-200">{ !isHandling ? dictionary.ctaCard.button : "Sending..."}</button>
         </form>
         {/*Subscribers for server Actions approach*/}
           {/* <div className="text-white mt-5">
                {dictionary.ctaCard.subscriberText1} {" "}
                <span className="px-2 py-1 rounded-md bg-neutral-700 ">
                      {subscribersCount}{" "}
                </span>{" "}
                {dictionary.ctaCard.subscriberText2}
                </div> */}
        </div>
    </div>
    
  )
}

export default CTACard
