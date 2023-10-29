import Link from 'next/link';
import { FC } from 'react';
import { Nav } from '@techmeetup/app/_components/ui/Nav';
import { Container } from '@techmeetup/app/_components/ui/Container';
import { Notification } from '../_components/Notification';

const UserLayout: FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Nav>
      <Link className="text-white font-bold" href="/">
        Posts
      </Link>
    </Nav>
    <Container>
      <Notification />
      {children}
    </Container>
  </>
);

export default UserLayout;
