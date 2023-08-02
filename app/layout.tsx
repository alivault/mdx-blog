import TheNav from './components/TheNav';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ali Abbas',
  description: 'Designer. Developer. Team player.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className='bg-background text-foreground dark:bg-background-dark dark:text-foreground-dark'
    >
      <body className='mx-auto max-w-2xl p-4 lg:p-6'>{children}</body>
    </html>
  );
}
