import React from 'react';

interface ExperienceItemProps {
  title: string;
  company: string;
  url?: string;
  date: string;
  description: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  url,
  date,
  description,
}) => {
  return (
    <li className='flex flex-col'>
      <span className='font-medium'>{title}</span>
      <span className='text-sm'>
        {url ? (
          <a
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='text-link hover:underline dark:text-link-dark'
          >
            {company}
          </a>
        ) : (
          company
        )}
      </span>
      <span className='text-sm opacity-50'>{date}</span>
      <p className='text-sm'>{description}</p>
    </li>
  );
};

export default ExperienceItem;
