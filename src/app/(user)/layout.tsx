import Link from 'next/link';
import { FC } from 'react';

// TODO: nav shared
const UserLayout: FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <nav className="flex justify-between items-center bg-red-950 px-8 py-3 h-20">
      <Link className="text-white font-bold" href={'/'}>
        Posts
      </Link>
    </nav>
    <section className="py-3 container mx-auto">{children}</section>
  </>
);

export default UserLayout;
