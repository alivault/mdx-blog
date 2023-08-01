import { getArticlesMeta } from '@/lib/articles';
import ArticleListItem from './ArticleListItem';

export default async function ArticlesList() {
  const articles = await getArticlesMeta();

  if (!articles) {
    return <span>Sorry, no articles yet.</span>;
  }

  return (
    <section className='flex flex-col gap-2'>
      <h2 className='text-xl font-bold'>📔 Articles</h2>
      <div className='flex flex-col gap-2'>
        {articles.map(article => (
          <ArticleListItem key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}
