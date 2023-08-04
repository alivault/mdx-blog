import React from 'react';
import TheNav from '../components/TheNav';

export default function FollowPage() {
  return (
    <main>
      <header>
        <TheNav />
      </header>
      <section>
        Follow me to unlock innovative insights to navigate your life and career
        more creatively.
        <form>
          <input type='text' placeholder='Email' />
          <button>Subscribe</button>
        </form>
      </section>
    </main>
  );
}
