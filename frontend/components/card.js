import React from "react";  
import Moment from "react-moment";  
import Link from "next/link";

const Card = ({ article }) => {  
  return (
    <Link href={{ pathname: "article", query: { id: article.id } }}>
      <a className="uk-link-reset">
        <div className="uk-card uk-card-hover uk-card-body uk-padding-small">
          <div className="uk-child-width-expands@s" data-uk-grid>
            <div className="uk-width-auto">
              <Moment className="uk-text-small uk-text-emphasis" format="MMM Do YYYY">{article.published_at}</Moment>
            </div>
            <div className="uk-width-expand">
              <h3 className="uk-card-title">
                {article.title}
              </h3>
              <p>
                {article.abstract}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
