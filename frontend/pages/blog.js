import React from "react";  
import Articles from "../components/articles";  
import Query from "../components/query";  
import ARTICLES_QUERY from "../apollo/queries/article/articles";
import ABG from '../assets/svg/equation.svg';

const Blog = () => {  
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1 className="uk-text-center uk-heading-small">
            <ABG width="15%" />
          </h1>
          <hr className="uk-divider-icon" />
          <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => {
              return <Articles articles={articles} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default Blog;  
