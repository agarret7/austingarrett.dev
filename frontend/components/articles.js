import React from "react";  
import Card from "./card";

const Articles = ({ articles }) => {  
  articles = articles.slice().reverse();
  const leftArticles = articles.filter((element, index) => index % 2 === 0)
  const rightArticles = articles.filter((element, index) => index % 2 === 1);

  return (
    <div>
      <div className="uk-child-width-1-2" data-uk-grid>
        <div>
          {leftArticles.map((article, i) => {
            return <Card article={article} key={`article__${article.id}`} />;
          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightArticles.map((article, i) => {
              return <Card article={article} key={`article__${article.id}`} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;  
