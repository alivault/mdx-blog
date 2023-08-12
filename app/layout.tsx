import './globals.css';
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';

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
    <html lang='en'>
      <body className='mx-auto max-w-3xl bg-background p-4 text-foreground lg:p-6'>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
