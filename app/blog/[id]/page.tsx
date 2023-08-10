import 'react';
import MarkdownRender from '@/utils/markdown';
import { getArticles, type Article } from '@/utils/loading';
import { Comments, CommentCount } from '@/components/comments';


export async function generateStaticParams(): Promise<{id: string}[]> {
  const articles = await getArticles("./posts");
  return Array.from(articles.keys()).map((id) => ({id: id as string}));
}

const Article = async ({
  params
}: {
  params: { id: string }
}) => {
  console.log(params);
  const { id } = params;
  const articles = await getArticles("./posts");
  const article = articles.get(id) as Article;

  return (
    <div className="flex justify-center">
      <div className="prose grid grid-cols-1
        sm:max-w-screen-sm
        md:max-w-screen-md
        lg:max-w-screen-lg
        xl:max-w-screen-xl
      ">
        <div className="text-2xl lg:text-3xl mb-6">{article.title}</div>
        <div className="opacity-50 text-sm">
          <span>{article.date}</span>
          <span> | </span>
          <CommentCount id={id} article={article} />
        </div>
        <div className="text-gray-600 lg:text-lg">
          <MarkdownRender>
            {article.body}
          </MarkdownRender>
          <Comments id={id} article={article} />
        </div>
      </div>
    </div>
  );
};


export default Article;