import SectionHeader from './SectionHeader';
import ExperienceItem from './ExperienceItem';
import React from 'react';
export default function ExperienceSection({}) {
  return (
    <section className='flex flex-col gap-4'>
      <SectionHeader>💼 Experience</SectionHeader>
      <ul className='flex flex-col gap-4'>
        <ExperienceItem
          title='Product Designer & Developer'
          company='Super Studios Inc.'
          url='https://superstudios.io/'
          date='March 2021 - Present'
          description='Conceptualizing and designing user interfaces using Figma for UX/UI design, Webflow for streamlined prototype development, and Next.js and Tailwind CSS to rapidly build modern, responsive designs.'
        />
        <ExperienceItem
          title='Web Designer & Developer'
          company='Freelance'
          date='March 2019 - March 2021 · 2 yrs 1 mo'
          description='Leveraged Adobe Creative Suite, Figma, and Webflow to architect and prototype diverse digital products, encompassing website design, app user interface development, and logo creation.'
        />
      </ul>
    </section>
  );
}
