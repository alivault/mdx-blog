import Link from 'next/link';
import Avatar from './Avatar';
import NavLink from './NavLink';

import React from 'react';
export default function TheNav({}) {
  return (
    <nav className='mx-auto mb-4 flex w-full max-w-[640px] items-start lg:mb-6'>
      <ul className='flex flex-row gap-4'>
        <li className='flex items-center gap-2'>
          <Link href='/'>
            <Avatar size='md' />
          </Link>
          <NavLink href='/'>Ali Abbas</NavLink>
        </li>
      </ul>
    </nav>
  );
}
