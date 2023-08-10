import React from "react";  
import ABG from '/public/equation.svg';
import Image from 'next/image';

import Articles from "@/components/articles"; 
import { getArticles } from '@/utils/loading';


const Blog = async () => {  
  let articles = await getArticles("./posts");
  return (
      <div className="flex justify-center">
        <div className="grid grid-cols-1 
          sm:max-w-screen-sm
          md:max-w-screen-md
          lg:max-w-screen-lg
          xl:max-w-screen-xl
        ">
      <h1 className="text-center text-5xl font-sans mt-16 mb-4">Blog</h1>
      <p className="text-center text-neutral-800 text-sm mb-10">
        A collection of contemplations on probabilistic programming and AI
      </p>
      <hr />
      <Articles articles={articles} />
    </div>
    </div>
  );
};


export default Blog;  
