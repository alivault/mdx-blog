/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-circle': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      colors: {
        background: {
          DEFAULT: 'hsl(var(--background))',
          dark: 'hsl(var(--background-dark))',
        },
        foreground: {
          DEFAULT: 'hsl(var(--foreground))',
          dark: 'hsl(var(--foreground-dark))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          dark: 'hsl(var(--card-dark))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          dark: 'hsl(var(--primary-dark))',
          foreground: {
            DEFAULT: 'hsl(var(--primary-foreground))',
            dark: 'hsl(var(--primary-foreground-dark))',
          },
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          dark: 'hsl(var(--secondary-dark))',
        },
        link: {
          DEFAULT: 'hsl(var(--link))',
          dark: 'hsl(var(--link-dark))',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            'code::before': { content: '""' },
            'code::after': { content: '""' },
            '.contains-task-list': {
              paddingLeft: '0.5rem !important',
            },
            '.task-list-item': {
              listStyleType: 'none',
              paddingLeft: '0 !important',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            },
            '.task-list-item > input[type="checkbox"]': {
              margin: '0 !important',
              width: '1rem !important',
              height: '1rem !important',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
