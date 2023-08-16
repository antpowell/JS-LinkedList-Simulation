import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LinkedListServiceProvider } from './services/LinkedListServiceProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LinkList Simulator - NextJS',
  description: 'LinkList Simulator - NextJS'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LinkedListServiceProvider>{children}</LinkedListServiceProvider>
      </body>
    </html>
  );
}
