import Link from 'next/link';
import { FC } from 'react';
import { Nav } from '@techmeetup/app/_components/ui/Nav';
import { Container } from '@techmeetup/app/_components/ui/Container';

const UserLayout: FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Nav color="red">
      <Link className="text-white font-bold" href={'/'}>
        Posts
      </Link>
    </Nav>
    <Container>{children}</Container>
  </>
);

export default UserLayout;
