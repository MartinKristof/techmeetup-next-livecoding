import { Container } from '@techmeetup/app/_components/ui/Container';
import { Nav } from '@techmeetup/app/_components/ui/Nav';
import Link from 'next/link';
import { FC } from 'react';

const AdminLayout: FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Nav dark>
      <Link className="text-white font-bold" href="/admin">
        Posts
      </Link>
      <Link className="bg-white p-2 rounded" href="/admin/add-post">
        Add Post
      </Link>
    </Nav>
    <Container>{children}</Container>
  </>
);

export default AdminLayout;
