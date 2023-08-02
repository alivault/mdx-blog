import React from 'react';
export default function ProjectsSection({}) {
  return (
    <section className='flex flex-col gap-4'>
      <h2 className='text-xl font-bold'>🚀 Projects</h2>
      <ul className='flex flex-col gap-4'>
        <li>
          <a
            href='https://www.aliabbas.dev/color-palette-maker/'
            target='blank'
            className='text-link hover:underline dark:text-link-dark'
          >
            Color Palette Maker
          </a>
        </li>
      </ul>
    </section>
  );
}
