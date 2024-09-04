"use client"

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(()=>{
      fetch(process.env.NEXT_PUBLIC_API+"/posts")
      .then(res => res.json())
      .then(res => setPosts(res))
  },[])
console.log(posts);

  return (
    <>
      <main className="container mx-auto px-4 py-6">
        <h2 className="text-4xl font-bold mb-4">Wellcome to our blog</h2>
        <p>Lorem ipsum dolor sit amet consectetur     adipisicing elit. Tenetur tempora fuga beatae eius. Velit voluptatibus totam eligendi nostrum id voluptates iusto, doloremque harum distinctio sapiente, veritatis quas autem temporibus quaerat dignissimos quia consequatur accusamus inventore ipsum quidem dolor, cumque quos?
        </p>
      </main>
      <div className="flex justify-end px-4">
        <input type="text" className="px-4 py-2 border border-gray-300 rounded-md" placeholder="Search..."/>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4">Search</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post,index) => (<div key={index} className="boder border-gray-200 p-4">
          <img className="w-full h-48 object-cover mb-4" src={post.image} alt={post.title} />
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-600">{post.description}</p>
        </div>
        ))}   
      </div>
    </>
  );
}
