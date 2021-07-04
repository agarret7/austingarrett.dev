import React from "react";  
import Card from "./card";

const Articles = ({ articles }) => {  
  articles = articles.slice().reverse();
  const leftArticles = articles.filter((element, index) => index % 2 === 0)
  const rightArticles = articles.filter((element, index) => index % 2 === 1);

  const [width, setWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    /* Inside of a "useEffect" hook add an event listener that updates
       the "width" state variable when the window size changes */
    window.addEventListener("resize", () => setWidth(window.innerWidth));

    /* passing an empty array as the dependencies of the effect will cause this
       effect to only run when the component mounts, and not each time it updates.
       We only want the listener to be added once */
  }, []);
  const breakpoint = 720;

  return (
    <div>
      {
        width < breakpoint ?
        <div className="uk-child-width-1-1" data-uk-grid>
          {articles.map((article, i) => {
            return <Card article={article} key={`article__${article.id}`} />;
          })}
        </div> :
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
      }
    </div>
  );
};

export default Articles;  
