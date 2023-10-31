'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const FooterNav = () => {
  const pathname = usePathname();
  const activeClasses = 'font-bold text-white';

  return (
    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
      <li>
        <Link
          href="/admin"
          className={`mr-4 hover:underline md:mr-6 ${pathname.includes('/admin') ? activeClasses : ''}`}
        >
          Admin
        </Link>
      </li>
      <li>
        <Link
          href="/posts"
          className={`mr-4 hover:underline md:mr-6 ${pathname.includes('/posts') ? activeClasses : ''}`}
        >
          User
        </Link>
      </li>
    </ul>
  );
};
