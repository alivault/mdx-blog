import React from 'react';
import TheNav from '@/components/TheNav';
import { MessageForm } from './MessageForm';

export default function MessagePage() {
  return (
    <main>
      <header>
        <TheNav />
      </header>
      <section className='flex flex-col gap-4'>
        <h1 className='text-xl font-bold'>
          Do you have a question or are you interested in working with me? Just
          fill out the form below and I will get back to you within 24 hours.
        </h1>
        <MessageForm />
      </section>
    </main>
  );
}
