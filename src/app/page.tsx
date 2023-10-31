import { FC } from 'react';
import Link from 'next/link';
import { Container } from '@techmeetup/app/_components/ui/Container';

const HomePage: FC = () => (
  <Container>
    <div className="h-96 flex items-center justify-center">
      <ul className="flex flex-wrap items-center mb-6 font-medium text-4xl text-black-500 sm:mb-0">
        <li>
          <Link href="/photos" className="mr-4 hover:underline md:mr-6">
            Photos
          </Link>
        </li>
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
    </div>
  </Container>
);
export default HomePage;
