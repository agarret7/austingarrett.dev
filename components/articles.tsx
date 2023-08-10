import React from "react";  
import Card from "./card";

import type { Article } from '@/utils/loading';


const Articles = ({ articles } : { articles: Map<string,Article> }) => {  
  return (
    <div className="mt-4">
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-2 lg:grid-cols-3">
        {...Array.from(articles.keys()).map((id) => {
          return (
            <div className="m-4" key={`article__${id}`}>
              <Card id={id} article={articles.get(id) as Article} key={`article__${id}`} />
            </div>
          )
        })}
      </div>
    </div>
  );
};


export default Articles;  
