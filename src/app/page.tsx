import { FC } from 'react';
import Link from 'next/link';
import { Container } from '@techmeetup/app/_components/ui/Container';

const HomePage: FC = () => (
  <Container>
    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-black-500 sm:mb-0">
      <li>
        <Link href="/admin" className="mr-4 hover:underline md:mr-6">
          Admin
        </Link>
      </li>
      <li>
        <Link href="/posts" className="mr-4 hover:underline md:mr-6">
          User
        </Link>
      </li>
    </ul>
  </Container>
);
export default HomePage;
