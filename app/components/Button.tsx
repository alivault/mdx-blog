import React from 'react';
import { tv } from 'tailwind-variants';
import Link from 'next/link';

interface ButtonProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary';
  href?: string;
  children: React.ReactNode;
}

const buttonVariant = tv({
  base: 'text-center font-medium hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/80 dark:hover:shadow-primary-dark/80 rounded-full p-2 active:translate-y-0 transition ease-out active:shadow-none',
  variants: {
    color: {
      primary: 'bg-primary text-primary-foreground dark:bg-primary-dark',
      secondary:
        'bg-secondary text-secondary-foreground dark:bg-secondary-dark hover:shadow-foreground/10 dark:hover:shadow-black',
    },
    size: {
      sm: 'p-1 text-sm',
      md: 'text-base',
      lg: 'p-3 text-lg',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});

const Button: React.FC<ButtonProps> = ({ color, size, href, children }) => {
  return href ? (
    <Link href={href} className={buttonVariant({ color, size })}>
      {children}
    </Link>
  ) : (
    <button className={buttonVariant({ color, size })}>{children}</button>
  );
};

export default Button;
