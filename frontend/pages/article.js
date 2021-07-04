import { useRouter } from "next/router";
import Query from "../components/query";
import Moment from "react-moment";
import ARTICLE_QUERY from "../apollo/queries/article/article";
import MarkdownRender from '../utils/katex';
import Disqus from 'disqus-react';

const Article = () => {
  const router = useRouter();
  return (
    <Query query={ARTICLE_QUERY} id={router.query.id}>
      {({ data: { article } }) => {
        const disqusShortname = 'austingarrett-1';
        const disqusConfig = {
          url: article.url,
          identifier: article.id,
          title: article.title
        };

        return (
          <div className="uk-section">
            <div className="uk-container uk-container-xsmall">
              <h2>{article.title}</h2>
              <Moment className="uk-text-meta" format="MMM Do YYYY">{article.date}</Moment>
              <span> | </span>
              <Disqus.CommentCount className="uk-text-meta" shortname={disqusShortname} config={disqusConfig}>
                Comments
              </Disqus.CommentCount>
              <MarkdownRender source={article.content} />
              <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Article;
