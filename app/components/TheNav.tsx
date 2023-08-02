import NavLink from './NavLink';

import React from 'react';
export default function TheNav({}) {
  return (
    <nav className='mx-auto mb-4 flex w-full max-w-[640px] items-start lg:mb-6'>
      <ul className='flex flex-row gap-4'>
        <li>
          <NavLink href='/'>Home</NavLink>
        </li>
      </ul>
    </nav>
  );
}
