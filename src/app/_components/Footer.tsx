import Image from 'next/image';
import { FooterNav } from './FooterNav';

export const Footer = () => (
  <footer className="bg-white shadow dark:bg-gray-900 w-full sticky top-[100vh]">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Image src="/logo.png" className="h-8 mr-3" width={50} height={50} alt="Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Tech Meetup</span>
        <FooterNav />
      </div>
    </div>
  </footer>
);
