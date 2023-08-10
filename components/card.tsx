import React from "react";  
import Link from "next/link";

import { Article } from '@/utils/loading'


const Card = ({ id, article }: { id: string, article: Article }) => {
  return (
    <div
      className="block mb-4 rounded-lg bg-white duration-200 hover:transition-all hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <Link href={"/blog/" + id}>
        <div className="p-6">
          <h5 className="mb-4 text-xl leading-tight text-neutral-800">
            {article.title}
          </h5>
          <p className="mb-4 text-base leading-tight text-neutral-500">
            {article.description}
          </p>
          <p className="text-base leading-tight text-neutral-800">{article.date}</p>
        </div>
      </Link>
    </div>
  );
};


export default Card;