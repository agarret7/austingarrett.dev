'use client'

import 'react';
import Disqus from 'disqus-react';
import type { Article } from '@/utils/loading';


const CommentCount = ({
  id,
  article
}: {
  id: string,
  article: Article
}) => {
  const disqusShortname = 'austingarrett-1';
  const disqusConfig = {
    url: "https://austingarrett.dev/blog/" + id,
    identifier: String(id),
    title: article.title
  };
  return (
    <Disqus.CommentCount shortname={disqusShortname} config={disqusConfig}>
      Comments
    </Disqus.CommentCount>
  );
}

const Comments = ({
  id,
  article
}: {
  id: string
  article: Article
}) => {
  const disqusShortname = 'austingarrett-1';
  const disqusConfig = {
    url: "https://austingarrett.dev/blog/" + id,
    identifier: String(id),
    title: article.title
  };
  return <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
}


export { CommentCount, Comments };