import Link from 'next/link';
import { FC } from 'react';

const AdminLayout: FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <nav className="flex justify-between items-center bg-blue-950 px-8 py-3 h-20">
      <Link className="text-white font-bold" href="/admin">
        Posts
      </Link>
      <Link className="bg-white p-2 rounded " href="/admin/add-post">
        Add Post
      </Link>
    </nav>
    <section className="py-3 container mx-auto">{children}</section>
  </>
);

export default AdminLayout;
