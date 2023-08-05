import getFormattedDate from '@/lib/getFormattedDate';
import { getArticlesMeta, getArticleByName } from '@/lib/articles';
import 'highlight.js/styles/a11y-dark.css';
import TheNav from '@/components/TheNav';

export const revalidate = 86400; // 24 hours

type Props = {
  params: {
    articleId: string;
  };
};

export async function generateStaticParams() {
  const articles = await getArticlesMeta();

  if (!articles) return [];

  return articles.map(article => ({
    articleId: article.id,
  }));
}

export async function generateMetadata({ params: { articleId } }: Props) {
  const article = await getArticleByName(`${articleId}.mdx`);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.meta.title,
  };
}

export default async function Article({ params: { articleId } }: Props) {
  const article = await getArticleByName(`${articleId}.mdx`);

  if (!article) {
    return <h1>Article not found</h1>;
  }

  const { meta, content } = article;

  const date = getFormattedDate(meta.date);

  return (
    <main>
      <header>
        <TheNav />
      </header>
      <article className='prose dark:prose-invert lg:prose-lg prose-a:text-link prose-a:no-underline hover:prose-a:underline dark:prose-a:text-link-dark mx-auto'>
        <p className='text-sm opacity-50'>{date}</p>
        <h1>{meta.title}</h1>
        {content}
      </article>
    </main>
  );
}
