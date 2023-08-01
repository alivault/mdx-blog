import Link from 'next/link';
import getFormattedDate from '@/lib/getFormattedDate';

type Props = {
  article: Meta;
};

export default function ListItem({ article }: Props) {
  const { id, title, date } = article;
  const formattedDate = getFormattedDate(date);

  return (
    <Link
      href={`/articles/${id}`}
      className='flex flex-col rounded-md bg-card p-2'
    >
      <h3 className='text-md'>{title}</h3>
      <span className='text-xs text-foreground/50'>{formattedDate}</span>
    </Link>
  );
}
