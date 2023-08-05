import React from 'react';
import Image from 'next/image';
import { tv } from 'tailwind-variants';

interface AvatarProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

const sizeMapping = {
  xs: '1rem',
  sm: '1.25rem',
  md: '2.5rem',
  lg: '4rem',
  xl: '5rem',
  '2xl': '9rem',
};

const avatar = tv({
  base: 'relative shrink-0 overflow-hidden rounded-full',
  variants: {
    size: {
      xs: 'h-4 w-4',
      sm: 'h-5 w-5',
      md: 'h-10 w-10',
      lg: 'h-16 w-16',
      xl: 'h-20 w-20',
      '2xl': 'h-36 w-36',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const Avatar: React.FC<AvatarProps> = ({ size = 'md' }) => {
  return (
    <div className={avatar({ size })}>
      <Image
        src='/img/headshot.jpg'
        alt="Ali's headshot"
        layout='fill'
        priority
        quality={100}
        sizes={sizeMapping[size]}
      />
    </div>
  );
};

export default Avatar;
