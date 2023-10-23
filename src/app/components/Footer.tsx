import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Footer = () => (
  <footer className="bg-white shadow dark:bg-gray-900 bottom-0 fixed w-full">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Image src="/logo.png" className="h-8 mr-3" width={50} height={50} alt="Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Tech Meetup</span>
        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <Link href="/admin" className="mr-4 hover:underline md:mr-6 ">
              Admin
            </Link>
          </li>
          <li>
            <Link href="/" className="mr-4 hover:underline md:mr-6">
              User
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);
