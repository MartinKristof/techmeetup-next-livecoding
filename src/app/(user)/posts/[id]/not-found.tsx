import Link from 'next/link';
import { Container } from '@techmeetup/app/_components/ui/Container';

const NotFound = () => (
  <Container>
    <h1 className="text-lg">Post not found</h1>
    <p className="py-3">Could not find requested resource</p>
    <Link href="/posts">Return Home</Link>
  </Container>
);

export default NotFound;
