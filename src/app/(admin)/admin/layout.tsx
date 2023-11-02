import { FC } from 'react';
import Link from 'next/link';
import { Container } from '@techmeetup/app/_components/ui/Container';
import { Nav } from '@techmeetup/app/_components/ui/Nav';

const AdminLayout: FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Nav dark>
      <Link className="text-white font-bold hover:underline" href="/admin">
        Posts
      </Link>
      <Link className="bg-white p-2 rounded hover:bg-slate-200" href="/admin/add-post">
        Add Post
      </Link>
    </Nav>
    <Container>{children}</Container>
  </>
);

export default AdminLayout;
