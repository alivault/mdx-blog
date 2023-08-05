import React from 'react';
import TheNav from '@/components/TheNav';
import { FollowForm } from './FollowForm';

export default function FollowPage() {
  return (
    <main>
      <header>
        <TheNav />
      </header>
      <section className='flex flex-col gap-4'>
        <h1 className='text-xl font-bold'>
          Follow me to unlock innovative insights to navigate your life and
          career more creatively. No spam. Just good stuff.
        </h1>
        <FollowForm />
      </section>
    </main>
  );
}
