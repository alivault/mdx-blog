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
    <html lang='en' className='bg-background text-foreground'>
      <body className='flex justify-center p-4 md:p-10'>{children}</body>
    </html>
  );
}
