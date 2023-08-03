import React from 'react';
import Image from 'next/image';

export default function Avatar({}) {
  return (
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
  );
}
