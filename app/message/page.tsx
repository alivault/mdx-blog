import React from 'react';
import TheNav from '../components/TheNav';
import Head from 'next/head';

export default function MessagePage() {
  return (
    <main>
      <header>
        <TheNav />
      </header>
      <section>
        Do you have a question or are you interested in working with me? Just
        fill out the form below and I will get back to you within 24 hours.
        <form>
          <input type='text' placeholder='Name' />
          <input type='text' placeholder='Email' />
          <textarea placeholder='Message' />
          <button>Send</button>
        </form>
      </section>
    </main>
  );
}
