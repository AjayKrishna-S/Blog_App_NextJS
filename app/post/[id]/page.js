"use client"

import { useEffect, useState } from "react"

export default function Post({params}){
    const [post, setPost] = useState(null)
console.log(params);

    useEffect(()=>{
        fetch(process.env.NEXT_PUBLIC_API+"/post/"+params.id)
        .then(res => res.json())
        .then(res => setPost(res))
    },[])

    return(
        <>{
            post && <main className="container mx-auto px-4 py-6">
                <h2 className="text-4xl font-bold mb-4">
                {post.title}</h2>
                <p className="text-gray-500">
                    Pusblished on {post.date}
                </p>
                <img src={post.image} alt={post.title} className="my-4"/>
                <p>{post.description}</p>
            </main>
}       
        </>    
    )
}