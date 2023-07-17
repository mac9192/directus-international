export interface Post {
    id:string,
    title:string,
    description:string;
    category: Category;
    author: Author;
    slug: string;
    image: string;
    body: string;
    date_created: string;
    date_updated: string;

}

export interface Category {
    id: string;
    title: string;
    slug?: string;
    description?: string;
}

export interface Author {
    id: string;
    first_name: string;
    last_name: string;
}

export const DUMMY_POST: Post[] = [
    {
        id: "1",
        title: "A lovely green city: New York",
        description: "New York is a city in the USA.",
        category: { id:"1", title:"Cities"},
        author: { id: "1", first_name: "John", last_name: "Doe"},
        slug: "a-lovely-green-city-new-york",
        image: "",
        body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        date_created:"2021-07-05T00:00:00.000Z",
        date_updated:"2021-07-05T00:00:00.000Z",
    },
    {
        id: "2",
        title: "A lovely green city: Florida",
        description: "Florida is a city in the USA.",
        category: { id:"1", title:"Cities"},
        author: { id: "1", first_name: "John", last_name: "Doe"},
        slug: "a-lovely-green-city-Florida",
        image: "",
        body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        date_created:"2021-08-05T00:00:00.000Z",
        date_updated:"2021-07-05T00:00:00.000Z",
    }, 
    {
        id: "3",
        title: "A lovely snow city: Colorado",
        description: "Colorado is a city in the USA.",
        category: { id:"1", title:"Cities"},
        author: { id: "1", first_name: "John", last_name: "Doe"},
        slug: "a-lovely-green-city-Colorado",
        image: "",
        body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        date_created:"2021-07-05T00:00:00.000Z",
        date_updated:"2021-07-05T00:00:00.000Z",
    },
    {
        id: "4",
        title: "A lovely souther city: Georgia",
        description: "Georgia is a city in the USA.",
        category: { id:"2", title:"Experiences"},
        author: { id: "1", first_name: "John", last_name: "Doe"},
        slug: "a-lovely-green-city-Georgia",
        image: "",
        body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        date_created:"2021-07-05T00:00:00.000Z",
        date_updated:"2021-07-05T00:00:00.000Z",
    },
    
    {
        id: "5",
        title: "A lovely cold city: Boston",
        description: "Boston is a city in the USA.",
        category: { id:"2", title:"Experiences"},
        author: { id: "1", first_name: "John", last_name: "Doe"},
        slug: "a-lovely-green-city-Boston",
        image: "",
        body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        date_created:"2021-07-05T00:00:00.000Z",
        date_updated:"2021-07-05T00:00:00.000Z",
    },
    {
        id: "6",
        title: "A lovely beachy city: California",
        description: "California is a city in the USA.",
        category: { id:"2", title:"Experiences"},
        author: { id: "1", first_name: "John", last_name: "Doe"},
        slug: "a-lovely-green-city-California",
        image: "",
        body:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        date_created:"2021-07-05T00:00:00.000Z",
        date_updated:"2021-07-05T00:00:00.000Z",
    },
    
 

];
//Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
export const DUMMY_CATEGORIES: Category[] = [
    {
        id: "1",
        title: "Cities",
        slug: "cities",
        description: "Travel every city that I've been with me! I'' be sharing hidden gems in every city"
    },
    {
        id: "2",
        title: "Experiences",
        slug: "experiences",
        description: "Experience the world with me! I'll be sharing adventures and experiences in every country"
    },

];