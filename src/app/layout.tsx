import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import { FC } from 'react';
import { Footer } from './_components/Footer';
import { NotificationProvider } from './_contexts/NotificationContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Posts! TechMeetup',
  description: 'An example web for TechMeetup 2023',
};

const RootLayout: FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en" className="min-h-screen">
    <body className={`${inter.className} min-h-screen`}>
      <NotificationProvider>{children}</NotificationProvider>
      <Footer />
      <Analytics />
    </body>
  </html>
);

export default RootLayout;
