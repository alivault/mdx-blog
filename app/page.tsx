import Image from 'next/image';
import ArticlesList from './components/ArticlesList';

export const revalidate = 86400; // 24 hours

export default function Home() {
  return (
    <main className='flex max-w-xl grow flex-col gap-4'>
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
          <p className='text-foreground/50'>
            Designer. Developer. Team Player.
          </p>
        </div>
      </section>
      <p>
        Hey! My name is Ali. I'm a digital designer and web developer based in
        Los Angeles. Welcome to my website where I share my thoughts on design,
        development, and life. Poke around and see what you find! If you have
        any questions or comments, feel free to reach out to me via{' '}
        <a
          className='text-link hover:underline'
          href='mailto:hi&#64;aliabbas&#46;dev'
          target='blank'
        >
          email
        </a>
        .
      </p>

      <section className='flex flex-col gap-2'>
        <h2 className='text-xl font-bold'>🚀 Projects</h2>
        <ul className='list-inside list-disc'>
          <li>
            <a
              href='https://www.aliabbas.dev/color-palette-maker/'
              target='blank'
              className='text-link hover:underline'
            >
              Color Palette Maker
            </a>
          </li>
        </ul>
      </section>

      <section className='flex flex-col gap-2'>
        <h2 className='text-xl font-bold'>💼 Experience</h2>
        <ul className='flex flex-col gap-4'>
          <li className='flex flex-col'>
            <span className='font-medium'>Product Designer & Developer</span>
            <span className='text-sm text-foreground/50'>
              <a
                href='https://superverse.cool/'
                target='blank'
                className='text-link hover:underline'
              >
                Super Studios Inc.
              </a>
            </span>
            <span className='text-sm text-foreground/50'>
              March 2021 - Present
            </span>
            <p className='text-sm'>
              Undertaking the responsibility of conceptualizing and crafting
              user interfaces, utilizing Figma for comprehensive UX/UI design.
              Employing Webflow for efficient prototype development, while
              leveraging Next.js and Tailwind CSS for the expeditious creation
              of modern, responsive designs.
            </p>
          </li>
          <li className='flex flex-col'>
            <span className='font-medium'>Web Designer & Developer</span>
            <span className='text-sm text-foreground/50'>Freelance</span>
            <span className='text-sm text-foreground/50'>
              March 2019 - March 2021 · 2 yrs 1 mo
            </span>
            <p className='text-sm'>
              Leveraged Adobe Creative Suite, Figma, and Webflow to architect
              and prototype diverse digital products, encompassing website
              design, app user interface development, and logo creation.
            </p>
          </li>
        </ul>
      </section>
      <ArticlesList />
    </main>
  );
}
