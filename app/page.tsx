import ProjectsSection from './components/ProjectsSection';
import Image from 'next/image';
import ArticlesSection from './components/ArticlesSection';
import ExperienceSection from './components/ExperienceSection';

export const revalidate = 86400; // 24 hours

export default function Home() {
  return (
    <main className='flex flex-col gap-8'>
      <section className='flex flex-col gap-4'>
        <div className='relative h-36 w-36 flex-shrink-0 overflow-hidden rounded-full'>
          <Image
            src='/img/headshot.jpg'
            sizes='144px'
            alt="Ali's headshot"
            fill
            priority
            quality={100}
          />
        </div>
        <div className='flex flex-col'>
          <h1 className='text-2xl font-bold'>Ali Abbas</h1>
          <p className='opacity-50'>Designer. Developer. Team Player.</p>
        </div>
        <p>
          I'm a digital designer and full-stack web developer based in Los
          Angeles. Welcome to my website where I share my thoughts on design,
          development, and life. Poke around and see what you find! If you have
          any questions or comments, feel free to reach out!
        </p>
        <div className='grid grid-cols-2 gap-2'>
          <button className='rounded-full bg-primary p-2 text-primary-foreground dark:bg-primary-dark'>
            Subscribe
          </button>
          <button className='rounded-full bg-secondary p-2 dark:bg-secondary-dark'>
            Message
          </button>
        </div>
      </section>
      <ProjectsSection />
      <ExperienceSection />
      <ArticlesSection />
    </main>
  );
}
